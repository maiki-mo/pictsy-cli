const cloudinary = require('cloudinary');
const keys = require('./../config/keys');
const dbUpload = require('./../helpers/post-img');

cloudinary.config(keys.cloudinary);

const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = (args) => {
    cloudinary.v2.uploader.upload(`${args._[1]}`, (err, res) => {
        if (err) {
            console.log(`\n${err}`);
        }
    })
    .then((data) => {
        dbUpload(args);
        console.log(`\n${capitalizeFirst(data.resource_type)} uploaded with id: ${data.public_id}.`);
    });
};
