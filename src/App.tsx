import { Typography } from '@mui/material';
import './App.css';
import { Book } from './types';
import BookList from './BookList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  console.log(`${process.env.REACT_APP_LOCAL_SERVER_URL}`);
  const [books, setBooks] = useState<Book[]>([])
  // const books:Book[] = [{ name: 'Refactoring' }, { name: 'Domain-driven design' }]

  useEffect(() => {
    axios.get('http://localhost:8080/books').then((res) => {
      if (res.status === 200) setBooks(res.data)
    }).catch(error => console.log(error)
    )
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
