export type PortfolioCategory =
  | "web"
  | "mobile"
  | "games"
  | "board-games"
  | "books";

export type PortfolioMedia = "image" | "visual-caravan" | "none";

export type PortfolioProject = {
  id: string;
  category: PortfolioCategory;
  title: string;
  hook: string;
  priority: number;
  href?: string;
  external?: boolean;
  ctaLabel?: string;
  media: PortfolioMedia;
  imageSrc?: string;
  status: "live" | "in-development";
};

export const portfolioCategories: {
  id: PortfolioCategory;
  label: string;
  anchor: string;
}[] = [
  { id: "web", label: "Web Apps", anchor: "web" },
  { id: "mobile", label: "Mobile Apps", anchor: "mobile" },
  { id: "games", label: "Mobile Games", anchor: "games" },
  { id: "board-games", label: "Board Games", anchor: "board-games" },
  { id: "books", label: "Books", anchor: "books" },
];

export const portfolioProjects: PortfolioProject[] = [
  // Web Apps
  {
    id: "moms-next-best-home",
    category: "web",
    title: "Mom's Next Best Home",
    hook: "Help families find senior living that fits — browse facilities, compare amenities, and decide with confidence.",
    priority: 1,
    href: "https://momsnextbesthome.com/",
    external: true,
    ctaLabel: "Open site",
    media: "none",
    status: "live",
  },
  {
    id: "dads-and-dungeons",
    category: "web",
    title: "Dads & Dungeons",
    hook: "Build branching RPG campaigns with your kids, then run live adventure nights from the couch — free to start.",
    priority: 2,
    href: "https://dadsanddungeons.com/",
    external: true,
    ctaLabel: "Start playing",
    media: "none",
    status: "live",
  },
  {
    id: "reqcheck",
    category: "web",
    title: "reqCHECK",
    hook: "Stop AI resume spam — embed skill quizzes on job posts so only verified candidates reach your inbox.",
    priority: 3,
    href: "https://www.reqcheck.io/",
    external: true,
    ctaLabel: "Open site",
    media: "none",
    status: "live",
  },
  {
    id: "chrona",
    category: "web",
    title: "Chrona",
    hook: "Turn daily work into trustworthy artifacts — capture, reflect, and generate proof of experience when you need it.",
    priority: 4,
    href: "https://chrona.cloud/",
    external: true,
    ctaLabel: "Open site",
    media: "none",
    status: "live",
  },

  // Mobile Apps
  {
    id: "bringit",
    category: "mobile",
    title: "BringIt",
    hook: "Know who's bringing what to the gathering — RSVPs, dish coordination, and recipes the group wants again.",
    priority: 1,
    href: "https://www.getbringit.com/",
    external: true,
    ctaLabel: "Get started",
    media: "none",
    status: "live",
  },
  {
    id: "chef-lab",
    category: "mobile",
    title: "Chef Lab",
    hook: "Develop recipes through real experiments — branch variants, run cooks, score outcomes, and grow culinary knowledge.",
    priority: 2,
    href: "/chef-lab",
    ctaLabel: "Learn more",
    media: "image",
    imageSrc: "/chef-lab/preview.svg",
    status: "in-development",
  },
  {
    id: "caravan",
    category: "mobile",
    title: "Caravan",
    hook: "Get the group from rough idea to ready-to-go — dates, invites, and shared plans for trips and outings.",
    priority: 3,
    href: "/caravan",
    ctaLabel: "Learn more",
    media: "visual-caravan",
    status: "in-development",
  },
  {
    id: "vectra",
    category: "mobile",
    title: "Vectra Fitness",
    hook: "Train in focused 2-week blocks that adapt to your sessions — guided workouts with coaching that listens.",
    priority: 4,
    href: "/vectra-fitness",
    ctaLabel: "Learn more",
    media: "image",
    imageSrc: "/vectra-fitness/hero-mark.svg",
    status: "live",
  },

  // Mobile Games
  {
    id: "space-bots",
    category: "games",
    title: "Space Bots",
    hook: "A casual space puzzle with simple controls and addictive, bite-sized challenges.",
    priority: 1,
    media: "image",
    imageSrc: "/space-bots/preview.png",
    status: "in-development",
  },
  {
    id: "tilt",
    category: "games",
    title: "Tilt!",
    hook: "Guide a cart from A to B by tilting the whole course — use gravity and triggers to survive every run.",
    priority: 2,
    media: "none",
    status: "in-development",
  },

  // Board Games
  {
    id: "last-hit",
    category: "board-games",
    title: "Last Hit",
    hook: "Rival bounty hunters allocate Attention, interfere, and race to land the killing blow — only the last hit claims the bounty.",
    priority: 1,
    href: "https://lasthit.cirestudios.dev",
    external: true,
    ctaLabel: "Open site",
    media: "none",
    status: "live",
  },
  {
    id: "bizarre-bazaar",
    category: "board-games",
    title: "Bizarre Bazaar",
    hook: "Race through real-time ingredient auctions with sand timers — complete potion commissions, then disrupt at Night Market.",
    priority: 2,
    media: "none",
    status: "in-development",
  },
  {
    id: "hot-crossed-buns",
    category: "board-games",
    title: "Hot Crossed Buns",
    hook: "A competitive board game currently baking in the studio — more soon.",
    priority: 3,
    media: "none",
    status: "in-development",
  },
  {
    id: "treasure-horde",
    category: "board-games",
    title: "Treasure Horde",
    hook: "Pilot a customizable starship through a hidden galaxy — explore, salvage, battle, and decide when to haul treasure home.",
    priority: 4,
    media: "none",
    status: "in-development",
  },

  // Books
  {
    id: "the-crossed-thief",
    category: "books",
    title: "The Crossed Thief",
    hook: "Religious historical fiction of the thief crucified beside Christ — a life of near-misses that finally finds belief on the cross.",
    priority: 1,
    media: "none",
    status: "in-development",
  },
  {
    id: "the-red-plate-of-broccoli",
    category: "books",
    title: "The Red Plate of Broccoli",
    hook: "A psychological thriller about forced dinners, buried scars, and a hostage clock where persuasion is the only way out.",
    priority: 2,
    media: "none",
    status: "in-development",
  },
  {
    id: "mr-teeth",
    category: "books",
    title: "Mr. Teeth",
    hook: "A mystery thriller where the killer marks victims one tooth at a time — until the capture story isn't what it seems.",
    priority: 3,
    media: "none",
    status: "in-development",
  },
  {
    id: "why-elephants-are-afraid-of-mice",
    category: "books",
    title: "Why Elephants are Afraid of Mice",
    hook: "A kids' tale of cheese-loving elephants, clever mice, and how fear of mice really began.",
    priority: 4,
    media: "none",
    status: "in-development",
  },
];

export function getProjectsByCategory(category: PortfolioCategory) {
  return portfolioProjects
    .filter((project) => project.category === category)
    .sort((a, b) => a.priority - b.priority);
}
