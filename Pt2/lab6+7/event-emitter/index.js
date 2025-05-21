const { fetchAndWriteJson } = require("./utils");

const OG_PATH = "../files/originals";
const UPPER_PATH = "../files/upper";

const url = "https://jsonplaceholder.typicode.com/posts";

fetchAndWriteJson(url, OG_PATH, UPPER_PATH);
