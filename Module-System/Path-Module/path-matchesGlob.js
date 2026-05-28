import path from "path";

const path1 = "docs/intro.md"
const path2 = "docs/architecture/database/setup.md"
const path3 = "internal/docs/spec.md"

const globPattern = "docs/**/*.md";

console.log(path.matchesGlob(path1, globPattern));
console.log(path.matchesGlob(path2, globPattern));
console.log(path.matchesGlob(path3, globPattern));