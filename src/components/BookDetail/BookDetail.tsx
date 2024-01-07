import { Book } from "../../types";
import BookDetailDescription from "./BookDetailDescription";

const BookDetail = ({ book }: { book: Book }) => {
  return (
    <div className="detail">
      <h2 className="book-title">{book && book.name}</h2>
      <p className="book-description" data-testid="book-description">
        <BookDetailDescription book={book} />
      </p>
    </div>
  );
};

export default BookDetail;
