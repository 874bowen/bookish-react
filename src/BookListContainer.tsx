import { useEffect, useState } from "react"
import { Book } from "./types"
import axios from "axios"
import { Typography } from "@mui/material"
import BookList from "./BookList"

const BookListContainer = () => {
    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [errors, setError] = useState<boolean>(false)

    useEffect(() => {
        const fetchBooks =async () => {
          setError(false);
          setLoading(false);
          try {
            const res = await axios.get('http://localhost:8080/books');
            setBooks(res.data);
          } catch (error) {
            setError(true)
          } finally {
            setLoading(false)
          }
        }
        fetchBooks();
    }, [])

    return (
        <Typography>
            <BookList books={books} />
        </Typography>
    )
}

export default BookListContainer