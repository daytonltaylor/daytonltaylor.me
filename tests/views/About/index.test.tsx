import { cleanup, render, screen } from "@testing-library/react";
import About from "../../../src/views/About";

describe("<About />", () => {
    afterEach(() => {
        cleanup();
    });

    it("Component renders", async () => {
        render(<About />);

        await screen.findByText("Dayton Taylor");
        await screen.findByText("Software Engineer");

        await screen.findByText("Email");
        await screen.findByText("GitHub");
        await screen.findByText("LinkedIn");

        expect(document.title).toBe("Dayton Taylor | About");
    });
});