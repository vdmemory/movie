import React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import StarRatingComponent from "react-star-rating-component";
import { BsStar } from "react-icons/bs";

import { deepEqual } from "../../../testUtils";
import InfoBox from "./InfoBox";
import RowInfo from "../RowInfo/RowInfo";
import Poster from "../Poster/Poster";

type Props = {
    title: string;
    year: string;
    runtime: string;
    genre: string;
    director: string;
    actors: string;
    plot: string;
    language: string;
    country: string;
    poster: string;
    imdbRating: string;
};

type RowInfo = {
    title: string;
    subtitle: string;
};

const setup = (props: Props) => {
    const renderer = createRenderer();
    renderer.render(<InfoBox {...props} />);
    const output = renderer.getRenderOutput();
    return { output, props, renderer };
};

const propsRender: Props = {
    title: "this title",
    year: "this year",
    runtime: "this runtime",
    genre: "this genre",
    director: "this director",
    actors: "this actors",
    plot: "this plot",
    language: "this language",
    country: "this country",
    poster: "this poster",
    imdbRating: "this imdbRating",
};

const infoData: { title: string; subtitle: string }[] = [
    { title: "Original title", subtitle: "this title" },
    { title: "Genre", subtitle: "this genge" },
];

describe("InfoBox Component", () => {
    describe("Render component and its components", () => {
        test("Should renders correctly", () => {
            const { output } = setup(propsRender);
            expect(output).toMatchSnapshot();
        });

        test("Should render container and has a movie class", () => {
            const { output } = setup(propsRender);
            expect(output.type).toBe("div");
            expect(output.props.className).toBe("infoBox");
        });

        test("Should render title and year and should have h2 tag", () => {
            const { output } = setup(propsRender);
            const [title] = output.props.children;
            expect(title.type).toBe("h2");
            expect(title.props.className).toBe("title");
            expect(title.props.children).toBe("this title (this year)");
        });

        describe("Block Content", () => {
            test("Should render description, check class", () => {
                const { output } = setup(propsRender);
                const [, , , desc] = output.props.children;
                expect(desc.props.children[1].type).toBe("p");
                expect(desc.props.children[1].props.className).toBe(
                    "description"
                );
            });

            test("Should render description text", () => {
                const { output } = setup(propsRender);
                const [, , , desc] = output.props.children;
                expect(desc.props.children[1].props.children).toBe("this plot");
            });

            test("Should not render description text if plot props = N/A", () => {
                const plotNotRender: Props = {
                    title: "this title",
                    year: "this year",
                    runtime: "this runtime",
                    genre: "this genre",
                    director: "this director",
                    actors: "this actors",
                    plot: "N/A",
                    language: "this language",
                    country: "this country",
                    poster: "this poster",
                    imdbRating: "this imdbRating",
                };
                const { output } = setup(plotNotRender);
                const [, , , desc] = output.props.children;
                expect(desc).toBe(null);
            });
        });

        describe("Block Content", () => {
            test("Should render content, check class", () => {
                const { output } = setup(propsRender);
                const [, , content] = output.props.children;
                expect(content.type).toBe("div");
                expect(content.props.className).toBe("content");
            });

            describe("Left Bar", () => {
                test("Should render left bar, check class", () => {
                    const { output } = setup(propsRender);
                    const [, , content] = output.props.children;
                    const [leftBar] = content.props.children;
                    expect(leftBar.type).toBe("div");
                    expect(leftBar.props.className).toBe("leftBar");
                });

                describe("Poster", () => {
                    const expectedProps = {
                        title: "this title",
                        poster: "this poster",
                    };
                    test("Should render and check props", () => {
                        const { output } = setup(propsRender);
                        const [, , content] = output.props.children;
                        const [leftBar] = content.props.children;

                        expect(leftBar.props.children.type).toBe(Poster);
                        expect(
                            deepEqual(
                                leftBar.props.children.props,
                                expectedProps
                            )
                        ).toBeTruthy();
                    });
                });
            });

            describe("Right Bar", () => {
                test("Should render right bar, check class", () => {
                    const { output } = setup(propsRender);
                    const [, , content] = output.props.children;
                    const [, rightBar] = content.props.children;
                    expect(rightBar.type).toBe("div");
                    expect(rightBar.props.className).toBe("rightBar");
                });

                test("Should render title in right bar, check class", () => {
                    const { output } = setup(propsRender);
                    const [, , content] = output.props.children;
                    const [, rightBar] = content.props.children;
                    const [, title] = rightBar.props.children;
                    expect(title.type).toBe("h3");
                    expect(title.props.className).toBe("titleScore");
                    expect(title.props.children).toBe("Total score:");
                });

                describe("renderRowInfo", () => {
                    test("Should render", () => {
                        
                        const { output } = setup(propsRender);
                        const [, , content] = output.props.children;
                        const [, rightBar] = content.props.children;
                        const [row, ,] = rightBar.props.children;
                        row.forEach((item: any, i: number) => {
                            expect(item.type).toBe(RowInfo);
                        });
                    });
                });

                describe("StarRatingComponent", () => {
                    test("Should render", () => {
                        const { output } = setup(propsRender);
                        const [, , content] = output.props.children;
                        const [, rightBar] = content.props.children;
                        const [, , star] = rightBar.props.children;
                        expect(star.type).toBe(StarRatingComponent);
                    });
                });
            });
        });
    });
});
