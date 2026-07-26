import menu from "./menu.svg";
import close from "./close.svg";
import logo from "./bsplogo.png";

const svgDataUri = (svg) => `data:image/svg+xml,${encodeURIComponent(svg)}`;

const createBadge = (label, colors) =>
  svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${colors[0]}"/>
          <stop offset="100%" stop-color="${colors[1]}"/>
        </linearGradient>
        <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="20" stdDeviation="18" flood-color="#000000" flood-opacity=".35"/>
        </filter>
      </defs>
      <rect width="512" height="512" rx="112" fill="#050816"/>
      <circle cx="380" cy="112" r="104" fill="${colors[1]}" opacity=".2"/>
      <circle cx="126" cy="396" r="132" fill="${colors[0]}" opacity=".18"/>
      <path d="M256 72 414 166v180L256 440 98 346V166Z" fill="url(#g)" filter="url(#s)"/>
      <path d="M256 112 378 184v140L256 396 134 324V184Z" fill="#111827" opacity=".88"/>
      <text x="256" y="284" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="96" font-weight="800" fill="#ffffff" letter-spacing="4">${label}</text>
    </svg>
  `);

const createCard = (title, subtitle, colors) =>
  svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${colors[0]}"/>
          <stop offset="100%" stop-color="${colors[1]}"/>
        </linearGradient>
      </defs>
      <rect width="960" height="540" rx="34" fill="#050816"/>
      <path d="M0 0h960v540H0z" fill="url(#g)" opacity=".88"/>
      <path d="M86 84h788v372H86z" fill="#050816" opacity=".42"/>
      <path d="M160 360 296 180l112 124 80-92 312 148v96H160z" fill="#ffffff" opacity=".18"/>
      <circle cx="742" cy="148" r="72" fill="#ffffff" opacity=".2"/>
      <text x="92" y="116" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="700" fill="#ffffff" opacity=".72">${subtitle}</text>
      <text x="92" y="442" font-family="Inter, Arial, sans-serif" font-size="56" font-weight="900" fill="#ffffff">${title}</text>
    </svg>
  `);

const backend = createBadge("EV", ["#00c6ff", "#0072ff"]);
const creator = createBadge("CC", ["#ff4d6d", "#7b2cbf"]);
const mobile = createBadge("TM", ["#2dd4bf", "#22c55e"]);
const web = createBadge("TR", ["#f97316", "#facc15"]);

const csgo = createBadge("CS", ["#64748b", "#06b6d4"]);
const minecraft = createBadge("MC", ["#16a34a", "#84cc16"]);
const pubg = createBadge("PB", ["#f59e0b", "#dc2626"]);
const apex = createBadge("AX", ["#ef4444", "#111827"]);
const dota = createBadge("D2", ["#991b1b", "#f97316"]);
const fifa = createBadge("FC", ["#2563eb", "#22c55e"]);
const fortnite = createBadge("FN", ["#a855f7", "#06b6d4"]);
const overwatch = createBadge("OW", ["#f97316", "#facc15"]);
const rocket_league = createBadge("RL", ["#0ea5e9", "#1d4ed8"]);
const r6 = createBadge("R6", ["#111827", "#f8fafc"]);
const valorant = createBadge("VL", ["#ff4655", "#111827"]);
const gta5 = createBadge("V", ["#22c55e", "#111827"]);

const iatls2 = createCard("Immortal Among The Legends", "Tournament", ["#7c3aed", "#db2777"]);
const tournaments = createCard("Tournaments", "Black Spades Esports", ["#ef4444", "#f97316"]);
const recruitments = createCard("Recruitments", "Black Spades Esports", ["#0ea5e9", "#22c55e"]);
const contentcreator = createCard("Content Creators", "Recruitment", ["#ec4899", "#8b5cf6"]);
const comingsoon = createCard("Coming Soon", "Black Spades Esports", ["#334155", "#0f172a"]);
const valkyries = createCard("War Of Valkyries", "Valorant", ["#db2777", "#7c3aed"]);
const aces = createCard("Aces", "Valorant Recruitment", ["#ef4444", "#111827"]);
const link = createCard("Join The Community", "Discord", ["#5865f2", "#0ea5e9"]);
const p2 = createBadge("DF", ["#f43f5e", "#fb7185"]);
const p3 = createBadge("SP", ["#14b8a6", "#3b82f6"]);
const gd = createCard("Graphics Design", "Recruitment", ["#f59e0b", "#ec4899"]);




export {
  logo,
  backend,
  creator,
  mobile,
  web,
  menu,
  close,
  valorant,
  gta5,
  dota,
  r6,
  fifa,
  apex,
  fortnite,
  csgo,
  minecraft,
  overwatch,
  rocket_league,
  pubg,
  tournaments,
  recruitments,
  link,
  p3,
  p2,
  valkyries,
  iatls2,
  contentcreator,
  comingsoon,
  aces,
  gd,
};
