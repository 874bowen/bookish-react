import React, { useState } from "react";
import { Book } from "../../types";
import { Link } from "@mui/material";

function BookDetailDescription({ book }: { book: Book }) {
  const [viewMore, setViewMore] = useState<boolean>(false);
  let result: JSX.Element = <>{book.name}</>;
  if (book.description) {
    const isDescriptionLong = book.description?.length > 300 ? true : false;
    if (!isDescriptionLong) return <>{book.description}</>;
    let shortDesc = (
      <>
        {book.description.substring(0, 300) + " ... "}
        <Link color="primary" onClick={(e) => setViewMore(true)}>
          View More
        </Link>
      </>
    );
    result = <>{viewMore ? book.description : shortDesc}</>;
  }

  return result;
}

export default BookDetailDescription;
