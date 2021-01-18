#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const { exec } = require("child_process");
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));
let version = args._[0];

async function main() {
  const digRoot = 'projects/dig';
  const packageJson = path.join(digRoot, 'package.json');
  const json = JSON.parse(fs.readFileSync(packageJson));
  const currentVersion = json.version;
  let [major, minor, patch] = currentVersion.split('.').map(s => +s);

  switch (version) {
    case 'major':
      major = major + 1;
      minor = 0;
      patch = 0;
      break;
    default:
    case 'minor':
      minor = minor + 1;
      patch = 0;
      break;
    case 'patch':
      patch = patch + 1;
      break;
  }

  const newVersion = [major, minor, patch].join('.');
  json.version = newVersion;
  fs.writeFileSync(packageJson, JSON.stringify(json, null, 2));
  console.log(`Created new ${version ? version + ' ' : ''}version: ${newVersion}`);
  await execPromise(`ng build dig --prod`);
  console.log('Built new package');
  await execPromise(`cd dist/dig && npm publish`);
  console.log('Published packaged to NPM');
}

function execPromise(command, verbose = false) {
  return new Promise((resolve, reject) => {
    return exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      if (verbose && stderr) {
        console.warn(stderr);
      }
      resolve(stdout);
    });
  });
}

main().catch(console.error);
