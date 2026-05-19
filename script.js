const streams = [
  {
    id: "finance",
    name: "Finance and Corporate Performance",
    tag: "Performance",
    roles: ["FP&A Analyst", "Commercial Finance Analyst", "Finance Business Partner", "Treasury Analyst", "Corporate Finance Analyst", "Valuations Analyst", "M&A Analyst", "CFO Pathway"],
    sa: "Vital in JSE-listed groups, retailers, telecoms, banks, mining houses, manufacturers and SMEs that need better planning, cash discipline and capital allocation.",
    global: "Portable into multinationals, corporate development teams, regional finance hubs and private companies.",
    fit: "People who like numbers, business performance, forecasts, margins, cash and decision support."
  },
  {
    id: "accounting",
    name: "Accounting, Audit and Assurance",
    tag: "Trust",
    roles: ["Financial Accountant", "Management Accountant", "External Auditor", "Internal Auditor", "Forensic Auditor", "Risk and Controls Specialist", "Financial Controller"],
    sa: "Supports trust, governance, audit quality, public confidence, investor reporting and stronger controls across private and public organisations.",
    global: "Transfers well through IFRS, audit firms, multinational finance teams and governance roles.",
    fit: "People who value accuracy, evidence, ethics, controls and reliable reporting."
  },
  {
    id: "tax",
    name: "Taxation and Regulatory Careers",
    tag: "Regulation",
    roles: ["Tax Consultant", "Tax Analyst", "VAT Specialist", "International Tax Specialist", "Transfer Pricing Analyst", "Tax Risk and Compliance Specialist"],
    sa: "Important for SARS compliance, VAT, corporate tax, cross-border groups, SMEs, public finance and responsible business behaviour.",
    global: "Useful in advisory firms, multinational tax teams, trade hubs and international structuring roles.",
    fit: "People who enjoy technical rules, careful interpretation, compliance and advisory work."
  },
  {
    id: "economics",
    name: "Economics, Policy and Research",
    tag: "Research",
    roles: ["Economist", "Economic Research Analyst", "Policy Analyst", "Market Research Analyst", "Trade Analyst", "Public Sector Economist"],
    sa: "Helps banks, retailers, government, DFIs, investors and public institutions interpret inflation, unemployment, interest rates, trade and growth.",
    global: "Transfers into think tanks, central banks, development institutions, consultancies, NGOs and market research teams.",
    fit: "People who enjoy research, policy, evidence, writing and big-picture economic questions."
  },
  {
    id: "markets",
    name: "Banking, Investment and Financial Markets",
    tag: "Capital",
    roles: ["Credit Analyst", "Investment Analyst", "Equity Research Analyst", "Portfolio Analyst", "Corporate Banking Analyst", "Private Equity Analyst", "Asset Management Analyst"],
    sa: "Supports banks, asset managers, pension funds, private equity, credit decisions, business funding and investment allocation.",
    global: "Portable into banks, funds, financial centres, family offices and investment research teams.",
    fit: "People who like markets, credit, valuation, investment decisions and financial risk."
  },
  {
    id: "impact",
    name: "Development Finance and Impact",
    tag: "Impact",
    roles: ["Development Finance Analyst", "Impact Investment Analyst", "ESG Analyst", "Sustainability Finance Analyst", "Infrastructure Finance Analyst", "Public Finance Analyst", "Grant and Donor Funding Analyst"],
    sa: "Connects directly to infrastructure, transformation, township economy, SME growth, climate resilience, public finance and social impact.",
    global: "Relevant to DFIs, NGOs, climate funds, foundations, impact investors and multilateral institutions.",
    fit: "People who care about development, sustainability, inclusive growth and bankable impact."
  },
  {
    id: "consulting",
    name: "Strategy, Consulting and Business Advisory",
    tag: "Advisory",
    roles: ["Strategy Analyst", "Management Consultant", "Business Analyst", "Transformation Analyst", "Operations Analyst", "Turnaround and Restructuring Analyst"],
    sa: "Helps companies, public entities and SMEs solve performance, operating model, turnaround, growth and transformation problems.",
    global: "Transfers into consulting firms, internal strategy teams, international NGOs and transformation offices.",
    fit: "People who enjoy problem solving, client work, ambiguity, presentations and business improvement."
  },
  {
    id: "digital",
    name: "Data, Digital Finance and Business Intelligence",
    tag: "Digital",
    roles: ["Finance Data Analyst", "BI Analyst", "Revenue Analyst", "Pricing Analyst", "Automation Analyst", "Digital Transformation Analyst", "AI in Finance Analyst"],
    sa: "Supports digital transformation, dashboarding, automation, pricing, analytics and better decisions across banks, retailers, telecoms and startups.",
    global: "Portable into tech-enabled finance teams, analytics hubs, SaaS businesses and multinational shared services.",
    fit: "People who like dashboards, systems, automation, patterns and data-informed decisions."
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship and Business Leadership",
    tag: "Build",
    roles: ["Entrepreneur", "Business Development Manager", "General Manager", "Operations Manager", "Founder-CFO Hybrid Pathway", "Business Unit Leader"],
    sa: "Important for SME growth, township economy, job creation, startups, family businesses and operational leadership.",
    global: "Relevant to startups, SMEs, scale-ups, franchises, social enterprises and corporate venture building.",
    fit: "People who like ownership, customers, growth, operations and building something practical."
  },
  {
    id: "public",
    name: "Public Sector, Governance and Development",
    tag: "Governance",
    roles: ["Public Finance Analyst", "Municipal Finance Specialist", "Governance Analyst", "Compliance Officer", "Public Policy Finance Analyst", "Development Programme Analyst"],
    sa: "Supports municipalities, public finance reform, governance, service delivery, compliance, infrastructure and development programmes.",
    global: "Relevant to governments, NGOs, donor agencies, development institutions and policy organisations.",
    fit: "People who care about accountability, service delivery, public value and development."
  }
];

const caseStudies = [
  {
    title: "Retail profitability improvement",
    context: "A South African retail chain faces margin pressure and uneven store performance.",
    evidence: "Sales, gross margin, stock cover, markdowns, basket size, store clusters and supplier costs.",
    stakeholders: "Merchandising, operations, supply chain, CFO and store managers.",
    outcome: "The business identifies profit leaks, improves stock allocation and protects cash."
  },
  {
    title: "Bank SME credit decision",
    context: "A bank must decide whether to extend funding to a growing SME.",
    evidence: "Cash flow, repayment ability, sector risk, collateral, management quality and downside scenarios.",
    stakeholders: "Relationship banker, credit committee, risk, legal team and the business owner.",
    outcome: "A better credit decision balances growth with responsible lending."
  },
  {
    title: "Mining capital project",
    context: "A mining house evaluates a major equipment or energy investment.",
    evidence: "Capex, operating savings, downtime, commodity exposure, ESG considerations and payback.",
    stakeholders: "Operations, engineering, sustainability, finance and board committees.",
    outcome: "Leaders approve, delay or redesign the investment based on value and risk."
  },
  {
    title: "Public finance improvement",
    context: "A municipality or public entity needs stronger budget control and reporting.",
    evidence: "Expenditure patterns, revenue collection, compliance gaps and service delivery constraints.",
    stakeholders: "Finance officials, programme managers, auditors, communities and oversight bodies.",
    outcome: "Improved reporting supports accountability and better service delivery."
  },
  {
    title: "SME cash-flow rescue",
    context: "A small business has sales but weak cash flow.",
    evidence: "Debtor days, stock levels, supplier terms, pricing, expenses and cash conversion.",
    stakeholders: "Founder, accountant, bank, suppliers and sales team.",
    outcome: "The SME gets a practical cash plan and avoids unnecessary distress."
  }
];

const roles = streams.flatMap((stream) =>
  stream.roles.map((name, index) => ({
    id: `${stream.id}-${name}`.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    name,
    stream: stream.id,
    streamName: stream.name,
    level: index < 2 ? "Entry to early career" : index < 5 ? "Specialist pathway" : "Leadership pathway",
    overview: `${name} helps organisations make better decisions in the ${stream.name.toLowerCase()} stream by turning evidence into practical action.`,
    why: stream.sa,
    fit: stream.fit,
    skills: ["Structured analysis", "Business communication", "Commercial judgement", "Digital confidence", "Ethical decision-making"],
    tools: ["Excel", "Power BI", "ERP or accounting systems", "Presentation tools", "AI and automation tools"],
    industries: ["JSE-listed companies", "Banks", "Retailers", "Mining houses", "Telecoms", "FMCG", "Logistics", "Manufacturing", "Public sector", "SMEs", "Startups", "NGOs"],
    projects: ["Build a dashboard or model for a real business question", "Write a one-page decision memo", "Prepare an interview story using problem, analysis, recommendation and outcome"],
    global: stream.global
  }))
);

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const storage = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

function init() {
  $("#streamCount").textContent = streams.length;
  $("#roleCount").textContent = roles.length;
  renderStreams();
  renderFilters();
  renderRoles();
  renderCompare();
  renderAssistant(true);
  bindEvents();
}

function bindEvents() {
  $(".menu-toggle").addEventListener("click", () => $(".site-nav").classList.toggle("open"));
  $("#roleSearch").addEventListener("input", () => renderRoles());
  $("#streamFilter").addEventListener("change", () => renderRoles());
  $("#showBookmarks").addEventListener("click", () => renderRoles(true));
  $("#pivotForm").addEventListener("submit", handlePivot);
  $("#restartAssistant").addEventListener("click", () => renderAssistant(true));
  $("#backAssistant").addEventListener("click", goBackAssistant);
  $("#clearAssistant").addEventListener("click", clearAssistantAnswer);
  $("#floatingHelp").addEventListener("click", () => {
    window.location.hash = "assistance";
    renderAssistant(true);
  });
  $$("[data-start-assessment]").forEach((button) => {
    button.addEventListener("click", () => startAssessment(button.dataset.startAssessment));
  });
  ["compareOne", "compareTwo", "compareThree"].forEach((id) => {
    $(`#${id}`).addEventListener("change", renderCompare);
  });
}

function renderStreams() {
  $("#streamCards").innerHTML = streams.map((stream) => `
    <article class="stream-card">
      <div>
        <span class="tag">${stream.tag}</span>
        <h3>${stream.name}</h3>
        <p>${stream.fit}</p>
        <p><strong>South Africa:</strong> ${stream.sa}</p>
      </div>
      <button class="btn subtle" type="button" onclick="filterStream('${stream.id}')">Explore this stream</button>
    </article>
  `).join("");
}

function renderFilters() {
  const options = `<option value="all">All streams</option>${streams.map((stream) => `<option value="${stream.id}">${stream.name}</option>`).join("")}`;
  $("#streamFilter").innerHTML = options;
  ["compareOne", "compareTwo", "compareThree"].forEach((id, index) => {
    const select = $(`#${id}`);
    select.innerHTML = roles.map((role) => `<option value="${role.id}">${role.name}</option>`).join("");
    select.value = roles[index * 8]?.id || roles[0].id;
  });
}

function filterStream(id) {
  $("#streamFilter").value = id;
  renderRoles();
  window.location.hash = "roles";
}

function renderRoles(bookmarksOnly = false) {
  const query = $("#roleSearch").value.trim().toLowerCase();
  const filter = $("#streamFilter").value;
  const saved = storage.get("ccn-bookmarks", []);
  let list = roles.filter((role) => filter === "all" || role.stream === filter);

  if (bookmarksOnly) list = list.filter((role) => saved.includes(role.id));
  if (query) {
    list = list.filter((role) => JSON.stringify(role).toLowerCase().includes(query));
  }

  $("#roleCards").innerHTML = list.map((role) => `
    <article class="role-card">
      <div>
        <span class="tag">${role.level}</span>
        <h3>${role.name}</h3>
        <p>${role.overview}</p>
        <p><strong>Stream:</strong> ${role.streamName}</p>
      </div>
      <div class="role-actions">
        <button class="btn subtle" type="button" onclick="openRole('${role.id}')">Open role guide</button>
        <button class="btn subtle bookmark ${saved.includes(role.id) ? "saved" : ""}" type="button" onclick="toggleBookmark('${role.id}')">${saved.includes(role.id) ? "Saved" : "Save"}</button>
      </div>
    </article>
  `).join("") || `<div class="empty-state"><h3>No roles found</h3><p>Try another stream or search term.</p></div>`;
}

function toggleBookmark(id) {
  let saved = storage.get("ccn-bookmarks", []);
  saved = saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id];
  storage.set("ccn-bookmarks", saved);
  renderRoles();
}

function openRole(id) {
  const role = roles.find((item) => item.id === id);
  if (!role) return;
  let recent = storage.get("ccn-recent", []).filter((item) => item !== id);
  storage.set("ccn-recent", [id, ...recent].slice(0, 6));

  $("#roleDetail").className = "role-detail";
  $("#roleDetail").innerHTML = `
    <div class="role-hero">
      <span class="tag">${role.streamName}</span>
      <h2>${role.name}</h2>
      <p>${role.overview}</p>
      <p><strong>Why it matters:</strong> ${role.why}</p>
      <div class="role-actions">
        <button class="btn primary" type="button" onclick="startRoleAssessment('${role.id}')">Take role assessment</button>
        <button class="btn secondary-dark" type="button" onclick="window.print()">Print summary</button>
      </div>
    </div>

    <div class="role-section detail-grid">
      <article class="mini-card">
        <h3>A day in the life</h3>
        <p>Review data, clarify the business question, analyse drivers, speak to stakeholders, prepare a recommendation and update leaders on risk, opportunity or performance.</p>
      </article>
      <article class="mini-card">
        <h3>Who this suits</h3>
        <p>${role.fit}</p>
      </article>
      <article class="mini-card">
        <h3>Who may struggle</h3>
        <p>People who dislike deadlines, ambiguity, stakeholder questions or building technical confidence may find this role challenging at first.</p>
      </article>
    </div>

    <div class="role-section">
      <h3>Skills to build</h3>
      <div class="skill-grid">
        ${role.skills.map((skill) => `<article class="mini-card"><h4>${skill}</h4><p>Practise this through a portfolio project and interview story.</p></article>`).join("")}
      </div>
    </div>

    <div class="role-section detail-grid">
      <article class="mini-card"><h3>Tools</h3><ul>${role.tools.map((item) => `<li>${item}</li>`).join("")}</ul></article>
      <article class="mini-card"><h3>Industries</h3><ul>${role.industries.slice(0, 8).map((item) => `<li>${item}</li>`).join("")}</ul></article>
      <article class="mini-card"><h3>How to prepare</h3><ul>${role.projects.map((item) => `<li>${item}</li>`).join("")}</ul></article>
    </div>

    <div class="role-section">
      <h3>Career pathway</h3>
      <div class="pathway-grid">
        <article class="mini-card"><strong>Entry</strong><p>Intern, graduate or junior analyst.</p></article>
        <article class="mini-card"><strong>2-3 years</strong><p>Own workstreams and recurring outputs.</p></article>
        <article class="mini-card"><strong>5 years</strong><p>Senior analyst, specialist or manager.</p></article>
        <article class="mini-card"><strong>10 years</strong><p>Functional lead, advisor or business leader.</p></article>
        <article class="mini-card"><strong>Leadership</strong><p>Head of function, partner, director, founder or CFO route.</p></article>
      </div>
    </div>

    <div class="role-section">
      <h3>What this career may look like in 10 years</h3>
      <article class="mini-card">
        <p>Routine production will be increasingly automated. Human value will sit in judgement, ethics, business context, stakeholder trust, scenario thinking and strategic communication. Start learning Excel, Power BI, SQL basics, AI prompting, modelling and clear writing now.</p>
      </article>
    </div>

    <div class="role-section">
      <h3>Case studies</h3>
      <div class="case-grid">
        ${caseStudies.map((study) => `
          <article class="case-card">
            <h4>${study.title}</h4>
            <p><strong>Business context:</strong> ${study.context}</p>
            <p><strong>Evidence used:</strong> ${study.evidence}</p>
            <p><strong>Stakeholders:</strong> ${study.stakeholders}</p>
            <p><strong>Decision supported:</strong> Investment, funding, pricing, policy, control, turnaround or growth decision.</p>
            <p><strong>Outcome:</strong> ${study.outcome}</p>
            <p><strong>Why exciting:</strong> The project shows how analysis can shape a real business result.</p>
          </article>
        `).join("")}
      </div>
    </div>

    <div id="roleAssessmentSlot" class="role-section"></div>
  `;
  window.location.hash = "role-detail";
}

function renderCompare() {
  const selected = ["compareOne", "compareTwo", "compareThree"].map((id) => roles.find((role) => role.id === $(`#${id}`).value)).filter(Boolean);
  if (!selected.length) return;

  $("#compareTable").innerHTML = `
    <table>
      <thead>
        <tr><th>Dimension</th>${selected.map((role) => `<th>${role.name}</th>`).join("")}</tr>
      </thead>
      <tbody>
        <tr><td>Career stream</td>${selected.map((role) => `<td>${role.streamName}</td>`).join("")}</tr>
        <tr><td>Purpose</td>${selected.map((role) => `<td>${role.overview}</td>`).join("")}</tr>
        <tr><td>Best suited to</td>${selected.map((role) => `<td>${role.fit}</td>`).join("")}</tr>
        <tr><td>South African relevance</td>${selected.map((role) => `<td>${role.why}</td>`).join("")}</tr>
        <tr><td>Global relevance</td>${selected.map((role) => `<td>${role.global}</td>`).join("")}</tr>
        <tr><td>Portfolio project</td>${selected.map((role) => `<td>${role.projects[0]}</td>`).join("")}</tr>
      </tbody>
    </table>
  `;
}

function handlePivot(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const text = [
    form.get("currentRole"),
    form.get("industry"),
    form.get("skills"),
    form.get("interests"),
    form.get("study"),
    form.get("style"),
    form.get("motivation")
  ].join(" ").toLowerCase();

  const scores = Object.fromEntries(roles.map((role) => [role.id, 0]));
  roles.forEach((role) => {
    if (/account|audit|bookkeep|reconcile/.test(text) && role.stream === "accounting") scores[role.id] += 6;
    if (/tax|vat|sars|compliance/.test(text) && role.stream === "tax") scores[role.id] += 6;
    if (/data|excel|power bi|system|analytics|dashboard/.test(text) && role.stream === "digital") scores[role.id] += 6;
    if (/sales|retail|store|customer|manager/.test(text) && ["finance", "entrepreneurship"].includes(role.stream)) scores[role.id] += 4;
    if (/teacher|admin|project|coordinate|consult/.test(text) && ["consulting", "public"].includes(role.stream)) scores[role.id] += 4;
    if (/impact|ngo|public|development|community/.test(text) && ["impact", "public"].includes(role.stream)) scores[role.id] += 6;
    if (/bank|credit|investment|market/.test(text) && role.stream === "markets") scores[role.id] += 6;
    if (/economics|policy|research/.test(text) && role.stream === "economics") scores[role.id] += 6;
  });

  const style = form.get("style");
  roles.forEach((role) => {
    if (style === "analytical" && ["finance", "markets", "economics"].includes(role.stream)) scores[role.id] += 3;
    if (style === "people" && ["consulting", "finance", "entrepreneurship"].includes(role.stream)) scores[role.id] += 3;
    if (style === "digital" && role.stream === "digital") scores[role.id] += 5;
    if (style === "impact" && ["impact", "public"].includes(role.stream)) scores[role.id] += 5;
    if (style === "entrepreneurial" && role.stream === "entrepreneurship") scores[role.id] += 5;
    if (style === "technical" && ["accounting", "tax"].includes(role.stream)) scores[role.id] += 5;
  });

  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([id]) => roles.find((role) => role.id === id));
  const current = form.get("currentRole") || "your current starting point";
  const skills = form.get("skills") || "your existing experience and learning ability";

  $("#pivotResults").innerHTML = `
    <h3>Your career bridge map</h3>
    <div class="bridge">
      <div>Current role<br>${current}</div>
      <div>Transferable skills<br>${skills}</div>
      <div>Best option<br>${ranked[0].name}</div>
      <div>Skills gap<br>${ranked[0].skills.slice(0, 2).join(", ")}</div>
      <div>Next action<br>${ranked[0].projects[0]}</div>
      <div>3-year pathway<br>Junior to specialist</div>
    </div>
    <h3>Recommended paths</h3>
    <p><strong>Best-fit pivot:</strong> ${ranked[0].name}. This fits because your background signals transferable capability into ${ranked[0].streamName}.</p>
    <p><strong>Second-best option:</strong> ${ranked[1].name}. Build ${ranked[1].skills.slice(0, 2).join(" and ")}.</p>
    <p><strong>Stretch option:</strong> ${ranked[2].name}. Aim for this after a focused portfolio project.</p>
    <p><strong>Safer transition:</strong> ${ranked[3].name}. Target this first if you want a more realistic entry step.</p>
    <p><strong>Long-term leadership option:</strong> ${ranked[4].name}. Build toward this after credibility and stakeholder experience.</p>
    <h3>6-month preparation plan</h3>
    <p>Month 1: learn the role. Month 2: build one portfolio project. Month 3: improve Excel, Power BI or the key technical tool. Month 4: speak to three professionals. Month 5: update your CV and LinkedIn. Month 6: apply for targeted roles.</p>
    <h3>Interview story</h3>
    <p>“I am pivoting from ${current} into ${ranked[0].name} because my transferable skills include ${skills}, and I am building evidence through practical projects.”</p>
  `;
}

const assistantSteps = [
  {
    question: "What type of work gives you energy?",
    options: [
      ["Numbers and decisions", "finance"],
      ["Rules, detail and trust", "accounting"],
      ["People and advice", "consulting"],
      ["Impact and development", "impact"],
      ["Systems and data", "digital"]
    ]
  },
  {
    question: "Do you prefer structured problems or unclear business problems?",
    options: [
      ["Structured problems", "accounting"],
      ["Commercial problems", "finance"],
      ["Unclear strategic problems", "consulting"],
      ["Research-heavy questions", "economics"],
      ["Build-and-lead problems", "entrepreneurship"]
    ]
  },
  {
    question: "Where do you imagine yourself working?",
    options: [
      ["Corporate", "finance"],
      ["Banking or investments", "markets"],
      ["Public sector", "public"],
      ["Consulting", "consulting"],
      ["Startup or SME", "entrepreneurship"]
    ]
  }
];

let assistantState = { step: 0, answers: [] };

function renderAssistant(reset = false) {
  if (reset) assistantState = { step: 0, answers: [] };
  const transcript = $("#assistantTranscript");
  const options = $("#assistantOptions");
  const backButton = $("#backAssistant");
  const clearButton = $("#clearAssistant");

  transcript.innerHTML = `<div class="bubble bot">Let us help you find your ideal career direction. I’ll ask a few simple questions and suggest streams and roles to explore first.</div>`;
  assistantState.answers.forEach((answer) => {
    transcript.innerHTML += `<div class="bubble user">${answer.label}</div><div class="bubble bot">${answer.response}</div>`;
  });

  const step = assistantSteps[assistantState.step];
  if (!step) {
    const counts = {};
    assistantState.answers.forEach((answer) => counts[answer.stream] = (counts[answer.stream] || 0) + 1);
    const best = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "finance";
    const stream = streams.find((item) => item.id === best);
    transcript.innerHTML += `<div class="bubble bot"><strong>Suggested starting stream:</strong> ${stream.name}. Your answers suggest that you may enjoy ${stream.fit.toLowerCase()} Start by opening roles such as ${stream.roles.slice(0, 4).join(", ")}. Then take the Stream-Fit Assessment for a deeper result.</div>`;
    options.innerHTML = "";
    backButton.disabled = assistantState.answers.length === 0;
    clearButton.disabled = assistantState.answers.length === 0;
    return;
  }

  transcript.innerHTML += `<div class="bubble bot">${step.question}</div>`;
  options.innerHTML = step.options.map(([label, stream]) => `<button class="btn subtle" type="button" onclick="answerAssistant('${stream}', '${label.replace(/'/g, "")}')">${label}</button>`).join("");
  backButton.disabled = assistantState.answers.length === 0;
  clearButton.disabled = assistantState.answers.length === 0;
}

function answerAssistant(streamId, label) {
  const stream = streams.find((item) => item.id === streamId);
  assistantState.answers.push({
    stream: streamId,
    label,
    response: `That leans toward ${stream.name}. This does not lock you into one path; it simply gives us a useful starting point for your career exploration.`
  });
  assistantState.step += 1;
  renderAssistant();
}

function goBackAssistant() {
  if (!assistantState.answers.length) return;
  assistantState.answers.pop();
  assistantState.step = Math.max(0, assistantState.step - 1);
  renderAssistant();
}

function clearAssistantAnswer() {
  goBackAssistant();
}

const streamQuestions = [
  question("A business gives you messy monthly store results. What would you naturally do first?", [
    ["Clean and reconcile the data", ["accounting", "finance"]],
    ["Look for commercial drivers behind the drop", ["finance", "digital"]],
    ["Speak to operational teams to understand what happened", ["consulting", "entrepreneurship"]],
    ["Consider wider economic and policy conditions", ["economics", "public"]]
  ]),
  question("Which business problem sounds most interesting?", [
    ["Improving profitability", ["finance", "entrepreneurship"]],
    ["Strengthening controls and trust", ["accounting", "tax"]],
    ["Evaluating investments and funding", ["markets", "impact"]],
    ["Using data to improve decisions", ["digital", "consulting"]]
  ]),
  question("Which environment would suit you best?", [
    ["A corporate finance team", ["finance"]],
    ["An audit, tax or governance team", ["accounting", "tax"]],
    ["A bank, fund or investment team", ["markets"]],
    ["A development, NGO or public programme", ["impact", "public"]]
  ]),
  question("What do you want your work to influence?", [
    ["Performance and cash flow", ["finance"]],
    ["Compliance and accountability", ["accounting", "tax", "public"]],
    ["Growth, strategy and transformation", ["consulting", "entrepreneurship"]],
    ["Data, automation and dashboards", ["digital"]]
  ]),
  question("What kind of learning would you start this month?", [
    ["Excel, forecasting and Power BI", ["finance", "digital"]],
    ["IFRS, audit, tax or controls", ["accounting", "tax"]],
    ["Valuation, credit and investment research", ["markets"]],
    ["Policy, ESG, development finance or strategy", ["economics", "impact", "consulting"]]
  ])
];

function question(text, options) {
  return { text, options };
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function buildAssessment(type, role = null) {
  if (type === "role") {
    return Array.from({ length: 14 }, (_, index) => ({
      text: `Scenario ${index + 1}: You are working on a ${role.name} project and the evidence is incomplete. What is your strongest instinct?`,
      options: [
        ["Structure the issue, test the evidence and recommend action", 3],
        ["Ask stakeholders for context, then analyse", 2],
        ["Wait for a perfect template before moving", 1],
        ["Avoid the uncertain parts", 0]
      ]
    }));
  }
  let pool = [];
  for (let i = 0; i < 5; i += 1) pool = pool.concat(streamQuestions);
  if (type === "career") {
    roles.slice(0, 24).forEach((role) => {
      pool.push(question(`A project needs ${role.name.toLowerCase()} judgement. What attracts you most?`, [
        ["The analysis and decision impact", [role.stream]],
        ["The stakeholder conversation", ["consulting", "finance"]],
        ["The controls and risk angle", ["accounting", "tax"]],
        ["The digital or research angle", ["digital", "economics"]]
      ]));
    });
  }
  return pool;
}

function startAssessment(type) {
  const count = type === "stream" ? 15 : 20;
  const questions = shuffle(buildAssessment(type)).slice(0, count);
  renderAssessment(type, questions, null, $("#assessmentRunner"));
}

function startRoleAssessment(id) {
  const role = roles.find((item) => item.id === id);
  const target = $("#roleAssessmentSlot");
  const questions = shuffle(buildAssessment("role", role)).slice(0, 10);
  target.innerHTML = `<div class="assessment-runner" id="inlineAssessment"></div>`;
  renderAssessment("role", questions, role, $("#inlineAssessment"));
}

function renderAssessment(type, questions, role, target) {
  const title = type === "stream" ? "Stream-Fit Assessment" : type === "career" ? "Career-Fit Assessment" : `${role.name} Fit Assessment`;
  target.innerHTML = `
    <h3>${title}</h3>
    <div class="progress">
      <div class="progress-label"><span>Progress</span><span id="progressText">0/${questions.length}</span></div>
      <div class="progress-track"><div id="progressFill" class="progress-fill"></div></div>
    </div>
    <form id="assessmentForm">
      ${questions.map((item, index) => `
        <div class="question">
          <h4>${index + 1}. ${item.text}</h4>
          <div class="answers">
            ${item.options.map((option, optionIndex) => `
              <label class="answer">
                <input required type="radio" name="q${index}" value="${optionIndex}" data-map='${JSON.stringify(option[1])}'>
                <span>${option[0]}</span>
              </label>
            `).join("")}
          </div>
        </div>
      `).join("")}
      <button class="btn primary" type="submit">Show my result</button>
      <button class="btn subtle" type="button" onclick="window.print()">Print result</button>
    </form>
    <div id="assessmentResult"></div>
  `;
  target.scrollIntoView({ behavior: "smooth", block: "start" });

  $("#assessmentForm").addEventListener("change", () => {
    const answered = $$("#assessmentForm input:checked").length;
    $("#progressText").textContent = `${answered}/${questions.length}`;
    $("#progressFill").style.width = `${(answered / questions.length) * 100}%`;
  });
  $("#assessmentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    scoreAssessment(type, role);
  });
}

function scoreAssessment(type, role) {
  if (type === "role") {
    const values = $$("#assessmentForm input:checked").map((input) => Number(JSON.parse(input.dataset.map)));
    const percent = Math.round(values.reduce((sum, value) => sum + value, 0) / (values.length * 3) * 100);
    $("#assessmentResult").innerHTML = `
      <article class="result-card">
        <h3>${percent >= 75 ? "Strong fit" : percent >= 55 ? "Promising fit" : "Exploratory fit"}: ${percent}%</h3>
        <p>Your answers suggest ${role.name} is ${percent >= 55 ? "worth actively exploring" : "best explored through a small practice project first"}.</p>
        <p><strong>Skills to build:</strong> ${role.skills.slice(0, 3).join(", ")}.</p>
        <p><strong>Portfolio project:</strong> ${role.projects[0]}.</p>
      </article>
    `;
    return;
  }

  const scores = Object.fromEntries(streams.map((stream) => [stream.id, 0]));
  $$("#assessmentForm input:checked").forEach((input) => {
    JSON.parse(input.dataset.map).forEach((id, index) => {
      scores[id] = (scores[id] || 0) + (3 - index);
    });
  });
  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topStreams = ranked.slice(0, 3).map(([id]) => streams.find((stream) => stream.id === id));
  const topRoles = roles.filter((role) => topStreams.map((stream) => stream.id).includes(role.stream)).slice(0, 6);

  $("#assessmentResult").innerHTML = `
    <article class="result-card">
      <h3>Best match: ${topStreams[0].name}</h3>
      <p>${topStreams[0].fit}</p>
      ${ranked.slice(0, 6).map(([id, value]) => {
        const stream = streams.find((item) => item.id === id);
        const width = Math.round(value / ranked[0][1] * 100);
        return `<div class="bar-row"><strong>${stream.name}</strong><div class="bar"><span style="width:${width}%"></span></div><span>${value}</span></div>`;
      }).join("")}
      <h3>Suggested roles</h3>
      <p>${topRoles.map((item) => item.name).join(", ")}</p>
      <h3>6-month plan</h3>
      <p>Choose two roles, build one portfolio project, improve Excel or Power BI, speak to three professionals, and prepare an interview story around evidence-based decision-making.</p>
    </article>
  `;
  storage.set("ccn-last-assessment", { date: new Date().toISOString(), top: topStreams[0].name });
}

window.filterStream = filterStream;
window.openRole = openRole;
window.toggleBookmark = toggleBookmark;
window.startRoleAssessment = startRoleAssessment;
window.answerAssistant = answerAssistant;
window.goBackAssistant = goBackAssistant;
window.clearAssistantAnswer = clearAssistantAnswer;

document.addEventListener("DOMContentLoaded", init);
