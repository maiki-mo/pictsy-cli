const cloudinary = require('cloudinary');
const keys = require('./../config/keys');
const downloader = require('image-downloader');

cloudinary.config(keys.cloudinary);

module.exports = (args) => {
    cloudinary.v2.api.resource(`${args._[1]}`, (err, res) => {
        if (err) {
            console.log(`\n${err}`);
        }
    })
    .then((data) => {
        const options = {
            url: data.url,
            dest: args._[2] || './media/',
        }

        downloader.image(options)
        .then(({ filename, image }) => {
            console.log('File saved to:', filename);
        })
        .catch((err) => {
            console.log(err);
        })
    });
};
