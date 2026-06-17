/**
 * El Globo — Link-in-Bio Page
 * Design: "Globo de Colores" — Neo-Playful Branding
 * Mobile-first, single-page with city selector
 * Colors: violet (brand), orange (Buenos Aires), green (Bariloche)
 * Fonts: Fredoka (display) + DM Sans (body)
 */

import { useState } from "react";

// ─── Assets ──────────────────────────────────────────────────────────────────
const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663761115795/SxuqTGVq6HpEwXWokZ5jWB/elglobo-hero-bg-N9HahDHBwSzAAuXtAPij9G.webp";
const LOGO =
  "/logo.jpeg";
const BAIRES_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663761115795/SxuqTGVq6HpEwXWokZ5jWB/elglobo-baires-card-2Jr4BSdR36w9HQiPEf8dZP.webp";
const BRC_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663761115795/SxuqTGVq6HpEwXWokZ5jWB/elglobo-brc-card-HcPuUEkpTNETevmvvrM2EK.webp";
const REMOTE_IMG = "/remote.png";

// ─── Data ─────────────────────────────────────────────────────────────────────
type City = "baires" | "brc" | "remoto";

const cities = {
  baires: {
    label: "Buenos Aires",
    emoji: "🏙️",
    tagline: "Florida, Vicente López",
    accentColor: "oklch(0.72 0.18 50)",
    accentLight: "oklch(0.95 0.06 55)",
    accentDark: "oklch(0.50 0.20 45)",
    image: BAIRES_IMG,
    links: [
      {
        id: "ig",
        icon: InstagramIcon,
        label: "Seguinos en Instagram",
        sublabel: "@elglobo.teatroeingles",
        href: "https://www.instagram.com/elglobo.teatroeingles",
        bg: "oklch(0.72 0.18 50)",
        fg: "#fff",
      },
      {
        id: "wa",
        icon: WhatsAppIcon,
        label: "Escribinos por WhatsApp",
        sublabel: "Consultas y reservas",
        href: "https://wa.me/5491161203643",
        bg: "oklch(0.52 0.16 145)",
        fg: "#fff",
      },
      {
        id: "form",
        icon: FormIcon,
        label: "Formulario de inscripción",
        sublabel: "Reservá tu lugar",
        href: "https://docs.google.com/forms/d/1QN_3cmyyf6JgxEXylO2O_TWH-sN0B-s3S-U7Y44bXYE/viewform",
        bg: "oklch(0.42 0.18 295)",
        fg: "#fff",
      },
    ],
  },
  brc: {
    label: "Bariloche",
    emoji: "🏔️",
    tagline: "San Carlos de Bariloche",
    accentColor: "oklch(0.52 0.12 165)",
    accentLight: "oklch(0.92 0.06 165)",
    accentDark: "oklch(0.38 0.14 165)",
    image: BRC_IMG,
    links: [
      {
        id: "ig",
        icon: InstagramIcon,
        label: "Seguinos en Instagram",
        sublabel: "@elglobo.brc",
        href: "https://www.instagram.com/elglobo.brc",
        bg: "oklch(0.52 0.12 165)",
        fg: "#fff",
      },
      {
        id: "wa",
        icon: WhatsAppIcon,
        label: "Escribinos por WhatsApp",
        sublabel: "¡Estamos arrancando!",
        href: "https://wa.me/5491161738028",
        bg: "oklch(0.42 0.18 295)",
        fg: "#fff",
      },
    ],
    comingSoon: {
      icon: SparkleIcon,
      label: "Inscripciones próximamente",
      sublabel: "Seguinos para enterarte primero",
    },
  },
  remote: {
  label: "Online",
  emoji: "💻",
  tagline: "Clases de inglés en vivo",
  accentColor: "oklch(0.42 0.18 295)",
  accentLight: "oklch(0.92 0.05 295)",
  accentDark: "oklch(0.32 0.15 295)",
  image: REMOTE_IMG,
  links: [
    {
      id: "wa",
      icon: WhatsAppIcon,
      label: "Consultanos por WhatsApp",
      sublabel: "Clases online para adultos",
      href: "https://wa.me/5491161203643",
      bg: "oklch(0.42 0.18 295)",
      fg: "#fff",
    },
    {
      id: "ig",
      icon: InstagramIcon,
      label: "Seguinos en Instagram",
      sublabel: "@elglobo.teatroeingles",
      href: "https://www.instagram.com/elglobo.teatroeingles",
      bg: "oklch(0.42 0.18 295)",
      fg: "#fff",
    },
  ],
},
};

// ─── SVG Icons ────────────────────────────────────────────────────────────────
function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FormIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6zm2-5h8v1.5H8V15zm0-3h8v1.5H8V12zm0-3h5v1.5H8V9z" />
    </svg>
  );
}

function SparkleIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
    </svg>
  );
}

function BackIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}

// ─── Link Button ──────────────────────────────────────────────────────────────
interface LinkBtnProps {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  sublabel: string;
  href: string;
  bg: string;
  fg: string;
  delay?: number;
}

function LinkBtn({ icon: Icon, label, sublabel, href, bg, fg, delay = 0 }: LinkBtnProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-btn animate-fade-slide-up block w-full rounded-2xl overflow-hidden shadow-md"
      style={{
        backgroundColor: bg,
        color: fg,
        animationDelay: `${delay}ms`,
        opacity: 0,
      }}
    >
      <div className="flex items-center gap-4 px-5 py-4">
        <div
          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
        >
          <Icon size={22} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-base leading-tight" style={{ fontFamily: "'Fredoka', sans-serif" }}>
            {label}
          </p>
          <p className="text-sm mt-0.5 opacity-85 truncate">{sublabel}</p>
        </div>
        <svg className="flex-shrink-0 opacity-70" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}

// ─── Coming Soon Badge ────────────────────────────────────────────────────────
function ComingSoonBadge({ icon: Icon, label, sublabel }: { icon: React.ComponentType<{ size?: number }>; label: string; sublabel: string }) {
  return (
    <div
      className="animate-fade-slide-up block w-full rounded-2xl overflow-hidden border-2 border-dashed"
      style={{
        borderColor: "oklch(0.42 0.18 295 / 0.35)",
        backgroundColor: "oklch(0.92 0.05 295 / 0.4)",
        animationDelay: "240ms",
        opacity: 0,
      }}
    >
      <div className="flex items-center gap-4 px-5 py-4">
        <div
          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center animate-pulse-soft"
          style={{ backgroundColor: "oklch(0.42 0.18 295 / 0.15)", color: "oklch(0.42 0.18 295)" }}
        >
          <Icon size={22} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-base leading-tight" style={{ fontFamily: "'Fredoka', sans-serif", color: "oklch(0.42 0.18 295)" }}>
            {label}
          </p>
          <p className="text-sm mt-0.5 opacity-70 truncate" style={{ color: "oklch(0.42 0.18 295)" }}>{sublabel}</p>
        </div>
        <span
          className="flex-shrink-0 text-xs font-semibold px-2 py-1 rounded-full"
          style={{ backgroundColor: "oklch(0.42 0.18 295 / 0.15)", color: "oklch(0.42 0.18 295)", fontFamily: "'DM Sans', sans-serif" }}
        >
          Pronto
        </span>
      </div>
    </div>
  );
}

// ─── City Card ────────────────────────────────────────────────────────────────
interface CityCardProps {
  city: City;
  data: typeof cities.baires;
  onSelect: (city: City) => void;
  delay?: number;
}

function CityCard({ city, data, onSelect, delay = 0 }: CityCardProps) {
  return (
    <button
      onClick={() => onSelect(city)}
      className={`city-card animate-scale-in relative overflow-hidden rounded-3xl shadow-lg w-full aspect-[3/4] ${
        city === "remoto" ? "border-[8px]" : "border-4"
      } border-white`} 
      style={{
        animationDelay: `${delay}ms`,
        opacity: 0,
      }}
      aria-label={`Seleccionar ${data.label}`}
    >
      {/* Background image */}
      <img
        src={data.image}
        alt={data.label}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${data.accentDark}ee 0%, ${data.accentColor}55 50%, transparent 100%)`,
        }}
      />
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center p-5">
                
        <div
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full"
          style={{
            backgroundColor: "rgba(255,255,255,0.22)", 
            backdropFilter: "blur(8px)" 
          }}
        >
          {data.label}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
}

// ─── City Links View ──────────────────────────────────────────────────────────
interface CityLinksProps {
  city: City;
  onBack: () => void;
}

function CityLinks({ city, onBack }: CityLinksProps) {
  const data = cities[city];
  const isBrc = city === "brc";
  const brcData = isBrc ? (data as typeof cities.brc) : null;

  return (
    <div className="animate-scale-in w-full" style={{ opacity: 0 }}>
      {/* City header */}
      <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg">
        <img
          src={data.image}
          alt={data.label}
          className="w-full h-44 object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${data.accentDark}cc 0%, transparent 60%)`,
          }}
        />
        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-3 left-3 flex items-center gap-1.5 text-white text-sm font-semibold px-3 py-1.5 rounded-full transition-all active:scale-95"
          style={{ backgroundColor: "rgba(0,0,0,0.28)", backdropFilter: "blur(8px)" }}
          aria-label="Volver a elegir ciudad"
        >
          <BackIcon size={16} />
          Volver
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p className="text-2xl mb-0.5">{data.emoji}</p>
          <h2
            className="text-lg font-bold"
            style={{
              fontFamily: "'Fredoka', sans-serif",
              opacity: 0.85
            }}
          >
            {data.label}
          </h2>
          <p className="text-sm opacity-85">{data.tagline}</p>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-3">
        {data.links.map((link, i) => (
          <LinkBtn
            key={link.id}
            icon={link.icon}
            label={link.label}
            sublabel={link.sublabel}
            href={link.href}
            bg={link.bg}
            fg={link.fg}
            delay={i * 80}
          />
        ))}

        {/* Coming soon badge for Bariloche */}
        {isBrc && brcData?.comingSoon && (
          <ComingSoonBadge
            icon={brcData.comingSoon.icon}
            label={brcData.comingSoon.label}
            sublabel={brcData.comingSoon.sublabel}
          />
        )}
      </div>

      {/* Bariloche attraction message */}
      {isBrc && (
        <div
          className="animate-fade-slide-up mt-5 rounded-2xl p-4 text-center"
          style={{
            backgroundColor: "oklch(0.52 0.12 165 / 0.12)",
            borderLeft: `4px solid oklch(0.52 0.12 165)`,
            animationDelay: "320ms",
            opacity: 0,
          }}
        >
          <p
            className="text-sm font-semibold"
            style={{ color: "oklch(0.38 0.14 165)", fontFamily: "'Fredoka', sans-serif", fontSize: "1rem" }}
          >
            🌱 ¡Estamos llegando a Bariloche!
          </p>
          <p className="text-sm mt-1" style={{ color: "oklch(0.38 0.14 165)" }}>
            Seguinos en Instagram para ser de los primeros en enterarte de nuestros talleres y novedades.
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  return (
   <div
      className="min-h-screen w-full flex flex-col items-center"
      style={{
        backgroundImage:
          "url('/Fondo_acuarela.jpg'), linear-gradient(180deg, #F8F3FF 0%, #FFFFFF 100%)",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="min-h-screen w-full flex flex-col items-center"
        style={{
          backgroundColor: "rgba(255,255,255,0.15)"
        }}
  >
      <div className="w-full max-w-5xl px-5 py-8 flex flex-col items-center">

          {/* ── Header ── */}
          <div className="flex flex-col items-center mb-8 animate-fade-slide-up" style={{ opacity: 0 }}>
            <div className="mb-8">
              <img
                src={LOGO}
                alt="El Globo logo"
                className="w-32 h-32 rounded-full object-cover shadow-xl mx-auto"
              />
            </div>
            <h1
              className="text-4xl font-bold text-center leading-tight"
              style={{ color: "#6B21A8", fontFamily: "'Fredoka', sans-serif" }}
            >
              El Globo
            </h1>
            <p
              className="text-base text-center mt-1 font-medium"
              style={{ color: "#8B5FBF", fontFamily: "'DM Sans', sans-serif" }}
            >
              Teatro e Inglés para niños
            </p>
            <div
              className="mt-3 px-4 py-1.5 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: "oklch(0.42 0.18 295 / 0.12)",
                color: "#8B5FBF",
              }}
            >
              🌎 Jugando, creando y compartiendo
            </div>
          </div>

          {/* ── City selector or links ── */}
          {selectedCity === null ? (
            <div className="w-full">
              <p
                className="text-center text-sm font-semibold mb-4 animate-fade-slide-up delay-80"
                style={{ color: "#8B5FBF", opacity: 0 }}
              >
                Encontrá tu espacio
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <div className="w-40">
                  <CityCard
                    city="baires"
                    data={cities.baires}
                    onSelect={setSelectedCity}
                    delay={100}
                  />
                </div>

                <div className="w-40">
                  <CityCard
                    city="brc"
                    data={cities.brc}
                    onSelect={setSelectedCity}
                    delay={180}
                  />
                </div>

                <div className="w-40">
                  <CityCard
                    city="remoto"
                    data={cities.remote}
                    onSelect={setSelectedCity}
                    delay={260}
                  />
                </div>
              </div>
            </div>
          ) : (
            <CityLinks city={selectedCity} onBack={() => setSelectedCity(null)} />
          )}

          {/* ── Footer ── */}
          <p
            className="mt-10 text-xs text-center"
            style={{ color: "#8B5FBF" }}
          >
            © {new Date().getFullYear()} El Globo · Teatro e Inglés
          </p>
        </div>
      </div>
    </div>
  );
}
