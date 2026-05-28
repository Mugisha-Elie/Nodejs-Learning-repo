import path from 'path'

// console.log(path.sep);
const uploadPath = 'downloads\\photos\\nature\\forest.png';
const pathParts = uploadPath.split(path.sep);
console.log(pathParts)

function isTooDeep(filepath){
    const pathSegments = filepath.split(path.sep);
    return pathSegments.length > 4;
}

console.log(isTooDeep(uploadPath))

const checkPath = "components\\auth\\login\\Button.tsx";
const lastSegment = checkPath.split(path.sep).at(-1);
console.log(lastSegment);