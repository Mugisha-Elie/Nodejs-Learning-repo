import fs from 'node:fs/promises'

async function readMyFile(){
    try{
        const data = await fs.readFile('./my-story.txt', 'utf-8');
        console.log("2. Content: ", data);
    }catch(error){
        console.error("Oops: ", error.message);
    }
}

console.log("1. Reading the file...");
readMyFile();
console.log("3. At the end of the script");


async function run(){
    try {
        const data = await fs.readFile('./missing.txt', 'utf-8');
        console.log("Content:", data);
    } catch (error) {
        console.error("Oops!,", error.message);
    }
}

run();