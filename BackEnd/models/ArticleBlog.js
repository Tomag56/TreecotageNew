const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    titre: {type: String, required: true},
    intro: {type: String, required: true},
    content1: {type: String, required: true},
    content2: {type: String},
    publishedAt: {type: Number, required: true},
    image: {type: String, required: true},
    publish: {type: Boolean},
});

module.exports = mongoose.model('Article', articleSchema);
