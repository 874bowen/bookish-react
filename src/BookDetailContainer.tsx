import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Book } from "./types"
import axios from "axios"

const BookDetailContainer = () => {
    const { id } = useParams<string>()
    const [book, setBook] = useState<Book>()

    useEffect(() => {
        const fetchBook = async () => await axios.get(`${process.env.REACT_APP_LOCAL_SERVER_URL}/books/${id}`)
            .then(res => setBook(res.data))
            .catch(err => console.log(err))
        fetchBook()
    }, [id])

    return (    
        <div className="detail">
            <h2 className="book-title">{book && book.name}</h2>
        </div>
    )
}

export default BookDetailContainer