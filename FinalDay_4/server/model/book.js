const books=[
    {id: 1, title: 'Java', ISBN: '111222333', publishedDate: '23/01/2000', author: 'Prof.Josphe'},
    {id: 2, title: 'WAP', ISBN: '445333222', publishedDate: '03/01/2020', author: 'Prof.Tina'},
    {id: 3, title: 'WAA', ISBN: '878653333', publishedDate: '23/01/2000', author: 'Prof.Josphe'},
];

module.exports= class Book{
    constructor(title, ISBN, publishedDate, author){
        this.id= books.length+1;
        this.title=title;
        this.ISBN=ISBN;
        this.publishedDate=publishedDate;
        this.author=author;
    }

    //create
    createBook(){
        books.push(this);
    }

    //read
    static getAllBook(){
        return books;
    }

    //get book by id
    static getBookById(id){
        const index= books.findIndex(b=>b.id==id);
        if(index > -1){
            return books.find(b=>b.id==id);
        }
        else{
             throw new Error('This book is not exist');
        }
    }

    //update
    updateById(id){
        let index = books.findIndex(b=>b.id==id);
        if(index > -1){
            books[index]=this;
        }else{
            throw new Error('This book is not exist');
        }
    }

    //delete
    static deleteById(id){
        let index=books.findIndex(b=>b.id==id);
        if(index>-1){
            books.splice(index,1);
        }else{
            throw new Error('This book is not exist');
        }
    }
}