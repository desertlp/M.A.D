const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
    title: {
        type: String, // song title
        required: true,
    },
    artist: {
        type: String, // main artist, no feature artists
        required: true,
    },
    coverArtUrl: String, //coverArtUrl: String,
    videoUrl: String, // link to youtube/vimeo
    featured: Boolean, //completed: Boolean (max 2 featured)
});



module.exports = mongoose.model('Video', VideoSchema);