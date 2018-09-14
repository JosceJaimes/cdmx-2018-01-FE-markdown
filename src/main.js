// // aqui se va a implementar las funciones

const files = require('fs');
// //llamo a la api
const path = require('path');
const fetch = require('node-fetch');


const objectUrl

const lineCount = (data, error)=>{ 
    newArray = [];    
     let lines = data.split('\n');
        lines.forEach(element =>{        
      const urls = element.match(new RegExp(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g));
      const url = urls !== null ? newArray.push(urls) :console.log('');
        });    
        console.log(newArray);
        objectUrl(newArray)
        return newArray
}

const readDoc= (pathRout, error) =>{
    files.readFile(pathRout, 'utf8', (err, data) => {
            // console.log(data);     
            lineCount(data)
    }
    )};

const validatePath = (pathRout) => {
    readDoc(path.resolve(pathRout));     
}
validatePath('./README.md');

module.exports = {
    lineCount, 
    readDoc,
    validatePath,
 
    // regularExpersion
    // validateUrl
 
}; 
// const lineCount = (urlResult) =>{
    //     let newUrl = []; 
    //     files.readFile(urlResult,'utf8',(err, data) =>{
    //   if (err){
    //       console.log(err);
    //       return 'error';
    //   }else{
    //       //saltos de linea \n
    //       const lines = data.split('\n');
    //       lines.forEach(element => {
    //       const expresion = new RegExp(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g);
    //       while(element.match(expresion) !== null){  
    //         newUrl.push(element.match(expresion));
           
            
    //         return newUrl;
    //          } 
                
    //         }); 
    
    //     // validate(newUrl);
    //        return lines + ' '+'lines'     
    //     }
        
    // });
    // }
// }
// //definiendo una ruta absolutas
// const validatePath = (pathrout)=>{
  
//     // if(!path.isAbsolute(pathrout)) {
//         const urlResult = path.resolve(pathrout)
//          console.log( urlResult);
//         //  lineCount(urlResult)
//     }
// }
// function validate(newUrl){    
//     newUrl.forEach(element =>{
//         console.log(element);
//     //   fetch(element).then(function(response){
//     //    console.log(response.status);
//     // fetch(newUrl).then(response => console.log(response.status))
//     //   });
        
//      })
// // fetch(newUrl).then(response => console.log(response.status))
//     }

// const lineCount = (urlResult) =>{
//     let newUrl = []; 
//     files.readFile(urlResult,'utf8',(err, data) =>{
//   if (err){
//       console.log(err);
//       return 'error';
//   }else{
//       //saltos de linea \n
//       const lines = data.split('\n');
//       lines.forEach(element => {
//       const expresion = new RegExp(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g);
//       while(element.match(expresion) !== null){  
//         newUrl.push(element.match(expresion));
       
        
//         return newUrl;
//          } 
            
//         }); 

//     // validate(newUrl);
//        return lines + ' '+'lines'     
//     }
    
// });
// }

// const regularExpersion = (lines) =>{
// console.log(lines);

// }



