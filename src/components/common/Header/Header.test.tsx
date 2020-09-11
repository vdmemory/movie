import React from "react";
import { createRenderer } from "react-test-renderer/shallow";

import { deepEqual } from "../../../testUtils";
import Header from "./Header";
import Search from "../Search/Search";

type Props = {
    placeholder: string;
    titleHeader: string;
    titleSearch: string;
    type: string;
};

const setup = (props: Props) => {
    const renderer = createRenderer();
    renderer.render(<Header {...props} />);
    const output = renderer.getRenderOutput();
    return { output, props };
};

const propsRender: Props = {
    placeholder: "this placeholder text",
    titleHeader: "this title header",
    titleSearch: "this title search",
    type: "this type from input search",
};

describe("Header Component", () => {
    describe("Render component and its components", () => {
        test("Should renders correctly", () => {
            const { output } = setup(propsRender);
            expect(output).toMatchSnapshot();
        });

        test("Should render container and has a header class", () => {
            const { output } = setup(propsRender);
            expect(output.type).toBe("header");
            expect(output.props.className).toBe("header");
        });

        test("Should render title header and has a title class and text", () => {
            const { output } = setup(propsRender);
            const [title] = output.props.children;
            expect(title.type).toBe("h1");
            expect(title.props.className).toBe("title");
            expect(title.props.children).toBe("this title header");
        });

        describe("Check props", () => {
            const expectedProps = {
                placeholder: "this placeholder text",
                titleHeader: "this title header",
                titleSearch: "this title search",
                type: "this type from input search",
            };
            test("Should render and check props", () => {
                const { props } = setup(propsRender);
                expect(deepEqual(props, expectedProps)).toBeTruthy();
            });
        });

        describe("Search", () => {
            const expectedProps = {
                placeholder: "this placeholder text",
                title: "this title search",
                type: "this type from input search",
            };
            test("Should render and check props", () => {
                const { output, props } = setup(propsRender);
                const [, search] = output.props.children;
                expect(search.type).toBe(Search);
                expect(deepEqual(search.props, expectedProps)).toBeTruthy();
            });
        });
    });
});
