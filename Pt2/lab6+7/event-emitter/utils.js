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
        fileEmitter.emit("error-handle", new Error("Failed to fetch JSON"));
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
