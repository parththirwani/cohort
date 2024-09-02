//Scrappy Way
const fs = require('fs');

//my own asynchronous func
function KiratReadFile(callback){
    fs.readFile('kirat.txt', 'utf8', function(err, data){
        callback(data);
        });
}

//callback function to call
function onDone(data){
    console.log(data);
}

KiratReadFile(onDone)

//Clean Way
const fs = require('fs');
function KiratReadFile(){
    return new Promise(function(resolve){
        fs.readFile('kirat.txt', 'utf8', function(err, data){
            resolve(data);
    });
    });
}

//callback function to call
function onDone(data){
    console.log(data);
}

KiratReadFile().then(onDone)