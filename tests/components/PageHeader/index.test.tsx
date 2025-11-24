import { cleanup, render, screen } from "@testing-library/react";
import PageHeader from "../../../src/components/PageHeader";
import { BrowserRouter } from "react-router-dom";

describe("<PageHeader />", () => {
    afterEach(() => {
        cleanup();
    });

    it("Component renders", async () => {
        render(<BrowserRouter><PageHeader /></BrowserRouter>);

        await screen.findByText("About");
    });
});