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

const categoryDefinitions = [
  { key: "food", label: "Food", color: "#e74c3c", icon: IconApple },
  { key: "health", label: "Health", color: "#3498db", icon: IconHeart },
  { key: "housing", label: "Housing", color: "#9b59b6", icon: IconHome },
  { key: "legal", label: "Legal", color: "#e67e22", icon: IconScale },
  { key: "jobs", label: "Jobs", color: "#f39c12", icon: IconBriefcase },
  { key: "seniors", label: "Seniors", color: "#1abc9c", icon: IconUsers },
  { key: "youth", label: "Youth", color: "#2ecc71", icon: IconSchool },
  { key: "volunteer", label: "Volunteer", color: "#e91e63", icon: IconHeartHandshake },
];

const programData = [
  {
    name: "BronxWorks Food Pantry",
    organization: "BronxWorks",
    category: "Food",
    categoryKey: "food",
    distance: "0.3 mi",
    borough: "Bronx",
    description: "Free groceries and hot meals, no eligibility required.",
    cost: "Free",
    hours: "Mon–Fri, 9:00 AM–5:00 PM",
    languages: "English, Spanish",
    eligibility: "Open to all New Yorkers. No appointment required.",
    address: "1130 Grand Concourse, Bronx, NY 10456",
  },
  {
    name: "NYC Aging Senior Center",
    organization: "NYC Aging",
    category: "Seniors",
    categoryKey: "seniors",
    distance: "0.6 mi",
    borough: "Bronx",
    description: "Daily activities, fitness, and hot lunch for adults 60+.",
    cost: "Free",
  },
  {
    name: "Workforce1 Career Center",
    organization: "Workforce1",
    category: "Jobs",
    categoryKey: "jobs",
    distance: "1.1 mi",
    borough: "Bronx",
    description: "Free job placement and resume help for NYC residents.",
    cost: "Free",
  },
  {
    name: "Legal Aid Society",
    organization: "The Legal Aid Society",
    category: "Legal",
    categoryKey: "legal",
    distance: "1.4 mi",
    borough: "Bronx",
    description: "Free legal services for low-income New Yorkers.",
    cost: "Free or Low-cost",
  },
];

const nonprofitFocusAreas = categoryDefinitions.map(({ label }) => label);
const boroughs = ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"];

function getRouterBasename() {
  if (window.location.hostname.endsWith("github.io")) {
    const [repoName] = window.location.pathname.split("/").filter(Boolean);
    return repoName ? `/${repoName}` : "";
  }

  return "";
}

function TablerIcon({ children, className, size = 20, stroke = 1.8 }) {
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

function IconApple(props) {
  return h(TablerIcon, props, h("path", { d: "M12 14.5c-3.5 -3 -7.5 -1.5 -7.5 2.5c0 3 2.5 5 5 5c1 0 1.8 -.3 2.5 -.8c.7 .5 1.5 .8 2.5 .8c2.5 0 5 -2 5 -5c0 -4 -4 -5.5 -7.5 -2.5z" }), h("path", { d: "M12 14.5v-6" }), h("path", { d: "M12 8.5c-1.5 -2 -3.5 -2.5 -5 -1.5" }), h("path", { d: "M12 8.5c1.5 -2 3.5 -2.5 5 -1.5" }));
}

function IconHeart(props) {
  return h(TablerIcon, props, h("path", { d: "M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.566" }));
}

function IconHome(props) {
  return h(TablerIcon, props, h("path", { d: "M5 12l-2 0l9 -9l9 9l-2 0" }), h("path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" }), h("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" }));
}

function IconScale(props) {
  return h(TablerIcon, props, h("path", { d: "M7 20l10 0" }), h("path", { d: "M6 6l6 -2l6 2" }), h("path", { d: "M12 3l0 17" }), h("path", { d: "M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" }), h("path", { d: "M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" }));
}

function IconBriefcase(props) {
  return h(TablerIcon, props, h("path", { d: "M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" }), h("path", { d: "M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" }), h("path", { d: "M12 12l0 .01" }), h("path", { d: "M3 13a20 20 0 0 0 18 0" }));
}

function IconUsers(props) {
  return h(TablerIcon, props, h("path", { d: "M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }), h("path", { d: "M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" }), h("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }), h("path", { d: "M21 21v-2a4 4 0 0 0 -3 -3.85" }));
}

function IconSchool(props) {
  return h(TablerIcon, props, h("path", { d: "M22 9l-10 -4l-10 4l10 4l10 -4v6" }), h("path", { d: "M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" }));
}

function IconHeartHandshake(props) {
  return h(TablerIcon, props, h("path", { d: "M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.566" }), h("path", { d: "M12 6l-2 4l4 3l2 -3" }), h("path", { d: "M7 14l3 3" }));
}

function IconMapPin(props) {
  return h(TablerIcon, props, h("path", { d: "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }), h("path", { d: "M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" }));
}

function IconClock(props) {
  return h(TablerIcon, props, h("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }), h("path", { d: "M12 7v5l3 3" }));
}

function IconLanguage(props) {
  return h(TablerIcon, props, h("path", { d: "M4 5h7" }), h("path", { d: "M9 3v2c0 4.418 -2.239 8 -5 8" }), h("path", { d: "M5 9c0 2.144 2.952 3.908 6.7 4" }), h("path", { d: "M12 20l4 -9l4 9" }), h("path", { d: "M19.1 18h-6.2" }));
}

function IconChecklist(props) {
  return h(TablerIcon, props, h("path", { d: "M9 11l3 3l8 -8" }), h("path", { d: "M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" }));
}

function IconBuildingCommunity(props) {
  return h(TablerIcon, props, h("path", { d: "M8 9l5 0" }), h("path", { d: "M8 13l5 0" }), h("path", { d: "M8 17l5 0" }), h("path", { d: "M16 21l0 -14a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v14" }), h("path", { d: "M20 21l0 -10a2 2 0 0 0 -2 -2h-2" }), h("path", { d: "M4 21l16 0" }));
}

function getCategoryDefinition(categoryKey) {
  return categoryDefinitions.find((category) => category.key === categoryKey) ?? categoryDefinitions[0];
}

function Wordmark({ townSize = 28, nycSize = 30, as: Component = "span", to, className = "" }) {
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

function Footer() {
  return h(
    "footer",
    { className: "site-footer" },
    h(Wordmark, { townSize: 20, nycSize: 22, className: "footer-wordmark" }),
    h("nav", { "aria-label": "Footer links" }, "Español · 中文 · Русский · About · Accessibility · For nonprofits"),
  );
}

function PageShell({ children, className = "", homeTo = "/" }) {
  return h(
    "div",
    { className: `page-shell ${className}`.trim() },
    h("header", { className: "inner-header" }, h(Wordmark, { townSize: 28, nycSize: 30, as: Link, to: homeTo })),
    children,
    h(Footer),
  );
}

function HeroPage() {
  const navigate = useNavigate();

  return h(
    "div",
    { className: "page-shell hero-shell" },
    h(
      "main",
      { className: "hero-page", "aria-labelledby": "hero-title" },
      h(Wordmark, { townSize: 64, nycSize: 68, className: "hero-wordmark" }),
      h(
        "section",
        { className: "hero-card", "aria-labelledby": "hero-title" },
        h("h1", { id: "hero-title" }, "Find your way to a better life in New York"),
        h("div", { className: "hero-divider", "aria-hidden": "true" }),
        h("p", { className: "hero-description" }, TOWNNET_DESCRIPTION),
        h(
          "div",
          { className: "hero-actions", "aria-label": "Primary actions" },
          h("button", { className: "button button-primary", type: "button", onClick: () => navigate("/get-started") }, "Get started"),
          h("button", { className: "button button-secondary", type: "button", onClick: () => navigate("/map") }, "View map"),
        ),
      ),
    ),
    h(Footer),
  );
}

const audienceCards = [
  {
    icon: IconHome,
    className: "resident-card",
    title: "I need services",
    description: "Find food, health, housing, jobs, and more near you",
    to: "/intake",
  },
  {
    icon: IconUsers,
    className: "caseworker-card",
    title: "I support someone",
    description: "Help a resident, client, or family member find what they need",
    to: "/intake?mode=caseworker",
  },
  {
    icon: IconBuildingCommunity,
    className: "organization-card",
    title: "I represent an organization",
    description: "List your nonprofit or program on the TownNet map",
    to: "/list-org",
  },
  {
    icon: IconHeartHandshake,
    className: "volunteer-card",
    title: "I want to volunteer",
    description: "Discover local nonprofits looking for people like you",
    to: "/map?filter=volunteer",
  },
];

function GetStartedPage() {
  return h(
    PageShell,
    null,
    h(
      "main",
      { className: "choice-page", "aria-labelledby": "choice-title" },
      h("section", { className: "choice-intro" }, h("h1", { id: "choice-title" }, "Who are you today?"), h("p", null, "Choose what brings you here — we'll guide you from there.")),
      h(
        "section",
        { className: "choice-grid", "aria-label": "Choose what brings you here" },
        audienceCards.map(({ icon: Icon, className, title, description, to }) =>
          h(Link, { className: `choice-card ${className}`, to, key: title }, h(Icon, { className: "choice-icon", size: 40, stroke: 1.7 }), h("h2", null, title), h("p", null, description)),
        ),
      ),
      h("p", { className: "map-nudge" }, "Not sure? Start with the map ", h(Link, { to: "/map", "aria-label": "Start with the map" }, "→")),
    ),
  );
}

function MapPage() {
  return h(
    PageShell,
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
          categoryDefinitions.map(({ key, label, color, icon: Icon }) =>
            h("button", { className: "category-pill", style: { "--category-color": color }, type: "button", key }, h(Icon, { size: 18 }), label),
          ),
        ),
      ),
      h(
        "section",
        { className: "map-layout", "aria-label": "Map and program results" },
        h("div", { className: "map-placeholder" }, h(IconMapPin, { size: 54, stroke: 1.6 }), h("p", null, "Map coming in Phase 4 — Mapbox integration")),
        h(
          "aside",
          { className: "program-panel", "aria-label": "Sample program results" },
          h("div", { className: "program-list" }, programData.map((program) => h(ProgramCard, { program, key: program.name }))),
        ),
      ),
    ),
  );
}

function CategoryBadge({ program }) {
  const category = getCategoryDefinition(program.categoryKey);
  const Icon = category.icon;

  return h(
    "span",
    { className: "category-badge", style: { "--category-color": category.color } },
    h(Icon, { size: 14, stroke: 2 }),
    program.category,
  );
}

function ProgramCard({ program }) {
  return h(
    "article",
    { className: "program-card" },
    h("div", { className: "program-card-header" }, h("div", null, h("h2", null, program.name), h("p", { className: "program-org" }, program.organization)), h("span", { className: "distance-badge" }, program.distance)),
    h(CategoryBadge, { program }),
    h("p", { className: "program-description" }, program.description),
    h(Link, { className: "next-step-button", to: "/program" }, "Take the next step"),
  );
}

function ProgramDetailPage() {
  const program = programData[0];

  return h(
    PageShell,
    { className: "program-shell", homeTo: "/map" },
    h(
      "main",
      { className: "detail-page", "aria-labelledby": "program-title" },
      h(
        "article",
        { className: "detail-card" },
        h("h1", { id: "program-title" }, program.name),
        h("p", { className: "detail-org" }, program.organization),
        h(
          "div",
          { className: "detail-badges", "aria-label": "Program summary" },
          h(CategoryBadge, { program }),
          h("span", { className: "detail-badge" }, program.cost),
          h("span", { className: "detail-badge" }, program.distance),
          h("span", { className: "detail-badge" }, program.borough),
        ),
        h("div", { className: "detail-divider", "aria-hidden": "true" }),
        h("p", { className: "detail-description" }, program.description),
        h(
          "section",
          { className: "detail-rows", "aria-label": "Program details" },
          h(DetailRow, { icon: IconClock, label: "Hours", text: program.hours }),
          h(DetailRow, { icon: IconLanguage, label: "Languages", text: program.languages }),
          h(DetailRow, { icon: IconChecklist, label: "Eligibility", text: program.eligibility }),
          h(DetailRow, { icon: IconMapPin, label: "Address", text: program.address }),
        ),
        h("button", { className: "detail-next-button", type: "button" }, "Take the next step"),
      ),
    ),
  );
}

function DetailRow({ icon: Icon, label, text }) {
  return h("div", { className: "detail-row" }, h(Icon, { size: 22 }), h("div", null, h("h2", null, label), h("p", null, text)));
}

function ListOrgPage() {
  return h(
    PageShell,
    { className: "list-shell" },
    h(
      "main",
      { className: "form-page", "aria-labelledby": "list-title" },
      h(
        "section",
        { className: "form-card" },
        h("h1", { id: "list-title" }, "Add your organization"),
        h("p", { className: "form-subtitle" }, "Free for all verified nonprofits and community organizations"),
        h(
          "form",
          { className: "org-form", onSubmit: (event) => event.preventDefault() },
          h(FormField, { id: "organization-name", label: "Organization name" }),
          h(FormField, { id: "mission", label: "Mission", type: "textarea", rows: 3 }),
          h(CheckboxGroup, { legend: "Focus areas", name: "focus", options: nonprofitFocusAreas }),
          h(CheckboxGroup, { legend: "Boroughs served", name: "boroughs", options: boroughs }),
          h(FormField, { id: "languages", label: "Languages offered" }),
          h(FormField, { id: "hours", label: "Hours" }),
          h(FormField, { id: "website", label: "Website", type: "url" }),
          h(FormField, { id: "contact-email", label: "Contact email", type: "email" }),
          h(FormField, { id: "phone", label: "Phone number", type: "tel" }),
          h("button", { className: "submit-review-button", type: "submit" }, "Submit for review"),
          h("p", { className: "review-note" }, "We verify 501(c)(3) status or city contract before listing. Usually reviewed within 3 business days."),
        ),
      ),
    ),
  );
}

function FormField({ id, label, type = "text", rows }) {
  return h("label", { className: "form-field", htmlFor: id }, h("span", null, label), type === "textarea" ? h("textarea", { id, rows }) : h("input", { id, type }));
}

function CheckboxGroup({ legend, name, options }) {
  return h(
    "fieldset",
    { className: "checkbox-group" },
    h("legend", null, legend),
    h(
      "div",
      { className: "checkbox-options" },
      options.map((option) =>
        h("label", { className: "checkbox-option", key: option }, h("input", { type: "checkbox", name, value: option }), h("span", null, option)),
      ),
    ),
  );
}

function ComingSoonPage({ label }) {
  return h(
    PageShell,
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
      h(Route, { path: "/program", element: h(ProgramDetailPage) }),
      h(Route, { path: "/intake", element: h(ComingSoonPage, { label: "Intake" }) }),
      h(Route, { path: "/list-org", element: h(ListOrgPage) }),
      h(Route, { path: "*", element: h(HeroPage) }),
    ),
  );
}

createRoot(document.getElementById("root")).render(h(StrictMode, null, h(App)));
