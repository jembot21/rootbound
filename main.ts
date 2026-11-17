import * as filesystem from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';

const entryDirectory = fileURLToPath(new URL('.', import.meta.url));
const destinationDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function transferFolder(name: string, optional = false): void {
  const source = resolve(entryDirectory, name);
  if (optional && !filesystem.existsSync(source)) return;
  if (!filesystem.statSync(source).isDirectory()) {
    throw new Error(`Submission content must be a directory: ${source}`);
  }
  filesystem.cpSync(source, resolve(destinationDirectory, name), {
    recursive: true,
  });
}

function assembleSubmission(): void {
  filesystem.mkdirSync(destinationDirectory, { recursive: true });
  transferFolder('game');
  transferFolder('screenshots', true);

  // Describe the files actually delivered, using the competition's exact limits.
  const dossierBytes = buildDossier(destinationDirectory, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    game_max_files: 993,
    game_max_bytes: 50331648,
    game_path_max_bytes: 1000,
  });
  filesystem.writeFileSync(resolve(destinationDirectory, 'dossier.json'), dossierBytes);
}

assembleSubmission();
