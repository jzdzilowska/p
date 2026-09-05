export const profile = {
  name: 'Julia Zdzilowska',
  title: 'Software / Product Engineer',
  email: 'zdzilowska@gmail.com',
  github: 'https://github.com/jzdzilowska',
  linkedin: 'https://linkedin.com/in/zdzilowska',
}

export const now = {
  company: 'Techtree',
  location: 'Warsaw, Poland',
  role: 'Full Stack Developer',
  dates: 'May 2026 - Now',
  bullets: [
    'Shipping product end-to-end in a high-velocity startup — user interviews, UI prototyping, architecture, database design, and prod deployment.',
    'Built a 6-signal hiring-intent scoring system over 100K+ companies, operationalized via MCP/Claude with automated Slack distribution.',
    'Designed a live job-to-candidate matching system converting unstructured job descriptions into ranked shortlists.',
    'Built a network-wide lead discovery and activation system across a 2M+ person talent graph.',
  ],
  stack: 'React, TypeScript, Python, FastAPI, PostgreSQL',
}

export const experience = [
  {
    company: 'Amazon',
    role: 'Software Development Engineer Intern',
    location: 'Berlin, Germany',
    dates: 'June 2025 — August 2025',
    bullets: [
      'Built an automated JUnit + Hydra integration framework validating AWS CI/CD ML data pipelines serving 80M+ weekly customers, raising test coverage from 0 to 90%.',
      'Provisioned prod-mirroring test infrastructure (S3, DynamoDB, Glue) and enforced least-privilege IAM on prod ETL jobs.',
      'Cut pipeline validation time from 2h+ to 10min and built a CloudWatch failure-signal dashboard.',
    ],
    stack: 'Java, TypeScript, Scala, AWS',
  },
  {
    company: 'Tryp.com',
    role: 'Software Engineering Intern',
    location: 'Copenhagen, Denmark',
    dates: 'October 2024 — December 2024',
    bullets: [
      'Owned a Python service integrating transportation REST APIs into a 70M+ edge route graph for itinerary search.',
      'Designed a schema normalization layer unifying inconsistent provider payloads from 1000+ sources.',
      'Modeled station connectivity in PostgreSQL with composite indexes, cutting route query time ~40%.',
    ],
    stack: 'Python, PostgreSQL',
  },
  {
    company: 'GreenCarLane',
    role: 'Full Stack Development Intern',
    location: 'Copenhagen, Denmark',
    dates: 'August 2024 — October 2024',
    bullets: [
      'Refactored 10K+ LOC of legacy frontend into React + TS while keeping interoperability with legacy Vue components.',
      'Built mobile-first layouts and interactive components; improved Core Web Vitals via code splitting.',
      'Introduced Redux + Context API state management for search and vehicle comparison flows.',
    ],
    stack: 'React, TypeScript, Redux',
  },
  {
    company: 'Brown University',
    role: 'Teaching Assistant, Computer Systems & Software Engineering',
    location: 'Providence, RI',
    dates: 'January 2024 — May 2026',
    bullets: [
      'Led office hours and debugging sessions for 300+ students in Introduction to Systems (memory, caching, concurrency, OS in C/C++).',
      'Taught 100+ students in Introductory Software Engineering — APIs, cloud databases, state management, component architecture.',
      'Mentored 5+ capstone projects.',
    ],
    stack: 'C, C++, TypeScript, MERN',
  },
  {
    company: 'Freelance',
    role: 'Full Stack Developer',
    location: 'Remote',
    dates: 'March 2020 — August 2024',
    bullets: [
      'Delivered modular, responsive production apps using React, Vue, Angular, and Next.js/Nuxt with TypeScript.',
      'Built backends in Node.js and Python exposing REST and GraphQL APIs; designed relational and NoSQL databases.',
      'Deployed via Docker and CI/CD across AWS, Azure, and GCP for clients in fashion, hospitality, real estate, and design.',
    ],
    stack: 'React, Vue, Next.js, Node.js',
  },
]

export const education = {
  school: 'Brown University',
  location: 'Providence, RI, USA',
  degree: 'B.Sc. Computer Science — Schoman Scholarship (Full-Ride)',
  dates: 'September 2022 — May 2026',
  detail: 'GPA 4.0/4.0. Coursework: Algorithms, Systems, Distributed Systems, Computer Networks, Embedded Systems, AI, Machine Learning, Computer Vision, HCI.',
}

// Placeholder images — swap `img` for your real picks whenever you get to it.
// Captions are the only thing that needs to feel personal; images are seeded
// placeholders so the moodboard has something to scroll through in the meantime.
export const favorites = {
  houses: [
    { img: 'https://picsum.photos/seed/house1/400/560', caption: 'Add a house you love' },
    { img: 'https://picsum.photos/seed/house2/400/500', caption: 'Add a house you love' },
    { img: 'https://picsum.photos/seed/house3/400/600', caption: 'Add a house you love' },
    { img: 'https://picsum.photos/seed/house4/400/520', caption: 'Add a house you love' },
    { img: 'https://picsum.photos/seed/house5/400/540', caption: 'Add a house you love' },
  ],
  books: [
    { img: 'https://picsum.photos/seed/book1/400/580', caption: 'Add a favorite book' },
    { img: 'https://picsum.photos/seed/book2/400/500', caption: 'Add a favorite book' },
    { img: 'https://picsum.photos/seed/book3/400/560', caption: 'Add a favorite book' },
    { img: 'https://picsum.photos/seed/book4/400/540', caption: 'Add a favorite book' },
    { img: 'https://picsum.photos/seed/book5/400/520', caption: 'Add a favorite book' },
  ],
  paintings: [
    { img: 'https://picsum.photos/seed/paint1/400/500', caption: 'Add a painting you love' },
    { img: 'https://picsum.photos/seed/paint2/400/560', caption: 'Add a painting you love' },
    { img: 'https://picsum.photos/seed/paint3/400/600', caption: 'Add a painting you love' },
    { img: 'https://picsum.photos/seed/paint4/400/520', caption: 'Add a painting you love' },
    { img: 'https://picsum.photos/seed/paint5/400/540', caption: 'Add a painting you love' },
  ],
}

export const projects = [
  {
    name: 'Runwave',
    tagline: 'AI financial ops dashboard for SME founders',
    dates: 'February 2026',
    bullets: [
      'Real-time CFO dashboard aggregating bank transactions via Plaid into Postgres.',
      'FastAPI service generating cash-flow forecasts and financial insights with structured SQL analytics + Gemini.',
      'Automated Gmail invoice ingestion (PDF parsing + GPT-4o extraction) with Stripe payment processing.',
    ],
    stack: 'Next.js, FastAPI, Postgres, Plaid, Stripe, Gemini, GPT-4o',
  },
  {
    name: 'Saute',
    tagline: 'Smart meal planning for iOS',
    dates: 'December 2025',
    bullets: [
      'Weekly meal plans generated from pantries, taste profiles, dietary constraints, and schedules.',
      'Receipt scanning for pantry tracking via vision OCR, tokenization, and fuzzy matching.',
      'Ingredient reuse modeled as a DAG for multi-day plans, synced to Google Calendar.',
    ],
    stack: 'Swift, AWS, Express, MongoDB, Tesseract OCR',
  },
  {
    name: 'Driver Drowsiness Detection',
    tagline: 'Real-time ML safety system',
    dates: 'November 2025',
    bullets: [
      'Real-time detection system achieving 98% accuracy on balanced datasets (VGG16, CNN).',
      'Automated video-frame extraction and facial-region detection with OpenCV Haar cascades.',
      'Applied L1/L2 regularization and dropout to reduce overfitting.',
    ],
    stack: 'Python, TensorFlow, Keras, OpenCV',
  },
]
