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
        description:
          "Martin Fowler's Refactoring defined core ideas and techniques ...",
        name: "Refactoring",
        id: 1,
      },
    };

    render(<BookDetail {...props} />);
    const description = screen.getByText(
      /martin fowler's refactoring defined core ideas and techniques \.\.\./i
    );
    expect(description).toBeInTheDocument();
  });

  it("renders title when no description is given", () => {
    const props = {
      book: {
        name: "Refactoring",
        id: 1,
      },
    };
    render(<BookDetail {...props} />);
    const description = screen.getByTestId("book-description");
    expect(description).toHaveTextContent(props.book.name);
  });

  it("renders show *more* link when description ecxeeds 300 characters", () => {
    const props = {
      book: {
        name: "Lorem Ipsum",
        id: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta exercitationem laudantium animi! Quo laboriosam nam id porro? Qui nostrum enim iure voluptate suscipit ullam delectus quas adipisci magni similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta exercitationem laudantium animi! Quo laboriosam nam id porro? Qui nostrum enim iure voluptate suscipit ullam delectus quas adipisci magni similique?",
      },
    };
    render(<BookDetail {...props} />);
    const link = screen.getByText(/view more/i);
    expect(link).toBeInTheDocument();
    const description = screen.getByTestId("book-description");
    expect(description).toHaveTextContent(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta exercitationem laudantium animi! Quo laboriosam nam id porro? Qui nostrum enim iure voluptate suscipit ullam delectus quas adipisci magni similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta exe ... "
    );
  });

  /**
   * TODO: test for - shows all the descrption content when the view more link is clicked
   */
});
