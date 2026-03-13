export const siteConfig = {
  name: "ClawX",
  url: "https://clawx.lol",
  deployUrl: "https://www.easyclaw.pro",
  githubUrl: "https://github.com/ValueCell-ai/ClawX",
  releasesUrl: "https://github.com/ValueCell-ai/ClawX/releases",
  description:
    "Deploy ClawX in 1 minute. Run a local-first AI research assistant that keeps monitoring, collecting, and delivering updates for you, 24/7.",
  nav: [
    { label: "Features", href: "/#features" },
    { label: "Deploy", href: "/deploy" },
    { label: "Install", href: "/install" },
    { label: "FAQ", href: "/#faq" },
  ],
  keywords: [
    "ClawX",
    "deploy ClawX",
    "self-hosted AI assistant",
    "AI research assistant",
    "local-first AI",
    "autonomous monitoring",
    "OpenClaw",
    "desktop AI assistant",
    "scheduled research workflows",
  ],
};

export const proofItems = [
  "Open-source desktop AI assistant",
  "Runs on your own computer",
  "24/7 scheduled monitoring",
  "Multi-channel delivery",
  "Local-first data handling",
];

export const featureCards = [
  {
    title: "Autonomous Research, Not Just Chat",
    body: "ClawX follows a set-and-run model. It keeps browsing, monitoring, and reporting instead of waiting for your next prompt.",
  },
  {
    title: "Deploy-First, Terminal-Optional",
    body: "Launch the experience through a fast deployment flow, then manage recurring tasks through a visual control surface without living in a shell.",
  },
  {
    title: "Local-First by Design",
    body: "ClawX runs on your machine so your workflows, data, and keys stay under your control.",
  },
  {
    title: "Visual Setup for Real Operators",
    body: "Installation, configuration, and task setup are handled through a graphical interface, with CLI access available for advanced users.",
  },
  {
    title: "Multi-Channel Delivery",
    body: "Send updates where your team already works, including WhatsApp, Telegram, Slack, and more.",
  },
  {
    title: "OpenClaw Inside",
    body: "ClawX is built on the OpenClaw ecosystem, giving you access to an established agent runtime with extensible skills and provider support.",
  },
];

export const useCases = [
  {
    title: "Market Radar",
    body: "Track a watchlist, trigger recurring summaries, and push signals into Slack or Telegram before the next open.",
  },
  {
    title: "Research Desk",
    body: "Monitor sources, collect updates, and turn daily browsing into a repeatable intelligence workflow.",
  },
  {
    title: "Ops Inbox",
    body: "Keep tabs on docs, issue queues, or competitor launches and ship the right summary to the right channel automatically.",
  },
];

export const comparisonRows = [
  {
    label: "Execution model",
    chat: "Waits for prompts",
    clawx: "Keeps running on schedule",
  },
  {
    label: "Operating environment",
    chat: "Mostly cloud-first",
    clawx: "Local-first and self-managed",
  },
  {
    label: "Output pattern",
    chat: "One answer at a time",
    clawx: "Continuous summaries and alerts",
  },
  {
    label: "Delivery",
    chat: "Inside the chat tab",
    clawx: "WhatsApp, Telegram, Slack, and more",
  },
];

export const faqItems = [
  {
    question: "What is ClawX?",
    answer:
      "ClawX is an open-source desktop AI assistant that runs on your own computer, monitors sources, executes scheduled tasks, and pushes results through messaging channels.",
  },
  {
    question: "How is ClawX different from ChatGPT or Claude?",
    answer:
      "Chat tools wait for prompts. ClawX is designed for ongoing execution: you define tasks, schedules, and outputs, then let it keep running.",
  },
  {
    question: "Do I need coding skills to use ClawX?",
    answer:
      "No. ClawX provides a visual interface for installation, configuration, and task setup. Developers can still use more advanced controls when needed.",
  },
  {
    question: "Is my data secure with ClawX?",
    answer:
      "ClawX is positioned as local-first and runs on your own machine, which helps keep data and credentials under your control.",
  },
  {
    question: "What can ClawX send updates to?",
    answer:
      "Official messaging mentions delivery through WhatsApp, Telegram, Slack, and additional channels.",
  },
  {
    question: "Is ClawX free to use?",
    answer:
      "ClawX itself is presented as free and open-source. You still need your own AI provider credentials and any provider usage costs are separate.",
  },
];

export const deploySteps = [
  {
    label: "Open the deployment link",
    detail:
      "Start from the hosted deployment entrypoint and launch the runtime without assembling the stack by hand.",
  },
  {
    label: "Add your model credentials",
    detail:
      "Connect the provider you already use, then keep the rest of the runtime under your own control.",
  },
  {
    label: "Ship your first recurring workflow",
    detail:
      "Choose sources, define cadence, route the output, and let ClawX keep monitoring for you.",
  },
];

export const installSteps = [
  "Download the latest release for your platform.",
  "Run the setup wizard and connect your preferred model provider.",
  "Create your first recurring task and choose where updates should land.",
];

export const legalContact = "support@clawx.lol";

export const demoOptions = {
  sources: ["Market radar", "Research brief", "Launch tracker"],
  cadences: ["Every 15 min", "Daily 08:30 UTC", "Mon-Fri 17:00 UTC"],
  channels: ["Slack", "Telegram", "WhatsApp"],
};

export const demoSummaries: Record<string, string> = {
  "Market radar|Every 15 min|Slack":
    "Watching 18 tickers, 4 news feeds, and 2 filings sources. Next Slack digest arrives in 11 minutes with anomaly tags and a ranked watchlist.",
  "Market radar|Daily 08:30 UTC|Telegram":
    "The desk receives one Telegram pre-market brief every morning with price movement, catalyst notes, and source-linked summaries.",
  "Research brief|Daily 08:30 UTC|Slack":
    "A daily Slack brief lands with fresh source captures, priority shifts, and a compact executive recap for the team channel.",
  "Launch tracker|Mon-Fri 17:00 UTC|WhatsApp":
    "Every weekday close, WhatsApp receives a launch digest with competitor page changes, captured claims, and the most important deltas.",
};
