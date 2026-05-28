import path from "path";

const dynamicObj = {
  root: '/',
  dir: '/app/src',
  base: 'index.js',
  name: 'server',
  ext: '.ts'
};

const finalString = path.format(dynamicObj);

console.log(finalString);