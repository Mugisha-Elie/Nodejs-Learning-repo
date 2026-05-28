import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(import.meta.filename);
console.log(import.meta.dirname);

// console.log(path.resolve(__dirname, "..", "ES-CommonJS-Modules", "Commonjs.js"));