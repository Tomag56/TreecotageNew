const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRoutes = require('./routes/utilisateur')

//Models de données

const Article = require('./models/ArticleBlog');
const Projet = require('./models/Projet');

//Connection MongoDB
mongoose.connect('mongodb+srv://tomag56:42cayxh56@cluster0.msixe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());//intercepte les requetes

//CORS - Sécurité contre requete malvaillante
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Import des routes
app.use('/api/utilisateur', userRoutes)

//POST Article
app.post('./api/article', (req, res, next)=>{
    delete req.body._id;
    const article = new Article({
        ...req.body
    });
    article.save()
        .then(()=> res.status(201).json({message: 'Article enregistré ! '}))
        .catch(error=> res.status(400).json({error}));
});

//POST Projet
app.post('./api/projet', (req, res, next)=>{
    delete req.body._id;
    const projet = new Projet({
        ...req.body
    });
    projet.save()
        .then(()=> res.status(201).json({message: 'Projet enregistré ! '}))
        .catch(error=> res.status(400).json({error}));
});

module.exports = app;
