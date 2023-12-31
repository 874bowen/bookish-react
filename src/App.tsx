import { Typography } from '@mui/material';
import './App.css';
import BookListContainer from './BookListContainer';

function App() {
  // console.log(`${process.env.REACT_APP_LOCAL_SERVER_URL}`);
  return (
    <>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <BookListContainer />
    </>
  );
}

export default App;
