import React from "react";

import { render, screen } from "common/testing";
import { WidgetProps } from "widgets";

import { Widget } from "../index";

describe("<Widget />", () => {
  const renderWidget = (props: Partial<WidgetProps>) =>
    render(
      <Widget
        id="mock-widget"
        type="text"
        options={{}}
        setOptions={() => null}
        data={{}}
        setData={() => null}
        meta={{}}
        triggerUpdate={() => {}}
        removeWidgetFromLayout={() => {}}
        {...props}
      />
    );

  test("renders without errors", () => {
    renderWidget({});
    expect(screen.queryByText("error.unknown")).not.toBeInTheDocument();
  });
});
