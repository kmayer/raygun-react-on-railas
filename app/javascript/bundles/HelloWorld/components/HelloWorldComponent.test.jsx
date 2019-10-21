import React from "react";
import { shallow } from "enzyme";

import HelloWorld from "./HelloWorldComponent";

describe("HelloWorld", () => {
  it("says hello to world", () => {
    const updateNameMock = jest.fn();
    const wrapper = shallow(<HelloWorld updateName={updateNameMock} />);
    expect(wrapper.text()).toContain("Hello, World!");
  });

  it("says hello to the passed name", () => {
    const updateNameMock = jest.fn();
    const wrapper = shallow(
      <HelloWorld name="Bond" updateName={updateNameMock} />
    );
    expect(wrapper.text()).toContain("Hello, Bond!");
  });

  it("calls the updateName action", () => {
    const updateNameMock = jest.fn();
    const wrapper = shallow(
      <HelloWorld name="Bond" updateName={updateNameMock} />
    );
    wrapper
      .find("input#name")
      .simulate("change", { target: { value: "James Bond" } });

    expect(updateNameMock).toHaveBeenCalledWith("James Bond");
  });
});
