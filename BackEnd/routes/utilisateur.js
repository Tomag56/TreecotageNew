const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const router = express.Router();


router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;

router.post('/', userCtrl.createUser);
router.put('/:id', userCtrl.modifyUser);
router.delete('/:id', userCtrl.deleteUser);
router.get('/:id', userCtrl.getOneUser);
router.get('/', userCtrl.getAllUsers);

module.exports = router;