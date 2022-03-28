var express = require('express');
var router = express.Router();
var controller = require('../controllers/productController');

router.get('/', controller.index);
router.get('/brand/:brand', controller.indexBrand);
router.get('/colour/:colour', controller.indexColor);
router.get('/model/:model/:anio?', controller.indexModel);
router.get('/year/:year', controller.indexYear);
router.get('/:id', controller.show);

module.exports = router;
