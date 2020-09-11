import React from "react";
import { createRenderer } from "react-test-renderer/shallow";

import { deepEqual } from "../../../testUtils";
import Card from "./Card";
import Poster from "../Poster/Poster";

type Props = {
    title: string;
    poster: string;
    year: string;
    id: string;
    onClick(id: string): void;
};

const setup = (props: Props) => {
    const renderer = createRenderer();
    renderer.render(<Card {...props} />);
    const output = renderer.getRenderOutput();
    return { output, props };
};

const propsRender: Props = {
    title: "this title text",
    poster: "https://poster.jpg",
    year: "1990",
    id: "tt55555",
    onClick: jest.fn()
};

describe("Card Component", () => {
    describe("Render component and its components", () => {
        test("Should renders correctly", () => {
            const { output } = setup(propsRender);
            expect(output).toMatchSnapshot();
        });

        test("Should render container and has a movie class", () => {
            const { output } = setup(propsRender);
            expect(output.type).toBe("div");
            expect(output.props.className).toBe("movie");
        });

        test("Should call handleClick on click", () => {
            const { output, props } = setup(propsRender);
            const figure = output.props.children;
            figure.props.onClick();
            expect(props.onClick).toBeCalled();
            expect(figure.type).toBe("figure");;
        });

        test("Should render title and year for poster and should have h2 tag", () => {
            const { output } = setup(propsRender);
            const figure = output.props.children;
            const [, title] = figure.props.children;
            expect(title.type).toBe("h2");
            expect(title.props.children).toBe("this title text (1990)");
        });

        describe("Poster", () => {
            const expectedProps = {
                title: "this title text",
                poster: "https://poster.jpg",
            };
            test("Should render and check props", () => {
                const { output, props } = setup(propsRender);
                const figure = output.props.children;
                const [poster] = figure.props.children;
                expect(poster.type).toBe(Poster);
                expect(deepEqual(poster.props, expectedProps)).toBeTruthy();
            });
        });

        

    });
});
