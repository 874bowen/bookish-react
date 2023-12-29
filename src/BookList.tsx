import { Book } from "./types";

const BookList = ({books}: {books: Book[]}) => (
    <div data-test="book-list">
        {books.map(book => (
            <div className="book-item" key={book.name}>
                <h2>{book.name}</h2>
            </div>
        ))}
    </div>
);

export default BookList;