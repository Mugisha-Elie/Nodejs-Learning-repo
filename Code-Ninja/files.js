const fs = require('fs');

fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})

fs.writeFile('./docs/blog1.txt', "Hello to the people of the nodejs realm", () => {
    console.log("File Written")
    fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})
})