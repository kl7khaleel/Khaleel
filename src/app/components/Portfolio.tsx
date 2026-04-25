import { useState, useRef } from "react";
import { Play, X, ZoomIn, ExternalLink, ArrowRight } from "lucide-react";

// ============================================================
//  AUTO IMAGE LOADER
// ============================================================
const _glob = import.meta.glob(
  [
    "./figma/Assets/**/*.jpg",
    "./figma/Assets/**/*.JPG",
    "./figma/Assets/**/*.jpeg",
    "./figma/Assets/**/*.JPEG",
    "./figma/Assets/**/*.png",
    "./figma/Assets/**/*.PNG",
    "./figma/Assets/**/*.webp",
    "./figma/Assets/**/*.gif",
  ],
  { eager: true },
) as Record<string, { default: string }>;

const IMG: Record<string, string> = {};
for (const [fullPath, mod] of Object.entries(_glob)) {
  const key = fullPath.replace(/^\.\/figma\/Assets\//, "");
  IMG[key] = mod.default;
}

function img(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return IMG[path] ?? "";
}

// ============================================================
//  AUTO VIDEO LOADER
// ============================================================
const _videoGlob = import.meta.glob(
  [
    "./figma/Assets/**/*.mp4",
    "./figma/Assets/**/*.MP4",
    "./figma/Assets/**/*.webm",
    "./figma/Assets/**/*.WEBM",
    "./figma/Assets/**/*.ogg",
    "./figma/Assets/**/*.OGG",
    "./figma/Assets/**/*.mov",
    "./figma/Assets/**/*.MOV",
    "./figma/Assets/**/*.avi",
    "./figma/Assets/**/*.AVI",
    "./figma/Assets/**/*.mkv",
    "./figma/Assets/**/*.MKV",
  ],
  { eager: true },
) as Record<string, { default: string }>;

const VID: Record<string, string> = {};
for (const [fullPath, mod] of Object.entries(_videoGlob)) {
  const key = fullPath.replace(/^\.\/figma\/Assets\//, "");
  VID[key] = mod.default;
}

function vid(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return VID[path] ?? "";
}

function videoMime(path: string): string {
  const ext = path.split(".").pop()?.toLowerCase() ?? "";
  const map: Record<string, string> = {
    mp4: "video/mp4",
    webm: "video/webm",
    ogg: "video/ogg",
    ogv: "video/ogg",
    mov: "video/quicktime",
    avi: "video/x-msvideo",
    mkv: "video/x-matroska",
  };
  return map[ext] ?? "video/mp4";
}

function titleFromFilePath(path: string): string {
  const filename = path.split("/").pop() ?? path;
  return filename
    .replace(/\.[^.]+$/, "")
    .split(/[-_]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

// ============================================================
//  CATEGORY DEFINITIONS
// ============================================================
const CATEGORIES = [
  { id: "all", label: "All", color: "#00e5cc" },
  { id: "social", label: "Social Media", color: "#ff2d78" },
  { id: "print", label: "Print & Flyers", color: "#9b30ff" },
  { id: "branding", label: "Branding", color: "#00e5cc" },
  { id: "packaging", label: "Packaging", color: "#00bfff" },
  { id: "videos", label: "Video Projects", color: "#ff9a00" },
];

// ============================================================
//  PORTFOLIO ITEMS
// ============================================================
const portfolioItems: {
  id: string;
  category: string;
  title: string;
  description: string;
  src: string;
  link?: string;
}[] = [
  // ── Social Media ─────────────────────────────────────────
  {
    id: "social-01",
    category: "social",
    title: "Abetta Graduation",
    description: "Graduation campaign creative designed for Abetta with an academic celebratory tone.",
    src: "Social_media/Abetta-MTTC-RTTC-Graduation.jpg",
  },
  {
    id: "social-04",
    category: "social",
    title: "Abetta Eid Mubarak",
    description: "Festive Eid Mubarak social media creative for the Abetta brand.",
    src: "Social_media/Abetta_Eid mubarak_v1.jpg",
  },
  {
    id: "social-05",
    category: "social",
    title: "Do It for RR",
    description: "Motivational match-day social creative for the Rajasthan Royals fanbase.",
    src: "Social_media/do-it-for-rr.jpg",
  },
  {
    id: "social-06",
    category: "social",
    title: "Excuses to Watch the Match",
    description: "Witty social media post encouraging fans to find reasons to watch the game.",
    src: "Social_media/excuses-to-watch-the-match.jpg",
  },
  {
    id: "social-07",
    category: "social",
    title: "OLIO × BFC — The Blues Won",
    description: "Victory post for OLIO's collaboration with Bengaluru FC celebrating the win.",
    src: "Social_media/OLIO-X-BFC_The-Blues-won-this-battle_V1.png",
  },
  {
    id: "social-09",
    category: "social",
    title: "Olio & Juliet — Pizza",
    description: "Romantic themed pizza social creative for Olio's Valentine's Day campaign.",
    src: "Social_media/olio-and-juliet_Pizza_aw_v1.jpg",
  },
  {
    id: "social-10",
    category: "social",
    title: "Desi Burgers",
    description: "Bold food photography social post highlighting Olio's desi burger range.",
    src: "Social_media/desi-burgers_aw_v1.jpg",
  },
  {
    id: "social-11",
    category: "social",
    title: "Garlic Knots — Vol.1",
    description: "Appetising social media visual for Olio's garlic knots menu launch.",
    src: "Social_media/Olio_garlic knots_sm_v2-01.jpg",
  },
  {
    id: "social-12",
    category: "social",
    title: "Garlic Knots — Vol.2",
    description: "Second social creative in the garlic knots series for Olio.",
    src: "Social_media/Olio_garlic knots_sm_v2-02.jpg",
  },
  {
    id: "social-15",
    category: "social",
    title: "Name This Burrito Bowl",
    description: "UGC-style engagement post asking followers to name Olio's new burrito bowl.",
    src: "Social_media/Name-this-burrito-bowl_v1.jpg",
  },
  {
    id: "social-16",
    category: "social",
    title: "The Perfect Start to Your Day",
    description: "Morning-vibes breakfast social creative for Olio's day-starter menu.",
    src: "Social_media/The-Perfect-start-to-your-day_aw_v1_2.jpg",
  },
  {
    id: "social-17",
    category: "social",
    title: "Chilli Oil",
    description: "Minimal product social post showcasing Olio's signature chilli oil offering.",
    src: "Social_media/MC_Olio_Chilli-oil_V1 (1).png",
  },
  {
    id: "social-18",
    category: "social",
    title: "Pop of Colour & Freshness",
    description: "Vibrant social creative celebrating Olio's fresh and colourful menu.",
    src: "Social_media/pop-of-colour&-freshness_1.jpg",
  },
  {
    id: "social-19",
    category: "social",
    title: "EatFit — Fun-tastic Performances",
    description: "Social media creative for EatFit's campaign tying nutrition with performance.",
    src: "Social_media/Eatfit_Fun-tastic performances_v1-02.jpg",
  },
  {
    id: "social-20",
    category: "social",
    title: "Husl Bar — What's in My Bag?",
    description: "Lifestyle social post for Husl Bar's audience engagement series.",
    src: "Social_media/Husl-bar_Whats-in-my-bag.jpg",
  },
  {
    id: "social-21",
    category: "social",
    title: "Bright Smiles Fresh Outfits",
    description: "Fashion-forward social creative with a bright and playful visual tone.",
    src: "Social_media/Bright smiles Fresh outfits.png",
  },
  {
    id: "social-22",
    category: "social",
    title: "KOE — Varun Dhawan",
    description: "Celebrity-driven social creative for the Kingdom of Entertainment brand.",
    src: "Social_media/KOE_Varun dhavan-04.jpg",
  },
  {
    id: "social-23",
    category: "social",
    title: "Krish Mask",
    description: "Superhero-themed social post inspired by the Krish franchise.",
    src: "Social_media/Krish-mask_v1.jpg",
  },
  {
    id: "social-25",
    category: "social",
    title: "The KB 2.0",
    description: "Brand refresh social post for The KB, spotlighting the updated identity.",
    src: "Social_media/The-KB-2.0.jpg",
  },
  {
    id: "social-26",
    category: "social",
    title: "Design Work I",
    description: "Creative graphic design work from the portfolio collection.",
    src: "Social_media/IMG_5558.JPG",
  },
  {
    id: "social-27",
    category: "social",
    title: "Design Work II",
    description: "Creative graphic design work from the portfolio collection.",
    src: "Social_media/IMG_5559.JPG",
  },
  {
    id: "social-28",
    category: "social",
    title: "Gochu Jang Wings",
    description: "Bold food campaign visual built around spicy flavour and product drama.",
    src: "Social_media/Gochu jang Wings.jpg",
  },
  {
    id: "social-29",
    category: "social",
    title: "KP Gochujang Fries",
    description: "High-energy social media artwork promoting Gochujang fries with punchy styling.",
    src: "Social_media/KP_Gochujang-fries_v1.jpg",
  },
  {
    id: "social-30",
    category: "social",
    title: "Miniature Cleaners",
    description: "Conceptual social artwork using miniature storytelling and surreal composition.",
    src: "Social_media/Miniature Cleaners in a Cotton Landscape.jpg",
  },
  {
    id: "social-31",
    category: "social",
    title: "TM Experience The Power",
    description: "Campaign creative with bold product-led visuals and energetic messaging.",
    src: "Social_media/TM_experience the power_v1.jpg",
  },
  {
    id: "social-32",
    category: "social",
    title: "TM Ramadan Kareem",
    description: "Festive social post designed for a Ramadan campaign with warm celebratory styling.",
    src: "Social_media/TM_ramadan kareem_v1.jpg",
  },

  // ── Print & Flyers ─────────────────────────────────────────
  {
    id: "flyer-01",
    category: "print",
    title: "CakeZone — Lucknow Launch Flyer",
    description: "Print flyer designed for the CakeZone store launch in Lucknow.",
    src: "Flyer/cakezone_lucknow flyer-01.jpg",
  },
  {
    id: "flyer-02",
    category: "print",
    title: "CakeZone — Dessert Cup Flyer",
    description: "Product launch flyer showcasing CakeZone's signature dessert cup range.",
    src: "Flyer/CZ_Dessrt cup_flyer_v1-01.jpg",
  },
  {
    id: "flyer-03",
    category: "print",
    title: "CakeZone — Diwali Flyer",
    description: "Festive A5 print flyer for CakeZone's Diwali promotional campaign.",
    src: "Flyer/CZ-Diwali-A5_v1.jpg",
  },
  {
    id: "flyer-04",
    category: "print",
    title: "Nature Conservation Brochure",
    description: "Environmental awareness brochure featuring tree conservation messaging.",
    src: "Flyer/IMG_5564.JPG",
  },
  {
    id: "flyer-04b",
    category: "print",
    title: "Design Flyer V2",
    description: "Creative print design from the portfolio flyer collection.",
    src: "Flyer/IMG_5567.JPG",
  },

  // ── Packaging ─────────────────────────────────────────────
  {
    id: "pack-01",
    category: "packaging",
    title: "Anti-Aging Face Mask Packaging",
    description: "Clean skincare product packaging design featuring minimalist layout and product photography.",
    src: "Package/A_premium_FMCG_202604122115.jpg",
  },
  {
    id: "pack-02",
    category: "packaging",
    title: "Face Mask Collection Box Set",
    description: "Multi-product packaging system for skincare line featuring organized grid layout and color coding.",
    src: "Package/A_premium_product_202604122125.jpg",
  },
  {
    id: "pack-03",
    category: "packaging",
    title: "Editorial Calendar Design",
    description: "Innovative calendar packaging with modern typography and editorial design approach.",
    src: "Package/Two_distinct_pizza_202604131109.jpg",
  },
  {
    id: "pack-04",
    category: "packaging",
    title: "Vintage Breakfast Tin",
    description: "Retro-inspired food packaging with nostalgic tin design and classic branding treatment.",
    src: "Package/Two_square_cake_202604131123.jpg",
  },
  {
    id: "pack-05",
    category: "packaging",
    title: "Vibrant Product Packaging",
    description: "Color-rich product packaging concept designed for a bold shelf presence.",
    src: "Package/A_vibrant_product_202604122105.jpg",
  },
];

// ============================================================
//  VIDEO ITEMS
// ============================================================
const folderVideoItems = Object.keys(VID)
  .filter((path) => path.startsWith("Video/") || path.startsWith("video/"))
  .sort((a, b) => a.localeCompare(b))
  .map((path, index) => ({
    id: `local-video-${index + 1}`,
    title: titleFromFilePath(path),
    description: "Local video loaded automatically from the Video folder.",
    type: "local" as const,
    src: path,
  }));

const allVideoItems = folderVideoItems;

// ============================================================
//  TYPES
// ============================================================
type LightboxState =
  | { type: "image"; item: (typeof portfolioItems)[0] }
  | { type: "video"; item: (typeof allVideoItems)[0] }
  | null;

type PortfolioItem = (typeof portfolioItems)[0];

type BrandingGroup = {
  id: string;
  name: string;
  accent: string;
  items: PortfolioItem[];
};

const BRANDING_ACCENTS = ["#00e5cc", "#ff2d78", "#00bfff", "#9b30ff", "#ff9a00"];

function titleCaseLabel(value: string): string {
  return value
    .replace(/\.[^.]+$/, "")
    .split(/[-_]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

const BRANDING_GROUPS: BrandingGroup[] = Object.entries(
  Object.keys(IMG)
    .filter((assetPath) => assetPath.startsWith("Branding/"))
    .reduce<Record<string, string[]>>((groups, assetPath) => {
      const relativePath = assetPath.replace(/^Branding\//, "");
      const [folderName, ...rest] = relativePath.split("/");
      const brandFolder = rest.length > 0 ? folderName : "Branding";
      if (!groups[brandFolder]) groups[brandFolder] = [];
      groups[brandFolder].push(assetPath);
      return groups;
    }, {}),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([folderName, assetPaths], index) => ({
    id: folderName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name: titleCaseLabel(folderName),
    accent: BRANDING_ACCENTS[index % BRANDING_ACCENTS.length],
    items: assetPaths
      .sort((a, b) => a.localeCompare(b))
      .map((assetPath, itemIndex) => {
        const filename = assetPath.split("/").pop() ?? `work-${itemIndex + 1}`;
        return {
          id: `brand-folder-${folderName}-${itemIndex + 1}`,
          category: "branding",
          title: titleCaseLabel(filename),
          description: `${titleCaseLabel(folderName)} branding work from the Branding folder.`,
          src: assetPath,
        };
      }),
  }));

// ============================================================
//  BRANDING THUMBNAIL CARD
// ============================================================
function BrandingThumbCard({
  group,
  onClick,
}: {
  group: BrandingGroup;
  onClick: () => void;
}) {
  const previewItems = group.items.slice(0, 4);
  const accentRgb = hexToRgb(group.accent);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{
        background: "#0d0d1a",
        border: `1px solid rgba(${accentRgb}, 0.2)`,
        boxShadow: `0 4px 24px rgba(0,0,0,0.5)`,
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-4px) scale(1.01)";
        el.style.boxShadow = `0 16px 40px ${group.accent}30`;
        el.style.borderColor = `rgba(${accentRgb}, 0.6)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0) scale(1)";
        el.style.boxShadow = `0 4px 24px rgba(0,0,0,0.5)`;
        el.style.borderColor = `rgba(${accentRgb}, 0.2)`;
      }}
      onClick={onClick}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          aspectRatio: "1 / 1",
        }}
      >
        {[0, 1, 2, 3].map((i) => {
          const item = previewItems[i];
          const imgSrc = item ? img(item.src) : "";
          return (
            <div
              key={i}
              style={{
                overflow: "hidden",
                background: imgSrc ? "#000" : `rgba(${accentRgb},0.06)`,
                position: "relative",
              }}
            >
              {imgSrc ? (
                <img
                  src={imgSrc}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  className="group-hover:scale-110"
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: `linear-gradient(135deg, rgba(${accentRgb},0.08), rgba(${accentRgb},0.02))`,
                  }}
                />
              )}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRight: i % 2 === 0 ? `1px solid rgba(${accentRgb},0.15)` : "none",
                  borderBottom: i < 2 ? `1px solid rgba(${accentRgb},0.15)` : "none",
                  pointerEvents: "none",
                }}
              />
            </div>
          );
        })}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(180deg, transparent 30%, rgba(5,5,18,0.85) 100%)`,
            pointerEvents: "none",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          padding: "18px 20px 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "999px",
              background: group.accent,
              boxShadow: `0 0 10px ${group.accent}`,
              flexShrink: 0,
            }}
          />
          <h3
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "clamp(0.9rem, 1.8vw, 1.15rem)",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "0.04em",
            }}
          >
            {group.name}
          </h3>
        </div>

        <ArrowRight
          size={14}
          style={{
            color: group.accent,
            transition: "transform 0.2s ease",
          }}
          className="group-hover:translate-x-0.5"
        />
      </div>
    </div>
  );
}

// ============================================================
//  BRANDING SCROLL CONTAINER
// ============================================================
function BrandingScrollGrid({
  groups,
  onGroupClick,
}: {
  groups: BrandingGroup[];
  onGroupClick: (group: BrandingGroup) => void;
}) {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {groups.map((group) => (
          <BrandingThumbCard
            key={group.id}
            group={group}
            onClick={() => onGroupClick(group)}
          />
        ))}
      </div>

      {/* Item count badge */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "18px",
          zIndex: 3,
          padding: "3px 10px",
          borderRadius: "999px",
          background: "rgba(0,229,204,0.08)",
          border: "1px solid rgba(0,229,204,0.18)",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            color: "rgba(0,229,204,0.6)",
            letterSpacing: "0.05em",
          }}
        >
          {groups.length} brands
        </span>
      </div>

    </div>
  );
}

// ============================================================
//  BRANDING BENTO MODAL
// ============================================================
function BrandingBentoModal({
  group,
  onClose,
  onImageOpen,
}: {
  group: BrandingGroup;
  onClose: () => void;
  onImageOpen: (item: (typeof portfolioItems)[0]) => void;
}) {
  const accentRgb = hexToRgb(group.accent);
  const items = group.items;

  const bentoStyles: Array<{ gridColumn: string; gridRow: string }> = [
    { gridColumn: "span 2", gridRow: "span 1" },
    { gridColumn: "span 1", gridRow: "span 2" },
    { gridColumn: "span 1", gridRow: "span 1" },
    { gridColumn: "span 1", gridRow: "span 1" },
    { gridColumn: "span 1", gridRow: "span 1" },
    { gridColumn: "span 1", gridRow: "span 1" },
  ];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-3xl overflow-hidden"
        style={{
          background: "#0a0a14",
          border: `1px solid rgba(${accentRgb}, 0.25)`,
          boxShadow: `0 0 80px ${group.accent}18, 0 32px 64px rgba(0,0,0,0.6)`,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "24px 28px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: `1px solid rgba(${accentRgb}, 0.12)`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                background: group.accent,
                boxShadow: `0 0 14px ${group.accent}`,
                flexShrink: 0,
              }}
            />
            <h2
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                fontWeight: 700,
                color: "#ffffff",
                margin: 0,
                letterSpacing: "0.04em",
              }}
            >
              {group.name}
            </h2>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                color: group.accent,
                padding: "3px 10px",
                borderRadius: "999px",
                background: `rgba(${accentRgb}, 0.12)`,
                border: `1px solid rgba(${accentRgb}, 0.3)`,
              }}
            >
              Brand Identity
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.14)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
            }}
          >
            <X size={16} color="#fff" />
          </button>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            padding: "24px 28px 28px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "220px",
            gap: "12px",
            maxHeight: "calc(90vh - 120px)",
            overflowY: "auto",
          }}
        >
          {items.map((item, index) => {
            const imgSrc = img(item.src);
            const bStyle = bentoStyles[index % bentoStyles.length] ?? {};

            return (
              <div
                key={item.id}
                className="group relative overflow-hidden cursor-pointer"
                style={{
                  ...bStyle,
                  borderRadius: "18px",
                  background: imgSrc ? "#000" : `rgba(${accentRgb},0.06)`,
                  border: `1px solid rgba(${accentRgb}, 0.14)`,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "scale(1.015)";
                  el.style.boxShadow = `0 8px 28px ${group.accent}22`;
                  el.style.borderColor = `rgba(${accentRgb}, 0.45)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "scale(1)";
                  el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.4)";
                  el.style.borderColor = `rgba(${accentRgb}, 0.14)`;
                }}
                onClick={() => onImageOpen(item)}
              >
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={item.title}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    className="group-hover:scale-105"
                  />
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(135deg, rgba(${accentRgb},0.1), rgba(${accentRgb},0.02))`,
                    }}
                  />
                )}

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(0deg, rgba(5,5,18,0.95) 0%, rgba(5,5,18,0.4) 50%, transparent 100%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  className="group-hover:opacity-100"
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "16px",
                    transform: "translateY(8px)",
                    opacity: 0,
                    transition: "transform 0.3s ease, opacity 0.3s ease",
                  }}
                  className="group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#fff",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </p>
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    width: "30px",
                    height: "30px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transform: "scale(0.7)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                  className="group-hover:opacity-100 group-hover:scale-100"
                >
                  <ZoomIn size={13} color="#fff" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── LocalVideoCard ──────────────────────────────────────────
function LocalVideoCard({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const resolvedSrc = vid(src);
  return resolvedSrc ? (
    <video
      ref={videoRef}
      src={resolvedSrc}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      muted
      playsInline
      preload="metadata"
      onLoadedMetadata={(e) => {
        (e.target as HTMLVideoElement).currentTime = 0.1;
      }}
      aria-label={title}
    />
  ) : null;
}

// ============================================================
//  MAIN PORTFOLIO COMPONENT
// ============================================================
export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const [openBrandGroup, setOpenBrandGroup] = useState<BrandingGroup | null>(null);

  const activeCat = CATEGORIES.find((c) => c.id === activeFilter)!;

  const filteredImages =
    activeFilter === "all"
      ? portfolioItems
      : activeFilter === "videos"
        ? []
        : portfolioItems.filter((item) => item.category === activeFilter);

  const showVideos = activeFilter === "all" || activeFilter === "videos";
  const filteredVideos = showVideos ? allVideoItems : [];

  const getCat = (id: string) =>
    CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[0];

  return (
    <section id="portfolio" className="py-20 relative bg-[#0a0a14]">
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 100% 40%, rgba(255,45,120,0.05) 0%, transparent 55%),
            radial-gradient(ellipse at 0% 60%, rgba(0,191,255,0.05) 0%, transparent 55%)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="font-['Space_Grotesk'] text-xs tracking-[0.3em] uppercase mb-3 text-[#00e5cc]">
            Creative Work
          </p>
          <h2
            className="font-['Orbitron'] font-bold"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#ffffff",
              textShadow: "0 0 20px rgba(0,229,204,0.2)",
            }}
          >
            Portfolio
          </h2>
          <div
            className="h-px w-24 mx-auto mt-4"
            style={{
              background: "linear-gradient(90deg, transparent, #00e5cc, transparent)",
            }}
          />
        </div>

        {/* Filter tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10 p-2 rounded-2xl mx-auto w-fit"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className="px-5 py-2 rounded-xl text-sm font-['Space_Grotesk'] font-medium transition-all duration-200"
              style={
                activeFilter === cat.id
                  ? {
                      background: `rgba(${hexToRgb(cat.color)}, 0.18)`,
                      color: cat.color,
                      boxShadow: `0 0 14px ${cat.color}40`,
                      border: `1px solid ${cat.color}60`,
                    }
                  : {
                      background: "transparent",
                      color: "#666",
                      border: "1px solid transparent",
                    }
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        {activeFilter === "branding" ? (
          BRANDING_GROUPS.length === 0 ? (
            <EmptyState color={activeCat?.color ?? "#00e5cc"} isVideos={false} />
          ) : (
            /* ── BRANDING: scroll container wrapping the grid ── */
            <BrandingScrollGrid
              groups={BRANDING_GROUPS}
              onGroupClick={(group) => setOpenBrandGroup(group)}
            />
          )
        ) : filteredImages.length === 0 && filteredVideos.length === 0 ? (
          <EmptyState
            color={activeCat?.color ?? "#00e5cc"}
            isVideos={activeFilter === "videos"}
          />
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {/* Image cards */}
            {filteredImages.map((item) => {
              const cat = getCat(item.category);
              const imgSrc = img(item.src);
              return (
                <div key={item.id} className="break-inside-avoid">
                  <div
                    className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                    style={{
                      background: "#111120",
                      border: `1px solid ${cat.color}18`,
                      boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                    }}
                    onClick={() => setLightbox({ type: "image", item })}
                  >
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={item.title}
                        className="w-full object-cover block transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className="w-full h-48 flex items-center justify-center"
                        style={{ background: `rgba(${hexToRgb(cat.color)},0.05)` }}
                      >
                        <span className="font-['Space_Grotesk'] text-xs text-gray-600">
                          {item.src}
                        </span>
                      </div>
                    )}

                    <div
                      className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(0deg, rgba(5,5,18,0.95) 0%, rgba(5,5,18,0.6) 60%, transparent 100%)",
                      }}
                    >
                      <span
                        className="inline-block px-2 py-0.5 rounded-full text-xs font-['Space_Grotesk'] font-semibold mb-2 w-fit"
                        style={{
                          background: `rgba(${hexToRgb(cat.color)}, 0.2)`,
                          color: cat.color,
                          border: `1px solid ${cat.color}50`,
                        }}
                      >
                        {cat.label}
                      </span>
                      <h4 className="font-['Space_Grotesk'] font-semibold text-sm text-white mb-1">
                        {item.title}
                      </h4>
                    </div>

                    <div
                      className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(6px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <ZoomIn size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Video cards */}
            {filteredVideos.map((vidItem) => (
              <div key={vidItem.id} className="break-inside-avoid">
                <div
                  className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                  style={{
                    background: "#111120",
                    border: "1px solid rgba(255,154,0,0.18)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                    aspectRatio: "16/9",
                  }}
                  onClick={() => setLightbox({ type: "video", item: vidItem })}
                >
                  {vidItem.type === "local" && !vidItem.thumbnail ? (
                    <LocalVideoCard src={vidItem.src} title={vidItem.title} />
                  ) : vidItem.thumbnail ? (
                    <img
                      src={vidItem.thumbnail.startsWith("http") ? vidItem.thumbnail : img(vidItem.thumbnail)}
                      alt={vidItem.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,154,0,0.1), rgba(155,48,255,0.1))",
                      }}
                    />
                  )}

                  <div className="absolute inset-0" style={{ background: "rgba(5,5,18,0.55)" }} />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "rgba(255,154,0,0.2)",
                        border: "2px solid #ff9a00",
                        boxShadow: "0 0 28px rgba(255,154,0,0.5)",
                      }}
                    >
                      <Play size={26} style={{ color: "#ff9a00" }} fill="#ff9a00" />
                    </div>
                  </div>

                  <div
                    className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(0deg, rgba(5,5,18,0.95) 0%, transparent 100%)" }}
                  >
                    <span
                      className="inline-block px-2 py-0.5 rounded-full text-xs font-['Space_Grotesk'] font-semibold mb-1 w-fit"
                      style={{
                        background: "rgba(255,154,0,0.2)",
                        color: "#ff9a00",
                        border: "1px solid rgba(255,154,0,0.5)",
                      }}
                    >
                      Video Project
                    </span>
                    <h4 className="font-['Space_Grotesk'] font-semibold text-sm text-white">{vidItem.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeFilter !== "branding" && (filteredImages.length > 0 || filteredVideos.length > 0) && (
          <p className="text-center font-['Space_Grotesk'] text-xs text-gray-600 mt-8">
            Showing {filteredImages.length + filteredVideos.length} project
            {filteredImages.length + filteredVideos.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      {/* ── BRANDING BENTO MODAL ── */}
      {openBrandGroup && (
        <BrandingBentoModal
          group={openBrandGroup}
          onClose={() => setOpenBrandGroup(null)}
          onImageOpen={(item) => {
            setOpenBrandGroup(null);
            setLightbox({ type: "image", item });
          }}
        />
      )}

      {/* ── IMAGE / VIDEO LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden"
            style={{
              background: "#0d0d1a",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 60px rgba(0,229,204,0.12)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <X size={16} className="text-white" />
            </button>

            {lightbox.type === "image" &&
              (() => {
                const cat = getCat(lightbox.item.category);
                return (
                  <>
                    <img
                      src={img(lightbox.item.src)}
                      alt={lightbox.item.title}
                      className="w-full max-h-[75vh] object-contain"
                    />
                    <div className="px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
                      <div>
                        <span
                          className="inline-block px-2 py-0.5 rounded-full text-xs font-['Space_Grotesk'] font-semibold mb-2"
                          style={{
                            background: `rgba(${hexToRgb(cat.color)}, 0.18)`,
                            color: cat.color,
                            border: `1px solid ${cat.color}50`,
                          }}
                        >
                          {cat.label}
                        </span>
                        <h3 className="font-['Space_Grotesk'] font-semibold text-base text-white">
                          {lightbox.item.title}
                        </h3>
                      </div>
                      {lightbox.item.link && (
                        <a
                          href={lightbox.item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-['Space_Grotesk'] font-semibold transition-all duration-200 hover:scale-105"
                          style={{
                            background: "rgba(0,229,204,0.12)",
                            border: "1px solid rgba(0,229,204,0.4)",
                            color: "#00e5cc",
                          }}
                        >
                          View Project <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </>
                );
              })()}

            {lightbox.type === "video" && (
              <div>
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  {lightbox.item.type === "local" && (
                    <video
                      className="w-full h-full object-contain bg-black"
                      poster={
                        lightbox.item.thumbnail
                          ? lightbox.item.thumbnail.startsWith("http")
                            ? lightbox.item.thumbnail
                            : img(lightbox.item.thumbnail)
                          : undefined
                      }
                      controls
                      autoPlay
                    >
                      <source src={vid(lightbox.item.src)} type={videoMime(lightbox.item.src)} />
                    </video>
                  )}
                </div>
                <div className="px-6 py-4">
                  <span
                    className="inline-block px-2 py-0.5 rounded-full text-xs font-['Space_Grotesk'] font-semibold mb-2"
                    style={{
                      background: "rgba(255,154,0,0.18)",
                      color: "#ff9a00",
                      border: "1px solid rgba(255,154,0,0.5)",
                    }}
                  >
                    Video Project
                  </span>
                  <h3 className="font-['Space_Grotesk'] font-semibold text-base text-white">
                    {lightbox.item.title}
                  </h3>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

// ── Helpers ──────────────────────────────────────────────────

function EmptyState({ color, isVideos }: { color: string; isVideos: boolean }) {
  return (
    <div
      className="rounded-3xl p-16 text-center mx-auto max-w-lg"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px dashed ${color}30`,
      }}
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
        style={{
          background: `rgba(${hexToRgb(color)}, 0.08)`,
          border: `2px dashed ${color}40`,
          boxShadow: `0 0 20px ${color}18`,
        }}
      >
        {isVideos ? <Play size={32} style={{ color }} /> : <ZoomIn size={32} style={{ color }} />}
      </div>
      <h3 className="font-['Orbitron'] font-bold text-base mb-3" style={{ color }}>
        {isVideos ? "Video Projects Coming Soon" : "No Items in This Category"}
      </h3>
      <p className="font-['Space_Grotesk'] text-sm text-gray-500">
        {isVideos
          ? "Add local files to Assets/Video or Assets/video to show them here automatically."
          : "Add entries to portfolioItems in Portfolio.tsx with a matching category id."}
      </p>
    </div>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "0,0,0";
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}
