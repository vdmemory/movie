import React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import { useSelector } from "react-redux";

import MovieDetails from "./MovieDetails";
import GoBackButton from "../common/GoBackButton/GoBackButton";
import InfoBox from "../common/InfoBox/InfoBox";
import Spinner from "../common/Spinner/Spinner";
import { initialState } from "../../store/reducer";

jest.mock("react-router-dom", () => ({
    useParams: jest.fn().mockReturnValue({ id: "123" }),
}));

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

const setup = () => {
    const renderer = createRenderer();
    renderer.render(<MovieDetails />);
    const output = renderer.getRenderOutput();
    return { output, renderer };
};

const stateLoading = {
    ...initialState,
    loading: {
        ...initialState.loading,
        detailsMovie: true,
    }
};

const stateError = {
    ...initialState,
    error: {
        ...initialState.error,
        detailsMovie: "Error message",
    },
};

describe("MovieDetails Component", () => {
    
    describe("Render component and its components", () => {
        beforeEach(() => {
            // @ts-expect-error
            useSelector.mockImplementation((callback) => {
                return callback(initialState);
            });
        });
        afterEach(() => {
            // @ts-expect-error
            useSelector.mockClear();
        });
        test("Should renders correctly", () => {
            const { output } = setup();
            expect(output).toMatchSnapshot();
        });

        test("Should render GoBackButton component and check class", () => {
            const { output } = setup();
            const [component] = output.props.children;
            expect(component.type).toBe(GoBackButton);
        });

        test("Should render renderInfoBox, check class and its components", () => {
            const { output } = setup();
            const [, renderInfoBox] = output.props.children;
            expect(renderInfoBox.type).toBe("section");
            expect(renderInfoBox.props.className).toBe("details");
            expect(renderInfoBox.props.children.type).toBe(InfoBox);
        });
    });

    describe("Renderer of the component and its components, if the loading flag is true", () => {
        beforeEach(() => {
            // @ts-expect-error
            useSelector.mockImplementation((callback) => {
                return callback(stateLoading);
            });
        });
        afterEach(() => {
            // @ts-expect-error
            useSelector.mockClear();
        });
        test("Should renders correctly", () => {
            const { output } = setup();
            expect(output).toMatchSnapshot();
        });

        test("Should render Spinner component and check class", () => {
            const { output } = setup();
            const [, spinner] = output.props.children;
            expect(spinner.type).toBe(Spinner);
        });

    });

    describe("Renderer of the component and its components, if the error message", () => {
        beforeEach(() => {
            // @ts-expect-error
            useSelector.mockImplementation((callback) => {
                return callback(stateError);
            });
        });
        afterEach(() => {
            // @ts-expect-error
            useSelector.mockClear();
        });
        test("Should renders correctly", () => {
            const { output } = setup();
            expect(output).toMatchSnapshot();
        });

        test("Should render Error message and check class", () => {
            const { output } = setup();
            const [, error] = output.props.children;
            expect(error.type).toBe("p");
            expect(error.props.className).toBe("message");
            expect(error.props.children).toBe("Error message");
        });
    });
});