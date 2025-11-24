import { cleanup, render, screen } from "@testing-library/react";
import SocialButton, { type SocialButtonIcon } from "../../../src/components/SocialButton";

describe("<SocialButton />", () => {
    afterEach(() => {
        cleanup();
    });

    it.each<[SocialButtonIcon]>([
        ["Email"],
        ["GitHub"],
        ["Twitter"],
        ["LinkedIn"]
    ])("Component renders", async (
        icon: SocialButtonIcon
    ) => {
        const givenTo = "https://social.com/profile";

        render(<SocialButton icon={icon} to={givenTo} openInNewTab={true} />);

        await screen.findByText(icon);
    });
});