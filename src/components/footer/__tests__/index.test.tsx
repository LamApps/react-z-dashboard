import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Footer from "../index";

describe("<Footer />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Footer isLayoutEditable={false} toggleLayoutEditable={() => null} />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find("footer")).toHaveLength(1);
  });
});