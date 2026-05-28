import path from "path";

const databaseFile = "/home/database/backup/2026/production.sqlite"
const parentDir = path.dirname(path.dirname(databaseFile));

console.log(parentDir);