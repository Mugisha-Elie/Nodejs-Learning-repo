import path from "path";

const files = [
  "index.html",
  "styles.css",
  ".prettierrc",
  "archive.tar.gz",
  "README"
];

const exts = files.map(file => {
    return {[file]: path.extname(file)}
})

console.log(exts);
