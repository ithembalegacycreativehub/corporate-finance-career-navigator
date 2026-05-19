const roles = [
  {
    id: "fpa",
    name: "Financial Planning & Analysis Analyst",
    short: "Turns strategy into budgets, forecasts, performance insight and management action.",
    family: "planning",
    level: "Planning engine",
    why: "FP&A matters because leaders need a forward-looking view of revenue, costs, cash and performance risks before they commit resources.",
    strategy: "Connects corporate strategy to targets, operating plans, capital allocation and accountability.",
    outputs: "Budgets, rolling forecasts, variance bridges, board packs, KPI dashboards and scenario models.",
    traits: "Curious, organized, commercially aware, comfortable challenging assumptions and able to explain numbers clearly.",
    struggle: "People who dislike recurring deadlines, detail, stakeholder follow-up or explaining the same number in several ways may find FP&A draining.",
    tools: ["Excel", "Power BI", "ERP", "Anaplan or Adaptive", "PowerPoint", "AI commentary assistants"],
    skills: ["Driver-based forecasting", "Variance analysis", "Business partnering", "Executive storytelling", "Scenario modelling"],
    subjects: ["Accounting", "Corporate finance", "Statistics", "Business analytics", "Economics"],
    certs: ["CIMA", "ACCA", "CPA/CA", "FMVA", "Power BI certification"],
    projects: ["Build a rolling 12-month forecast for a retailer", "Create a variance dashboard from sample sales data", "Write a CFO commentary pack"],
    related: ["Finance Business Partner", "Business Performance Analyst", "Commercial Finance Analyst"],
    signal: "forecasting and performance management"
  },
  {
    id: "management-accountant",
    name: "Management Accountant",
    short: "Explains product, department and operational profitability so managers can run the business better.",
    family: "control",
    level: "Operational finance",
    why: "Management accountants make costs visible, help price products, control budgets and show whether operations are creating value.",
    strategy: "Links operational decisions to margin, productivity, cost control and resource allocation.",
    outputs: "Cost reports, management accounts, margin analysis, budgets, standard-cost reviews and performance packs.",
    traits: "Practical, detail-oriented, close to operations, comfortable with cost drivers and able to translate accounting into action.",
    struggle: "People who only enjoy high-level strategy and dislike operational detail, reconciliations or month-end rhythm may struggle.",
    tools: ["Excel", "ERP", "Power BI", "Costing systems", "Budgeting tools", "Workflow automation"],
    skills: ["Cost accounting", "Budget control", "Margin analysis", "Operational KPIs", "Stakeholder follow-up"],
    subjects: ["Management accounting", "Operations management", "Accounting", "Statistics", "Business law"],
    certs: ["CIMA", "ACCA", "CPA/CA", "Lean Six Sigma"],
    projects: ["Build a product cost model", "Analyze factory overhead absorption", "Create a department budget-control dashboard"],
    related: ["FP&A Analyst", "Commercial Finance Analyst", "Finance Business Partner"],
    signal: "cost control and operational profitability"
  },
  {
    id: "financial-accountant",
    name: "Financial Accountant",
    short: "Protects financial reporting integrity, statutory compliance and reliable financial statements.",
    family: "control",
    level: "Reporting integrity",
    why: "Financial accountants give investors, banks, tax authorities and management confidence that reported numbers are complete, accurate and compliant.",
    strategy: "Creates the trusted financial base for funding, audits, tax planning, acquisitions and board decisions.",
    outputs: "Financial statements, reconciliations, journals, audit files, tax schedules and statutory reports.",
    traits: "Precise, ethical, patient, deadline-conscious and comfortable with standards, evidence and controls.",
    struggle: "People who dislike rules, documentation, audit evidence or recurring close cycles may feel constrained.",
    tools: ["ERP", "Excel", "Audit portals", "Tax systems", "Reporting tools", "AI reconciliation tools"],
    skills: ["IFRS or GAAP", "Month-end close", "Reconciliations", "Audit support", "Financial controls"],
    subjects: ["Financial accounting", "Tax", "Audit", "Corporate law", "Information systems"],
    certs: ["CA", "CPA", "ACCA", "IFRS certificate"],
    projects: ["Prepare a mini annual report", "Reconcile a simulated bank account", "Build a month-end close checklist"],
    related: ["Internal Audit Analyst", "Management Accountant", "CFO career path"],
    signal: "reporting accuracy and governance"
  },
  {
    id: "treasury",
    name: "Treasury Analyst",
    short: "Manages liquidity, funding, cash, FX, interest-rate exposure and banking relationships.",
    family: "markets",
    level: "Liquidity and risk",
    why: "Treasury keeps the company funded and liquid, especially when cash timing, currencies and interest rates move against the business.",
    strategy: "Supports growth by securing capital, managing risk and ensuring cash is available for operations and investment.",
    outputs: "Cash forecasts, funding analysis, FX exposure reports, bank covenant packs and liquidity dashboards.",
    traits: "Calm under pressure, numerate, market-aware, risk-conscious and comfortable with banks and real-time decisions.",
    struggle: "People who dislike market movements, cash urgency, precision or daily monitoring may find treasury stressful.",
    tools: ["Excel", "Treasury management systems", "Bank portals", "ERP", "Power BI", "FX and rate analytics"],
    skills: ["Cash forecasting", "Debt analysis", "FX risk", "Bank covenants", "Working capital"],
    subjects: ["Corporate finance", "Financial markets", "Accounting", "Economics", "Statistics"],
    certs: ["ACT treasury qualifications", "CFA Level I", "FRM", "FMVA"],
    projects: ["Create a 13-week cash flow forecast", "Model FX exposure for an importer", "Build a debt covenant dashboard"],
    related: ["Risk Analyst", "Corporate Finance Analyst", "CFO career path"],
    signal: "liquidity, funding and financial risk"
  },
  {
    id: "corporate-finance",
    name: "Corporate Finance Analyst",
    short: "Evaluates capital allocation, investments, funding choices and strategic financial decisions.",
    family: "transactions",
    level: "Capital allocation",
    why: "Corporate finance analysts help companies decide where to invest, how to fund growth and which opportunities create shareholder value.",
    strategy: "Connects strategy to investment cases, return hurdles, funding plans and portfolio choices.",
    outputs: "Investment cases, NPV models, capital requests, funding analysis, board papers and strategic finance memos.",
    traits: "Analytical, strategic, commercially curious and comfortable comparing options with imperfect information.",
    struggle: "People who dislike modelling, assumptions, board-level scrutiny or cross-functional negotiation may struggle.",
    tools: ["Excel", "PowerPoint", "ERP", "Power BI", "Financial modelling tools", "AI research assistants"],
    skills: ["NPV and IRR", "Capital budgeting", "Valuation", "Funding analysis", "Board communication"],
    subjects: ["Corporate finance", "Accounting", "Economics", "Strategy", "Statistics"],
    certs: ["CFA", "FMVA", "CA/CPA", "MBA modules"],
    projects: ["Build an investment case for a new warehouse", "Compare debt versus equity funding", "Model an acquisition synergy case"],
    related: ["Mergers & Acquisitions Analyst", "Valuations Analyst", "Treasury Analyst"],
    signal: "investment decisions and capital allocation"
  },
  {
    id: "investment-banking",
    name: "Investment Banking Analyst",
    short: "Advises companies and investors on capital raising, acquisitions, disposals and strategic transactions.",
    family: "transactions",
    level: "Deal execution",
    why: "Investment bankers help major transactions happen by combining valuation, market access, process discipline and persuasive materials.",
    strategy: "Supports clients when ownership, funding or strategic direction is changing.",
    outputs: "Pitch books, valuation models, buyer lists, information memoranda, debt capacity analysis and transaction process trackers.",
    traits: "Ambitious, resilient, detail-obsessed, fast, numerate and comfortable with intense deadlines.",
    struggle: "People who need predictable hours, low pressure or slow deep work may find investment banking difficult.",
    tools: ["Excel", "PowerPoint", "Capital IQ or Refinitiv", "Virtual data rooms", "CRM", "AI drafting tools"],
    skills: ["Valuation", "LBO basics", "Transaction process", "Pitch writing", "Attention to detail"],
    subjects: ["Corporate finance", "Accounting", "Economics", "Valuation", "Business law"],
    certs: ["CFA", "FMVA", "Securities exams where required"],
    projects: ["Build a comparable company valuation", "Create a mock sell-side pitch", "Prepare an acquisition screening list"],
    related: ["M&A Analyst", "Valuations Analyst", "Private Equity"],
    signal: "high-pressure transaction execution"
  },
  {
    id: "equity-research",
    name: "Equity Research Analyst",
    short: "Studies listed companies and industries to form investment views and forecasts.",
    family: "markets",
    level: "Investment insight",
    why: "Equity research helps investors understand business quality, valuation, risks and catalysts before buying or selling shares.",
    strategy: "Turns company strategy and market dynamics into forecasts, valuation ranges and investment recommendations.",
    outputs: "Initiation reports, earnings previews, forecast models, valuation notes, sector dashboards and investor presentations.",
    traits: "Curious, skeptical, writing-oriented, market-aware and interested in industries and public companies.",
    struggle: "People who dislike writing, public market volatility, constant news flow or defending a view may struggle.",
    tools: ["Excel", "PowerPoint", "Market data platforms", "Annual reports", "Power BI", "AI research summarizers"],
    skills: ["Financial statement analysis", "Forecasting", "Valuation", "Industry research", "Investment writing"],
    subjects: ["Accounting", "Investments", "Economics", "Statistics", "Corporate strategy"],
    certs: ["CFA", "FMVA", "Financial modelling certificates"],
    projects: ["Write a one-page stock pitch", "Build a three-statement forecast", "Compare banks, retailers or telecoms by valuation multiples"],
    related: ["Investment Banking Analyst", "Valuations Analyst", "Strategy Analyst"],
    signal: "markets, research and investment judgment"
  },
  {
    id: "mna",
    name: "Mergers & Acquisitions Analyst",
    short: "Supports buying, selling, merging or separating businesses.",
    family: "transactions",
    level: "Strategic transactions",
    why: "M&A analysts help leaders decide whether a transaction strengthens growth, capabilities, market access or shareholder value.",
    strategy: "Connects corporate strategy with target screening, valuation, synergy assessment, diligence and integration planning.",
    outputs: "Target screens, valuation models, synergy cases, diligence trackers, integration plans and transaction committee papers.",
    traits: "Structured, discreet, commercially sharp, comfortable with confidential data and cross-functional complexity.",
    struggle: "People who dislike ambiguity, legal detail, long processes or intense stakeholder coordination may struggle.",
    tools: ["Excel", "PowerPoint", "Data rooms", "Project trackers", "Market databases", "AI diligence assistants"],
    skills: ["Deal screening", "Synergy modelling", "Diligence coordination", "Valuation", "Integration planning"],
    subjects: ["Corporate finance", "Strategy", "Accounting", "Business law", "Tax basics"],
    certs: ["CFA", "FMVA", "M&A modelling", "CA/CPA"],
    projects: ["Create an acquisition target screen", "Model cost and revenue synergies", "Draft a Day 1 integration checklist"],
    related: ["Corporate Finance Analyst", "Investment Banking Analyst", "Valuations Analyst"],
    signal: "strategic transactions and integration"
  },
  {
    id: "valuations",
    name: "Valuations Analyst",
    short: "Determines the value of companies, assets, securities or intangible assets.",
    family: "transactions",
    level: "Value analysis",
    why: "Valuation supports transactions, audits, disputes, impairment testing, fundraising, tax and strategic decisions.",
    strategy: "Creates a disciplined view of what an asset is worth and what assumptions drive that value.",
    outputs: "DCF models, comparable company analysis, precedent transaction analysis, valuation reports and sensitivity tables.",
    traits: "Methodical, analytical, patient and comfortable defending assumptions with evidence.",
    struggle: "People who dislike technical detail, accounting standards, sensitivity analysis or written justification may struggle.",
    tools: ["Excel", "PowerPoint", "Market databases", "ERP extracts", "Valuation templates", "AI research tools"],
    skills: ["DCF", "Multiples", "WACC", "Forecasting", "Sensitivity analysis"],
    subjects: ["Valuation", "Accounting", "Corporate finance", "Statistics", "Economics"],
    certs: ["CFA", "ASA/RICS where relevant", "FMVA", "CA/CPA"],
    projects: ["Value a listed retailer", "Build a DCF sensitivity table", "Prepare a purchase-price allocation explainer"],
    related: ["Equity Research Analyst", "M&A Analyst", "Corporate Finance Analyst"],
    signal: "valuation logic and assumption discipline"
  },
  {
    id: "commercial-finance",
    name: "Commercial Finance Analyst",
    short: "Improves revenue, margin, pricing and customer profitability.",
    family: "planning",
    level: "Commercial performance",
    why: "Commercial finance helps businesses grow profitably by understanding customers, products, pricing and channel economics.",
    strategy: "Links sales strategy to margin, pricing architecture, promotions, customer profitability and channel investment.",
    outputs: "Margin bridges, pricing analysis, customer profitability reports, promotion ROI, deal reviews and sales dashboards.",
    traits: "Commercially curious, action-oriented, data-driven and comfortable partnering with sales and marketing.",
    struggle: "People who dislike fast commercial debate, messy data or stakeholder challenge may struggle.",
    tools: ["Excel", "Power BI", "CRM", "ERP", "Pricing tools", "AI analytics assistants"],
    skills: ["Margin analysis", "Pricing", "Promotion ROI", "Customer profitability", "Sales partnering"],
    subjects: ["Finance", "Marketing analytics", "Statistics", "Economics", "Business strategy"],
    certs: ["CIMA", "ACCA", "Power BI", "Pricing strategy courses"],
    projects: ["Analyze promotion profitability", "Build a customer margin dashboard", "Model price increase scenarios"],
    related: ["Retail Commercial Analyst", "FP&A Analyst", "Finance Business Partner"],
    signal: "revenue, margin and pricing decisions"
  },
  {
    id: "business-performance",
    name: "Business Performance Analyst",
    short: "Tracks operational and financial KPIs to help the business improve execution.",
    family: "planning",
    level: "Performance management",
    why: "Performance analysts make the operating system visible, showing where strategy is working and where execution is drifting.",
    strategy: "Connects KPIs, operating metrics and management routines to strategic priorities.",
    outputs: "Performance dashboards, KPI scorecards, root-cause analysis, initiative trackers and executive updates.",
    traits: "Analytical, systems-minded, curious about operations and able to turn dashboards into decisions.",
    struggle: "People who dislike data cleaning, KPI definitions or recurring performance meetings may struggle.",
    tools: ["Power BI", "Excel", "SQL", "ERP", "Project tools", "AI insight assistants"],
    skills: ["KPI design", "Dashboarding", "Root-cause analysis", "Data storytelling", "Operating rhythm"],
    subjects: ["Statistics", "Business analytics", "Operations", "Finance", "Information systems"],
    certs: ["Power BI", "SQL", "Lean Six Sigma", "CIMA"],
    projects: ["Build a KPI cockpit for a logistics firm", "Analyze service-level failures", "Create a performance review pack"],
    related: ["FP&A Analyst", "Strategy Analyst", "Commercial Finance Analyst"],
    signal: "KPI insight and performance improvement"
  },
  {
    id: "risk",
    name: "Risk Analyst",
    short: "Identifies, measures and monitors risks that could damage financial performance or resilience.",
    family: "control",
    level: "Risk intelligence",
    why: "Risk analysts help organizations make better decisions by understanding downside, controls, exposure and resilience.",
    strategy: "Supports strategy by making risks visible before capital, credit, market or operational decisions are made.",
    outputs: "Risk reports, stress tests, control assessments, exposure dashboards, policy exceptions and mitigation plans.",
    traits: "Skeptical, calm, structured, ethical and comfortable asking hard questions.",
    struggle: "People who dislike governance, documentation, uncertainty or challenging optimistic plans may struggle.",
    tools: ["Excel", "Power BI", "Risk systems", "ERP", "GRC platforms", "AI anomaly detection"],
    skills: ["Risk assessment", "Stress testing", "Controls", "Scenario analysis", "Governance"],
    subjects: ["Risk management", "Statistics", "Finance", "Accounting", "Economics"],
    certs: ["FRM", "PRM", "CFA", "CIA for control roles"],
    projects: ["Create a risk register", "Stress test a cash forecast", "Build a supplier concentration dashboard"],
    related: ["Treasury Analyst", "Internal Audit Analyst", "Corporate Finance Analyst"],
    signal: "downside analysis and resilience"
  },
  {
    id: "internal-audit",
    name: "Internal Audit Analyst",
    short: "Tests whether processes, controls and governance are working as intended.",
    family: "control",
    level: "Assurance",
    why: "Internal audit protects the organization by identifying control gaps, process weaknesses and governance risks before they become failures.",
    strategy: "Improves trust, accountability and operational resilience across the business.",
    outputs: "Audit plans, walkthroughs, control tests, findings, management actions and audit committee reports.",
    traits: "Independent, ethical, evidence-led, curious and comfortable interviewing teams across the business.",
    struggle: "People who dislike documentation, sensitive conversations or control testing may struggle.",
    tools: ["Excel", "GRC platforms", "ERP", "Audit analytics", "Power BI", "AI testing assistants"],
    skills: ["Control testing", "Process mapping", "Interviewing", "Evidence evaluation", "Report writing"],
    subjects: ["Audit", "Accounting", "Information systems", "Risk management", "Business law"],
    certs: ["CIA", "CISA", "CA/CPA", "ACCA"],
    projects: ["Map a procure-to-pay process", "Test expense approval controls", "Write an audit finding and action plan"],
    related: ["Risk Analyst", "Financial Accountant", "Management Accountant"],
    signal: "controls, assurance and governance"
  },
  {
    id: "strategy",
    name: "Strategy Analyst",
    short: "Studies markets, competitors and business options to support strategic choices.",
    family: "strategy",
    level: "Strategic insight",
    why: "Strategy analysts help leaders decide where to compete, how to win and which initiatives deserve attention.",
    strategy: "Directly shapes growth priorities, market entry, portfolio choices and operating model design.",
    outputs: "Market maps, competitor analysis, business cases, strategic options papers, initiative roadmaps and executive decks.",
    traits: "Curious, structured, comfortable with ambiguity, strong communicator and interested in business models.",
    struggle: "People who dislike ambiguous problems, interviews, slide writing or incomplete data may struggle.",
    tools: ["PowerPoint", "Excel", "Power BI", "Research databases", "Project tools", "AI research assistants"],
    skills: ["Market sizing", "Competitor analysis", "Business cases", "Synthesis", "Executive storytelling"],
    subjects: ["Strategy", "Economics", "Finance", "Statistics", "Marketing"],
    certs: ["MBA modules", "Strategy courses", "Power BI", "FMVA"],
    projects: ["Build a market entry case", "Analyze a competitor set", "Create a strategic options deck"],
    related: ["Management Consulting", "Corporate Finance Analyst", "Business Performance Analyst"],
    signal: "strategy, markets and executive decisions"
  },
  {
    id: "finance-business-partner",
    name: "Finance Business Partner",
    short: "Works with leaders to turn financial insight into business action.",
    family: "planning",
    level: "Influence and action",
    why: "Finance business partners make finance useful by helping non-finance leaders understand trade-offs and act on the numbers.",
    strategy: "Connects frontline decisions to enterprise goals, budget ownership and performance improvement.",
    outputs: "Decision packs, challenge sessions, action plans, business cases, forecast updates and performance conversations.",
    traits: "Influential, commercially fluent, confident, empathetic and willing to challenge constructively.",
    struggle: "People who prefer working alone, avoid conflict or dislike presenting to senior stakeholders may struggle.",
    tools: ["Excel", "Power BI", "ERP", "Planning systems", "PowerPoint", "AI narrative tools"],
    skills: ["Influence", "Commercial analysis", "Forecast challenge", "Storytelling", "Stakeholder management"],
    subjects: ["Accounting", "Finance", "Strategy", "Communication", "Business analytics"],
    certs: ["CIMA", "ACCA", "CA/CPA", "Power BI", "Executive communication courses"],
    projects: ["Run a budget challenge pack", "Create a department profitability review", "Build a decision memo for a new product"],
    related: ["FP&A Analyst", "Commercial Finance Analyst", "CFO career path"],
    signal: "finance influence and business partnering"
  },
  {
    id: "cfo",
    name: "CFO Career Path",
    short: "Leads finance, capital allocation, performance, risk, reporting and strategic decision support.",
    family: "strategy",
    level: "Finance leadership",
    why: "The CFO helps shape strategy, protect trust, fund the business and translate performance into decisions.",
    strategy: "Owns the financial architecture of the company: capital, control, performance, risk, investor confidence and long-term value.",
    outputs: "Capital allocation frameworks, board narratives, funding plans, investor communication, finance transformation and leadership decisions.",
    traits: "Strategic, ethical, commercially courageous, calm under pressure and able to lead across functions.",
    struggle: "People who avoid accountability, ambiguity, difficult trade-offs or public scrutiny may find the CFO path demanding.",
    tools: ["ERP", "BI platforms", "Planning systems", "Treasury systems", "Board reporting tools", "AI finance copilots"],
    skills: ["Leadership", "Capital allocation", "Governance", "Investor communication", "Enterprise risk"],
    subjects: ["Accounting", "Corporate finance", "Strategy", "Leadership", "Economics"],
    certs: ["CA/CPA/ACCA/CIMA", "CFA", "MBA", "Executive leadership"],
    projects: ["Create a CFO scorecard", "Build a capital allocation framework", "Design a finance transformation roadmap"],
    related: ["FP&A Analyst", "Treasury Analyst", "Finance Business Partner"],
    signal: "enterprise finance leadership"
  }
];

const cadence = {
  daily: "Review performance signals, answer stakeholder questions and investigate material movements.",
  weekly: "Update dashboards, track risks, prepare decision notes and align with business partners.",
  monthly: "Close, forecast, explain variances, prepare management packs and recommend corrective action.",
  quarterly: "Support board reporting, strategy reviews, investor messaging or committee decisions.",
  annual: "Contribute to budgets, long-range plans, audit cycles, capital plans and strategic priorities."
};

const caseTemplates = [
  {
    title: "Retail growth and margin reset in South Africa",
    context: "A national retailer is expanding store formats while food inflation and consumer pressure squeeze margins.",
    problem: "Sales are growing, but gross margin and cash conversion are deteriorating.",
    data: "SKU sales, promotion history, supplier cost movements, stock cover, markdowns, store clusters and customer baskets.",
    stakeholders: "Merchandising, operations, supply chain, store managers, CFO and category leaders.",
    outcome: "Leadership identifies which categories deserve price investment, which promotions destroy value and where stock should be reallocated.",
    excitement: "The project shows finance shaping real commercial decisions customers can feel within weeks."
  },
  {
    title: "Transport corridor performance improvement",
    context: "A logistics and transport operator is under pressure from fuel costs, maintenance delays and weak asset utilization.",
    problem: "Revenue is stable but route profitability, service levels and cash flow are weakening.",
    data: "Route revenue, fuel usage, fleet availability, maintenance cost, delivery times, customer claims and working capital.",
    stakeholders: "Operations, fleet managers, procurement, customers, lenders and executive leadership.",
    outcome: "The business redesigns routes, renegotiates supplier terms, improves utilization and creates a clearer capital plan.",
    excitement: "The finance role connects numbers to trucks, customers, service reliability and infrastructure growth."
  },
  {
    title: "Consumer goods route-to-market expansion",
    context: "An FMCG company wants to grow in informal trade and secondary cities across Africa.",
    problem: "Management needs to know which channels, distributors and product packs will create profitable growth.",
    data: "Outlet coverage, distributor margins, price ladders, volume by region, promotional spend, stock-outs and competitor pricing.",
    stakeholders: "Sales, marketing, distributors, supply chain, finance leadership and regional managers.",
    outcome: "The company prioritizes high-return territories, adjusts pack sizes and improves distributor incentives.",
    excitement: "Finance becomes the bridge between consumer demand, field execution and profitable expansion."
  },
  {
    title: "Digital bank or fintech scale-up",
    context: "A fast-growing fintech is gaining users but must prove sustainable economics before raising capital.",
    problem: "Growth is impressive, but investors question unit economics, fraud risk and cash runway.",
    data: "CAC, activation, retention, transaction margin, fraud losses, cloud cost, headcount, churn and funding scenarios.",
    stakeholders: "Product, risk, engineering, investors, regulators, CFO and founders.",
    outcome: "The team clarifies the path to profitability, strengthens controls and prepares a more credible funding story.",
    excitement: "The project blends finance, technology, risk and strategy in a high-growth environment."
  },
  {
    title: "Manufacturing and energy cost transformation",
    context: "A manufacturer faces load-shedding, rising input costs and pressure to localize supply.",
    problem: "Margins are falling and management must decide whether to invest in solar, new machinery or supplier changes.",
    data: "Production volumes, energy usage, downtime, scrap rates, supplier prices, capex, payback and emissions data.",
    stakeholders: "Plant managers, procurement, engineering, sustainability, banks and the executive committee.",
    outcome: "The business approves a phased investment plan that improves reliability, lowers cost and supports ESG goals.",
    excitement: "Finance helps turn operational pain into a strategic investment decision."
  }
];

function careerPath(role) {
  return [
    ["Entry", `${role.name.replace(" career path", "")} intern or analyst learning the tools, data and recurring outputs.`],
    ["2-3 years", `Own workstreams, explain variances or deal logic, and become trusted for ${role.signal}.`],
    ["5 years", `Lead a business area, transaction module, reporting cycle or specialist portfolio with less supervision.`],
    ["10 years", `Manage teams, influence executives and shape how the company makes ${role.signal} decisions.`],
    ["Leadership", role.id === "cfo" ? "CFO, finance director, divisional CFO or board-level finance leader." : `Head of ${role.name.replace(" Analyst", "").replace(" career path", "")}, finance director route, specialist lead or CFO pathway.`]
  ];
}

const finalQuestions = [
  q("Which work would give you energy on a difficult Monday?", [["Explaining why performance moved and what to do next", ["fpa", "business-performance", "finance-business-partner"]], ["Testing a transaction, valuation or acquisition thesis", ["investment-banking", "mna", "valuations", "corporate-finance"]], ["Protecting cash, controls, reporting or downside risk", ["treasury", "risk", "internal-audit", "financial-accountant"]], ["Studying markets, competitors or strategic options", ["strategy", "equity-research", "cfo"]]]),
  q("Your strongest natural instinct is to:", [["Find the business driver behind the number", ["fpa", "commercial-finance", "business-performance"]], ["Ask whether the number is accurate and controlled", ["financial-accountant", "internal-audit", "risk"]], ["Ask what the asset or company is worth", ["valuations", "investment-banking", "mna"]], ["Ask what strategic choice the number supports", ["strategy", "cfo", "corporate-finance"]]]),
  q("Which environment sounds most motivating?", [["A monthly executive performance review", ["fpa", "finance-business-partner", "business-performance"]], ["A live transaction data room", ["investment-banking", "mna", "valuations"]], ["A treasury, risk or audit committee meeting", ["treasury", "risk", "internal-audit", "financial-accountant"]], ["A market-entry or competitor strategy workshop", ["strategy", "equity-research", "corporate-finance"]]]),
  q("Which pressure pattern suits you best?", [["Recurring deadlines with constant improvement", ["fpa", "management-accountant", "financial-accountant"]], ["Short bursts of intense deal pressure", ["investment-banking", "mna", "valuations"]], ["Real-time liquidity, exposure or control pressure", ["treasury", "risk", "internal-audit"]], ["Ambiguous strategic questions with senior visibility", ["strategy", "cfo", "finance-business-partner"]]]),
  q("You would rather build:", [["A rolling forecast and KPI dashboard", ["fpa", "business-performance"]], ["A DCF, LBO or acquisition model", ["valuations", "investment-banking", "mna"]], ["A cash, covenant or risk stress test", ["treasury", "risk", "corporate-finance"]], ["A decision deck for a new market or business model", ["strategy", "commercial-finance", "cfo"]]]),
  q("Which stakeholder group do you want closest?", [["Commercial, operations and department leaders", ["commercial-finance", "finance-business-partner", "management-accountant"]], ["Investors, bankers, lawyers and transaction teams", ["investment-banking", "mna", "valuations", "corporate-finance"]], ["Auditors, regulators, banks and governance teams", ["financial-accountant", "treasury", "risk", "internal-audit"]], ["Executives deciding future direction", ["strategy", "cfo", "equity-research"]]]),
  q("Your preferred learning project is:", [["Create a business performance cockpit", ["business-performance", "fpa"]], ["Write a stock pitch or valuation report", ["equity-research", "valuations"]], ["Design a controls or risk review", ["internal-audit", "risk", "financial-accountant"]], ["Build a CFO capital allocation memo", ["cfo", "corporate-finance", "strategy"]]]),
  q("What kind of ambiguity feels productive?", [["Forecast assumptions that can be challenged with operators", ["fpa", "finance-business-partner"]], ["Deal assumptions that can change valuation", ["investment-banking", "mna", "valuations"]], ["Downside scenarios that need mitigation", ["risk", "treasury", "internal-audit"]], ["Strategic options with incomplete market evidence", ["strategy", "equity-research", "cfo"]]]),
  q("Which future skill are you most excited to build?", [["AI-assisted forecasting and narrative reporting", ["fpa", "business-performance", "management-accountant"]], ["Automated screening and transaction analytics", ["investment-banking", "mna", "corporate-finance"]], ["Continuous controls, anomaly detection and risk analytics", ["risk", "internal-audit", "financial-accountant", "treasury"]], ["AI-supported strategy research and executive synthesis", ["strategy", "equity-research", "cfo"]]]),
  q("What would you like your internship story to prove?", [["I can turn messy data into management action", ["fpa", "commercial-finance", "business-performance"]], ["I can value a company and explain an investment thesis", ["valuations", "equity-research", "investment-banking"]], ["I can protect the business through controls, cash or risk insight", ["financial-accountant", "treasury", "risk", "internal-audit"]], ["I can structure a strategic problem and influence a decision", ["strategy", "finance-business-partner", "cfo"]]]),
  q("Which phrase sounds most like you?", [["Commercial translator", ["finance-business-partner", "commercial-finance"]], ["Deal analyst", ["investment-banking", "mna"]], ["Control guardian", ["financial-accountant", "internal-audit", "risk"]], ["Strategic finance leader", ["cfo", "corporate-finance", "strategy"]]]),
  q("Which result would make you proud?", [["A better forecast that prevented a bad decision", ["fpa", "business-performance"]], ["A transaction completed at the right value", ["investment-banking", "mna", "valuations"]], ["A risk identified before it caused damage", ["risk", "internal-audit", "treasury"]], ["A growth strategy that changed company direction", ["strategy", "cfo", "corporate-finance"]]])
];

function q(text, options) {
  return { text, dimension: "career fit", options: options.map(([label, roles]) => ({ label, roles })) };
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function roleQuestions(role) {
  const name = role.name;
  const signal = role.signal;
  const options = {
    strong: (text, dim) => ({ label: text, weight: 3, dim }),
    good: (text, dim) => ({ label: text, weight: 2, dim }),
    light: (text, dim) => ({ label: text, weight: 1, dim }),
    weak: (text, dim) => ({ label: text, weight: 0, dim })
  };
  return [
    rq(`When you read about ${name}, what attracts you most?`, "motivation", [options.strong(`The chance to influence ${signal} decisions`, "motivation"), options.good("The technical learning curve", "technical"), options.light("The title sounds respected", "motivation"), options.weak("I am not sure what the work involves", "clarity")]),
    rq("Which task would you volunteer for first?", "technical appetite", [options.strong(role.projects[0], "technical"), options.good(role.projects[1], "technical"), options.light("Taking meeting notes while others analyze", "confidence"), options.weak("Avoiding the analysis and waiting for instructions", "confidence")]),
    rq("How do you respond to messy business data?", "problem solving", [options.strong("I clean it, question it and look for decision patterns", "problem"), options.good("I ask for context before analyzing", "problem"), options.light("I wait for a perfect dataset", "ambiguity"), options.weak("I avoid it because it feels uncomfortable", "ambiguity")]),
    rq("Which communication style feels most natural?", "communication", [options.strong("A clear recommendation supported by numbers", "communication"), options.good("A detailed analysis pack with assumptions", "communication"), options.light("A verbal update without much evidence", "communication"), options.weak("I prefer not to explain my work to stakeholders", "stakeholder")]),
    rq(`A senior leader challenges your ${signal} assumption. You would:`, "pressure", [options.strong("Explain the logic, show sensitivities and adjust if evidence supports it", "pressure"), options.good("Ask questions and follow up with a stronger answer", "pressure"), options.light("Feel defensive but try to respond", "pressure"), options.weak("Avoid presenting next time", "pressure")]),
    rq("What kind of learning excites you most?", "future readiness", [options.strong(`AI-assisted analysis for ${signal}`, "future"), options.good(role.skills[0], "technical"), options.light("Only learning what is required for exams", "future"), options.weak("Avoiding new tools once I know the basics", "future")]),
    rq("Which work environment would suit you?", "work style", [options.strong(`A team where ${role.traits.toLowerCase()} are valued`, "style"), options.good("A structured team with coaching and deadlines", "style"), options.light("A quiet role with minimal business contact", "stakeholder"), options.weak("A role with no deadlines or accountability", "style")]),
    rq("How comfortable are you with quantitative work?", "quant confidence", [options.strong("Very comfortable: I like models, assumptions and checking outputs", "quant"), options.good("Comfortable if I understand the business context", "quant"), options.light("Willing to learn but currently hesitant", "quant"), options.weak("I want to avoid numbers-heavy roles", "quant")]),
    rq("What would you do before an interview for this role?", "preparation", [options.strong(`Build a portfolio project such as: ${role.projects[2]}`, "preparation"), options.good(`Study ${role.subjects.slice(0, 2).join(" and ")}`, "preparation"), options.light("Read the company website only", "preparation"), options.weak("Arrive and hope general motivation is enough", "preparation")]),
    rq("Which part of the role could frustrate you?", "self awareness", [options.strong(`I know ${role.struggle.toLowerCase()} but I can build systems to manage it`, "awareness"), options.good("I may need coaching on prioritization", "awareness"), options.light("I have not thought about the hard parts", "awareness"), options.weak("I expect the role to always be exciting and easy", "awareness")]),
    rq("What type of business curiosity do you show?", "business curiosity", [options.strong(`I ask how ${signal} changes company performance`, "curiosity"), options.good("I ask how teams use the numbers", "curiosity"), options.light("I focus only on formulas", "curiosity"), options.weak("I do not usually ask why the numbers matter", "curiosity")]),
    rq("Which future change are you preparing for?", "future readiness", [options.strong("Automation of routine tasks and more strategic human judgment", "future"), options.good("Better dashboards and faster analysis", "future"), options.light("More templates and fewer manual tasks", "future"), options.weak("I am not preparing for change", "future")]),
    rq("How do you prefer to solve problems?", "problem solving", [options.strong("Frame the decision, identify drivers, test evidence, recommend action", "problem"), options.good("Analyze first, then ask for feedback", "problem"), options.light("Follow examples from previous work", "problem"), options.weak("Wait for someone else to define every step", "problem")]),
    rq("What motivates you over the long term?", "values", [options.strong(`Becoming trusted for ${signal}`, "values"), options.good("Building rare technical expertise", "values"), options.light("Having a stable corporate title", "values"), options.weak("Avoiding responsibility", "values")]),
    rq("How do you handle detail?", "detail orientation", [options.strong("I check details because small errors can change decisions", "detail"), options.good("I use review routines to catch mistakes", "detail"), options.light("I sometimes rush details under pressure", "detail"), options.weak("Details feel unimportant if the big idea is right", "detail")])
  ];
}

function rq(text, dimension, options) {
  return { text, dimension, options };
}

function roleCase(role, template) {
  return {
    title: template.title,
    context: template.context,
    problem: template.problem,
    role: `As a ${role.name}, you would focus on ${role.signal}, using ${role.skills.slice(0, 3).join(", ").toLowerCase()} to turn the situation into a decision.`,
    data: template.data,
    stakeholders: template.stakeholders,
    outcome: template.outcome,
    lesson: `The lesson is that ${role.name.toLowerCase()} work matters most when analysis moves from a spreadsheet into a business choice.`,
    excitement: template.excitement
  };
}

function renderRoleCards(filter = "all") {
  const host = document.querySelector("#roleCards");
  host.innerHTML = "";
  roles.filter(role => filter === "all" || role.family === filter).forEach(role => {
    const card = document.createElement("article");
    card.className = "role-card reveal visible";
    card.innerHTML = `
      <div>
        <span class="tag">${role.level}</span>
        <h3>${role.name}</h3>
        <p>${role.short}</p>
      </div>
      <button class="btn secondary" type="button" data-open-role="${role.id}">Open role guide</button>
    `;
    host.appendChild(card);
  });
}

function renderDashboard() {
  const host = document.querySelector("#assessmentDashboard");
  host.innerHTML = roles.map(role => `
    <article class="assessment-tile">
      <span class="tag">${role.family}</span>
      <h3>${role.name}</h3>
      <p>Randomized 10-question fit assessment with practical development feedback.</p>
      <button class="btn primary" type="button" data-open-role="${role.id}" data-jump-assessment="true">Start assessment</button>
    </article>
  `).join("");
}

function renderRolePage(roleId) {
  const role = roles.find(item => item.id === roleId);
  if (!role) return;
  document.querySelector(".role-empty").classList.add("hidden");
  const page = document.querySelector("#rolePage");
  page.classList.remove("hidden");
  const cases = caseTemplates.map(template => roleCase(role, template));
  page.innerHTML = `
    <div class="role-hero">
      <div>
        <p class="eyebrow">${role.level}</p>
        <h2>${role.name}</h2>
        <p>${role.short}</p>
        <p><strong>Why it matters:</strong> ${role.why}</p>
        <p><strong>Strategy connection:</strong> ${role.strategy}</p>
      </div>
      <div class="role-meta-grid">
        <div><strong>Core outputs</strong>${role.outputs}</div>
        <div><strong>Best suited to</strong>${role.traits}</div>
        <div><strong>May struggle if</strong>${role.struggle}</div>
        <div><strong>Related roles</strong>${role.related.join(", ")}</div>
      </div>
    </div>

    <div class="role-section three-col">
      <article class="info-card"><h3>Role overview</h3><p>This role exists to improve business decisions through ${role.signal}. It is not just number production; the best professionals understand the commercial question behind the model, report or recommendation.</p></article>
      <article class="info-card"><h3>What the role actually does</h3><p>Collects data, tests assumptions, builds analysis, translates findings into business language and helps stakeholders choose a better course of action.</p></article>
      <article class="info-card"><h3>How it creates value</h3><p>It improves capital allocation, performance, control, profitability, resilience or strategic direction depending on the role context.</p></article>
    </div>

    <div class="role-section">
      <h3>Responsibilities by business rhythm</h3>
      <div class="cadence">
        ${Object.entries(cadence).map(([period, text]) => `<article><h4>${period}</h4><p>${text}</p></article>`).join("")}
      </div>
    </div>

    <div class="role-section">
      <h3>Skill map and tools</h3>
      <div class="skill-map">
        ${role.skills.map(skill => `<div class="skill-pill"><strong>${skill}</strong><span>Build evidence that you can apply this in a business decision.</span></div>`).join("")}
      </div>
      <div class="role-section three-col">
        <article class="tool-card"><h3>Tools used</h3><ul>${role.tools.map(tool => `<li>${tool}</li>`).join("")}</ul></article>
        <article class="tool-card"><h3>University focus</h3><ul>${role.subjects.map(subject => `<li>${subject}</li>`).join("")}</ul></article>
        <article class="tool-card"><h3>Certifications to consider</h3><ul>${role.certs.map(cert => `<li>${cert}</li>`).join("")}</ul></article>
      </div>
    </div>

    <div class="role-section">
      <h3>Rich mini case studies</h3>
      <div class="case-grid">
        ${cases.map(renderCase).join("")}
      </div>
    </div>

    <div class="role-section">
      <h3>Career journey</h3>
      <div class="timeline">
        ${careerPath(role).map(([stage, text]) => `<article><h4>${stage}</h4><p>${text}</p></article>`).join("")}
      </div>
    </div>

    <div class="role-section two-col">
      <article class="info-card"><h3>What this career could look like in 10 years</h3><p>AI will automate routine production, first-pass commentary, data checks and template analysis. The human edge will be judgment, business context, ethical decision-making, stakeholder trust, scenario design and the ability to challenge weak assumptions. Students should learn data tools, automation, prompt design and finance fundamentals together.</p></article>
      <article class="info-card"><h3>How to prepare now</h3><ul>${role.projects.map(project => `<li>${project}</li>`).join("")}<li>Prepare interview stories that show problem, analysis, recommendation and outcome.</li><li>Build a small portfolio with one model, one dashboard and one written recommendation.</li></ul></article>
    </div>

    <div class="role-section">
      <div class="role-assessment" id="assessment-${role.id}"></div>
    </div>
  `;
  renderRoleAssessment(role);
  page.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderCase(item) {
  return `
    <article class="case-card">
      <h3>${item.title}</h3>
      <dl>
        <dt>Context</dt><dd>${item.context}</dd>
        <dt>Problem</dt><dd>${item.problem}</dd>
        <dt>Finance role</dt><dd>${item.role}</dd>
        <dt>Data analyzed</dt><dd>${item.data}</dd>
        <dt>Stakeholders</dt><dd>${item.stakeholders}</dd>
        <dt>Outcome</dt><dd>${item.outcome}</dd>
        <dt>Lesson</dt><dd>${item.lesson}</dd>
        <dt>Why exciting</dt><dd>${item.excitement}</dd>
      </dl>
    </article>
  `;
}

function renderRoleAssessment(role) {
  const host = document.querySelector(`#assessment-${role.id}`);
  const selected = shuffle(roleQuestions(role)).slice(0, 10);
  host.dataset.role = role.id;
  host.innerHTML = `
    <div class="assessment-top">
      <div>
        <p class="eyebrow">Dynamic role assessment</p>
        <h3>${role.name} fit assessment</h3>
        <p>Ten questions are randomly selected from a larger question pool. Retake to reflect on a different version.</p>
      </div>
      <button class="btn secondary" type="button" data-retake="${role.id}">Retake with new questions</button>
    </div>
    ${progressHtml(role.id)}
    <form data-role-form="${role.id}">
      ${selected.map((question, index) => questionHtml(question, index, role.id)).join("")}
      <div class="assessment-actions">
        <button class="btn primary" type="submit">Show my guidance</button>
      </div>
    </form>
    <div class="result-slot"></div>
  `;
}

function progressHtml(id) {
  return `
    <div class="progress-wrap">
      <div class="progress-label"><span>Progress</span><span id="progressText-${id}">0/10 answered</span></div>
      <div class="progress-track"><div class="progress-fill" id="progressFill-${id}"></div></div>
    </div>
  `;
}

function questionHtml(question, index, id) {
  return `
    <div class="question-card">
      <div class="question-meta">${question.dimension}</div>
      <h4>${index + 1}. ${question.text}</h4>
      <div class="answer-grid">
        ${question.options.map((option, optionIndex) => `
          <label class="answer-option">
            <input type="radio" name="${id}-${index}" value="${option.weight}" data-dim="${option.dim}" required>
            <span>${option.label}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `;
}

function scoreRoleAssessment(form, role) {
  const checked = [...form.querySelectorAll("input:checked")];
  const score = checked.reduce((sum, input) => sum + Number(input.value), 0);
  const max = 30;
  const percent = Math.round((score / max) * 100);
  const dims = {};
  checked.forEach(input => {
    const dim = input.dataset.dim || "fit";
    dims[dim] = (dims[dim] || 0) + Number(input.value);
  });
  const strengths = Object.entries(dims).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([dim]) => dim);
  const category = percent >= 78 ? "Strong fit" : percent >= 58 ? "Promising fit" : percent >= 40 ? "Exploratory fit" : "Early exploration";
  const result = form.parentElement.querySelector(".result-slot");
  result.innerHTML = `
    <div class="result-panel">
      <div class="score-hero">
        <div class="score-circle" style="--score:${percent}%"><span>${percent}%</span></div>
        <div>
          <p class="eyebrow">${category}</p>
          <h3>${role.name}</h3>
          <p>${roleResultMessage(percent, role)}</p>
        </div>
      </div>
      <div class="breakdown">
        <article><h3>Strengths indicated</h3><p>Your answers suggest strength in ${strengths.join(", ")}. In this role, those strengths help you build credibility because ${role.signal} requires both analysis and judgment.</p></article>
        <article><h3>Possible development areas</h3><p>Build deeper evidence in ${role.skills.slice(0, 3).join(", ")}. If your score is lower, treat it as a learning signal, not a rejection.</p></article>
        <article><h3>Suggested projects</h3><ul>${role.projects.map(project => `<li>${project}</li>`).join("")}</ul></article>
        <article><h3>Six-month development plan</h3><p>Months 1-2: study ${role.subjects.slice(0, 2).join(" and ")}. Months 3-4: complete one portfolio project using ${role.tools.slice(0, 2).join(" and ")}. Months 5-6: write a two-page decision memo and practise interview stories.</p></article>
        <article><h3>Interview positioning</h3><p>"I am interested in ${role.name} because I enjoy ${role.signal}. I have built practice evidence through ${role.projects[0].toLowerCase()}, and I can explain how analysis supports business decisions."</p></article>
        <article><h3>Related roles to compare</h3><p>${role.related.join(", ")}.</p></article>
      </div>
    </div>
  `;
  result.scrollIntoView({ behavior: "smooth", block: "center" });
}

function roleResultMessage(percent, role) {
  if (percent >= 78) return `This result suggests a strong natural alignment with the motivation, work rhythm and pressure pattern of ${role.name}. Start building a portfolio that proves you can apply ${role.signal} in real business contexts.`;
  if (percent >= 58) return `This is a promising fit. You appear interested in the role, but your next advantage will come from building technical evidence and stronger interview stories around ${role.signal}.`;
  if (percent >= 40) return `This may be worth exploring, especially through a short project or internship conversation. Compare it with ${role.related[0]} and ${role.related[1]} before committing.`;
  return `This role may not match your current energy pattern, or you may not yet know enough about it. Review the case studies and compare adjacent roles before ruling it out.`;
}

function renderComparison() {
  const ids = ["compareA", "compareB", "compareC"].map(id => document.querySelector(`#${id}`).value);
  const selected = ids.map(id => roles.find(role => role.id === id)).filter(Boolean);
  document.querySelector("#comparisonTable").innerHTML = `
    <table>
      <thead><tr><th>Dimension</th>${selected.map(role => `<th>${role.name}</th>`).join("")}</tr></thead>
      <tbody>
        <tr><td>Core purpose</td>${selected.map(role => `<td>${role.short}</td>`).join("")}</tr>
        <tr><td>How it matters</td>${selected.map(role => `<td>${role.why}</td>`).join("")}</tr>
        <tr><td>Best suited to</td>${selected.map(role => `<td>${role.traits}</td>`).join("")}</tr>
        <tr><td>May struggle if</td>${selected.map(role => `<td>${role.struggle}</td>`).join("")}</tr>
        <tr><td>Tools</td>${selected.map(role => `<td>${role.tools.join(", ")}</td>`).join("")}</tr>
        <tr><td>Portfolio project</td>${selected.map(role => `<td>${role.projects[0]}</td>`).join("")}</tr>
      </tbody>
    </table>
  `;
}

function renderSelects() {
  ["compareA", "compareB", "compareC"].forEach((id, index) => {
    const select = document.querySelector(`#${id}`);
    select.innerHTML = roles.map(role => `<option value="${role.id}">${role.name}</option>`).join("");
    select.value = roles[index * 5]?.id || roles[0].id;
    select.addEventListener("change", renderComparison);
  });
}

function renderFinalAssessment() {
  const host = document.querySelector("#finalAssessment");
  const selected = shuffle(finalQuestions).slice(0, 10);
  host.innerHTML = `
    ${progressHtml("final")}
    <form data-final-form>
      ${selected.map((question, index) => `
        <div class="question-card">
          <div class="question-meta">${question.dimension}</div>
          <h4>${index + 1}. ${question.text}</h4>
          <div class="answer-grid">
            ${question.options.map((option, optionIndex) => `
              <label class="answer-option">
                <input type="radio" name="final-${index}" value="${optionIndex}" data-roles="${option.roles.join(",")}" required>
                <span>${option.label}</span>
              </label>
            `).join("")}
          </div>
        </div>
      `).join("")}
      <div class="assessment-actions">
        <button class="btn primary" type="submit">Show my best-fit careers</button>
        <button class="btn secondary" type="button" id="retakeFinal">Retake with new questions</button>
      </div>
    </form>
    <div class="result-slot"></div>
  `;
}

function scoreFinalAssessment(form) {
  const scores = Object.fromEntries(roles.map(role => [role.id, 0]));
  form.querySelectorAll("input:checked").forEach(input => {
    input.dataset.roles.split(",").forEach((id, index) => {
      scores[id] += 4 - index;
    });
  });
  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const top = ranked.slice(0, 3).map(([id]) => roles.find(role => role.id === id));
  const weak = ranked.slice(-3).reverse().map(([id]) => roles.find(role => role.id === id));
  const result = form.parentElement.querySelector(".result-slot");
  result.innerHTML = `
    <div class="result-panel">
      <p class="eyebrow">Career fit result</p>
      <h3>Best fit: ${top[0].name}</h3>
      <p>${top[0].short} Your answers suggest that the work pattern, motivation and analytical style of this path are currently your strongest match.</p>
      ${ranked.slice(0, 8).map(([id, value]) => {
        const role = roles.find(item => item.id === id);
        const width = Math.min(100, Math.round((value / Math.max(1, ranked[0][1])) * 100));
        return `<div class="bar-row"><strong>${role.name}</strong><div class="bar-track"><span style="width:${width}%"></span></div><span>${value}</span></div>`;
      }).join("")}
      <div class="breakdown">
        <article><h3>Second-best fit</h3><p>${top[1].name}: ${top[1].why}</p></article>
        <article><h3>Third-best fit</h3><p>${top[2].name}: ${top[2].why}</p></article>
        <article><h3>Roles that may be less ideal right now</h3><p>${weak.map(role => role.name).join(", ")}. These may require a different work rhythm, pressure pattern or stakeholder style than your current answers suggest.</p></article>
        <article><h3>Six-month learning plan</h3><p>Months 1-2: learn ${top[0].subjects.slice(0, 2).join(" and ")}. Months 3-4: build ${top[0].projects[0].toLowerCase()}. Months 5-6: compare your top three roles through coffee chats, internship applications and interview practice.</p></article>
        <article><h3>Portfolio projects</h3><ul>${top.flatMap(role => role.projects.slice(0, 1)).map(project => `<li>${project}</li>`).join("")}</ul></article>
        <article><h3>Interview positioning statement</h3><p>"My strongest fit appears to be ${top[0].name}. I am motivated by ${top[0].signal}, and I am building evidence through practical projects, technical tools and business storytelling."</p></article>
      </div>
    </div>
  `;
  result.scrollIntoView({ behavior: "smooth", block: "center" });
}

function updateProgress(scope) {
  const form = document.querySelector(`[data-role-form="${scope}"], [data-final-form]`);
  if (!form) return;
  const groups = new Set([...form.querySelectorAll("input[type='radio']")].map(input => input.name));
  const answered = new Set([...form.querySelectorAll("input:checked")].map(input => input.name));
  const percent = Math.round((answered.size / groups.size) * 100);
  const text = document.querySelector(`#progressText-${scope}`);
  const fill = document.querySelector(`#progressFill-${scope}`);
  if (text) text.textContent = `${answered.size}/${groups.size} answered`;
  if (fill) fill.style.width = `${percent}%`;
}

function initInteractions() {
  document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".top-nav").classList.toggle("open");
  });
  document.querySelectorAll(".chip").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      renderRoleCards(button.dataset.filter);
    });
  });
  document.body.addEventListener("click", event => {
    const opener = event.target.closest("[data-open-role]");
    if (opener) {
      renderRolePage(opener.dataset.openRole);
      if (opener.dataset.jumpAssessment) {
        setTimeout(() => document.querySelector(`#assessment-${opener.dataset.openRole}`)?.scrollIntoView({ behavior: "smooth", block: "start" }), 250);
      }
    }
    const retake = event.target.closest("[data-retake]");
    if (retake) renderRoleAssessment(roles.find(role => role.id === retake.dataset.retake));
    if (event.target.id === "retakeFinal") renderFinalAssessment();
  });
  document.body.addEventListener("change", event => {
    const roleForm = event.target.closest("[data-role-form]");
    if (roleForm) updateProgress(roleForm.dataset.roleForm);
    if (event.target.closest("[data-final-form]")) updateProgress("final");
  });
  document.body.addEventListener("submit", event => {
    const roleForm = event.target.closest("[data-role-form]");
    const finalForm = event.target.closest("[data-final-form]");
    if (roleForm) {
      event.preventDefault();
      scoreRoleAssessment(roleForm, roles.find(role => role.id === roleForm.dataset.roleForm));
    }
    if (finalForm) {
      event.preventDefault();
      scoreFinalAssessment(finalForm);
    }
  });
  document.querySelector("#startFinal").addEventListener("click", renderFinalAssessment);
}

function revealOnScroll() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach(item => observer.observe(item));
}

function init() {
  renderRoleCards();
  renderDashboard();
  renderSelects();
  renderComparison();
  initInteractions();
  revealOnScroll();
}

init();
