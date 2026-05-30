import React from "https://esm.sh/react@19";
import { createRoot } from "https://esm.sh/react-dom@19/client";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "https://esm.sh/react-router-dom@7?deps=react@19,react-dom@19";
import { COPY } from "./constants.js";

const { createElement: h, StrictMode, useState } = React;

const categoryIconMap = {
  food: IconApple,
  health: IconHeart,
  housing: IconHome,
  legal: IconScale,
  jobs: IconBriefcase,
  seniors: IconUsers,
  youth: IconSchool,
  volunteer: IconHeartHandshake,
};

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

function IconX(props) {
  return h(TablerIcon, props, h("path", { d: "M18 6l-12 12" }), h("path", { d: "M6 6l12 12" }));
}

function IconArrowRight(props) {
  return h(TablerIcon, props, h("path", { d: "M5 12h14" }), h("path", { d: "M13 18l6 -6" }), h("path", { d: "M13 6l6 6" }));
}

export function ScoutMascot({ size = 120, className = "" }) {
  return h("img", {
    className: `scout-mascot ${className}`.trim(),
    src: "./src/assets/scout.svg",
    alt: COPY.scout.mascotAlt,
    style: { width: `${size}px`, height: `${size}px` },
  });
}

function getCategoryDefinition(categoryKey) {
  return COPY.categories.find((category) => category.key === categoryKey) ?? COPY.categories[0];
}

function getCategoryIcon(categoryKey) {
  return categoryIconMap[categoryKey] ?? IconMapPin;
}

function Wordmark({ townSize = 28, nycSize = 30, as: Component = "span", to, className = "" }) {
  const content = h(
    "span",
    { className: "wordmark-text", "aria-label": COPY.brand.aria },
    h("span", { className: "wordmark-town", style: { fontSize: `${townSize}px` } }, COPY.brand.town),
    h("span", { className: "wordmark-nyc", style: { fontSize: `${nycSize}px` } }, COPY.brand.nyc),
  );

  if (Component === Link) {
    return h(Link, { className: `wordmark-link ${className}`.trim(), to, "aria-label": COPY.brand.homeAria }, content);
  }

  return h(Component, { className: `wordmark ${className}`.trim() }, content);
}

function Footer() {
  return h(
    "footer",
    { className: "site-footer" },
    h(Wordmark, { townSize: 20, nycSize: 22, className: "footer-wordmark" }),
    h(
      "nav",
      { "aria-label": "Footer links" },
      COPY.footer.links.map((label, index) =>
        h(React.Fragment, { key: label }, index > 0 ? " · " : "", h("a", { href: "#" }, label)),
      ),
    ),
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
      h(Wordmark, { townSize: 72, nycSize: 78, className: "hero-wordmark" }),
      h(
        "section",
        { className: "hero-card", "aria-labelledby": "hero-title" },
        h("h1", { id: "hero-title" }, COPY.hero.title),
        h("div", { className: "hero-divider", "aria-hidden": "true" }),
        h("p", { className: "hero-description" }, COPY.hero.description),
        h(
          "div",
          { className: "hero-actions", "aria-label": "Primary actions" },
          h("button", { className: "button button-primary", type: "button", onClick: () => navigate("/get-started") }, COPY.hero.getStarted),
          h("button", { className: "button button-secondary", type: "button", onClick: () => navigate("/map") }, COPY.hero.viewMap),
        ),
      ),
    ),
    h(Footer),
  );
}

function ScoutGreetingPage() {
  const navigate = useNavigate();

  return h(
    "div",
    { className: "page-shell scout-shell" },
    h(
      "main",
      { className: "scout-page", "aria-labelledby": "scout-title" },
      h(Wordmark, { townSize: 72, nycSize: 78, className: "hero-wordmark" }),
      h(ScoutMascot, { size: 120, className: "scout-page-mascot" }),
      h(
        "section",
        { className: "scout-card", "aria-labelledby": "scout-title" },
        h(ScoutMascot, { size: 100, className: "scout-card-mascot" }),
        h("h1", { id: "scout-title" }, COPY.scout.title),
        h("p", { className: "scout-prompt" }, COPY.scout.prompt),
        h(
          "form",
          { className: "scout-input-bar", onSubmit: (event) => event.preventDefault() },
          h("input", { type: "text", placeholder: COPY.scout.inputPlaceholder, "aria-label": COPY.scout.inputPlaceholder }),
          h("button", { type: "submit", "aria-label": COPY.scout.sendAria }, h(IconArrowRight, { size: 20, stroke: 2.2 })),
        ),
        h("div", { className: "scout-divider" }, h("span", null, COPY.scout.divider)),
        h(
          "div",
          { className: "scout-actions" },
          h("button", { className: "button button-primary scout-button", type: "button", onClick: () => navigate("/intake") }, COPY.scout.servicesButton),
          h("button", { className: "button button-secondary scout-button", type: "button", onClick: () => navigate("/map?filter=volunteer") }, COPY.scout.volunteerButton),
          h("button", { className: "button button-green-outline scout-button", type: "button", onClick: () => navigate("/map") }, COPY.scout.mapButton),
        ),
      ),
    ),
    h(Footer),
  );
}

function MapPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const groupedPrograms = groupProgramsByOrganization(COPY.programs);

  return h(
    "div",
    { className: "map-viewport-shell" },
    h(
      "main",
      { className: "map-viewport", "aria-labelledby": "map-title" },
      h(
        "section",
        { className: "map-floating-bar", "aria-labelledby": "map-title" },
        h("div", { className: "map-brand-row" }, h(Wordmark, { townSize: 28, nycSize: 30, as: Link, to: "/" }), h("h1", { id: "map-title" }, COPY.map.title)),
        h(
          "form",
          { className: "search-bar", onSubmit: (event) => event.preventDefault() },
          h("input", { type: "search", placeholder: COPY.map.searchPlaceholder, "aria-label": COPY.map.searchPlaceholder }),
          h("input", { className: "zip-input", inputMode: "numeric", placeholder: COPY.map.zipPlaceholder, "aria-label": COPY.map.zipPlaceholder }),
          h("button", { type: "submit" }, COPY.map.searchButton),
        ),
        h(
          "div",
          { className: "category-pills", "aria-label": COPY.map.categoryAria },
          COPY.categories.map(({ key, label, color }, index) => {
            const Icon = getCategoryIcon(key);
            return h("button", { className: `category-pill ${index === 0 ? "is-active" : ""}`.trim(), style: { "--category-color": color }, type: "button", key }, h(Icon, { size: 18 }), label);
          }),
        ),
      ),
      h("div", { className: "map-canvas", "aria-label": COPY.map.mapResultsAria }, h(IconMapPin, { size: 56, stroke: 1.6 }), h("p", null, COPY.map.mapPlaceholder)),
      h(
        "aside",
        { className: "map-sidebar", "aria-label": COPY.map.sidebarAria },
        h(
          "div",
          { className: "sidebar-scroll" },
          groupedPrograms.map(({ organization, verified, programs }) =>
            h(
              "section",
              { className: "organization-group", key: organization },
              h("div", { className: "organization-header" }, h("h2", null, organization), verified ? h("span", { className: "verified-badge" }, COPY.map.verified) : null),
              programs.map((program) => h(ProgramCard, { program, key: program.id, onSelect: setSelectedProgram })),
            ),
          ),
        ),
      ),
      h(ProgramDetailOverlay, { program: selectedProgram, onClose: () => setSelectedProgram(null) }),
    ),
    h(Footer),
  );
}

function groupProgramsByOrganization(programs) {
  const groups = [];
  programs.forEach((program) => {
    let group = groups.find((item) => item.organization === program.organization);
    if (!group) {
      group = { organization: program.organization, verified: program.organizationVerified, programs: [] };
      groups.push(group);
    }
    group.programs.push(program);
  });
  return groups;
}

function CategoryBadge({ program }) {
  const category = getCategoryDefinition(program.categoryKey);
  const Icon = getCategoryIcon(program.categoryKey);

  return h(
    "span",
    { className: "category-badge", style: { "--category-color": category.color } },
    h(Icon, { size: 14, stroke: 2 }),
    program.category,
  );
}

function ProgramCard({ program, onSelect }) {
  return h(
    "article",
    { className: "program-card" },
    h("div", { className: "program-card-header" }, h("div", null, h("h3", null, program.name), h("p", { className: "program-card-full-name" }, program.fullName)), h("span", { className: "distance-badge" }, program.distance)),
    h(CategoryBadge, { program }),
    h("p", { className: "program-description" }, program.description),
    h("button", { className: "next-step-button", type: "button", onClick: () => onSelect(program) }, COPY.map.nextStep),
  );
}

function ProgramDetailOverlay({ program, onClose }) {
  const activeProgram = program ?? COPY.programs[0];

  return h(
    "section",
    { className: `program-detail-overlay ${program ? "is-open" : ""}`.trim(), "aria-hidden": program ? "false" : "true", "aria-labelledby": "program-detail-title" },
    h("button", { className: "close-detail-button", type: "button", onClick: onClose, "aria-label": COPY.map.closeDetail }, h(IconX, { size: 22 })),
    h("h2", { id: "program-detail-title" }, activeProgram.fullName),
    h("p", { className: "detail-org" }, activeProgram.organization),
    h(
      "div",
      { className: "detail-badges", "aria-label": COPY.detail.summaryAria },
      h(CategoryBadge, { program: activeProgram }),
      h("span", { className: "detail-badge" }, activeProgram.cost),
      h("span", { className: "detail-badge" }, activeProgram.distance),
    ),
    h("div", { className: "detail-divider", "aria-hidden": "true" }),
    h("p", { className: "detail-description" }, activeProgram.description),
    h(
      "section",
      { className: "detail-rows", "aria-label": COPY.detail.detailsAria },
      h(DetailRow, { icon: IconClock, label: COPY.detail.rows.hours, text: activeProgram.hours }),
      h(DetailRow, { icon: IconLanguage, label: COPY.detail.rows.languages, text: activeProgram.languages }),
      h(DetailRow, { icon: IconChecklist, label: COPY.detail.rows.eligibility, text: activeProgram.eligibility }),
      h(DetailRow, { icon: IconMapPin, label: COPY.detail.rows.address, text: activeProgram.address }),
    ),
    h("button", { className: "detail-next-button", type: "button" }, COPY.map.nextStep),
  );
}

function DetailRow({ icon: Icon, label, text }) {
  return h("div", { className: "detail-row" }, h(Icon, { size: 22 }), h("div", null, h("h3", null, label), h("p", null, text)));
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
        h("h1", { id: "list-title" }, COPY.listOrg.title),
        h("p", { className: "form-subtitle" }, COPY.listOrg.subtitle),
        h(
          "form",
          { className: "org-form", onSubmit: (event) => event.preventDefault() },
          h(FormField, { id: "organization-name", label: COPY.listOrg.fields.organizationName }),
          h(FormField, { id: "mission", label: COPY.listOrg.fields.mission, type: "textarea", rows: 3 }),
          h(CheckboxGroup, { legend: COPY.listOrg.fields.focusAreas, name: "focus", options: COPY.categories.map(({ label }) => label) }),
          h(CheckboxGroup, { legend: COPY.listOrg.fields.boroughsServed, name: "boroughs", options: COPY.listOrg.boroughs }),
          h(FormField, { id: "languages", label: COPY.listOrg.fields.languagesOffered }),
          h(FormField, { id: "hours", label: COPY.listOrg.fields.hours }),
          h(FormField, { id: "website", label: COPY.listOrg.fields.website, type: "url" }),
          h(FormField, { id: "contact-email", label: COPY.listOrg.fields.contactEmail, type: "email" }),
          h(FormField, { id: "phone", label: COPY.listOrg.fields.phoneNumber, type: "tel" }),
          h("button", { className: "submit-review-button", type: "submit" }, COPY.listOrg.submit),
          h("p", { className: "review-note" }, COPY.listOrg.reviewNote),
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

function ComingSoonPage() {
  return h(
    PageShell,
    null,
    h(
      "main",
      { className: "coming-soon", "aria-labelledby": "coming-soon-title" },
      h("p", { className: "coming-eyebrow" }, COPY.comingSoon.intake),
      h("h1", { id: "coming-soon-title" }, COPY.comingSoon.title),
      h(Link, { className: "back-link", to: "/get-started" }, COPY.comingSoon.back),
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
      h(Route, { path: "/get-started", element: h(ScoutGreetingPage) }),
      h(Route, { path: "/map", element: h(MapPage) }),
      h(Route, { path: "/intake", element: h(ComingSoonPage) }),
      h(Route, { path: "/list-org", element: h(ListOrgPage) }),
      h(Route, { path: "*", element: h(HeroPage) }),
    ),
  );
}

createRoot(document.getElementById("root")).render(h(StrictMode, null, h(App)));
