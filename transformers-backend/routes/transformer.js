var express = require('express');
const TransformersController = require('../controllers/TransformersController');

var router = express.Router();

router.post('/', TransformersController.transformerAdd);
router.get('/', TransformersController.transformerList);
// router.get('/:id', TransformersController.transformerDetail);
// router.put('/:id', TransformersController.transformerUpdate);
// router.delete('/:id', TransformersController.transformerDelete);

module.exports = router;
