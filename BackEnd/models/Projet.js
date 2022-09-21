const mongoose = require("mongoose");

const projetSchema = mongoose.Schema({
    nom: {type: String, required: true},
    description: {type: String, required: true},
    schemaTricot: {type: String, required: true},
    chronometre: {type: Number},
    compteurRang1: {type: Number},
    compteurRang2 : {type: Number},
    idUser: {type: Number, required: true},
    modeNuit: {type: Boolean},
    newsletter: {type: String},
    derniereConnexion: {type: Date},
    enregistrer: {type: Boolean,},
})

module.exports = mongoose.model('Projet', projetSchema)
