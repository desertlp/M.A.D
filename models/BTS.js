const mongoose = require('mongoose');

const BTSSchema = mongoose.Schema({
    descripton: String, // song title
    photoUrl: String, // link to youtube/vimeo
});

const BTS = mongoose.model('BTS', BTSSchema);

module.exports = BTS;