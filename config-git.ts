import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const sourceHookPath = path.join(__dirname, 'git', 'hooks', 'pre-push');
const destinationHookPath = path.join(__dirname, '.git', 'hooks', 'pre-push');

try {
  fs.copyFileSync(sourceHookPath, destinationHookPath);

  const isUnix = process.platform !== 'win32';

  if (isUnix) {
    execSync(`chmod +x ${destinationHookPath}`);
  } else {
    fs.chmodSync(destinationHookPath, '755');
  }
  console.log('Pre-push hook is now executable.');
} catch (error) {
  console.error('Failed to make the pre-push hook executable:', error);
}
