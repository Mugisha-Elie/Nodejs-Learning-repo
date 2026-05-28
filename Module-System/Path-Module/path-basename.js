import path from "path";

const logSource = "D:\\Logs\\Servers\\2026\\nginx-error.log"
const rawFileName = path.basename(logSource, ".log");

console.log(rawFileName);