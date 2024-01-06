import { render, screen } from "@testing-library/react";
import BookDetail from "./BookDetail";

describe("Book Detail", () => {
  it("renders title", () => {
    const props = {
      book: {
        name: "Refactoring",
        id: 1,
      },
    };
    render(<BookDetail {...props} />);
    const title = screen.getByRole("heading");
    expect(title.innerHTML).toEqual(props.book.name);
  });

  it("renders description", () => {
    const props = {
      book: {
        description: "Martin Fowler's Refactoring defined core ideas and techniques ...",
        name: "Refactoring",
        id: 1
      }
    }

    render(<BookDetail {...props} />)
    const description = screen.getByText(/martin fowler's refactoring defined core ideas and techniques \.\.\./i)
    expect(description).toBeInTheDocument()
  })

  it("renders title when no description is given", () => {
    const props = {
      book: {
        name: "Refactoring",
        id: 1,
      }
    }
    render(<BookDetail {...props} />)
    const description = screen.getByTestId("book-description")
    expect(description).toHaveTextContent(props.book.name)
  })
});
