const { spawn } = require('child_process');
const fs = require('fs');
//
// const material = spawn('npm', ['install', '-S', 'material-ui']);
//
// material.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });
//
// material.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });
//
// material.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });


const trav = {
  jest: {
    rootDir: 'src/test',
    testRegex: '/src/test/.*test\\\\.js$',
    setupFiles: [
      '<rootDir>/polyfills.js',
      '<rootDir>/setup.js'
    ],
  },
};

let semantic = {};
try {
  const packages = fs.readFileSync('package.json', 'utf-8');
  const version = '5.8.9';

  semantic = {
    version,
    ...packages,
  }
  console.log(JSON.parse(semantic));
  console.log(JSON.stringify(trav, null, 2), 'this is jest');
} catch (err) {
  console.log(err);
}
