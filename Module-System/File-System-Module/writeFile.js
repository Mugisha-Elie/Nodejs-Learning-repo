import fs from "node:fs/promises"

async function createNote(){
    try{
        const content = "This is me trying to write to a file";
        await fs.writeFile("./journal.txt", content, 'utf-8');
        console.log("File Saved Successfully");
    }catch(error){
        console.error("Error writing to file, ", error.message);
    }
}

// createNote();

async function write(){
    try{
        await fs.writeFile('./test.txt', "Hello World!", 'utf-8');
        await fs.writeFile('./test.txt', "Goodbye", 'utf-8');
    }catch(err){
        console.error("Failed to write to file:", err.message);
    }
}

write()