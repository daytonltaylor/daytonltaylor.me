import { cleanup, render } from "@testing-library/react";
import RedirectIcon from "../../src/icons/RedirectIcon";

describe("<RedirectIcon />", () => {
    afterEach(() => {
        cleanup();
    });

    it("Component renders", () => {
        render(<RedirectIcon />);
    });
});