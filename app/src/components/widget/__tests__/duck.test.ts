import get from "lodash/get";

import { importState } from "common/ducks/state";
import { stateProps } from "common/utils/mock";

import {
  reducerWithInitialState,
  actionCreators,
  createWidget,
  removeWidget,
  Widget,
} from "../duck";

const initialState = {
  "date-time-01": {
    type: "date-time",
    options: {},
    data: {},
    meta: {},
  },
} as Record<string, Widget>;

describe("Widget duck", () => {
  test("updates the widget's option value", () => {
    const updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.setOptions({
        id: "date-time-01",
        values: { content: "mock" },
      })
    );

    expect(get(updatedState, "date-time-01.options.content")).toEqual("mock");
  });

  test("updates the widget's data value", () => {
    const updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.setData({
        id: "date-time-01",
        values: { content: "mock" },
      })
    );

    expect(get(updatedState, "date-time-01.data.content")).toEqual("mock");
  });

  test("creates and removes a widget", () => {
    let updatedState = reducerWithInitialState()(
      initialState,
      createWidget({
        id: "date-time-01",
        type: "date-time",
      })
    );

    expect(get(updatedState, "date-time-01.data")).toBeDefined();

    updatedState = reducerWithInitialState()(
      initialState,
      removeWidget("date-time-01")
    );
    expect(get(updatedState, "date-time-01.data")).toBeUndefined();
  });

  test("imports the state", () => {
    const widgets = {
      "search-01": {
        type: "search",
        options: {},
        data: {},
        meta: {},
      },
    } as Record<string, Widget>;

    const updatedState = reducerWithInitialState()(
      initialState,
      importState({
        ...stateProps,
        widgets,
      })
    );

    expect(updatedState).toEqual(widgets);
  });

  test("resets data for widgets that update themselves", () => {
    const textWidget = {
      "text-01": {
        type: "text",
        data: {
          content:
            "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.",
        },
        options: {},
        meta: {},
      },
    };

    const widgets = {
      // example widget without update handling
      ...textWidget,

      // example widget with update handling
      "github-stats-01": {
        type: "github-stats",
        data: {
          name: "darekkay/dashboard",
          stars: 73,
        },
        options: { query: "darekkay/dashboard" },
        meta: {
          updateCycle: { hours: 24 },
          updateStatus: "success",
          headlineIcon: "github",
          lastUpdated: 1619360156497,
        },
      },
    } as Record<string, Widget>;

    const updatedState = reducerWithInitialState()(
      initialState,
      importState({
        ...stateProps,
        widgets,
      })
    );

    expect(updatedState).toEqual({
      ...textWidget,
      "github-stats-01": {
        type: "github-stats",
        data: {},
        options: { query: "darekkay/dashboard" },
        meta: {
          updateCycle: { hours: 24 },
          updateStatus: "idle",
          headlineIcon: "github",
        },
      },
    });
  });
});
