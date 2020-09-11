import React from "react";
import { createRenderer } from "react-test-renderer/shallow";

import Spiner from "./Spinner";

const setup = () => {
  const renderer = createRenderer();
  renderer.render(<Spiner />);
  const output = renderer.getRenderOutput();
  return output;
};

describe("Spinner Component", () => {
  test("Should renders correctly", () => {
    const output = setup();
    expect(output).toMatchSnapshot();
  });

  test("Should render wrapSpinner class", () => {
    const output = setup();
    expect(output.props.className).toBe("wrapSpinner");
  });

  test("Should render spinner class", () => {
    const output = setup();
    const spinner = output.props.children;
    expect(spinner.props.className).toBe("spinner");
  });
});
