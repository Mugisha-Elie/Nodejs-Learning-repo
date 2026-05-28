import path from "path";

const userConfigPath = "app/./build/../src////components//Button.js"
const cleanPath = path.normalize(userConfigPath);

console.log(cleanPath);