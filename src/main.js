// aqui se va a implementar las funciones
const files = require('fs');
// //llamo a la api
const path = require('path');
const fetch = require('node-fetch');

const lineCount = (data, error)=>{ 
    newArray = [];    
     let lines = data.split('\n');//se hace el salto de linea que permite generar los espacios de las lineas
        lines.forEach(element =>{  
          //Se generan las expresiones regulares 
      const urls = element.match(new RegExp(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g));
      const url = urls !== null ? newArray.push(urls) :console.log('');//Se hace la comparativa par que salgan las urls
        });    
        console.log(newArray);
        objectUrl(newArray)
        return newArray
}
// lectura del documento
const readDoc= (pathRout, error) =>{
    files.readFile(pathRout, 'utf8', (err, data) => {    
            lineCount(data)
    }
    )};
// validacion de la ruta dada
const validatePath = (pathRout) => {
    readDoc(path.resolve(pathRout));     
}
validatePath('./README.md');

module.exports = {
    lineCount, 
    readDoc,
    validatePath,
}
 






