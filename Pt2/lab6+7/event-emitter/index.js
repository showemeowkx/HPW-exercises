const { fetchAndWriteJson } = require("./utils");

const OG_PATH = "../files/originals";
const UPPER_PATH = "../files/upper";

const url = "https://jsonplaceholder.typicode.com/posts";
console.log(`Starting fetch from: ${url}`);
fetchAndWriteJson(url, OG_PATH, UPPER_PATH);
