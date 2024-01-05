import { MemoryRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

/**
 * invoke the renderWithRouter instead of 
 * render in all the tests that need torender a Link
 * */ 
 
const renderWithRouter = (component: JSX.Element) => {
    return {
        ...render(<Router>{component}</Router>),
    };
};

export default renderWithRouter;