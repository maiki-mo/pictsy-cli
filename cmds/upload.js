const cloudinary = require('cloudinary');
const keys = require('./../config/keys');

cloudinary.config(keys.cloudinary);

module.exports = (args) => {
    cloudinary.v2.uploader.upload(`${args._[1]}`, (err, res) => {
        if (err) {
            console.log(`\n${err}`);
        }
    })
    .then((data) => {
        console.log(`\n${data.resource_type.toUpperCase()} uploaded with id: ${data.public_id}.`);
    });
};
