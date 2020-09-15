import React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import { useHistory } from "react-router-dom";

import { deepEqual } from "../../../testUtils";
import GoBackButton from "./GoBackButton";
import { HiOutlineArrowLeft } from "react-icons/hi";

type Props = {
    name: string;
};

const setup = (props: Props) => {
    const renderer = createRenderer();
    renderer.render(<GoBackButton {...props} />);
    const output = renderer.getRenderOutput();
    return { output, props, renderer };
};

const propsRender: Props = {
    name: "Back To List",
};

jest.mock("react-router-dom", () => {
    const goBackSpy = jest.fn();
    return {
        useHistory: function history() {
            return {
                goBack: goBackSpy,
            };
        },
    };
});

describe("GoBackButton Component", () => {
    describe("Render component and its components", () => {
        test("Should renders correctly", () => {
            const { output } = setup(propsRender);
            expect(output).toMatchSnapshot();
        });

        test("Should render container and has a movie class and check text", () => {
            const { output } = setup(propsRender);
            const [, text] = output.props.children;
            expect(output.type).toBe("div");
            expect(output.props.className).toBe("goBack");
            expect(text).toBe("Back To List");
        });

        test("Should call handleGoBack on click", () => {
            const history = useHistory();
            const { output } = setup(propsRender);
            output.props.onClick();
            expect(history.goBack).toBeCalled();
            // @ts-expect-error history.goBack is mocked
            history.goBack.mockClear();
        });

        describe("HiOutlineArrowLeft", () => {
            test("Should render and check class", () => {
                const { output } = setup(propsRender);
                const [component] = output.props.children;
                expect(component.type).toBe(HiOutlineArrowLeft);
                expect(component.props.className).toBe("iconButton");
            });
        });

        describe("Check props", () => {
            const expectedProps = {
                name: "Back To List",
            };
            test("Should render and check props", () => {
                const { props } = setup(propsRender);
                expect(deepEqual(props, expectedProps)).toBeTruthy();
            });
        });
    });
});
