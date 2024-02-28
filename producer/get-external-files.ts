import * as fs from "fs";
import * as path from "path";

const sourceDestDirs: [string, string][] = [
  ["../shared/src", "./.shared/src/"],
  ["../utils", "./.shared/src/utils/"],
];

const filesToCopy: [string, string][] = [
  ["../shared/tailwind.config.ts", "./.shared/"],
];

function areFileContentsEqual(file1: string, file2: string): boolean {
  const content1 = fs.readFileSync(file1, "utf-8");
  const content2 = fs.readFileSync(file2, "utf-8");
  return content1 === content2;
}

function copyFiles(): void {
  sourceDestDirs.forEach(([sourceDir, destDir]) => {
    if (fs.existsSync(sourceDir) && fs.lstatSync(sourceDir).isDirectory()) {
      fs.mkdirSync(destDir, { recursive: true });
      fs.readdirSync(sourceDir).forEach((file) => {
        const sourceFilePath = path.join(sourceDir, file);
        const destFilePath = path.join(destDir, file);
        if (fs.lstatSync(sourceFilePath).isFile()) {
          if (
            !fs.existsSync(destFilePath) ||
            !areFileContentsEqual(sourceFilePath, destFilePath)
          ) {
            fs.copyFileSync(sourceFilePath, destFilePath);
            console.log(`Copied '${sourceFilePath}' to '${destFilePath}'.`);
          }
        }
      });
    } else {
      console.log(`Source directory '${sourceDir}' does not exist.`);
    }
  });

  filesToCopy.forEach(([sourceFile, destDirOrFile]) => {
    if (fs.existsSync(sourceFile) && fs.lstatSync(sourceFile).isFile()) {
      const destPath = fs.lstatSync(destDirOrFile).isDirectory()
        ? path.join(destDirOrFile, path.basename(sourceFile))
        : destDirOrFile;
      if (
        !fs.existsSync(destPath) ||
        !areFileContentsEqual(sourceFile, destPath)
      ) {
        fs.copyFileSync(sourceFile, destPath);
        console.log(`Copied '${sourceFile}' to '${destPath}'.`);
      }
    } else {
      console.log(`File '${sourceFile}' does not exist.`);
    }
  });
}

copyFiles();
