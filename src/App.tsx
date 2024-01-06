import { Typography } from "@mui/material";
import "./App.css";
import BookListContainer from "./components/BookList/BookListContainer";
import { Route, Routes } from "react-router";
import BookDetailContainer from "./components/BookDetail/BookDetailContainer";

function App() {
  // console.log(`${process.env.REACT_APP_LOCAL_SERVER_URL}`);
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Routes>
        <Route path="/" element={<BookListContainer />} />
        <Route path="/books/:id" element={<BookDetailContainer />} />
      </Routes>
    </>
  );
}

export default App;
