class Book {
    constructor(title, genre, author, read, readDate){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
}

class BookList {
    constructor(booksRead, booksNotRead, actualBook, lastBook, nextBook, books){
        this.booksRead = booksRead;
        this.booksNotRead = booksNotRead;
        this.actualBook = actualBook;
        this.lastBook = lastBook;
        this.nextBook = nextBook;
        this.books = books;
    }
    addBook(Book){
        if (Book.read == true){
            this.booksRead ++;
            this.books.push(Book);
            this.lastBook = book.title;
        }else{
            this.booksNotRead ++;
            this.books.push(Book);
        }
        if (this.actualBook == null){
            this.actualBook = Book.title;
        }
    }
    listarLibros(){
        console.log(this.books);
        console.log(this.actualBook);
    }
    finishCurrentBook(){
        Book.read = true;
        Book.readDate = Date.now();
        this.lastBook = Book.title;
        let control = false;
        this.actualBook = this.nextBook;
        for (let i=0; i<this.books.length; i++){
            if (this.books[i].read == false && control == false ){
                this.nextBook = books(i).title;
                control = true;
            }
        }   
    }
}
let libro = new Book("theWitcher", "fantasia", "Pepe", false);
let libro2 = new Book("theWitcher2", "aventura", "Pepe", false);
let array = new Array();
let lista = new BookList(0, 0, null, null, null, array);
lista.addBook(libro);
lista.addBook(libro2);
//lista.finishCurrentBook();
lista.listarLibros();