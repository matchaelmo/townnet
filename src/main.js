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

const TOWNNET_DESCRIPTION =
  "TownNet N.Y.C. connects residents, caseworkers, and community organizations to nearby food, health, housing, legal, job, youth, senior, and civic services — all in one warm, citywide discovery layer.";

const categories = [
  "All",
  "Food",
  "Health",
  "Housing",
  "Legal aid",
  "Jobs",
  "Seniors",
  "Youth & families",
  "Volunteer & civic",
];

const samplePrograms = [
  {
    name: "BronxWorks Food Pantry",
    organization: "BronxWorks",
    category: "Food",
    distance: "0.3 mi",
    description: "Free groceries and hot meals, no eligibility required.",
  },
  {
    name: "NYC Aging Senior Center",
    organization: "NYC Aging",
    category: "Seniors",
    distance: "0.6 mi",
    description: "Daily activities, fitness, and hot lunch for adults 60+.",
  },
  {
    name: "Workforce1 Career Center",
    organization: "Workforce1",
    category: "Jobs",
    distance: "1.1 mi",
    description: "Free job placement and resume help for NYC residents.",
  },
  {
    name: "Legal Aid Society",
    organization: "The Legal Aid Society",
    category: "Legal aid",
    distance: "1.4 mi",
    description: "Free legal services for low-income New Yorkers.",
  },
];

function getRouterBasename() {
  if (window.location.hostname.endsWith("github.io")) {
    const [repoName] = window.location.pathname.split("/").filter(Boolean);
    return repoName ? `/${repoName}` : "";
  }

  return "";
}

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

function IconMapPin(props) {
  return h(
    TablerIcon,
    props,
    h("path", { d: "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }),
    h("path", { d: "M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" }),
  );
}

function Wordmark({ townSize = 34, nycSize = 38, as: Component = "span", to, className = "" }) {
  const content = h(
    "span",
    { className: "wordmark-text", "aria-label": "TownNet N.Y.C." },
    h("span", { className: "wordmark-town", style: { fontSize: `${townSize}px` } }, "TownNet"),
    h("span", { className: "wordmark-nyc", style: { fontSize: `${nycSize}px` } }, "N.Y.C."),
  );

  if (Component === Link) {
    return h(Link, { className: `wordmark-link ${className}`.trim(), to, "aria-label": "TownNet N.Y.C. home" }, content);
  }

  return h(Component, { className: `wordmark ${className}`.trim() }, content);
}

function HeroPage() {
  const navigate = useNavigate();

  return h(
    "main",
    { className: "hero-page", "aria-labelledby": "hero-title" },
    h(Wordmark, { townSize: 68, nycSize: 72, className: "hero-wordmark" }),
    h(
      "section",
      { className: "hero-card", "aria-labelledby": "hero-title" },
      h("h1", { id: "hero-title" }, "Find your way to a better life in New York"),
      h("div", { className: "hero-divider", "aria-hidden": "true" }),
      h("p", { className: "hero-description" }, TOWNNET_DESCRIPTION),
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
    description: "List your nonprofit or program on the TownNet map",
    to: "/list-org",
  },
  {
    icon: IconHeartHandshake,
    title: "I want to volunteer",
    description: "Discover local nonprofits looking for people like you",
    to: "/map?filter=volunteer",
  },
];

function AppShell({ children, className = "" }) {
  return h(
    "div",
    { className: `app-shell ${className}`.trim() },
    h("header", { className: "inner-header" }, h(Wordmark, { townSize: 34, nycSize: 38, as: Link, to: "/" })),
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

function MapPage() {
  return h(
    AppShell,
    { className: "map-shell" },
    h(
      "main",
      { className: "map-page", "aria-labelledby": "map-title" },
      h(
        "section",
        { className: "map-controls", "aria-labelledby": "map-title" },
        h("div", { className: "map-heading" }, h("h1", { id: "map-title" }, "Find services near you"), h("p", null, "Search city programs, nonprofits, and community services across New York City.")),
        h(
          "form",
          { className: "search-bar", onSubmit: (event) => event.preventDefault() },
          h("input", { type: "search", placeholder: "Search programs, services, or organizations…", "aria-label": "Search programs, services, or organizations" }),
          h("input", { className: "zip-input", inputMode: "numeric", placeholder: "ZIP code", "aria-label": "ZIP code" }),
          h("button", { type: "submit" }, "Search"),
        ),
        h(
          "div",
          { className: "category-pills", "aria-label": "Service categories" },
          categories.map((category, index) =>
            h(
              "button",
              { className: `category-pill ${index === 0 ? "is-active" : ""}`.trim(), type: "button", key: category },
              category,
            ),
          ),
        ),
      ),
      h(
        "section",
        { className: "map-layout", "aria-label": "Map and program results" },
        h(
          "div",
          { className: "map-placeholder" },
          h(IconMapPin, { size: 48, stroke: 1.6 }),
          h("p", null, "Map coming in Phase 4 — Mapbox integration"),
        ),
        h(
          "aside",
          { className: "program-panel", "aria-label": "Sample program results" },
          h(
            "div",
            { className: "program-list" },
            samplePrograms.map((program) => h(ProgramCard, { program, key: program.name })),
          ),
          h("button", { className: "full-map-button", type: "button" }, "View full map"),
        ),
      ),
    ),
  );
}

function ProgramCard({ program }) {
  return h(
    "article",
    { className: "program-card" },
    h(
      "div",
      { className: "program-card-header" },
      h("div", null, h("h2", null, program.name), h("p", { className: "program-org" }, program.organization)),
      h("span", { className: "distance-badge" }, program.distance),
    ),
    h("span", { className: `category-badge category-${program.category.toLowerCase().replaceAll(" ", "-")}` }, program.category),
    h("p", { className: "program-description" }, program.description),
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
    { basename: getRouterBasename() },
    h(
      Routes,
      null,
      h(Route, { path: "/", element: h(HeroPage) }),
      h(Route, { path: "/get-started", element: h(GetStartedPage) }),
      h(Route, { path: "/map", element: h(MapPage) }),
      h(Route, { path: "/intake", element: h(ComingSoonPage, { label: "Intake" }) }),
      h(Route, { path: "/list-org", element: h(ComingSoonPage, { label: "List an organization" }) }),
      h(Route, { path: "*", element: h(HeroPage) }),
    ),
  );
}

createRoot(document.getElementById("root")).render(h(StrictMode, null, h(App)));
