import { Book } from "./types";

const BookList = ({ books }: { books: Book[] }) => (
  <div data-test="book-list">
    {books.map((book) => (
      <div className="book-item" key={book.name}>
        <h2>{book.name}</h2>
        <a href={`/books/${book.id}`}>View Details</a>
      </div>
    ))}
  </div>
);

export default BookList;
