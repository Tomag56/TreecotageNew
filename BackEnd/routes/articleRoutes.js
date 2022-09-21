const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/articleCtrl')


router.post('/', articleCtrl.createArticle);
router.put('/:id', articleCtrl.modifyArticle);
router.delete('/:id', articleCtrl.deleteArticle);
router.get('/:id', articleCtrl.getOneArticle);
router.get('/', articleCtrl.getAllArticle);

module.exports = router;