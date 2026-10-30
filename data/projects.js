window.PROJECTS = [
  {
    slug: 'ask-before-you-advise',
    title: 'Ask Before You Advise: A Mobile-Friendly Module for Financial Advisers',
    year: '2026',
    client: 'Portfolio project (fictional insurer)',
    summary: 'A five-minute self-paced module, built in Articulate Rise 360 and packaged as SCORM 1.2, that teaches an Ask, Probe, Confirm routine for first client meetings.',
    problemStatement: 'When advisers pitch early, clients lose trust and often end up with cover they do not need. Advisers need a routine for finding the main protection need before they recommend any product.',
    solution: 'Designed a short module around one learning outcome, with three objectives written using Bloom verbs, and practice that moves from recognising question types to making decisions in a client scenario.',
    image: '/images/work/ask-before-you-advise-hero.jpg',
    ogImage: '/images/work/ask-before-you-advise-og.jpg',
    tags: ['Rise 360', 'SCORM 1.2', 'Scenario-Based'],
    links: [
      { label: 'Open the module', href: '/ask-before-you-advise/', external: true }
    ],
    details: {
      context: [
        'The module uses a fictional insurer, Msingi Life, and a fictional client, Grace Wambui, so it contains no real company content and is safe to share publicly.',
        'The learning outcome: apply the Ask, Probe, Confirm routine in first meetings with clients to identify their main protection need before recommending any product.'
      ],
      impact: [
        { value: 'SCORM 1.2', label: 'Exported as a SCORM package and tested in SCORM Cloud' },
        { value: '3 decisions', label: 'Scenario with feedback on every option, including the wrong ones' },
        { value: '5 minutes', label: 'Designed for phones, with a tap alternative to dragging' }
      ],
      approach: [
        'Taught the routine as a three-step process: ask an open question, probe by following the client\'s own words, and confirm by playing the priority back.',
        'Compared open, closed and leading questions in tabs, then had learners sort six questions into the right group.',
        'Built a three-decision scenario in which each wrong option explains why it falls short, for example that a product pitch is premature before the detail is known.',
        'Closed with a four-question knowledge check and checked heading order, alt text and colour-independent meaning before export.'
      ]
    }
  },
  {
    slug: 'dining-in-the-dark-event-ops-tracker',
    title: 'Dining in the Dark: Event Operations Tracker and Stakeholder SOP',
    year: '2024',
    client: 'Global Shapers Nairobi',
    summary: 'Designed and managed a master event tracker and operational SOP for a high-profile community fundraiser across sponsors, venue logistics, procurement timelines, and day-of delivery.',
    problemStatement: 'A high-stakes fundraising event required multi-stakeholder coordination with zero margin for delivery failures under time pressure.',
    solution: 'Built a single-source operations tracker with dependencies, run-of-show timing, and stakeholder-specific SOPs to make ownership, escalation, and delivery criteria explicit.',
    image: '/images/work/dining-in-the-dark-hero.jpg',
    ogImage: '/images/work/dining-in-the-dark-og.jpg',
    tags: ['Project Management', 'SOP Design', 'Stakeholder Ops'],
    details: {
      context: [
        'Dining in the Dark is a sensory fundraising experience delivered with visually impaired hosts. The event needed coordination across sponsors, catering, venue, volunteers, and media on a strict timeline.',
        'The core risk was fragmented execution: stale updates, unclear ownership, and late dependency handling could cascade into event-day failure.'
      ],
      impact: [
        { value: 'On time', label: 'Event delivered on schedule with no critical coordination failures' },
        { value: 'Multi-partner', label: 'Sponsors, venue, caterers, media, and volunteers coordinated from one tracker' },
        { value: 'Reusable', label: 'Tracker and SOP templates retained for future Hub events' }
      ],
      approach: [
        'Created a master tracker with owner, due date, status, dependencies, and budget visibility by workstream.',
        'Defined SOP-style partner instructions with clear deliverables, file formats, deadlines, and escalation paths.',
        'Mapped run-of-show timing into a day-of cue sheet to reduce improvisation under pressure.'
      ]
    }
  },
  {
    slug: 'digital-literacy-programme',
    title: 'Digital Literacy Programme for Underserved High School Learners',
    year: '2024',
    client: 'Italian NGO Partner',
    summary: 'A foundational technology programme designed for underserved youth with variable device access and limited prior digital exposure.',
    problemStatement: 'Learners had uneven digital foundations, intermittent connectivity, and limited device access, but needed an accessible pathway into technology learning.',
    solution: 'Designed a scaffolded, modular curriculum with low-connectivity assumptions, practical outputs in every session, and facilitation structures that reduced instructor variance.',
    image: '/images/work/digital-literacy-hero.jpg',
    ogImage: '/images/work/digital-literacy-og.jpg',
    tags: ['NGO Client', 'Community Impact', 'LX Design'],
    details: {
      context: [
        'Programme goals extended beyond content delivery to long-term digital confidence and STEM pathway exposure for underserved learners.',
        'The design had to be repeatable across cohorts without relying on highly specialized facilitation.'
      ],
      impact: [
        { value: 'Multi-year', label: 'Contract renewal driven by programme quality and partner confidence' },
        { value: 'High', label: 'Strong stakeholder satisfaction across cohorts' },
        { value: 'Scalable', label: 'Curriculum replicated across cohorts without full redesign' }
      ],
      approach: [
        'Designed for mixed prior knowledge using core tasks plus extension pathways.',
        'Built practical, visible learner outputs into each session to anchor concept retention.',
        'Aligned delivery with low-resource constraints by reducing hard dependence on connectivity.'
      ]
    }
  },
  {
    slug: 'foundations-software-engineering',
    title: 'Foundations of Software Engineering: Curriculum Architecture and Iteration',
    year: '2024-2025',
    client: 'EdTech / Moringa School',
    summary: 'End-to-end curriculum engineering for a beginner technical programme with two iteration cycles informed by learner performance data and facilitator feedback.',
    problemStatement: 'Beginner learners were dropping at predictable points due to cognitive overload, weak conceptual framing, and inconsistent facilitation practices.',
    solution: 'Re-architected sequencing, diagnostic assessments, and facilitator supports, then iterated based on cohort evidence to reduce drop-off and delivery variance.',
    image: '/images/work/foundations-se-hero.jpg',
    ogImage: '/images/work/foundations-se-og.jpg',
    tags: ['Curriculum Eng.', 'Data-Informed', 'Iteration'],
    details: {
      context: [
        'The redesign balanced beginner accessibility with real-world software engineering expectations.',
        'Version 2 priorities were set from learner outcomes and instructor evidence, not assumptions.'
      ],
      impact: [
        { value: '+23%', label: 'Week 4 completion improvement from V1 to V2' },
        { value: '2x', label: 'Full evidence-backed iteration cycles completed' },
        { value: 'Lower variance', label: 'More consistent delivery across facilitators' }
      ],
      approach: [
        'Reframed Week 1 as confidence-building infrastructure, not a content sprint.',
        'Introduced concept-first explanations before syntax-heavy practice.',
        'Used rubric-based diagnostics to map common errors to likely misconceptions.'
      ]
    }
  }
];

window.PROJECTS_BY_SLUG = Object.fromEntries(
  window.PROJECTS.map((project) => [project.slug, project])
);
