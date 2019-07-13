import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Widget } from "../index";

describe("<Widget />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Widget
        id="mock-widget"
        type="text"
        isLayoutEditable={false}
        options={{}}
        setOptionValue={() => null}
        data={{}}
        setDataValue={() => null}
        hasError={false}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find(".error")).toHaveLength(0);
    expect(wrapper.find(".bg-color-widget-dim")).toHaveLength(0);
  });

  it("renders errors", () => {
    wrapper.setProps({ hasError: true });
    expect(wrapper.find(".error")).toHaveLength(1);
  });

  it("renders overlay when editing", () => {
    wrapper.setProps({ isLayoutEditable: true });
    expect(wrapper.find(".bg-color-widget-dim")).toHaveLength(1);
  });
});
