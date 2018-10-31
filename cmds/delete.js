const cloudinary = require('cloudinary');
const keys = require('./../config/keys');

cloudinary.config(keys.cloudinary);

module.exports = (args) => {
    args._.shift()
    args._.forEach((arg) => {
        cloudinary.v2.api.delete_resources([arg], (err, res) => {
            console.log(res);
        });
    });
};
