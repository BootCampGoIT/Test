const { v4: uuidv4 } = require('uuid');
const shortid = require('shortid');

console.log(uuidv4());
console.log(shortid.generate());