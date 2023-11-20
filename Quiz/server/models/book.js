const books = [
    {bookId: 1, title: 'Node.js',author: {authorId: 303,firstname: 'Edward',lastname: 'Jack'}},
    {bookId: 2, title: 'Angular',author: {authorId: 308,firstname: 'Joe',lastname: 'Smith'}},
   ];

module.exports= class Book{
    constructor(title,authorId,firstname,lastname){
        this.id=books.length+1;
        this.title=title;
        this.author = {
            authorId: authorId,
            firstname: firstname,
            lastname: lastname,
          };
    }
/*     static getAllBook(){
        return books;
    } */
    //1) Get book by ID
    static getBookByID(id){
        return books.find(b=>b.bookId==id);
    }

    //2) Add New Book
    addNewBook(){
       books.push(this);
    }

    //3) fname with E
    static getBookByFname(fname){
        const searchChar=fname.toLowerCase();
        console.log(searchChar);
        return books.filter(b=>b.author.firstname.toLowerCase().includes(searchChar));
    }

}