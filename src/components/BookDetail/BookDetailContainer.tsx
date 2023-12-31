import { useBook } from "../../hooks/useBook";
import BookDetail from "./BookDetail";

const BookDetailContainer = () => {
  const { book } = useBook();

  return <BookDetail book={book} />;
};

export default BookDetailContainer;
