import { Typography } from '@mui/material';
import './App.css';
import { Book } from './types';
import BookList from './BookList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  console.log(`${process.env.REACT_APP_LOCAL_SERVER_URL}`);
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [errors, setError] = useState<boolean>(false)
  // const books:Book[] = [{ name: 'Refactoring' }, { name: 'Domain-driven design' }]

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
    <>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <Typography>
        <BookList books={books} />
      </Typography>
    </>
  );
}

export default App;
