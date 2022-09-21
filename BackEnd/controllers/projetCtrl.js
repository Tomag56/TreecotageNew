const Projet = require("../models/Projet");


exports.createProjet = (req, res, next)=>{
    delete req.body._id;
    const projet = new Projet({
        ...req.body
    });
    projet.save()
        .then(()=> res.status(201).json({message: 'projet enregistré ! '}))
        .catch(error=> res.status(400).json({error}));
};
exports.modifyProjet = (req, res, next)=>{
    Projet.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
        .then(()=>res.status(200).json({message: 'Objet modifié ! '}))
        .catch(error => res.status(400).json({error}));
};
exports.deleteProjet = (req, res, next)=>{
    Projet.deleteOne({_id: req.params.id})
        .then(()=>res.status(200).json({message: 'Objet supprimé ! '}))
        .catch(error => res.status(400).json({error}));
};
exports.getOneProjet = (req, res, next)=>{
    Projet.findOne({_id: req.params.id})
        .then(thing => res.status(20).json(thing))
        .catch(error => res.status(404).json({error}));
};
exports.getAllProjets = (req, res) => {
    Projet.find()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json({error}));
};