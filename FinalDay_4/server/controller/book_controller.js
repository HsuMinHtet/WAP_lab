const Book= require('../model/book');

exports.addBook= (req,res,next)=>{
    const {title, ISBN, publishedDate, author} = req.body;
    new Book(title, ISBN, publishedDate, author).createBook();
    res.status(200).end();
}

exports.getAllBook= (req,res,next)=>{
    res.json(Book.getAllBook());
}

exports.getBookById= (req,res,next)=>{
    res.json(Book.getBookById(req.params.id));
}

exports.updateBookById=(req,res,next)=>{
    const {title, ISBN, publishedDate, author} = req.body;
    const book = new Book(title, ISBN, publishedDate, author);
    book.updateById(req.params.id);
    res.status(200).json(book);
}

exports.deleteBookById=(req,res,next)=>{
    Book.deleteById(req.params.id);
    res.status(201).end();
}