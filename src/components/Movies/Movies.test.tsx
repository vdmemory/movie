import React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import Movies from "./Movies";
import Spinner from "../common/Spinner/Spinner";
import Header from "../common/Header/Header";
import Card from "../common/Card/Card";
import { initialState } from "../../store/reducer";
import { SearchMovies } from ".././../api/searchMovies";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
}));

const setup = () => {
    const renderer = createRenderer();
    renderer.render(<Movies />);
    const output = renderer.getRenderOutput();
    return { output, renderer };
};

const stateLoading = {
    ...initialState,
    loading: {
        ...initialState.loading,
        searchMovies: true,
    },
};

const stateError = {
    ...initialState,
    error: {
        ...initialState.error,
        searchMovies: "Error message",
    },
};

const stateDataСontent = {
    ...initialState,
    searchMovies: {
        totalResults: "100",
        search: [
            {
                title: "this title",
                year: "this year",
                imdbId: "this imdbId",
                type: "this type",
                poster: "this poster",
            },
        ] as SearchMovies[],
    },
    searchValue: "test",
};

describe("searchMovies Component", () => {
    describe("Renderer of the component and its components, if no search query has been entered", () => {
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

        test("Should render Header component and check class", () => {
            const { output } = setup();
            const [component] = output.props.children;
            expect(component.type).toBe(Header);
        });

        test("Should render no results message if search.length === 0 and check class", () => {
            const { output } = setup();
            const [, error] = output.props.children;
            expect(error.type).toBe("p");
            expect(error.props.className).toBe("message");
            expect(error.props.children).toBe("No results ...");
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

    describe("Renderer of the component and its components, if a search query was entered", () => {
        beforeEach(() => {
            // @ts-expect-error
            useSelector.mockImplementation((callback) => {
                return callback(stateDataСontent);
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

        test("Should render Main container and check class", () => {
            const { output } = setup();
            const [, main] = output.props.children;
            expect(main.type).toBe("main");
            expect(main.props.className).toBe("main");
            expect(main.props.children.props.className).toBe("movies");
        });

        test("Should render Card component", () => {
            const { output } = setup();
            const [, main] = output.props.children;
            const card = main.props.children.props.children[0];
            expect(card.type).toBe(Card);
        });

        test("Should render Pagination component and check class", () => {
            const { output } = setup();
            const [, , paginate] = output.props.children;
            expect(paginate.type).toBe(ReactPaginate);
            expect(paginate.props.containerClassName).toBe("pagination");
        });

        test("Should call handleChangePaginate on click", () => {
            const { output } = setup();
            const [, , paginate] = output.props.children;
            paginate.props.onPageChange(2);

            expect(mockDispatch).toBeCalled();
        });
    });
});
