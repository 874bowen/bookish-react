import { Book } from "../../types"

const BookDetail = ({ book }: any) => {
    return (
        <div className="detail">
            <h2 className="book-title">{book && book.name}</h2>
        </div>
    )
}

export default BookDetail;