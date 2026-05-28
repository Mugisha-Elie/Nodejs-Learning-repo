import path from "path";

const analysis = path.parse('/home/user/documents/report.pdf');

for(let key in analysis){
    console.log(`analysis.${key} = ${analysis[key]}`);
}

// analysis.root = /
// analysis.dir = /home/user/documents
// analysis.base = report.pdf
// analysis.ext = .pdf
// analysis.name = report