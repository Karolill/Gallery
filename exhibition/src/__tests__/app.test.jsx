import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "../App";

afterEach(cleanup);

it("installationInfo snappshot", () => {
    const {container} = render(<App />);
    expect(container).toMatchSnapshot();
});