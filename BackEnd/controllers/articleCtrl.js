const Article = require("../models/ArticleBlog");


exports.createArticle = (req, res, next)=>{
    delete req.body._id;
    const article = new Article ({
        ...req.body
    });
    article.save()
        .then(()=> res.status(201).json({message: 'article enregistré ! '}))
        .catch(error=> res.status(400).json({error}));
};
exports.modifyArticle  = (req, res, next)=>{
    Article.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
        .then(()=>res.status(200).json({message: 'Objet modifié ! '}))
        .catch(error => res.status(400).json({error}));
};
exports.deleteArticle  = (req, res, next)=>{
    Article.deleteOne({_id: req.params.id})
        .then(()=>res.status(200).json({message: 'Objet supprimé ! '}))
        .catch(error => res.status(400).json({error}));
};
exports.getOneArticle  = (req, res, next)=>{
    Article.findOne({_id: req.params.id})
        .then(thing => res.status(20).json(thing))
        .catch(error => res.status(404).json({error}));
};
exports.getAllArticle  = (req, res) => {
    Article.find()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json({error}));
};