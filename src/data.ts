export const profile = {
  name: 'Julia Zdzilowska',
  title: 'Software & Product Engineer',
  email: 'zdzilowska@gmail.com',
  github: 'https://github.com/jzdzilowska',
  linkedin: 'https://linkedin.com/in/zdzilowska',
}

export const about = [
  [
    { text: 'I’m a software and product engineer based between WAW / NYC / SF, currently building @ ' },
    {
      text: 'Techtree',
      href: 'https://www.linkedin.com/company/techtreehq/posts/?feedView=all',
    },
    {
      text: '. I work E2E, from user research and interface prototyping to full-stack development. Im a firm believer in ',
    },
    {
      text: 'Aesthetic Egalitarianism',
      id: 'aesthetic-egalitarianism',
      definition:
        'the principle that access to beauty and refinement should be distributed equally, not reserved as a privilege of wealth or status. In software, it means treating visual and interaction quality as a baseline of digital infrastructure, not reserved for high-end or paid products.',
    },
    { text: ' and ' },
    {
      text: 'Software Romanticism',
      id: 'software-romanticism',
      definition:
        'the view that software forms part of the human environment, and that its aesthetics, atmosphere, tactility, coherence, and character therefore influence human experience and wellbeing. Coined by me.',
    },
    { text: '.' },
  ],
  [
    {
      text: 'Previously, I worked on ML data pipelines @ ',
    },
    {
      text: 'Amazon',
      href: 'https://www.linkedin.com/company/amazon/',
    },
    {
      text: ', data platform engineering @ ',
    },
    {
      text: 'Tryp.com',
      href: 'https://www.linkedin.com/company/trypcom/',
    },
    {
      text: ', and spent several years leading full-stack work for clients in premium fashion, real estate, and hospitality.',
    },
  ],
  [
    { text: 'I studied ' },
    {
      text: 'CS at BrownU',
      image: '/grad.PNG',
    },
    {
      text: ' with a focus on data engineering and human-computer interaction, helping teach ',
    },
    {
      text: 'CSCI0300',
      href: 'https://cs.brown.edu/courses/info/csci0330/',
    },
    { text: ' and ' },
    {
      text: 'CSCI0320',
      href: 'https://cs.brown.edu/courses/info/csci0320/',
    },
    { text: '. Since then, I’ve postponed my graduate studies @ Oxford to fund Oyra.'}
  ]
]

export const now = {
  company: 'Techtree',
  logo: '/logos/techtree.svg',
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
    logo: '/logos/amazon.svg',
    role: 'Software Development Engineer Intern',
    location: 'Berlin, Germany',
    dates: 'June 2025 - August 2025',
    bullets: [
      'Built an automated JUnit + Hydra integration framework validating AWS CI/CD ML data pipelines serving 80M+ weekly customers, raising test coverage from 0 to 90%.',
      'Provisioned prod-mirroring test infrastructure (S3, DynamoDB, Glue) and enforced least-privilege IAM on prod ETL jobs.',
      'Cut pipeline validation time from 2h+ to 10min and built a CloudWatch failure-signal dashboard.',
    ],
    stack: 'Java, TypeScript, Scala, AWS',
  },
  {
    company: 'Tryp.com',
    logo: '/logos/tryp.svg',
    role: 'Software Engineering Intern',
    location: 'Copenhagen, Denmark',
    dates: 'October 2024 - December 2024',
    bullets: [
      'Owned a Python service integrating transportation REST APIs into a 70M+ edge route graph for itinerary search.',
      'Designed a schema normalization layer unifying inconsistent provider payloads from 1000+ sources.',
      'Modeled station connectivity in PostgreSQL with composite indexes, cutting route query time ~40%.',
    ],
    stack: 'Python, PostgreSQL',
  },
  {
    company: 'GreenCarLane',
    logo: '/logos/greencarlane.svg',
    role: 'Full Stack Development Intern',
    location: 'Copenhagen, Denmark',
    dates: 'August 2024 - October 2024',
    bullets: [
      'Refactored 10K+ LOC of legacy frontend into React + TS while keeping interoperability with legacy Vue components.',
      'Built mobile-first layouts and interactive components; improved Core Web Vitals via code splitting.',
      'Introduced Redux + Context API state management for search and vehicle comparison flows.',
    ],
    stack: 'React, TypeScript, Redux',
  },
  {
    company: 'BrownU',
    logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Brown_Coat_of_Arms.svg',
    role: 'Teaching Assistant, CSCI0300 & CSCI320',
    location: 'Providence, RI',
    dates: 'January 2024 - May 2026',
    bullets: [
      'Led office hours and debugging sessions for 300+ students in Introduction to Systems (memory, caching, concurrency, OS in C/C++).',
      'Taught 100+ students in Introductory Software Engineering — APIs, cloud databases, state management, component architecture.',
      'Mentored 5+ capstone projects.',
    ],
    stack: 'C, C++, TypeScript, MERN',
  },
  {
    company: 'Freelance',
    logo: '/logos/freelance-photo.png',
    logoAlt: 'Portrait of Julia Zdzilowska',
    logoStyle: 'portrait' as const,
    role: 'Full Stack Developer',
    location: 'Remote',
    dates: 'March 2020 - August 2024',
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
  dates: 'September 2022 - May 2026',
  detail: 'GPA 4.0/4.0. Coursework: Algorithms, Systems, Distributed Systems, Computer Networks, Embedded Systems, AI, Machine Learning, Computer Vision, HCI.',
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
