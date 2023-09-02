import {name} from './export1.js';
console.log(name); // cao teacher2
setTimeout(() => {
  console.log(name); // 'cao teacher3'
}, 1000);