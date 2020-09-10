import React from "react";
import { createRenderer } from "react-test-renderer/shallow";

import RowInfo from "./RowInfo";

type Props = {
  title: string;
  subtitle: string;
};

const setup = (props: Props) => {
  const renderer = createRenderer();
  renderer.render(<RowInfo {...props} />);
  const output = renderer.getRenderOutput();
  return { output, props };
};

const propsRender: Props = {
  title: "Title",
  subtitle: "Subtitle",
};

const propsNotRender: Props = {
  title: "Title",
  subtitle: "N/A",
};

describe("RowInfo Component", () => {
  describe("Render component and its components", () => {
    test("Should renders correctly", () => {
      const { output } = setup(propsRender);
      expect(output).toMatchSnapshot();
    });

    test("Should render subtitle class", () => {
      const { output } = setup(propsRender);
      const [title] = output.props.children;
      expect(title.props.className).toBe("title");
    });

    test("Should render text title", () => {
      const { output } = setup(propsRender);
      const [title] = output.props.children;
      expect(title.props.children).toBe("Title: ");
    });

    test("Should render subtitle class", () => {
      const { output } = setup(propsRender);
      const [, subtitle] = output.props.children;
      expect(subtitle.props.className).toBe("subtitle");
    });

    test("Should render text Subtitle", () => {
      const { output } = setup(propsRender);
      const [, subtitle] = output.props.children;
      expect(subtitle.props.children).toBe("Subtitle");
    });
  });

  describe("When a component is not rendered", () => {
    test("Should not render the component when the subtitle is 'N/A'", () => {
      const { output } = setup(propsNotRender);
      expect(output).toBe(null);
    });
  });
});
