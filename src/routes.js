const { Router } = require('express');
const CategoryController = require('./app/controllers/CategoryController');
const ContactController = require('./app/controllers/ContactController');

const router = Router();

router.get(
    '/contacts',
    ContactController.index,
);

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

router.get('/categories', CategoryController.index);
router.get('/categories/:category_id', CategoryController.show);
router.delete('/categories/:category_id', CategoryController.delete);
router.post('/categories', CategoryController.store);
router.put('/categories/:category_id', CategoryController.update);

module.exports = router;
