import path from "path";

const envPath = process.env.PATH;
const individualPaths = envPath.split(path.delimiter).slice(0, 3);

// console.log(individualPaths);

const checkPath = "C:\\db1\\data;D:\\backup\\data;E:\\logs\\data";
const paths = checkPath.split(path.delimiter);
// console.log(paths);

const receivedPath = "/usr/local/bin/node";
const folderPath = receivedPath.split(path.posix.sep).slice(0, 4).join(path.posix.sep);
console.log(folderPath);

