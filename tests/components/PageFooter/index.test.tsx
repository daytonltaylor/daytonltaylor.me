import { cleanup, render } from "@testing-library/react";
import PageFooter from "../../../src/components/PageFooter";

describe("<PageFooter />", () => {
    afterEach(() => {
        cleanup();
    });

    it("Component renders", () => {
        render(<PageFooter />);
    });
});