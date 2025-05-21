const { EventEmitter } = require("events");
const { Transform } = require("stream");
const path = require("path");
const fs = require("fs");

const fileEmitter = new EventEmitter();

fileEmitter.on("error-handle", (error) => {
  console.error(`Error: ${error.message}`);
});

fileEmitter.on("fetch-json", (fileName, primaryPath, secondaryPath) => {
  console.log(`JSON fetched: ${fileName}`);
  writeJson(fileName, primaryPath, secondaryPath);
});

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
    fileEmitter.emit("error-handle", err);
  });
  writeStream.on("finish", () => {
    console.log("File written successfully");
  });
};

module.exports = fileEmitter;
