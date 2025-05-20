const { fetchJson, writeJson } = require("./utils");

const url = "https://jsonplaceholder.typicode.com/posts";

const OG_PATH = "files/originals";
const UPPER_PATH = "files/upper";

fetchJson(url)
  .then((data) => {
    writeJson(data, OG_PATH, UPPER_PATH);
  })
  .catch((err) => {
    console.log(err);
  });
