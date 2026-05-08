const path = require("path");
const fs = require("fs");
const events = require("events");
const os = require("os");

// 1. Log current file path and directory
function logFilePath() {
  console.log({ File: __filename, Dir: __dirname });
}

// 2. Get file name from path
function getFileName(filePath) {
  return path.basename(filePath);
}

// 3. Build path from object
function buildPath(obj) {
  return path.format(obj);
}

// 4. Get file extension
function getFileExt(filePath) {
  return path.extname(filePath);
}

// 5. Parse path and return name + ext
function parsePath(filePath) {
  const parsed = path.parse(filePath);
  return { Name: parsed.name, Ext: parsed.ext };
}

// 6. Check if path is absolute
function isAbsolutePath(filePath) {
  return path.isAbsolute(filePath);
}

// 7. Join multiple segments
function joinSegments(...segments) {
  return path.join(...segments);
}

// 8. Resolve relative path to absolute
function resolvePath(relativePath) {
  return path.resolve(relativePath);
}

// 9. Join two paths
function joinTwoPaths(p1, p2) {
  return path.join(p1, p2);
}

// 10. Delete file asynchronously
function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) console.error(err);
    else console.log(`The ${path.basename(filePath)} is deleted.`);
  });
}

// 11. Create folder synchronously
function createFolderSync(folderPath) {
  fs.mkdirSync(folderPath, { recursive: true });
  console.log("Success");
}

// 12. Event emitter for "start"
const emitter = new events.EventEmitter();
emitter.on("start", () => {
  console.log("Welcome event triggered!");
});

// 13. Emit "login" event
emitter.on("login", (username) => {
  console.log(`User logged in: ${username}`);
});

// 14. Read file synchronously
function readFileSync(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  console.log("the file content =>", content);
}

// 15. Write asynchronously to file
function writeFileAsync(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) console.error(err);
    else console.log("File written successfully!");
  });
}

// 16. Check if directory exists
function dirExists(dirPath) {
  return fs.existsSync(dirPath);
}

// 17. Return OS platform and architecture
function getOSInfo() {
  return { Platform: os.platform(), Arch: os.arch() };
}

// -------------------
// Test the functions
// -------------------
logFilePath();
console.log(getFileName("/user/files/report.pdf"));
console.log(buildPath({ dir: "/folder", name: "app", ext: ".js" }));
console.log(getFileExt("/docs/readme.md"));
console.log(parsePath("/home/app/main.js"));
console.log(isAbsolutePath("/home/user/file.txt"));
console.log(joinSegments("src", "components", "App.js"));
console.log(resolvePath("./index.js"));
console.log(joinTwoPaths("/folder1", "folder2/file.txt"));
deleteFile("./test.txt"); 
createFolderSync("./newFolder");
emitter.emit("start");
emitter.emit("login", "Ahmed");
readFileSync("./notes.txt");
writeFileAsync("./async.txt", "Async save");
console.log(dirExists("./notes.txt"));
console.log(getOSInfo());
