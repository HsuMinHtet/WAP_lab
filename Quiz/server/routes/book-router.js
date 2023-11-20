const bookController= require('../controllers/book-controller');
const express= require('express');
const router= express.Router();

//router.get('/',bookController.getAllBook);
router.get('/:id',bookController.getBookById);
router.get('/',bookController.getBookByFname);
router.post('/',bookController.addNewBook);

module.exports=router;