const bookController= require('../controllers/book-controller');
const express= require('express');
const router= express.Router();

router.get('/',bookController.getAllBook);
router.get('/:id',bookController.getBookById);
router.get('/fname/:fname',bookController.getBookByFname);
router.get('/char/:ch',bookController.getBookByFnameContain);
router.post('/',bookController.addNewBook);

module.exports=router;