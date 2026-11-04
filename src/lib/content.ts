export const COMPANY = {
    name: "Dodona LLC",
    shortName: "Dodona",
    tagline: "From complex systems to technical solutions.",
    contactEmail: "dodonatech@proton.me",
    location: "Dallas, TX",
    region: "DFW metroplex",
} as const;

export const CONTACT_EMAIL = COMPANY.contactEmail;

export const COOKIE_CONSENT_KEY = "dodona-cookie-consent";

export const CALENDLY_URL =
    process.env.PUBLIC_CALENDLY_URL ?? "https://calendly.com/dodonatech/discovery-call";

export const SITE_URL =
    process.env.PUBLIC_SITE_URL ?? "https://dodonatech.github.io";

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export type NavLink = { label: string; href: string };

export const PRIMARY_NAV: NavLink[] = [
    { label: "Services", href: "/services" },
    { label: "How We Work", href: "/#process" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
];

export const FOOTER_COMPANY: NavLink[] = [
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Careers", href: "/#careers" },
    { label: "Contact", href: "/contact" },
];

export const FOOTER_GET_STARTED: NavLink[] = [
    { label: "Book a discovery call", href: "/book" },
    { label: "Explore our insights", href: "/insights" },
    { label: "How we work", href: "/#process" },
];

export const FOOTER_SERVICES: NavLink[] = [
    { label: "AI Readiness", href: "/services/ai-readiness" },
    { label: "Modernization", href: "/services/modernization" },
    { label: "Process Automation", href: "/services/process-automation" },
    { label: "VR/AR Solutions", href: "/services/vr-ar" },
    { label: "Data, GIS & CRM", href: "/services/data-gis-crm" },
    { label: "All services", href: "/services" },
];


/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type IconName =
    | "emblem"
    | "arrow-right"
    | "check"
    | "menu"
    | "close"
    | "mail"
    | "pin"
    | "calendar"
    | "vr"
    | "layers"
    | "workflow"
    | "brain"
    | "database"
    | "compass"
    | "shield"
    | "phone"
    | "radio"
    | "users"
    | "sparkles"
    | "clock"
    | "target"
    | "code"
    | "file";

export type ServiceSub = {
    label: string;
    anchor: string;
    description: string;
};

export type Service = {
    slug: string;
    title: string;
    shortTitle: string;
    icon: IconName;
    blurb: string;
    tagline: string;
    whatWeDo: string[];
    subServices: ServiceSub[];
    deliverables: string[];
    faq: { q: string; a: string }[];
    engagement: string;
};

export const SERVICES: Service[] = [
    {
        slug: "ai-readiness",
        title: "AI Readiness & Governance",
        shortTitle: "AI Readiness",
        icon: "brain",
        blurb:
            "Assessments, data integrity remediation, and governance frameworks that let you deploy AI without creating new risk.",
        tagline:
            "Most AI programs stall on data, not models. We assess whether your data can support the AI you want to deploy, fix what can't, and put governance in place so the result survives audit and scale.",
        whatWeDo: [
            "AI readiness assessment across data, process, talent, and controls",
            "Data integrity remediation — source-of-truth definition, deduplication, lineage",
            "AI governance frameworks: model inventory, approval gates, monitoring, and rollback",
            "Regulatory and audit alignment for public sector and regulated industries",
            "Pilot scoping — one high-value use case, measurable success criteria, production path",
        ],
        subServices: [
            {
                label: "AI Readiness Assessment",
                anchor: "assessment",
                description:
                    "A scorecard across data, process, talent, and controls.",
            },
            {
                label: "Data Integrity Remediation",
                anchor: "data-integrity",
                description:
                    "Source-of-truth definition, deduplication, and lineage.",
            },
            {
                label: "AI Governance Frameworks",
                anchor: "governance",
                description:
                    "Model inventory, approval gates, monitoring, and rollback.",
            },
            {
                label: "Pilot Scoping",
                anchor: "pilot",
                description:
                    "One high-value use case with measurable success criteria.",
            },
        ],
        deliverables: [
            "AI readiness scorecard",
            "Data integrity findings & remediation backlog",
            "Governance framework & control set",
            "Costed pilot roadmap",
        ],
        faq: [
            {
                q: "Do we need a data warehouse first?",
                a: "Not necessarily. We assess what you have and identify the minimum viable data foundation for the specific use case you care about.",
            },
            {
                q: "Is this compliance work or engineering work?",
                a: "Both. A governance framework that nobody enforces is a document. We build the controls into your pipeline.",
            },
        ],
        engagement:
            "A two-week assessment produces a written readiness scorecard, a prioritized data remediation backlog, and a governance framework draft. Most clients follow with a fixed-scope four-to-eight week remediation sprint.",
    },
    {
        slug: "modernization",
        title: "Modernization & Implementations",
        shortTitle: "Modernization",
        icon: "layers",
        blurb:
            "Incremental paths off legacy platforms — strangled, re-platformed, or rebuilt — with zero unplanned downtime.",
        tagline:
            "Legacy systems don't fail loudly. They fail slowly, in the seams, and the cost compounds. We design an incremental path off them that lets you ship every week while you do it.",
        whatWeDo: [
            "Legacy migration with a real rollback path at every step",
            "Re-platforming onto managed infrastructure without a big-bang rewrite",
            "COTS and ERP implementations with integration testing built in",
            "Integration work across heterogeneous systems and protocols",
            "Data migration with verification, reconciliation, and cutover rehearsal",
        ],
        subServices: [
            {
                label: "Legacy Migration",
                anchor: "migration",
                description: "Incremental paths off end-of-life platforms.",
            },
            {
                label: "Re-platforming",
                anchor: "replatforming",
                description: "Managed infrastructure without a big-bang rewrite.",
            },
            {
                label: "COTS / ERP",
                anchor: "erp",
                description: "Vendor-driven implementations with real integration testing.",
            },
            {
                label: "Integration",
                anchor: "integration",
                description: "Heterogeneous systems and protocols, safely joined.",
            },
        ],
        deliverables: [
            "Target architecture",
            "Incremental migration plan with rollback gates",
            "Data reconciliation plan",
            "Cutover runbook",
        ],
        faq: [
            {
                q: "Will there be downtime?",
                a: "For most systems we design a zero-unplanned-downtime cutover. There may be a scheduled window for the final switch, but no surprises.",
            },
            {
                q: "Can we run old and new side by side?",
                a: "Yes — that's usually the correct approach. We build the strangler facade first, then migrate features one by one.",
            },
        ],
        engagement:
            "A two-week discovery produces the target architecture and migration plan. Delivery is typically four-to-six week fixed-scope sprints, each ending with working software in production.",
    },
    {
        slug: "process-automation",
        title: "Process Automation & Operational Efficiency",
        shortTitle: "Process Automation",
        icon: "workflow",
        blurb:
            "Map, instrument, and automate the workflows that quietly consume your best people's weeks.",
        tagline:
            "Operational drag is rarely one broken process — it's a hundred small ones. We map them, find the ones that matter, and automate them without breaking the ones you rely on.",
        whatWeDo: [
            "Workflow mapping and instrumentation",
            "RPA and integration-first automation",
            "Operational efficiency assessment and redesign",
            "Continuous improvement programs with measurable outcomes",
            "Process observability — dashboards for the metrics you actually use",
        ],
        subServices: [
            {
                label: "Workflow Automation",
                anchor: "workflow",
                description: "Map, instrument, and automate the workflows that hurt.",
            },
            {
                label: "RPA",
                anchor: "rpa",
                description: "Bots for the tasks that don't deserve a human.",
            },
            {
                label: "Operational Efficiency",
                anchor: "efficiency",
                description: "Redesign the process, not just digitize it.",
            },
            {
                label: "Continuous Improvement",
                anchor: "improvement",
                description: "Programs that keep working after the consultants leave.",
            },
        ],
        deliverables: [
            "Process inventory with efficiency scores",
            "Prioritized automation backlog",
            "Working automations for the top-priority flows",
            "Operational dashboard",
        ],
        faq: [
            {
                q: "How do you decide what to automate first?",
                a: "By measured pain. High frequency, high error rate, high human cost — we automate those first and prove value before going further.",
            },
            {
                q: "Will you replace my team with bots?",
                a: "No. We replace tasks. The goal is to give your team back the hours that don't require their judgment.",
            },
        ],
        engagement:
            "A two-week assessment produces the process inventory and automation backlog. Delivery is four-to-six week sprints per wave of automations.",
    },
    {
        slug: "vr-ar",
        title: "VR/AR Apps & Solutions",
        shortTitle: "VR/AR Solutions",
        icon: "vr",
        blurb:
            "Immersive training, remote assist, and digital twin experiences that ship on real hardware.",
        tagline:
            "Immersive tech demos well and ships badly. We build VR/AR for the hardware you already own, on the network you actually run, for the people who will actually use it.",
        whatWeDo: [
            "Immersive training for high-risk or high-cost procedures",
            "Remote assist for field technicians and distributed teams",
            "Digital twins of physical environments and equipment",
            "Spatial interfaces for complex operations",
            "Hardware selection and on-device performance testing",
        ],
        subServices: [
            {
                label: "Immersive Training",
                anchor: "training",
                description: "High-risk or high-cost procedures, safely rehearsed.",
            },
            {
                label: "Remote Assist",
                anchor: "remote-assist",
                description: "Field technicians with an expert in their ear.",
            },
            {
                label: "Digital Twins",
                anchor: "digital-twins",
                description: "Physical environments modeled live.",
            },
            {
                label: "Spatial Interfaces",
                anchor: "spatial",
                description: "Interfaces designed for the environment, not the screen.",
            },
        ],
        deliverables: [
            "Hardware recommendation",
            "Prototype for pilot evaluation",
            "Production AR/VR application",
            "Deployment and training playbook",
        ],
        faq: [
            {
                q: "What hardware do you target?",
                a: "Whatever you already own or can realistically deploy — HoloLens, Quest, mobile AR, or a mix. We don't push hardware you'd have to buy for this.",
            },
            {
                q: "Can this run on our internal network?",
                a: "Yes. We design for edge deployment and offline operation where needed.",
            },
        ],
        engagement:
            "A six-week pilot is typical: two weeks of discovery and design, four weeks of build and on-floor testing with real users.",
    },
    {
        slug: "data-gis-crm",
        title: "Data, GIS & CRM",
        shortTitle: "Data, GIS & CRM",
        icon: "database",
        blurb:
            "Data platforms, GIS, CRM, and business transformation — built to be queried, not just stored.",
        tagline:
            "A data platform that only stores data is a liability. We build platforms that answer questions — for engineers, analysts, and executives — with lineage you can trust.",
        whatWeDo: [
            "Data platform architecture and implementation",
            "GIS strategy, implementation, and integration",
            "CRM design and migration",
            "Business and digital transformation",
            "Analytics and reporting on top of the platform",
        ],
        subServices: [
            {
                label: "Data Platforms",
                anchor: "platforms",
                description: "Warehouse, lakehouse, or hybrid, with lineage.",
            },
            {
                label: "GIS",
                anchor: "gis",
                description: "Spatial data designed for operations, not just maps.",
            },
            {
                label: "CRM",
                anchor: "crm",
                description: "CRM that matches how your teams actually sell.",
            },
            {
                label: "Business Transformation",
                anchor: "transformation",
                description: "Data and process change together.",
            },
        ],
        deliverables: [
            "Target data architecture",
            "Data quality and lineage report",
            "Implementation roadmap",
            "Working platform (in delivery phase)",
        ],
        faq: [
            {
                q: "Cloud, on-prem, or hybrid?",
                a: "Wherever your data already lives — with a plan to simplify if it needs simplifying.",
            },
            {
                q: "Do you handle migrations from legacy systems?",
                a: "Yes, with verification and reconciliation at every step.",
            },
        ],
        engagement:
            "A two-week assessment produces the target architecture and roadmap. Delivery is scoped per platform phase.",
    },
    {
        slug: "strategy",
        title: "Technology Strategy & Planning",
        shortTitle: "Technology Strategy",
        icon: "compass",
        blurb:
            "Planning, assessment, and business transformation roadmaps your board will actually fund.",
        tagline:
            "Strategy that can't be executed is a slideshow. We build plans your engineering team can actually run and your board can actually fund.",
        whatWeDo: [
            "Technology planning and assessment",
            "Strategic planning aligned to business outcomes",
            "Business transformation roadmap development",
            "Build vs. buy vs. partner analysis",
            "Board-ready business cases with costed paths",
        ],
        subServices: [
            {
                label: "Technology Planning",
                anchor: "planning",
                description: "Assessment and roadmap, grounded in real constraints.",
            },
            {
                label: "Strategic Planning",
                anchor: "strategic",
                description: "Tied to business outcomes, not tech trends.",
            },
            {
                label: "Business Transformation",
                anchor: "transformation",
                description: "A plan your team can run and your board can fund.",
            },
        ],
        deliverables: [
            "Current-state assessment",
            "Prioritized roadmap with cost estimates",
            "Business case for board review",
            "Risk register",
        ],
        faq: [
            {
                q: "How is this different from a Big 4 assessment?",
                a: "Fewer slides, more code. The people delivering the plan will also be the people running the first sprint.",
            },
            {
                q: "How long does a strategy engagement take?",
                a: "Typically two-to-four weeks for a full assessment and roadmap.",
            },
        ],
        engagement:
            "A two-to-four week assessment produces a costed roadmap, business case, and risk register.",
    },
    {
        slug: "telecom",
        title: "Telecom Audits & Call Center Design",
        shortTitle: "Telecom",
        icon: "phone",
        blurb:
            "Telecom billing audits and cost reviews, plus call center planning and operational design.",
        tagline:
            "Telecom overcharges are rarely a billing error — they're a contract drift problem. We find them and fix the process that lets them recur.",
        whatWeDo: [
            "Telecom billing audits and cost reviews",
            "Circuit inventory reconciliation",
            "Contract term analysis and renegotiation support",
            "Call center planning and operational design",
            "Contact center technology selection",
        ],
        subServices: [
            {
                label: "Billing Audits",
                anchor: "billing",
                description: "Circuit drift, expired terms, unmetered usage.",
            },
            {
                label: "Cost Reviews",
                anchor: "cost",
                description: "The numbers behind the invoice.",
            },
            {
                label: "Call Center Design",
                anchor: "call-center",
                description: "Contact center tech and operations design.",
            },
        ],
        deliverables: [
            "Audit findings with recoverable dollars",
            "Corrected inventory",
            "Contract review",
            "Call center design (if in scope)",
        ],
        faq: [
            {
                q: "How much do your audits typically recover?",
                a: "It depends on scale and history, but most organizations find meaningful recoverable spend in the first pass.",
            },
            {
                q: "Do you take a percentage?",
                a: "Fixed-scope engagement. You keep 100% of recoveries.",
            },
        ],
        engagement:
            "A two-to-three week audit produces findings, corrected inventory, and a contract review.",
    },
    {
        slug: "scada",
        title: "SCADA, Community Development & Grants",
        shortTitle: "SCADA & Grants",
        icon: "radio",
        blurb:
            "SCADA systems, community development technology, and federal grants management.",
        tagline:
            "Industrial control systems and public-sector grant programs have the same failure mode: fragile systems, no observability, and no plan for the day they fail. We build for that day.",
        whatWeDo: [
            "SCADA system design, migration, and modernization",
            "Historian migration and time-series platform selection",
            "Community development technology implementation",
            "Federal grants management systems and compliance",
            "Operational technology security review",
        ],
        subServices: [
            {
                label: "SCADA Systems",
                anchor: "scada",
                description: "Design, migration, and modernization.",
            },
            {
                label: "Community Development Tech",
                anchor: "community",
                description: "Public-sector systems that serve real people.",
            },
            {
                label: "Federal Grants Management",
                anchor: "grants",
                description: "Compliance-aware grants systems.",
            },
        ],
        deliverables: [
            "System design or migration plan",
            "Historian/platform recommendation",
            "Compliance review",
            "Cutover runbook",
        ],
        faq: [
            {
                q: "Can you work with our existing OT environment?",
                a: "Yes — most of our work is inside existing environments, not greenfield.",
            },
            {
                q: "Do you do grants compliance work?",
                a: "Yes, including systems that must satisfy federal audit requirements.",
            },
        ],
        engagement:
            "Discovery is two weeks. Migration and delivery are scoped per system and per cutover window.",
    },
    {
        slug: "delivery",
        title: "Delivery, Staffing & White Papers",
        shortTitle: "Delivery & Staffing",
        icon: "users",
        blurb:
            "Project management, onsite and remote staffing, and technical white papers.",
        tagline:
            "Sometimes you need people; sometimes you need a document. We provide both a team and a plan, only when we can staff it with people who'd pass your own interview.",
        whatWeDo: [
            "Technical project management",
            "Onsite and remote staffing",
            "Technical white papers and writing",
            "Program rescue for stalled engagements",
            "Delivery leadership for complex programs",
        ],
        subServices: [
            {
                label: "Project Management",
                anchor: "pm",
                description: "Fixed-scope programs without status theater.",
            },
            {
                label: "Staffing",
                anchor: "staffing",
                description: "Onsite and remote engineers.",
            },
            {
                label: "White Papers",
                anchor: "white-papers",
                description: "Technical writing that survives executive review.",
            },
        ],
        deliverables: [
            "Delivery leadership",
            "Engineers embedded in your team",
            "Technical white papers",
            "Program health assessment (for rescues)",
        ],
        faq: [
            {
                q: "Can you staff onsite in DFW?",
                a: "Yes. Onsite when the work demands it, remote otherwise.",
            },
            // TODO: more qa
        ],
        engagement:
            "Staffing is scoped per role and per duration. White papers are fixed-scope, typically two-to-three weeks.",
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return SERVICES.find((s) => s.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Home page content                                                   */
/* ------------------------------------------------------------------ */

export const HERO = {
    eyebrow: "Dallas-Fort Worth · Software engineering & technology solutions",
    headlineTop: "From complex systems",
    headlineAccent: "to technical solutions.",
    lead:
        "Dodona LLC embeds engineers and architects into your organization to modernize critical systems, ship AI-ready data platforms, and turn stalled roadmaps into production software — without the ramp-up cost of hiring.",
    trust: [
        { value: "2 weeks", label: "Fixed-scope discovery" },
        { value: "DFW", label: "Onsite or remote" },
        { value: "Technical expertise", label: "Modern engineering skills" },
        { value: "Practical solutions", label: "Technology that works" },
    ],
} as const;

export const LOGO_STRIP = {
    label: "Trusted by engineering and innovation leaders across DFW",
    clients: [
        "Northbridge Energy",
        "Halcyon Health",
        "Veritas Logistics",
        "Trinity Manufacturing",
        "Meridian Capital",
        "City of Garland",
    ],
} as const;

export const WHY_STATS = [
    { value: "100%", label: "Adaptable expertise" },
    { value: "2 wks", label: "Discovery to plan" },
    { value: "Fixed", label: "Scope & price" },
    { value: "DFW", label: "Onsite when needed" },
] as const;

export const WHY_FEATURES = [
    {
        num: "01",
        title: "Adaptable expertise",
        body: "We bring together the right technical skills for each project, spanning healthcare, modernization, AI platforms, data engineering, automation and VR/AR.",
    },
    {
        num: "02",
        title: "Fixed-scope sprints",
        body: "You approve a defined outcome, timeline, and price before we start. Change orders are explicit, not ambient.",
    },
    {
        num: "03",
        title: "Two-week discovery",
        body: "A paid, time-boxed assessment that ends in a written architecture, risk register, and costed roadmap — yours to keep either way.",
    },
    {
        num: "04",
        title: "Business-first thinking",
        body: "We look beyond the code to understand your objectives, identify opportunities, and recommend technology that solves real problems.",
    },
] as const;

/* ------------------------------------------------------------------ */
/* Case studies                                                        */
/* ------------------------------------------------------------------ */

export type CaseStudy = {
    slug: string;
    industry: string;
    year: string;
    title: string;
    summary: string;
    icon: IconName;
    mediaVariant: "cyan" | "gold" | "mixed";
    metrics: { value: string; label: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
    {
        slug: "ar-work-instructions",
        industry: "Manufacturing",
        year: "2024",
        title: "AR work instructions cut assembly rework by 38%",
        summary:
            "A DFW manufacturer replaced paper work instructions with a heads-up AR overlay on existing hardware — piloted in six weeks.",
        icon: "vr",
        mediaVariant: "cyan",
        metrics: [
            { value: "38%", label: "Less rework" },
            { value: "6 wks", label: "Pilot to floor" },
        ],
    },
    {
        slug: "scada-historian-migration",
        industry: "Energy",
        year: "2024",
        title: "Legacy SCADA historian migration with zero downtime",
        summary:
            "Migrated 11 years of operational telemetry off an end-of-life historian onto a modern time-series platform — cutover in a single maintenance window.",
        icon: "database",
        mediaVariant: "gold",
        metrics: [
            { value: "0 min", label: "Unplanned downtime" },
            { value: "11 yrs", label: "Data preserved" },
        ],
    },
    {
        slug: "ai-governance-framework",
        industry: "Public sector",
        year: "2023",
        title: "AI governance framework cleared a federal grant audit",
        summary:
            "Built a data integrity and AI governance program for a regional agency deploying ML on citizen data — passed audit with no findings.",
        icon: "shield",
        mediaVariant: "mixed",
        metrics: [
            { value: "0", label: "Audit findings" },
            { value: "$2.4M", label: "Grant protected" },
        ],
    },
];

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export const TESTIMONIALS = [
    {
        quote:
            "They had a working prototype in front of our plant managers in three weeks. Most vendors were still scheduling their kickoff.",
        name: "Director of Manufacturing Systems",
        role: "Industrial manufacturer, Fort Worth",
    },
    {
        quote:
            "The discovery was the most useful two weeks our platform team has had in years. We got an architecture we're still building against.",
        name: "VP of Engineering",
        role: "Healthcare technology company, Dallas",
    },
    {
        quote:
            "Our AI governance program went from a slide deck to an audited, enforced control set. That's a rare thing to buy.",
        name: "Chief Information Officer",
        role: "Regional public agency, DFW",
    },
] as const;

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const PROCESS_STEPS = [
    {
        num: "STEP 01",
        title: "Discovery call",
        body: "A 30-minute conversation with one of our engineers — not a salesperson. We tell you honestly whether we're the right fit.",
    },
    {
        num: "STEP 02",
        title: "Two-week assessment",
        body: "Paid, time-boxed. We interview your team, review the code and infrastructure, and deliver a written architecture, risk register, and costed roadmap.",
    },
    {
        num: "STEP 03",
        title: "Fixed-scope delivery",
        body: "Two-to-six week sprints against an agreed outcome. Weekly demos, working software, no status theater.",
    },
    {
        num: "STEP 04",
        title: "Handoff & enablement",
        body: "Documentation, runbooks, and pairing sessions so your team owns the result. Optional retained advisory after handoff.",
    },
] as const;

/* ------------------------------------------------------------------ */
/* Insights                                                            */
/* ------------------------------------------------------------------ */

export type Insight = {
    slug: string;
    industry: string;
    year: string;
    title: string;
    excerpt: string;
};

export const INSIGHTS: Insight[] = [
    {
        slug: "ar-work-instructions",
        industry: "Manufacturing",
        year: "2024",
        title: "AR work instructions cut assembly rework by 38%",
        excerpt:
            "A DFW manufacturer replaced paper work instructions with a heads-up AR overlay on existing hardware — piloted in six weeks.",
    },
    {
        slug: "scada-historian-migration",
        industry: "Energy",
        year: "2024",
        title: "Legacy SCADA historian migration with zero downtime",
        excerpt:
            "Migrated 11 years of operational telemetry off an end-of-life historian onto a modern time-series platform — cutover in a single maintenance window.",
    },
    {
        slug: "ai-governance-framework",
        industry: "Public sector",
        year: "2023",
        title: "AI governance framework cleared a federal grant audit",
        excerpt:
            "Built a data integrity and AI governance program for a regional agency deploying ML on citizen data — passed audit with no findings.",
    },
];

/* ------------------------------------------------------------------ */
/* Careers                                                             */
/* ------------------------------------------------------------------ */

export const CAREERS = {
    eyebrow: "Careers",
    headline: "No open roles right now — but always open to great people.",
    lead:
        "We hire slowly and staff deliberately. If you're an engineer who wants to own outcomes rather than tickets, we'd like to know you even when we're not actively hiring. Send an introduction and we'll keep it on file — and reach out first when a role opens.",
    statusBadges: [
        { label: "No open roles right now", tone: "muted" as const },
        { label: "Always accepting introductions", tone: "cyan" as const },
    ],
    disciplines: [
        "Software Engineering (TypeScript, Go, Java, Python)",
        "Solutions Architecture (AI/Data, Cloud, Enterprise)",
        "Technical Program Management",
        "Site Reliability & DevOps",
        "Security Engineering",
        "AR/VR & Immersive Engineering",
    ],
    disciplineOptions: [
        "Software Engineering",
        "Solutions Architecture",
        "Data & AI",
        "DevOps / SRE",
        "Security Engineering",
        "Technical Program Management",
        "AR/VR & Immersive",
        "Other",
    ],
    experienceOptions: [
        "5-8 years",
        "8-12 years",
        "12-15 years",
        "15+ years",
        "Prefer not to say",
    ],
} as const;

/* ------------------------------------------------------------------ */
/* Contact form options                                                */
/* ------------------------------------------------------------------ */

export const CONTACT_FORM = {
    interestOptions: [
        "AI Readiness & Governance",
        "Modernization & Implementations",
        "Process Automation & Operational Efficiency",
        "VR/AR Apps & Solutions",
        "Data, GIS & CRM",
        "Technology Strategy & Planning",
        "Business Continuity",
        "Telecom Audits & Call Center Design",
        "Community Development & Grants",
        "Delivery, Staffing & White Papers",
        "Something else",
    ],
    budgetOptions: [
        "Under $25k",
        "$25k - $75k",
        "$75k - $200k",
        "$200k+",
        "Not sure yet",
    ],
} as const;

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const ABOUT = {
    eyebrow: "About Dodona",
    headline: "Named for the oracle. Built by engineers.",
    paragraphs: [
        "In ancient Greece, people traveled to Dodona to ask the oracle what to do next. We liked the metaphor: hard questions, clear answers, no theater.",
        "Our approach combines hands-on engineering expertise with a commitment to quality, efficiency, and long-term reliability—helping businesses modernize their systems, streamline operations, and bring ideas to life.",
    ],
    checklist: [
        "Fixed-scope sprints with explicit change control",
        "Two-week discovery that produces artifacts you own",
        "Domain depth in energy, manufacturing, healthcare, telecom, and public sector",
        "Onsite in DFW when the work demands a whiteboard",
        "Documentation and enablement built into every engagement",
    ],
} as const;

/* ------------------------------------------------------------------ */
/* Insight bodies (article body copy)                                  */
/* ------------------------------------------------------------------ */

export const INSIGHT_BODIES: Record<string, string[]> = {
    "ai-readiness-is-data-integrity": [
        "Most organizations that fail at AI do so at the data layer, not the model layer. The source systems disagree with each other, the lineage is missing, and the pipeline was never designed to be queried at the pace the model needs.",
        "The fix is not a new model. It's a disciplined assessment of data quality, lineage, and governance that reveals which systems can support AI workloads and which cannot.",
        "A practical five-step assessment: identify the highest-value use case, trace the required data back to its source systems, audit for integrity and duplication, define the minimum governance controls, and scope a pilot with measurable success criteria. Run it this quarter — it will save you a year of false starts.",
    ],
    "strangler-pattern-legacy": [
        "Big-bang rewrites fail for organizational reasons, not technical ones. The politics of a multi-year rewrite exhaust the executive sponsors long before the first production cutover. Every month spent before the first shipped increment is a month of confidence lost.",
        "The strangler pattern works because it changes the politics. Each increment ships value, each rollback path is real, and the migration is conducted one feature at a time behind a facade.",
        "The critical success factor is building the facade first — a thin routing layer that lets old and new systems run side by side without the rest of the organization noticing which is which. Get that layer right and the rest is discipline.",
    ],
    "telecom-billing-audits": [
        "Most telecom overcharges are not billing errors. They are contract drift: circuits that were provisioned years ago and never deprovisioned, terms that expired and quietly renewed at higher rates, usage that was never metered.",
        "A practical review starts with a full circuit inventory — every circuit, every contract, every billing line — reconciled against what is actually in use today.",
        "The recoverable spend is usually significant, but the more important output is the process change that prevents the drift from recurring: automated inventory reconciliation, contract term tracking, and periodic reviews tied to actual usage rather than the invoice.",
    ],
};
