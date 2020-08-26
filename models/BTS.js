const mongoose = require('mongoose');

const BTSSchema = mongoose.Schema({
    description: {
        type: String, // song title
        required: false,
    },
    photoUrl: {
        type: String, // main artist, no feature artists
        required: true,
    },
});



module.exports = mongoose.model('BTS', BTSSchema);