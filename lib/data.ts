// Email is still a placeholder — swap for the real inbox when provided.
export const CONTACT = {
  phone: "+919513464111",
  whatsapp: "919513464111",
  email: "hello@ikigyan.com",
};

export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" },
] as const;

export const method = [
  "Discover",
  "Question",
  "Think",
  "Solve",
  "Discuss",
  "Apply",
] as const;

export const pillars = [
  {
    key: "financial",
    label: "Financial Literacy",
    outcome: "Money Smart",
    copy: "Money, saving, spending, needs vs. wants, banking and smart choices.",
  },
  {
    key: "emotional",
    label: "Emotional Wellbeing",
    outcome: "Mind Strong",
    copy: "Emotions, confidence, resilience, stress and self-awareness.",
  },
  {
    key: "physical",
    label: "Physical Wellness",
    outcome: "Healthy Living",
    copy: "Nutrition, exercise, sleep, hygiene and healthy habits.",
  },
  {
    key: "social",
    label: "Social Awareness",
    outcome: "Better Together",
    copy: "Friendships, communication, empathy, boundaries, teamwork.",
  },
  {
    key: "digital",
    label: "Digital Literacy",
    outcome: "Future Ready",
    copy: "Online safety, privacy, misinformation and AI awareness.",
  },
] as const;

export const categories = [
  { label: "Space & Science", copy: "Planets, stars and the physics of everyday wonder." },
  { label: "Nature & Animals", copy: "Ecosystems, creatures and the wild world outside." },
  { label: "Human Body & Mind", copy: "How we grow, think, feel and heal." },
  { label: "History & Civilisations", copy: "Stories of the people who came before us." },
  { label: "India & the World", copy: "Culture, geography and global perspective." },
  { label: "Everyday Wonders", copy: "The curious science hiding in ordinary things." },
  { label: "Logic & Mathematics", copy: "Patterns, puzzles and the beauty of numbers." },
  { label: "Future & Technology", copy: "AI, invention and what's coming next." },
] as const;

export const programmeSteps = [
  { n: "01", title: "2 Free Demo Classes", copy: "Schools experience Ikigyan first-hand, no commitment required." },
  { n: "02", title: "School Onboarding", copy: "A simple, structured setup for classrooms and teachers." },
  { n: "03", title: "26-Week Curriculum", copy: "A full academic year of curiosity, mapped week by week." },
  { n: "04", title: "Weekly Curiosity Sessions", copy: "One interesting question or idea explored deeply each week." },
  { n: "05", title: "Activities & Puzzles", copy: "Hands-on thinking, not passive listening." },
  { n: "06", title: "Real-World Knowledge", copy: "Concepts children can actually use outside class." },
  { n: "07", title: "Progressive Learning", copy: "Each week builds on the last — curiosity compounds." },
] as const;

export const schoolOffer = [
  "26-week structured programme",
  "2 free demo classes",
  "Books for classroom & library",
  "Bulk order pricing",
  "Teacher & classroom resources",
  "Printable activities",
] as const;

// Product catalog — structured so future titles can be appended here.
export const books = [
  {
    slug: "educonomy",
    title: "Educonomy",
    subtitle: "Financial & Economic Awareness for Young Minds",
    tagline: "Where money meets real life.",
    headline: "From the story of money to managing your own.",
    intro: {
      badge: "Book 01 · Where Financial Confidence Begins",
      strapline: "Building money confidence and economic awareness from an early age.",
      description:
        "Educonomy helps young minds understand money, choices and the world around them through simple, engaging lessons. It turns essential financial and economic ideas into practical knowledge children can use in everyday life.",
    },
    image: "/illustrations/hero-money-tree.png",
    imageAlt: "A tree growing rupee coins above an open book and a stack of coins beside an Ikigyan money pouch.",
    // Short — used on the homepage teaser card.
    shortDescription:
      "A simple introduction to money, banking and smart financial habits for children.",
    // Full — used on the dedicated /books page.
    fullDescription:
      "Educonomy takes children beyond the basics of currency and introduces them to the world of money through stories, comics, activities and real-life situations.",
    closingLine: "Learn it. See it. Try it. Make smarter choices.",
    price: "Contact for pricing",
    badge: "Book 01",
    exploreTopics: [
      { icon: "🪙", label: "The fascinating history of money" },
      { icon: "🏦", label: "Banks, banking & how money moves" },
      { icon: "💳", label: "Digital payments & modern money" },
      { icon: "📈", label: "Saving, investing & smart choices" },
      { icon: "💰", label: "Understanding and handling pocket money" },
      { icon: "🧠", label: "Everyday money decisions and financial habits" },
    ],
    details: [
      "Age range: 8–13 years",
      "Format: Illustrated paperback",
      "Language: English",
      "Available for classroom, library and bulk requirements",
    ],
    audiences: [
      { label: "For Students", copy: "Build confidence with money, choices and real-world thinking." },
      { label: "For Parents", copy: "Make everyday money moments meaningful with simple ideas to explore together." },
      { label: "For Schools", copy: "Available for classroom, library and bulk requirements." },
    ],
  },
] as const;

// Video library — data-driven so it scales to 50–100+ entries without layout changes.
export const videos = [
  { topic: "How volcanoes shape the Earth", source: "Curated · Nat Geo Kids", age: "Ages 7–11", category: "Space & Science" },
  { topic: "The economics of a lemonade stand", source: "Curated · TED-Ed", age: "Ages 9–13", category: "Financial Literacy" },
  { topic: "Why we dream", source: "Curated · SciShow Kids", age: "Ages 6–10", category: "Human Body & Mind" },
  { topic: "The history of the printing press", source: "Curated · Crash Course Kids", age: "Ages 9–13", category: "History & Civilisations" },
  { topic: "How your brain handles big feelings", source: "Curated · SciShow Kids", age: "Ages 7–11", category: "Emotional Wellbeing" },
  { topic: "What makes a good password?", source: "Curated · Common Sense Education", age: "Ages 9–13", category: "Digital Literacy" },
  { topic: "The water cycle, explained simply", source: "Curated · Nat Geo Kids", age: "Ages 6–10", category: "Space & Science" },
  { topic: "Why do we need sleep?", source: "Curated · TED-Ed", age: "Ages 8–12", category: "Physical Wellness" },
  { topic: "How money moves around the world", source: "Curated · TED-Ed", age: "Ages 10–13", category: "Financial Literacy" },
] as const;

export const faqs = [
  {
    q: "What age group is Ikigyan suitable for?",
    a: "Ikigyan is designed for primary and middle-school children, with content and language calibrated by age band across every book, puzzle and session.",
  },
  {
    q: "How does the 26-week school programme work?",
    a: "Schools begin with two free demo classes, then move into a structured 26-week curriculum of weekly curiosity sessions, activities and puzzles built around real-world knowledge.",
  },
  {
    q: "What happens during the 2 free demo classes?",
    a: "Children experience an actual Ikigyan session — a live curiosity question, guided thinking and a puzzle — so schools can see the method in action before committing.",
  },
  {
    q: "How can a school partner with Ikigyan?",
    a: "Reach out through our School Partnership Enquiry form. Our team will schedule the demo classes and walk you through onboarding.",
  },
  {
    q: "How can I order a book?",
    a: "Books like Educonomy can be ordered directly on our site or via WhatsApp — see the Books page for details.",
  },
  {
    q: "Do you offer bulk orders for classrooms or libraries?",
    a: "Yes — schools and institutions can request bulk pricing for classroom sets, libraries and events.",
  },
  {
    q: "Is my child's data safe with Ikigyan?",
    a: "There are no child accounts and we collect minimal data. Read our Privacy Policy for full details on what we do and don't collect.",
  },
  {
    q: "How can I contact Ikigyan for help?",
    a: "Email us any time — our team typically responds within one working day.",
  },
] as const;
