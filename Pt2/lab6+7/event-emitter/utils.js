const fs = require("fs");
const https = require("https");
const path = require("path");
const fileEmitter = require("./emitter");

const fetchAndWriteJson = async (url, primaryPath, secondaryPath) => {
  const fileName = `${Date.now()}.json`;
  const filePath = path.join(__dirname, primaryPath, fileName);
  https
    .get(url, (res) => {
      if (res.statusCode !== 200) {
        res.resume();
        const error = new Error("Failed to fetch JSON");
        fileEmitter.emit("error-handle", error);
        return;
      }
      res.on("data", (chunk) => {
        fs.appendFileSync(filePath, chunk);
      });
      res.on("end", () => {
        fileEmitter.emit("fetch-json", fileName, primaryPath, secondaryPath);
      });
    })
    .on("error", (err) => {
      fileEmitter.emit("error-handle", new Error(err));
    });
};

module.exports = { fetchAndWriteJson };
