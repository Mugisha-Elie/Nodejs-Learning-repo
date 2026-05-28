import fs from 'node:fs/promises'

async function trackEvent(message){
    try{
        await fs.appendFile('./log.txt', message + '\n', 'utf-8');
        console.log("Log saved Successfully");
    }catch(error){
        console.error("An error occurred, failed to save the log", error.message);
    }
}

// trackEvent("[User] purchased a new dog");
// trackEvent("[admin] was not happy about it");

async function addTask(task){
    try{
        await fs.appendFile('./todo.txt', task + '\n', 'utf-8');
        console.log("Task added successfully")
    }catch(error){
        console.error("An error occurred", error.message);
    }
}

addTask("Buy milk");
addTask("Drink the milk");
addTask("Buy more milk");