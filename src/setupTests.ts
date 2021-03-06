// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

// import '@testing-library/jest-dom/extend-expect';

import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";

// @ts-expect-error
expect.addSnapshotSerializer(createSerializer({ mode: "deep", noKey: true }));
Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});
