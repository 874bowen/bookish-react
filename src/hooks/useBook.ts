import axios from "axios"
import { useEffect, useState } from "react"
import { Book } from "../types"
import { useParams } from "react-router"

export const useBook = () => {
    const { id } = useParams<string>()
    const [book, setBook] = useState<Book>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const fetchBook =async () => {
          setError(false);
          setLoading(true);
          try {
            const res = await axios.get(`${process.env.REACT_APP_LOCAL_SERVER_URL}/books/${id}`);
            setBook(res.data);
          } catch (error) {
            setError(true)
          } finally {
            setLoading(false)
          }
        }
        fetchBook();
    }, [id])
    
    return {
        loading,
        error,
        book
    }
}