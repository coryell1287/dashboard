const { spawn } = require('child_process');
const whomai = spawn('whoami');
const git = spawn('git', ['config user.name']);
(async function () {
  try {
   const resul = await whomai.stdout.on();
   console.log(resul);
  } catch (error) {
    throw new Error(error);
  }
})();


