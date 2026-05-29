import React from "https://esm.sh/react@19";
import { createRoot } from "https://esm.sh/react-dom@19/client";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "https://esm.sh/react-router-dom@7?deps=react@19,react-dom@19";

const { createElement: h, StrictMode } = React;

const HOMEFOR_DESCRIPTION =
  "Homefor NYC connects residents, caseworkers, and community organizations to nearby food, health, housing, legal, job, youth, senior, and civic services — all in one warm, citywide discovery layer.";

function TablerIcon({ children, className, size = 40, stroke = 1.7 }) {
  return h(
    "svg",
    {
      className,
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
    },
    children,
  );
}

function IconHomeHeart(props) {
  return h(
    TablerIcon,
    props,
    h("path", { d: "M5 12l-2 0l9 -9l9 9l-2 0" }),
    h("path", { d: "M5 12v7a2 2 0 0 0 2 2h5" }),
    h("path", { d: "M19 12v1" }),
    h("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2" }),
    h("path", {
      d: "M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 .006a2.143 2.143 0 0 0 .004 3.071l3.345 3.284z",
    }),
  );
}

function IconUsers(props) {
  return h(
    TablerIcon,
    props,
    h("path", { d: "M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }),
    h("path", { d: "M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" }),
    h("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }),
    h("path", { d: "M21 21v-2a4 4 0 0 0 -3 -3.85" }),
  );
}

function IconBuildingCommunity(props) {
  return h(
    TablerIcon,
    props,
    h("path", { d: "M8 9l5 0" }),
    h("path", { d: "M8 13l5 0" }),
    h("path", { d: "M8 17l5 0" }),
    h("path", { d: "M16 21l0 -14a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v14" }),
    h("path", { d: "M20 21l0 -10a2 2 0 0 0 -2 -2h-2" }),
    h("path", { d: "M4 21l16 0" }),
  );
}

function IconHeartHandshake(props) {
  return h(
    TablerIcon,
    props,
    h("path", { d: "M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.566" }),
    h("path", { d: "M12 6l-2 4l4 3l2 -3" }),
    h("path", { d: "M7 14l3 3" }),
  );
}

function Wordmark({ size = 32, as: Component = "span", to, className = "" }) {
  const content = h(
    "span",
    { className: "wordmark-text", style: { fontSize: `${size}px` }, "aria-label": "Homefor nyc" },
    h("span", { className: "wordmark-home" }, "Homefor"),
    " ",
    h("span", { className: "wordmark-nyc" }, "nyc"),
  );

  if (Component === Link) {
    return h(Link, { className: `wordmark-link ${className}`.trim(), to, "aria-label": "Homefor nyc home" }, content);
  }

  return h(Component, { className: `wordmark ${className}`.trim() }, content);
}

function HeroPage() {
  const navigate = useNavigate();

  return h(
    "main",
    { className: "hero-page", "aria-labelledby": "hero-title" },
    h(Wordmark, { size: 56 }),
    h("div", { className: "tagline-pill", id: "hero-title" }, "Find your way to a better life in New York"),
    h("p", { className: "hero-description" }, HOMEFOR_DESCRIPTION),
    h(
      "div",
      { className: "hero-actions", "aria-label": "Primary actions" },
      h(
        "button",
        { className: "button button-primary", type: "button", onClick: () => navigate("/get-started") },
        "Get started",
      ),
      h(
        "button",
        { className: "button button-secondary", type: "button", onClick: () => navigate("/map") },
        "View map",
      ),
    ),
  );
}

const audienceCards = [
  {
    icon: IconHomeHeart,
    title: "I need services",
    description: "Find food, health, housing, jobs, and more near you",
    to: "/intake",
  },
  {
    icon: IconUsers,
    title: "I support someone",
    description: "Help a resident, client, or family member find what they need",
    to: "/intake?mode=caseworker",
  },
  {
    icon: IconBuildingCommunity,
    title: "I represent an organization",
    description: "List your nonprofit or program on the Homefor map",
    to: "/list-org",
  },
  {
    icon: IconHeartHandshake,
    title: "I want to volunteer",
    description: "Discover local nonprofits looking for people like you",
    to: "/map?filter=volunteer",
  },
];

function AppShell({ children }) {
  return h(
    "div",
    { className: "app-shell" },
    h("header", { className: "inner-header" }, h(Wordmark, { size: 32, as: Link, to: "/" })),
    children,
  );
}

function GetStartedPage() {
  return h(
    AppShell,
    null,
    h(
      "main",
      { className: "choice-page", "aria-labelledby": "choice-title" },
      h(
        "section",
        { className: "choice-intro" },
        h("h1", { id: "choice-title" }, "Who are you today?"),
        h("p", null, "Choose what brings you here — we'll guide you from there."),
      ),
      h(
        "section",
        { className: "choice-grid", "aria-label": "Choose what brings you here" },
        audienceCards.map(({ icon: Icon, title, description, to }) =>
          h(
            Link,
            { className: "choice-card", to, key: title },
            h(Icon, { className: "choice-icon", size: 40, stroke: 1.7 }),
            h("h2", null, title),
            h("p", null, description),
          ),
        ),
      ),
      h(
        "p",
        { className: "map-nudge" },
        "Not sure? Start with the map ",
        h(Link, { to: "/map", "aria-label": "Start with the map" }, "→"),
      ),
    ),
  );
}

function ComingSoonPage({ label }) {
  return h(
    AppShell,
    null,
    h(
      "main",
      { className: "coming-soon", "aria-labelledby": "coming-soon-title" },
      h("p", { className: "coming-eyebrow" }, label),
      h("h1", { id: "coming-soon-title" }, "coming soon"),
      h(Link, { className: "back-link", to: "/get-started" }, "Back to get started"),
    ),
  );
}

function App() {
  return h(
    BrowserRouter,
    null,
    h(
      Routes,
      null,
      h(Route, { path: "/", element: h(HeroPage) }),
      h(Route, { path: "/get-started", element: h(GetStartedPage) }),
      h(Route, { path: "/map", element: h(ComingSoonPage, { label: "Map" }) }),
      h(Route, { path: "/intake", element: h(ComingSoonPage, { label: "Intake" }) }),
      h(Route, { path: "/list-org", element: h(ComingSoonPage, { label: "List an organization" }) }),
    ),
  );
}

createRoot(document.getElementById("root")).render(h(StrictMode, null, h(App)));
