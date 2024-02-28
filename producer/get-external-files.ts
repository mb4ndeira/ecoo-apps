import * as fs from "fs";
import * as path from "path";

const PATHS: [string, string][] = [
  ["../shared/src", "./.shared/src/"],
  ["../utils", "./.shared/src/utils/"],
  ["../shared/tailwind.config.ts", "./tailwind.config.ts"],
];

function copyFilesOrDirectories(sourceDestDirs: [string, string][]): void {
  sourceDestDirs.forEach(([source, destination]) => {
    try {
      const sourceStats = fs.statSync(source);

      if (sourceStats.isFile()) {
        const destinationDir = path.dirname(destination);
        if (!fs.existsSync(destinationDir)) {
          fs.mkdirSync(destinationDir, { recursive: true });
        }
        const destinationPath = path.join(
          destinationDir,
          path.basename(source)
        );
        if (
          !fs.existsSync(destinationPath) ||
          !isFileContentEqual(source, destinationPath)
        ) {
          fs.copyFileSync(source, destinationPath);
          console.log(`Copied: ${path.basename(source)}`);
        }
      } else if (sourceStats.isDirectory()) {
        if (!fs.existsSync(destination)) {
          fs.mkdirSync(destination, { recursive: true });
        }
        const contents = fs.readdirSync(source);
        const nestedDirs = contents.map((file) => [
          path.join(source, file),
          path.join(destination, file),
        ]);
        copyFilesOrDirectories(nestedDirs as any);
      }
    } catch (err) {
      console.error(`Error copying ${source}: ${err}`);
    }
  });
}

function isFileContentEqual(file1: string, file2: string): boolean {
  const content1 = fs.readFileSync(file1);
  const content2 = fs.readFileSync(file2);
  return Buffer.compare(content1, content2) === 0;
}

copyFilesOrDirectories(PATHS);
