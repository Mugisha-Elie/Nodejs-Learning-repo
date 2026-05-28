import path from 'path';

const folderA = '/var/www/app/src/controllers';
const folderB = '/var/www/src/models';

const directions = path.relative(folderA, folderB);
// console.log(directions);

const sourceFile = "/app/src/components/Button.js"
const assetFile = "/app/assets/styles/global.css"

const dirPath = path.relative(path.dirname(sourceFile), assetFile);
console.log(dirPath);