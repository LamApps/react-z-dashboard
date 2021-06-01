import React from "react";
import { render, screen } from "@testing-library/react";

import { widgetProps } from "common/utils/mock";

import Chart from "../index";

export const data = [
  {
    x: "2020-04-19",
    y: 376,
  },
] as const;

const commonProps = {
  ...widgetProps,
  url: "https://example.com",
  dataPath: "",
  dataKeyX: "",
  dataKeyY: "",
};

describe("<Chart />", () => {
  test("renders without errors", () => {
    render(<Chart {...commonProps} data={data} dataPath="data" />);
    expect(
      screen.queryByText("widget.common.unconfigured")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("widget.chart.error.noArrayData")
    ).not.toBeInTheDocument();
  });

  test("renders a loading indicator while fetching data", () => {
    render(
      <Chart
        {...commonProps}
        data={data}
        dataPath="unknownDataPath"
        meta={{ updateCycle: { hours: 1 }, updateStatus: "pending" }}
      />
    );
    expect(screen.getByLabelText("common.loading")).toBeInTheDocument();
  });

  test("doesn't render if the url is missing", () => {
    render(<Chart {...commonProps} url="" />);
    expect(screen.getByText("widget.common.unconfigured")).toBeInTheDocument();
  });

  test("doesn't render if the dataPath is missing", () => {
    render(<Chart {...commonProps} dataPath="" />);
    expect(screen.getByText("widget.common.unconfigured")).toBeInTheDocument();
  });

  test("renders an error if the configured data is not an array", () => {
    render(
      <Chart
        {...commonProps}
        data={{
          data: true,
        }}
        dataPath="data"
      />
    );
    expect(
      screen.getByText("widget.chart.error.noArrayData")
    ).toBeInTheDocument();
  });
});
