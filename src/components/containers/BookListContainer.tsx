import { Typography } from "@mui/material"
import BookList from "../BookList"
import { useBooks } from "../../hooks/useBooks"

const BookListContainer = () => {
    const {loading, error, books} = useBooks();
    
    if (loading) return <p>Loading ... </p>

    if (error) return <p>Error ... </p>

    return (
        <Typography component='div'>
            <BookList books={books} />
        </Typography>
    )
}

export default BookListContainer