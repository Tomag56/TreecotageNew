const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    nom: {type: String, required: true},
    prenom: {type: String, required: true},
    pseudo: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    image: {type: String, },
    idProjet: {type: Number},
    modeNuit: {type: Boolean},
    newsletter: {type: String},
    dernierConnexion: {type: Date},
})
userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema);