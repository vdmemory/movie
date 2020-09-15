import React, { Dispatch } from "react";
import * as redux from "react-redux";
import { createRenderer } from "react-test-renderer/shallow";
import { debounce } from "debounce";

import Search from "./Search";
import { BsSearch } from "react-icons/bs";

type Props = {
    placeholder: string;
    title: string;
    type: string;
    dispatch: Dispatch<any>;
};

const spySelector = jest.spyOn(redux, "useSelector");
spySelector.mockReturnValue({ searchValue: "test" });

const mockDebounce = jest.spyOn(debounce, "debounce");
mockDebounce.mockImplementation((fn: any) => fn);

const setup = (props: Props) => {
    const renderer = createRenderer();
    renderer.render(
        <Search {...props} />
    );
    const output = renderer.getRenderOutput();
    return { output, props, renderer };
};

const propsRender: Props = {
    placeholder: "this placeholder",
    title: "this title",
    type: "this type",
    dispatch: jest.fn()
};

describe("Search Component", () => {
    describe("Render component and its components", () => {
        test("Should renders correctly", () => {
            const { output } = setup(propsRender);
            expect(output).toMatchSnapshot();
        });

        test("Should render container and has a class", () => {
            const { output } = setup(propsRender);
            expect(output.type).toBe("div");
            expect(output.props.className).toBe("bar");
        });

        test("Should render input and has a class", () => {
            const { output } = setup(propsRender);
            const [, input] = output.props.children;
            expect(input.type).toBe("input");
            expect(input.props.className).toBe("searchbar");
        });

        test("Should call handleSearchChange on change", () => {
            const event = {
                preventDefault() {},
                target: { value: "test" },
            };

            const { output, props } = setup(propsRender);
            const [, input] = output.props.children;
            input.props.onChange(event);

            expect(props.dispatch).toBeCalled();
            expect(spySelector).toBeCalled();
            expect(mockDebounce).toBeCalled();
        });

        describe("BsSearch", () => {
            test("Should render and check class", () => {
                const { output } = setup(propsRender);
                expect(output.props.children[0].type).toBe(BsSearch);
                expect(output.props.children[0].props.className).toBe(
                    "searchIcon"
                );
            });
        });
    });
});
