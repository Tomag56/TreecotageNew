const express = require('express');
const router = express.Router();
const projetCtrl = require('../controllers/projetCtrl')


router.post('/', projetCtrl.createProjet);
router.put('/:id', projetCtrl.modifyProjet);
router.delete('/:id', projetCtrl.deleteProjet);
router.get('/:id', projetCtrl.getOneProjet);
router.get('/', projetCtrl.getAllProjets);

module.exports = router;