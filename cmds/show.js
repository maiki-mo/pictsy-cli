const cloudinary = require('cloudinary');
const keys = require('./../config/keys');
const prettyjson = require('prettyjson');

cloudinary.config(keys.cloudinary);

module.exports = (args) => {
    cloudinary.v2.api.resource(`${args._[1]}`, (err, res) => {
        if (err) {
            console.log(err);
        }
    })
    .then((data) => {
        console.log(prettyjson.render(data));
    });
};
