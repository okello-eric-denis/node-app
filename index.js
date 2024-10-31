var fs = require('fs');
fs.readFile('./robomotio.txt','utf-8',(err, data) => {
    console.log(data);
});
fs.readdir('../',(err,data) => {
    console.log(data);
})