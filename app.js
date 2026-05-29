const programs = [
  {
    name: "Bronx Community Pantry Network",
    category: "food",
    source: "Nonprofit verified",
    borough: "Bronx",
    zip: "10453",
    distance: 0.4,
    score: 94,
    x: 41,
    y: 24,
    summary: "Weekly groceries, SNAP navigation, and culturally familiar pantry bags near Morris Heights.",
  },
  {
    name: "HRA Rental Support Desk",
    category: "housing",
    source: "NYC Open Data",
    borough: "Bronx",
    zip: "10453",
    distance: 0.9,
    score: 91,
    x: 47,
    y: 31,
    summary: "Caseworker appointments for rent arrears, emergency grants, and benefit document review.",
  },
  {
    name: "DYCD After-School Explorer",
    category: "youth",
    source: "City agency",
    borough: "Bronx",
    zip: "10457",
    distance: 1.6,
    score: 86,
    x: 52,
    y: 40,
    summary: "Free after-school seats, family workshops, and summer bridge activities for students.",
  },
  {
    name: "NYC Aging Friendly Calls",
    category: "seniors",
    source: "NYC Aging",
    borough: "Citywide",
    zip: "10007",
    distance: 2.8,
    score: 78,
    x: 63,
    y: 52,
    summary: "Social connection, caregiver referrals, meal links, and senior center navigation.",
  },
  {
    name: "Neighborhood Health Action Clinic",
    category: "health",
    source: "DOH partner",
    borough: "Manhattan",
    zip: "10029",
    distance: 2.1,
    score: 82,
    x: 58,
    y: 48,
    summary: "Low-cost screenings, insurance enrollment help, mental health referrals, and vaccinations.",
  },
  {
    name: "Workforce1 Career Center Intake",
    category: "jobs",
    source: "SBS",
    borough: "Citywide",
    zip: "10018",
    distance: 5.4,
    score: 73,
    x: 70,
    y: 60,
    summary: "Resume help, training referrals, hiring events, and job placement support.",
  },
  {
    name: "Tenant Rights Legal Hotline",
    category: "legal",
    source: "Partner dataset",
    borough: "Citywide",
    zip: "11201",
    distance: 6.7,
    score: 76,
    x: 76,
    y: 71,
    summary: "Free legal screening for eviction, repairs, benefits disputes, and housing court questions.",
  },
  {
    name: "Civic Helpers Volunteer Hub",
    category: "volunteer",
    source: "Community listing",
    borough: "Queens",
    zip: "11368",
    distance: 7.2,
    score: 68,
    x: 81,
    y: 45,
    summary: "Find local mutual aid shifts, translation support opportunities, and neighborhood cleanups.",
  },
];

const categoryLabels = {
  food: "Food",
  health: "Health",
  seniors: "Seniors",
  youth: "Youth & families",
  jobs: "Jobs & workforce",
  housing: "Housing",
  legal: "Legal aid",
  volunteer: "Volunteer & civic",
};

const cards = document.querySelector("#cards");
const mapPins = document.querySelector("#map-pins");
const resultCount = document.querySelector("#result-count");
const resultContext = document.querySelector("#result-context");
const form = document.querySelector("#search-form");
const zipInput = document.querySelector("#zip-input");
const needInput = document.querySelector("#need-input");
const chips = document.querySelectorAll(".chip");
let activeCategory = "all";

function inferBoost(program, needText) {
  const need = needText.toLowerCase();
  const keywordMap = {
    food: ["food", "grocer", "meal", "snap", "pantry"],
    health: ["health", "doctor", "clinic", "mental", "insurance"],
    seniors: ["senior", "older", "caregiver", "aging"],
    youth: ["child", "school", "after-school", "family", "youth"],
    jobs: ["job", "work", "resume", "training", "career"],
    housing: ["rent", "housing", "eviction", "shelter", "arrears"],
    legal: ["legal", "court", "rights", "lawyer", "tenant"],
    volunteer: ["volunteer", "civic", "mutual aid", "help out"],
  };

  return keywordMap[program.category].some((keyword) => need.includes(keyword)) ? 9 : 0;
}

function getRankedPrograms() {
  const needText = needInput.value;
  return programs
    .map((program) => ({ ...program, adjustedScore: Math.min(program.score + inferBoost(program, needText), 99) }))
    .filter((program) => activeCategory === "all" || program.category === activeCategory)
    .sort((a, b) => b.adjustedScore - a.adjustedScore || a.distance - b.distance);
}

function render() {
  const rankedPrograms = getRankedPrograms();
  const zip = zipInput.value || "your ZIP";

  resultCount.textContent = `${rankedPrograms.length} ${rankedPrograms.length === 1 ? "match" : "matches"}`;
  resultContext.textContent = `near ${zip}`;

  cards.innerHTML = rankedPrograms
    .map(
      (program) => `
        <article class="program-card">
          <header>
            <h3>${program.name}</h3>
            <span class="badge">${categoryLabels[program.category]}</span>
          </header>
          <p>${program.summary}</p>
          <footer>
            <span class="score">${program.adjustedScore}% fit</span>
            <span>• ${program.distance.toFixed(1)} mi</span>
            <span>• ${program.borough}</span>
            <span>• ${program.source}</span>
          </footer>
        </article>
      `,
    )
    .join("");

  mapPins.innerHTML = programs
    .map((program) => {
      const visible = rankedPrograms.some((rankedProgram) => rankedProgram.name === program.name);
      return `<div class="pin ${visible ? "" : "dimmed"}" style="left:${program.x}%;top:${program.y}%" title="${program.name}"><span>${categoryLabels[program.category][0]}</span></div>`;
    })
    .join("");
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    activeCategory = chip.dataset.category;
    render();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  render();
});

render();
