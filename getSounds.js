const fs = require('fs');

const sounds = [];
const soundFiles = fs.readdirSync('./sounds/').filter(file => file.endsWith('.mp3'));
for (const file of soundFiles){
   sounds.push(file.substring(0, file.length-4));
}


module.exports = {sounds: sounds}
