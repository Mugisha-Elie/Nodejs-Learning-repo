import path from "path";

const userFolder = 'hp';
const targetFile = 'config.json';

const fullPath = path.join('Users', userFolder, 'Project', targetFile);
// console.log(fullPath);

const currentDir = "/app/src/controllers";
const targetPath = path.join(currentDir, '..', 'models', "User.js");

// console.log(targetPath);

const root = "/var/www/app"
const targetPath2 = path.join(root, "//public/uploads/../avatars", "profile.png");
console.log(targetPath2);
const onLinux = targetPath2.split(path.sep).join(path.posix.sep);
console.log(onLinux);