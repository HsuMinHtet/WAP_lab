const express= require('express');
const bookController= require('../controller/book_controller');
const router=express.Router();

router.get('/',bookController.getAllBook);

router.get('/:id',bookController.getBookById);

router.post('/',bookController.addBook);

router.put('/:id',bookController.updateBookById);

router.delete('/:id',bookController.deleteBookById);

module.exports=router;