const fs = require('fs'),
    validFileTypes = ['js'];

const requireFiles = function (directory, app) {

    fs.readdirSync(directory).forEach(function (fileName) {

        // Recurse if directory
        if (fs.lstatSync(directory + '/' + fileName).isDirectory()) {

            requireFiles(directory + '/' + fileName, app);
        } else {

            // Skip this file
            if (fileName === 'index.js' && directory === __dirname) return;

            // Skip unknown filetypes
            if (validFileTypes.indexOf(fileName.split('.').pop()) === -1) return;

            // Require the file.
            var path = directory + '/' + fileName;
            var module = require(path);
            console.log('-requiring : ', path);

            if (module.init) {
                module.init(app);
                console.log('-initing : ', path);
            }
        }
    });
};

module.exports.init = function (app) {
    console.log('Registering routes & controllers ...');
    requireFiles(__dirname, app);
};