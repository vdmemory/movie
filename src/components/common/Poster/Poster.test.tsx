import React from "react";
import { createRenderer } from "react-test-renderer/shallow";

import Poster from "./Poster";
import { deepEqual } from "../../../testUtils";

type Props = {
    title: string;
    poster: string;
};

const setup = (props: Props) => {
    const renderer = createRenderer();
    renderer.render(<Poster {...props} />);
    const output = renderer.getRenderOutput();
    return { output, props };
};

const propsRender: Props = {
    title: "Title",
    poster: "https://poster.jpg",
};

const propsNotRender: Props = {
    title: "Title",
    poster: "N/A",
};

describe("Poster Component", () => {
    describe("Render component and its components", () => {
        test("Should renders correctly", () => {
            const { output } = setup(propsRender);
            expect(output).toMatchSnapshot();
        });

        test("Should render image", () => {
            const { output } = setup(propsRender);
            expect(output.type).toBe("img");
        });

        test("Should render the filled alt attribute and src attribute", () => {
            const { output } = setup(propsRender);
            expect(output.props.alt).toBe("Title");
            expect(output.props.src).toBe("https://poster.jpg");
        });
        
        test("Should display the plug if props poster 'N/A' in src attribute value", () => {
            const { output } = setup(propsNotRender);
            expect(output.props.src).toBe("noposter.png");
        });

        describe("Check props", () => {
            const expectedProps = {
                title: "Title",
                poster: "https://poster.jpg",
            };
            test("Should render and check props", () => {
                const { props } = setup(propsRender);
                expect(deepEqual(props, expectedProps)).toBeTruthy();
            });
        });
    });
});
