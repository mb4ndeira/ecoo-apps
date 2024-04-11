import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const prePushHookPath = path.join(__dirname, '.git', 'hooks', 'pre-push');

try {
  const isUnix = process.platform !== 'win32';

  if (isUnix) {
    execSync(`chmod +x ${prePushHookPath}`);
  } else {
    fs.chmodSync(prePushHookPath, '755');
  }
  console.log('Pre-push hook is now executable.');
} catch (error) {
  console.error('Failed to make the pre-push hook executable:', error);
}
