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
            this.lastBook = Book.title;
        }else{
            this.booksNotRead ++;
            this.books.push(Book);
            if (this.actualBook == null){
                this.actualBook = Book.title;
            }
            if (this.nextBook == null && Book.title != this.actualBook){
                this.nextBook = Book.title;
            }
        }

    }
    listarLibros(){
        console.log(this.books);
        console.log(this.actualBook);
        console.log(this.nextBook);
    }
    finishCurrentBook(){
        let pos = 0;
        for (let i=0; i<this.books.length; i++){
            if (this.books[i].title == this.actualBook){
                pos = i;
                this.books[i].readDate = Date.now();
                this.books[i].read = true;
                
            }
        }
        console.log(pos);
        this.lastBook = this.actualBook;
        let control = false;
        this.actualBook = this.nextBook;
        this.nextBook = "";
        for (let i=0; i<this.books.length; i++){
            if (this.books[i].read == false && control == false && this.books[i].title != this.actualBook){
                this.nextBook = this.books[i].title;
                control = true;
            }
        }  
    }
}
let libro = new Book("theWitcher", "fantasia", "Pepe", false);
let libro2 = new Book("theWitcher2", "aventura", "Pepe", false);
let libro3 = new Book("theWitcher3", "fantasia", "Pepe", false);
let array = new Array();
let lista = new BookList(0, 0, null, null, null, array);
lista.addBook(libro);
lista.addBook(libro2);
lista.addBook(libro3);  
lista.finishCurrentBook();
lista.listarLibros();