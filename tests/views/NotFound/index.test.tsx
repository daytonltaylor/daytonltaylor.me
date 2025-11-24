import { cleanup, render, screen } from "@testing-library/react";
import NotFound from "../../../src/views/NotFound";

describe("<NotFound />", () => {
    afterEach(() => {
        cleanup();
    });

    it("Component renders", async () => {
        render(<NotFound />);

        await screen.findByText("The requested page could not be found.");
    });
});