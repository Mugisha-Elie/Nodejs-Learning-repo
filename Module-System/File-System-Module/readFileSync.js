import fs from "node:fs"

const content = fs.readFileSync('./my-story.txt', 'utf-8');
console.log(content);

console.log("The End!");