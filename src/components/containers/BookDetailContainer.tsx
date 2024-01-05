import { useBook } from "../../hooks/useBook"
import BookDetail from "../BookDetail/BookDetail";

const BookDetailContainer = () => {
    const { book } = useBook();

    return <BookDetail book={book} /> 
}

export default BookDetailContainer