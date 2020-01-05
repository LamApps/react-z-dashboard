import _ from "lodash";

const widgets = {
  "date-time-01": {
    x: 0,
    y: 0,
    width: 2,
    height: 1,
    type: "date-time",
    data: {},
    options: {},
    meta: {}
  },
  "search-01": {
    x: 3,
    y: 0,
    width: 2,
    height: 1,
    type: "search",
    data: {},
    options: {
      pattern: "https://duckduckgo.com/?q=%s",
      title: "DuckDuckGo"
    },
    meta: {}
  },
  "text-01": {
    x: 3,
    y: 1,
    width: 2,
    height: 2,
    type: "text",
    data: {
      content:
        "Rule #1\n\nAlways code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."
    },
    options: {},
    meta: {}
  },
  "image-01": {
    x: 0,
    y: 1,
    width: 3,
    height: 2,
    type: "image",
    data: {},
    options: {
      url:
        "https://images.pexels.com/photos/162240/bull-calf-heifer-ko-162240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    meta: {}
  },
  "website-01": {
    x: 5,
    y: 0,
    width: 3,
    height: 3,
    type: "website",
    data: {},
    options: {
      url: "https://dashboard.darekkay.com/docs/"
    },
    meta: {}
  },
  "totd-chemical-elements-01": {
    x: 2,
    y: 0,
    width: 1,
    height: 1,
    type: "totd-chemical-elements",
    data: {},
    options: {},
    meta: {
      updateCycle: { hours: 24 }
    }
  }
};

export const initialWidgets = Object.entries(widgets).reduce(
  (acc, [key, widget], index) => ({
    ...acc,
    [key]: _.omit(widget, ["height", "width", "x", "y"])
  }),
  {}
);

export const initialLayout = {
  mobile: Object.entries(widgets).map(([key, widget], index) => ({
    i: key,
    x: 0,
    y: index,
    w: 1,
    h: widget.height
  })),

  desktop: Object.entries(widgets).map(([key, widget]) => ({
    i: key,
    x: widget.x,
    y: widget.y,
    w: widget.width,
    h: widget.height
  }))
};
