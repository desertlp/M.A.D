const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
    title: String, // song title
    artist: String, // main artist, no feature artists
    dateReleased: Date, // calendar popup?  
    coverArtUrl: String, //coverArtUrl: String,
    videoUrl: String, // link to youtube/vimeo
    featured: Boolean, //completed: Boolean (max 2 featured)
});

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;