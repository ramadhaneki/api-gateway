const express = require('express');
const router = express.Router();

const coursesHandler = require('./handler/courses');
const verifyToken = require('../middlewares/verifyToken');

router.get('/:id', coursesHandler.get);
router.get('/', coursesHandler.getAll);

router.post('/', verifyToken, coursesHandler.create);
router.put('/:id', verifyToken, coursesHandler.update);
router.delete('/:id', verifyToken, coursesHandler.destroy);





module.exports = router;
