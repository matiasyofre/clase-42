const coolImages = require("cool-images");
const moment = require("moment");
const fs = require("fs")

let arrayUrlImages = coolImages.many();

let fechaActual = moment().format("YYYY/MM/DD HH:mm:ss");

fs.appendFile("log.txt", fechaActual + "\n" + arrayUrlImages + "\n", (error) => {
    if(error) throw Error;
console.log("exito");
})



fs.readFile('log.txt', 'utf-8', (err, data) => {

    console.log(data)
});


