import fs from "node:fs"

console.log("1. Starting to read the file...");

fs.readFile('./my-story.txt', 'utf-8', (error, data) => {
    if(error){
        console.log("Oops something went wrong",  error.message);
        return;
    }
    
    console.log("2. THe content is", data);
})

console.log("3. Already at the end of the script");

