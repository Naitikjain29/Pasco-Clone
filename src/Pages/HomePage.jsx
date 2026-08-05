import React, { useState } from "react";
import { Menu, X, Flame, Leaf, ChefHat, Phone, Mail, MapPin, Star, ArrowRight, ShieldCheck, Globe2, Soup } from "lucide-react";

const colors = {
  ink: "#1F1512",
  inkSoft: "#2B1E19",
  cream: "#F7EFE3",
  creamSoft: "#EFE4D2",
  turmeric: "#D9A62E",
  turmericDeep: "#B7860F",
  tamarind: "#8C2F1B",
  tamarindDeep: "#6E2313",
  curryLeaf: "#40513B",
  charcoal: "#2B211D",
};

const fontImport = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600;700&display=swap');
`;

const products = [
  {
    name: "Cooking Sauces",
    icon: Soup,
    color: colors.tamarind,
    blurb:
      "Simmered blends of herbs and spices that bring restaurant-style curry night to your own hob, no measuring spoons required.",
  },
  {
    name: "Cooking Pastes",
    icon: Flame,
    color: colors.turmericDeep,
    blurb:
      "A concentrated spice base built for curries, roasts, grills and marinades. One jar, endless ways to use it.",
  },
  {
    name: "Chutneys",
    icon: Leaf,
    color: colors.curryLeaf,
    blurb:
      "Slow-cooked with carefully chosen fruit for a sweet, tangy finish that sits perfectly beside any curry.",
  },
  {
    name: "Pickles",
    icon: ChefHat,
    color: colors.tamarindDeep,
    blurb:
      "Sharp, punchy and made from the freshest produce we can find, the finishing touch every thali needs.",
  },
];

const testimonials = [
  {
    quote:
      "This home cook now keeps every jar in the family in permanent rotation after switching from supermarket own-brand pastes.",
    name: "Home kitchen review",
  },
  {
    quote:
      "A diner praised the pickle range for tasting closer to homemade Indian condiments than anything else on the shelf.",
    name: "Home kitchen review",
  },
  {
    quote:
      "One shopper said the sauce range gave them enough variety to cook a different curry every night of the week.",
    name: "Home kitchen review",
  },
];

const stats = [
  { label: "Years perfecting the blend", value: "20+" },
  { label: "Countries stocking Pasco", value: "20+" },
  { label: "Generations in the kitchen", value: "2" },
];

function SpiceDivider() {
  const icons = [Flame, Leaf, ChefHat, Soup];
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(16px,4vw,40px)", padding: "28px 16px" }}>
      {icons.map((Icon, i) => (
        <React.Fragment key={i}>
          <Icon size={18} color={colors.turmericDeep} strokeWidth={1.75} />
          {i < icons.length - 1 && (
            <span style={{ width: 28, height: 1, background: colors.turmericDeep, opacity: 0.35 }} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function Jar({ fill }) {
  return (
    <svg viewBox="0 0 120 160" width="100%" height="100%" style={{ maxWidth: 120 }}>
      <rect x="34" y="8" width="52" height="18" rx="4" fill={colors.charcoal} />
      <rect x="30" y="24" width="60" height="10" rx="3" fill={colors.creamSoft} />
      <path
        d="M22 40 Q22 34 30 34 H90 Q98 34 98 40 V140 Q98 152 86 152 H34 Q22 152 22 140 Z"
        fill={colors.cream}
        stroke={colors.charcoal}
        strokeWidth="2"
      />
      <path d="M26 60 Q26 52 34 52 H86 Q94 52 94 60 V138 Q94 146 86 146 H34 Q26 146 26 138 Z" fill={fill} />
      <rect x="34" y="70" width="52" height="30" rx="3" fill={colors.cream} opacity="0.92" />
      <line x1="40" y1="80" x2="80" y2="80" stroke={fill} strokeWidth="2" />
      <line x1="40" y1="88" x2="70" y2="88" stroke={fill} strokeWidth="2" />
    </svg>
  );
}

export default function PascoFoodsHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Sauces", "Pastes", "Chutneys", "Pickles", "Our Story", "Contact"];

  return (
    <div style={{ fontFamily: "'Work Sans', sans-serif", color: colors.charcoal, background: colors.cream, width: "100%" }}>
      <style>{fontImport}</style>

      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: colors.ink,
          borderBottom: `1px solid ${colors.turmericDeep}55`,
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: colors.turmeric,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Flame size={20} color={colors.ink} strokeWidth={2.25} />
            </div>
            <span
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 600,
                fontSize: 22,
                color: colors.cream,
                letterSpacing: 0.5,
              }}
            >
              Pasco Foods
            </span>
          </div>

          <nav style={{ display: "none" }} className="pf-desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  color: colors.creamSoft,
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  marginLeft: 28,
                }}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="pf-desktop-nav" style={{ display: "none", alignItems: "center" }}>
            <a
              href="#"
              style={{
                background: colors.turmeric,
                color: colors.ink,
                padding: "10px 20px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                marginLeft: 28,
              }}
            >
              Shop the Range
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="pf-mobile-toggle"
            style={{
              background: "transparent",
              border: "none",
              color: colors.cream,
              cursor: "pointer",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <div
            className="pf-mobile-menu"
            style={{
              background: colors.inkSoft,
              padding: "8px 20px 20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  color: colors.creamSoft,
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: `1px solid ${colors.turmericDeep}33`,
                  fontSize: 15,
                }}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              style={{
                background: colors.turmeric,
                color: colors.ink,
                padding: "12px 20px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                marginTop: 16,
                textAlign: "center",
              }}
            >
              Shop the Range
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section style={{ background: colors.ink, position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(${colors.turmericDeep}22 1.5px, transparent 1.5px)`,
            backgroundSize: "22px 22px",
            opacity: 0.5,
          }}
        />
        <div
          className="pf-hero-grid"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "72px 20px 56px",
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                color: colors.turmeric,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Family recipes since day one
            </span>
            <h1
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 600,
                fontSize: "clamp(34px, 5vw, 56px)",
                lineHeight: 1.08,
                color: colors.cream,
                margin: "16px 0 20px",
              }}
            >
              Two generations of authentic Indian flavour, bottled for your kitchen.
            </h1>
            <p style={{ color: colors.creamSoft, fontSize: 17, lineHeight: 1.7, maxWidth: 480, marginBottom: 28 }}>
              Pasco Foods began as a spice paste made for a single restaurant kitchen. It grew into
              the sauces, pastes, chutneys and pickles trusted by professional chefs across the UK,
              now made for your own table.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href="#"
                style={{
                  background: colors.turmeric,
                  color: colors.ink,
                  padding: "14px 26px",
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                Explore the Range <ArrowRight size={17} />
              </a>
              <a
                href="#"
                style={{
                  border: `1px solid ${colors.creamSoft}55`,
                  color: colors.cream,
                  padding: "14px 26px",
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Our Story
              </a>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
            <div style={{ transform: "translateY(18px)" }}>
              <Jar fill={colors.tamarind} />
            </div>
            <div>
              <Jar fill={colors.turmericDeep} />
            </div>
            <div style={{ transform: "translateY(24px)" }}>
              <Jar fill={colors.curryLeaf} />
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: `1px solid ${colors.turmericDeep}33`,
            position: "relative",
          }}
        >
          <div
            className="pf-stats-grid"
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "22px 20px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              textAlign: "center",
            }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: colors.turmeric,
                    fontSize: 26,
                    fontWeight: 600,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ color: colors.creamSoft, fontSize: 12.5, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SpiceDivider />

      {/* OUR STORY */}
      <section style={{ padding: "20px 20px 64px" }}>
        <div
          className="pf-story-grid"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: colors.creamSoft,
              borderRadius: 20,
              padding: 32,
              order: 2,
            }}
          >
            <div style={{ display: "flex", gap: 14, marginBottom: 18 }}>
              <ShieldCheck size={22} color={colors.curryLeaf} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>SALSA approved kitchens</div>
                <div style={{ color: "#5b5049", fontSize: 13.5 }}>
                  Every batch is made to a certified food safety standard for small producers.
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 14 }}>
              <Globe2 size={22} color={colors.curryLeaf} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>Sold in over 20 countries</div>
                <div style={{ color: "#5b5049", fontSize: 13.5 }}>
                  Still supplying restaurants and takeaways across the UK and Europe today.
                </div>
              </div>
            </div>
          </div>

          <div style={{ order: 1 }}>
            <span
              style={{
                color: colors.tamarind,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Our Story
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 600,
                fontSize: "clamp(28px, 4vw, 38px)",
                margin: "14px 0 18px",
                lineHeight: 1.15,
              }}
            >
              It started in a family kitchen, missing the flavours of home.
            </h2>
            <p style={{ color: "#4a4038", fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>
              After moving to the UK from Mumbai, the Pasco family set out to recreate the food they
              grew up with. What began as a single spice paste for a local restaurant spread by word
              of mouth to kitchens up and down the country.
            </p>
            <p style={{ color: "#4a4038", fontSize: 16, lineHeight: 1.75 }}>
              Years later, that same recipe box became a retail range of pastes, pickles, chutneys
              and cooking sauces, now made by the second generation of the family, so anyone can
              bring that professional-kitchen flavour home.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{ background: colors.inkSoft, padding: "64px 20px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span
              style={{
                color: colors.turmeric,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              The Range
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 600,
                fontSize: "clamp(28px, 4vw, 38px)",
                color: colors.cream,
                margin: "14px 0 0",
              }}
            >
              Four ways to bring the flavour home
            </h2>
          </div>

          <div
            className="pf-products-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: 20,
            }}
          >
            {products.map(({ name, icon: Icon, color, blurb }) => (
              <div
                key={name}
                style={{
                  background: colors.ink,
                  border: `1px solid ${colors.turmericDeep}33`,
                  borderRadius: 16,
                  padding: 26,
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: `${color}22`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <Icon size={22} color={color} strokeWidth={2} />
                </div>
                <h3 style={{ color: colors.cream, fontSize: 18, fontWeight: 600, marginBottom: 10 }}>
                  {name}
                </h3>
                <p style={{ color: colors.creamSoft, fontSize: 14, lineHeight: 1.65, marginBottom: 18 }}>
                  {blurb}
                </p>
                <a
                  href="#"
                  style={{
                    color: colors.turmeric,
                    fontSize: 13.5,
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  View range <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "64px 20px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span
              style={{
                color: colors.tamarind,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              What people say
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 600,
                fontSize: "clamp(26px, 4vw, 34px)",
                margin: "14px 0 0",
              }}
            >
              Loved in home kitchens across the UK
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  background: colors.creamSoft,
                  borderRadius: 16,
                  padding: 26,
                }}
              >
                <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} color={colors.turmericDeep} fill={colors.turmericDeep} />
                  ))}
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#4a4038", marginBottom: 16 }}>
                  {t.quote}
                </p>
                <span style={{ fontSize: 12.5, color: "#8a7e73", fontWeight: 600 }}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SpiceDivider />

      {/* NEWSLETTER */}
      <section style={{ padding: "16px 20px 64px" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            background: colors.tamarind,
            borderRadius: 20,
            padding: "44px 32px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
              color: colors.cream,
              fontSize: "clamp(22px, 3.5vw, 30px)",
              marginBottom: 10,
            }}
          >
            Join the mailing list
          </h2>
          <p style={{ color: "#F0D9CE", fontSize: 15, marginBottom: 24, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
            New recipes, seasonal jars and first access to offers, straight from the Pasco family
            kitchen.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}
          >
            <input
              type="email"
              placeholder="you@example.com"
              style={{
                padding: "13px 18px",
                borderRadius: 999,
                border: "none",
                minWidth: 240,
                fontSize: 14,
                fontFamily: "inherit",
              }}
            />
            <button
              type="submit"
              style={{
                background: colors.turmeric,
                color: colors.ink,
                border: "none",
                padding: "13px 24px",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Sign up
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: colors.ink, padding: "48px 20px 24px" }}>
        <div
          className="pf-footer-grid"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 32,
            paddingBottom: 32,
            borderBottom: `1px solid ${colors.turmericDeep}33`,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: colors.turmeric,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Flame size={16} color={colors.ink} />
              </div>
              <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 18, color: colors.cream }}>
                Pasco Foods
              </span>
            </div>
            <p style={{ color: colors.creamSoft, fontSize: 13.5, lineHeight: 1.7, maxWidth: 320 }}>
              Authentic Indian sauces, pastes, chutneys and pickles, trusted by professional
              kitchens and made for yours.
            </p>
          </div>

          <div>
            <div style={{ color: colors.cream, fontWeight: 600, fontSize: 14, marginBottom: 14 }}>
              Shop
            </div>
            {["Cooking Sauces", "Cooking Pastes", "Chutneys", "Pickles"].map((l) => (
              <a
                key={l}
                href="#"
                style={{ display: "block", color: colors.creamSoft, fontSize: 13.5, textDecoration: "none", marginBottom: 10 }}
              >
                {l}
              </a>
            ))}
          </div>

          <div>
            <div style={{ color: colors.cream, fontWeight: 600, fontSize: 14, marginBottom: 14 }}>
              Get in touch
            </div>
            <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
              <MapPin size={16} color={colors.turmeric} style={{ flexShrink: 0, marginTop: 2 }} />
              <span style={{ color: colors.creamSoft, fontSize: 13.5, lineHeight: 1.6 }}>
                Pasco House, Makerfield Way, Ince, Wigan, WN2 2PR
              </span>
            </div>
            <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
              <Phone size={16} color={colors.turmeric} style={{ flexShrink: 0 }} />
              <span style={{ color: colors.creamSoft, fontSize: 13.5 }}>01942 493220</span>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Mail size={16} color={colors.turmeric} style={{ flexShrink: 0 }} />
              <span style={{ color: colors.creamSoft, fontSize: 13.5 }}>hello@pascofoods.co.uk</span>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span style={{ color: colors.creamSoft, fontSize: 12.5 }}>
            © {new Date().getFullYear()} Pasco Foods. All rights reserved.
          </span>
          <span style={{ color: colors.creamSoft, fontSize: 12.5 }}>Made with family recipes since day one.</span>
        </div>
      </footer>

      <style>{`
        @media (min-width: 860px) {
          .pf-desktop-nav { display: flex !important; align-items: center; }
          .pf-mobile-toggle { display: none !important; }
          .pf-hero-grid { grid-template-columns: 1.1fr 0.9fr !important; }
          .pf-story-grid { grid-template-columns: 1fr 1fr !important; }
          .pf-story-grid > div:nth-child(1) { order: 1 !important; }
          .pf-story-grid > div:nth-child(2) { order: 2 !important; }
          .pf-footer-grid { grid-template-columns: 1.3fr 1fr 1.3fr !important; }
        }
        @media (max-width: 859px) {
          .pf-mobile-menu { display: flex !important; }
        }
        input::placeholder { color: #8a8a8a; }
      `}</style>
    </div>
  );
}
