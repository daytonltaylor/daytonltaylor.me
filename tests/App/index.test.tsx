import { cleanup, render } from "@testing-library/react";
import App from "../../src/App";

describe("<App />", () => {
    afterEach(() => {
        cleanup();
    });

    it("Component renders", () => {
        render(<App />);
    });
});