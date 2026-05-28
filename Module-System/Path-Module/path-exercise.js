import path from "path";

const clientA_Path = "src\\controllers\\authController.js";
const clientB_Env  = "/usr/bin:/bin:/usr/local/bin";

const clientASegments = clientA_Path.split(path.win32.sep);
const clientBPaths = clientB_Env.split(path.posix.delimiter);

// console.log(clientASegments);
// console.log(clientBPaths);



const currentDir = "/var/www/app/src/handlers";
const messyRelativeInput = "../config///v1/../../backup/settings.json"
const cleanPath = path.resolve(currentDir, messyRelativeInput);
// console.log(cleanPath); 


const activeComponent = "/home/developer/workspace/src/components/navigation/Sidebar.tsx";
const globalState = "/home/developer/workspace/src/store/slices/userSlice.ts";
const relativePath = path.relative(path.dirname(activeComponent), globalState);
// console.log(relativePath);


const uploadLocation = "D:\\App\\Public\\Uploads\\Profiles\\user_avatar.PNG";
const uploadLocationObj = path.parse(uploadLocation);
// console.log(uploadLocationObj);

uploadLocationObj.name = "user_avatar_optimized";
uploadLocationObj.ext = ".png";

const newLocationPath = path.format({
    dir: uploadLocationObj.dir,
    ext: uploadLocationObj.ext,
    name: uploadLocationObj.name
});

// console.log(newLocationPath);



const inputA = "C:\\Archive\\2026\\Data";
const inputB = "Archive\\2026\\Data";

const inputs = [inputA, inputB];
const checkedInputs = inputs.map(input => {
    if(path.isAbsolute(input)){
        return path.toNamespacedPath(input);
    }else{
        return input + " (❌ Danger: Path must be absolute)";
    }
})

const [checkedInputA, checkdeInputB] = checkedInputs;
// console.log(checkedInputA);
// console.log(checkdeInputB); 





const file1 = "src/api/users/login.js";
const file2 = "src/utils.js";
const file3 = "src/controllers/auth.test.js";
const file4 = "config/database.js";

const pattern = "src/**/!(*.test).js"

const files = [file1, file2, file3, file4];
files.forEach(file => {
    const matches = path.matchesGlob(file, pattern);
    console.log(file, matches);
})