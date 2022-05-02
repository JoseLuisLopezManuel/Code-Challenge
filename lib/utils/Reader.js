const fs = require("fs")
class Reader{
    static readJsonFile(path){
        const abrir = fs.readFileSync(path);
        return JSON.parse(abrir);
    }
}
//const path = Reader.readJsonFile('visualpartners.json');
//console.log(path);
module.exports = Reader;