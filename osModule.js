const os = require('os');

const hostname = os.hostname();
console.log('Hostname:', hostname);

const platform = os.platform();
console.log('Platform:', platform);

const release = os.release();
console.log('Release:', release);

const arch = os.arch();
console.log('Architecture:', arch);

const cpus = os.cpus();
console.log('CPU Information:');
cpus.forEach((cpu, index) => {
  console.log(`CPU ${index + 1}:`, cpu.model);
});

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log('Total Memory:', totalMemory / 1024 / 1024, 'MB');
console.log('Free Memory:', freeMemory / 1024 / 1024, 'MB');

const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:', networkInterfaces);
