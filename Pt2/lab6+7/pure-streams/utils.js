const fs = require("fs");
const https = require("https");
const { Transform } = require("stream");
const path = require("path");

const fetchAndWriteJson = (url, directory) => {
  return new Promise((resolve, reject) => {
    const fileName = `${Date.now()}.json`;
    const filePath = path.join(__dirname, directory, fileName);
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          res.resume();
          reject(new Error("Failed to fetch JSON"));
          return;
        }
        res.on("data", (chunk) => {
          fs.appendFileSync(filePath, chunk);
        });
        res.on("end", () => {
          resolve(fileName);
        });
      })
      .on("error", (err) => {
        reject(new Error(`Failed to make HTTP request: ${err}`));
      });
  });
};

const upperJsonStream = new Transform({
  transform(chunk, encoding, cb) {
    const jsonData = JSON.parse(chunk.toString());
    const upperJsonData = jsonData.map((item) => ({
      ...item,
      title: item.title.toUpperCase(),
    }));
    cb(null, JSON.stringify(upperJsonData, null, 2));
  },
});

const writeJson = (fileName, primaryPath, secondaryPath) => {
  const filePathRead = path.join(__dirname, primaryPath, fileName);
  const filePathWrite = path.join(__dirname, secondaryPath, fileName);

  const readStream = fs.createReadStream(filePathRead, "utf8");
  const writeStream = fs.createWriteStream(filePathWrite);

  readStream.pipe(upperJsonStream).pipe(writeStream);
  writeStream.on("error", (err) => {
    console.log(err);
  });
  writeStream.on("finish", () => {
    console.log("File written successfully");
  });
};

module.exports = { fetchAndWriteJson, writeJson };
