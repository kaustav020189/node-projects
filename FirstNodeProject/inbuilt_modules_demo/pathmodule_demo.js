const path = require("path");

// Basename (gets base file name unlike __filename which gives full path)
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename)); // same as __dirname

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// prints
// {
//     root: '/',
//     dir: '/Users/kaustav/Desktop/JSProjects/Node/FirstNodeProject',
//     base: 'pathmodule_demo.js',
//     ext: '.js',
//     name: 'pathmodule_demo'
//   }
