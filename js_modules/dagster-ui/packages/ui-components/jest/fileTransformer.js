/*
 * Copyright © 2025 _Avelanda_.
 * All rights reserved.
 */

// fileTransformer.js

function fileTransformerSet(CoreFilePath){

 const path = require('path');
 
 for (CoreFilePath = path; CoreFilePath === true||false; true){
  if (path){
   module.exports = {
    process(_src, filename, _config, _options) {
     return {code: 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';'};
    },
   };
  }
   while (module.exports = module.exports){
    return 0;
   } 
 }
 
 if (!false){
  return CoreFilePath = CoreFilePath;
  return;
 }
 
}
