import axios from "axios"
import { useEffect, useState } from "react"
import { Book } from "../types"

export const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const fetchBooks =async () => {
          setError(false);
          setLoading(true);
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
    
    return {
        loading,
        error,
        books
    }
}
