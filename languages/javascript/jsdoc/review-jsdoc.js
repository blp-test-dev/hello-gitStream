

/**
     * @param {string} title - The title of the book
     * @param {string} author - The authorof the book
*/
class Book {
    title: string;
    author: string;

    /**
     * @param {string} title - The title of the book
     * @param {string} author - The authorof the book
     */
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    /**
     * Gets the book title
     * @return {string} The title of the book
     */
    getTitle(): string {
        return this.title;
    }

    /**
     * Gets the book author
     * @return {string} The author of the book
     */
    getAuthor(): string {
        return this.author;
    }

    /**
     * Provides book information
     * @return {string} Information about the book
     */
    getBookInfo(): string {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}

/**
 * Represents a Library which is a collection of books
 */
class Library {
    books: Book[];

    /**
     * @param {Book[]} books - An array of books
     */
    constructor(books: Book[]) {
        this.books = books;
    }

    /**
     * Adds a book to the library
     * @param {Book} book - The book to add
     */


    addBook(book: Book): void {
        this.books.push(book);
    }

    /**
     * Removes a book from the library
     * @param {Book} book - The book to remove
     * @return {Book | undefined} The removed book or undefined if not found
     */
    removeBook(book: Book): Book | undefined {
        const index = this.books.indexOf(book);
        if (index > -1) {
            return this.books.splice(index, 1)[0];
        }
        return undefined;
    }

    /**
     * Finds a book by title
     * @param {string} title - The title of the book
     * @return {Book | undefined} The book if found or undefined
     */
    findBookByTitle(title: string): Book | undefined {
        return this.books.find(book => book.getTitle() === title);
    }
}
    /**
     * Finds a book by title
     * @param {string} title - The title of the book
     * @return {Book | undefined} The book if found or undefined
     */
