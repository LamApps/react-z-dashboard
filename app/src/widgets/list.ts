/** AUTOGENERATED (yarn scan:widgets) **/
import { WidgetProperties, WidgetImports } from "widgets";

export type WidgetType =
  | "chart"
  | "counter"
  | "cryptocurrencies"
  | "date-time"
  | "github-stats"
  | "image"
  | "qr-code"
  | "random-image"
  | "search"
  | "text"
  | "totd-chemical-elements"
  | "totd-world-countries"
  | "twitter-stats"
  | "website"
  | "youtube-stats";

const widgetProperties = {
  chart: {
    configurable: true,
    widgetType: "chart",
    category: "tracking",
    initialHeight: 3,
    initialWidth: 7,
    initialOptions: { headline: "" },
    initialMeta: { updateCycle: { hours: 24 }, updateStatus: "idle" },
  },
  counter: {
    configurable: true,
    widgetType: "counter",
    category: "tracking",
    initialHeight: 2,
    initialWidth: 2,
    initialOptions: { headline: "" },
    initialMeta: {},
  },
  cryptocurrencies: {
    configurable: true,
    widgetType: "cryptocurrencies",
    category: "monitoring",
    initialHeight: 2,
    initialWidth: 3,
    initialOptions: { fiat: "eur", crypto: "bitcoin" },
    initialMeta: { updateCycle: { minutes: 15 }, updateStatus: "idle" },
  },
  "date-time": {
    configurable: true,
    widgetType: "date-time",
    category: "general",
    initialHeight: 2,
    initialWidth: 3,
    initialOptions: { headline: "", timezone: "auto" },
    initialMeta: {},
  },
  "github-stats": {
    configurable: true,
    widgetType: "github-stats",
    category: "monitoring",
    initialHeight: 3,
    initialWidth: 3,
    initialOptions: {},
    initialMeta: {
      updateCycle: { hours: 24 },
      updateStatus: "idle",
      headlineIcon: "github",
    },
  },
  image: {
    configurable: true,
    widgetType: "image",
    category: "media",
    initialHeight: 4,
    initialWidth: 4,
    initialOptions: { url: "" },
    initialMeta: {},
  },
  "qr-code": {
    configurable: true,
    widgetType: "qr-code",
    category: "tools",
    initialHeight: 2,
    initialWidth: 2,
    initialOptions: { headline: "", content: "" },
    initialMeta: {},
  },
  "random-image": {
    configurable: false,
    widgetType: "random-image",
    category: "media",
    initialHeight: 4,
    initialWidth: 6,
    initialOptions: {},
    initialMeta: { updateCycle: { hours: 24 }, updateStatus: "idle" },
  },
  search: {
    configurable: true,
    widgetType: "search",
    category: "tools",
    initialHeight: 2,
    initialWidth: 4,
    initialOptions: {
      title: "DuckDuckGo",
      pattern: "https://duckduckgo.com/?q=%s",
    },
    initialMeta: {},
  },
  text: {
    configurable: false,
    widgetType: "text",
    category: "general",
    initialHeight: 4,
    initialWidth: 4,
    initialOptions: {},
    initialMeta: {},
  },
  "totd-chemical-elements": {
    configurable: false,
    widgetType: "totd-chemical-elements",
    category: "knowledge",
    initialHeight: 2,
    initialWidth: 2,
    initialOptions: {},
    initialMeta: { updateCycle: { hours: 24 }, updateStatus: "idle" },
  },
  "totd-world-countries": {
    configurable: false,
    widgetType: "totd-world-countries",
    category: "knowledge",
    initialHeight: 4,
    initialWidth: 4,
    initialOptions: {},
    initialMeta: { updateCycle: { hours: 24 }, updateStatus: "idle" },
  },
  "twitter-stats": {
    configurable: true,
    widgetType: "twitter-stats",
    category: "monitoring",
    initialHeight: 3,
    initialWidth: 3,
    initialOptions: {},
    initialMeta: {
      updateCycle: { hours: 24 },
      updateStatus: "idle",
      headlineIcon: "twitter",
    },
  },
  website: {
    configurable: true,
    widgetType: "website",
    category: "media",
    initialHeight: 5,
    initialWidth: 5,
    initialOptions: { url: "" },
    initialMeta: {},
  },
  "youtube-stats": {
    configurable: true,
    widgetType: "youtube-stats",
    category: "monitoring",
    initialHeight: 3,
    initialWidth: 3,
    initialOptions: {},
    initialMeta: {
      updateCycle: { hours: 24 },
      updateStatus: "idle",
      headlineIcon: "youtube",
    },
  },
} as Record<WidgetType, WidgetProperties>;
export default widgetProperties;

export const widgetImports = {
  chart: {
    component: async () => import("widgets/chart"),
    configuration: async () => import("widgets/chart/configuration"),
  },
  counter: {
    component: async () => import("widgets/counter"),
    configuration: async () => import("widgets/counter/configuration"),
  },
  cryptocurrencies: {
    component: async () => import("widgets/cryptocurrencies"),
    configuration: async () => import("widgets/cryptocurrencies/configuration"),
  },
  "date-time": {
    component: async () => import("widgets/date-time"),
    configuration: async () => import("widgets/date-time/configuration"),
  },
  "github-stats": {
    component: async () => import("widgets/github-stats"),
    configuration: async () => import("widgets/github-stats/configuration"),
  },
  image: {
    component: async () => import("widgets/image"),
    configuration: async () => import("widgets/image/configuration"),
  },
  "qr-code": {
    component: async () => import("widgets/qr-code"),
    configuration: async () => import("widgets/qr-code/configuration"),
  },
  "random-image": {
    component: async () => import("widgets/random-image"),
  },
  search: {
    component: async () => import("widgets/search"),
    configuration: async () => import("widgets/search/configuration"),
  },
  text: {
    component: async () => import("widgets/text"),
  },
  "totd-chemical-elements": {
    component: async () => import("widgets/totd-chemical-elements"),
  },
  "totd-world-countries": {
    component: async () => import("widgets/totd-world-countries"),
  },
  "twitter-stats": {
    component: async () => import("widgets/twitter-stats"),
    configuration: async () => import("widgets/twitter-stats/configuration"),
  },
  website: {
    component: async () => import("widgets/website"),
    configuration: async () => import("widgets/website/configuration"),
  },
  "youtube-stats": {
    component: async () => import("widgets/youtube-stats"),
    configuration: async () => import("widgets/youtube-stats/configuration"),
  },
} as Record<WidgetType, WidgetImports>;

export const initialMeta = (widgetType: WidgetType) =>
  widgetProperties[widgetType].initialMeta;
