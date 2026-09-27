import { notFound } from "next/navigation";
import { CONTACT_EMAIL, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import GraphCanvas from "@/components/GraphCanvas";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import CopyEmail from "@/components/CopyEmail";
import Logo from "@/components/Logo";
import {
  IconArrow,
  IconCheck,
  IconCube,
  IconFactory,
  IconGrid,
  IconLibrary,
  IconMail,
  IconMolecule,
  IconPulse,
  IconRobot,
} from "@/components/Icons";

const moduleIcons = [IconLibrary, IconPulse, IconCube];
const appIcons = [IconRobot, IconFactory, IconMolecule, IconGrid];
const accents = ["from-cyan/25", "from-violet/25", "from-rose/25", "from-cyan/25"];

function SectionHead({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">{subtitle}</p>}
    </Reveal>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.contact.subject)}`;

  return (
    <>
      <Header lang={lang} t={t.nav} />

      <main id="top">
        {/* Hero */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
          <GraphCanvas className="absolute inset-0 h-full w-full" />
          <div className="grid-bg absolute inset-0" />
          <div className="glow -left-40 top-10 h-[28rem] w-[28rem] bg-cyan/30" />
          <div className="glow -right-40 bottom-0 h-[32rem] w-[32rem] bg-violet/35" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />

          <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/60 px-3.5 py-1.5 font-mono text-xs tracking-wider text-mute backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
                </span>
                {t.hero.eyebrow}
              </p>
              <h1 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-7xl lg:text-[5.5rem]">
                {t.hero.titleA}
                <br />
                <span className="text-gradient">{t.hero.titleB}</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mute sm:text-xl">{t.hero.subtitle}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#invest"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-cyan via-violet to-rose px-6 text-sm font-semibold text-ink shadow-[0_10px_40px_-10px_rgba(139,123,255,0.8)] transition-transform hover:scale-[1.03]"
                >
                  {t.hero.primary}
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#modules"
                  className="inline-flex h-12 items-center rounded-full border border-line bg-ink/50 px-6 text-sm font-medium backdrop-blur transition-colors hover:border-white/30"
                >
                  {t.hero.secondary}
                </a>
              </div>
              <ul className="mt-14 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-widest text-mute">
                {t.hero.tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-violet" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section id="mission" className="relative px-5 py-28 sm:px-8 sm:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">{t.mission.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{t.mission.title}</h2>
                <p className="mt-6 text-base leading-relaxed text-mute sm:text-lg">{t.mission.body}</p>
              </Reveal>
              <div className="flex flex-col gap-4">
                {t.mission.pillars.map((p, i) => (
                  <Reveal key={p.k} delay={i * 120}>
                    <div
                      className={`card flex items-start gap-5 p-6 ${
                        i === 2 ? "border-violet/40 bg-gradient-to-br from-violet/15 to-cyan/5" : ""
                      }`}
                    >
                      <span className="w-12 shrink-0 pt-1 font-mono text-xs text-mute">{["GNN", "+ WM", "= GWM"][i]}</span>
                      <div>
                        <h3 className={`text-lg font-semibold ${i === 2 ? "text-gradient" : ""}`}>{p.k}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-mute">{p.v}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section id="modules" className="relative px-5 py-28 sm:px-8 sm:py-36">
          <div className="glow left-1/2 top-1/3 h-96 w-[40rem] -translate-x-1/2 bg-violet/20" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHead eyebrow={t.modules.eyebrow} title={t.modules.title} />
            <div className="mt-16 grid gap-5 md:grid-cols-3">
              {t.modules.items.map((m, i) => {
                const Icon = moduleIcons[i];
                return (
                  <Reveal key={m.title} delay={i * 120} className="h-full">
                    <article className="card flex h-full flex-col p-7 sm:p-8">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-gradient-to-br ${accents[i]} to-transparent`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <p className="mt-7 font-mono text-xs text-mute">0{i + 1}</p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight">{m.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{m.body}</p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {m.chips.map((c) => (
                          <li key={c} className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-white/70">
                            {c}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section id="applications" className="relative px-5 py-28 sm:px-8 sm:py-36">
          <div className="mx-auto max-w-7xl">
            <SectionHead eyebrow={t.applications.eyebrow} title={t.applications.title} subtitle={t.applications.subtitle} />
            <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {t.applications.items.map((a, i) => {
                const Icon = appIcons[i];
                return (
                  <Reveal key={a.title} delay={i * 100} className="h-full">
                    <div className="group relative h-full bg-ink-2 p-8 transition-colors hover:bg-[#1a2350]">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <Icon className="h-8 w-8 text-cyan" />
                      <h3 className="mt-10 text-lg font-semibold">{a.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-mute">{a.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ecosystem loop */}
        <section className="relative px-5 py-28 sm:px-8 sm:py-36">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">{t.ecosystem.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{t.ecosystem.title}</h2>
              <ol className="mt-10 space-y-4 lg:hidden">
                {t.ecosystem.steps.map((s, i) => (
                  <li key={s.k} className="card flex items-center gap-4 p-5">
                    <span className="font-mono text-sm text-cyan">0{i + 1}</span>
                    <div>
                      <p className="font-semibold">{s.k}</p>
                      <p className="text-sm text-mute">{s.v}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal className="hidden lg:block" delay={150}>
              <div className="relative mx-auto aspect-square w-full max-w-[520px]">
                <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#38e1ff" />
                      <stop offset="0.5" stopColor="#8b7bff" />
                      <stop offset="1" stopColor="#ff6fb5" />
                    </linearGradient>
                  </defs>
                  <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(160,175,255,0.22)" strokeWidth="1" />
                  <circle
                    cx="200"
                    cy="200"
                    r="150"
                    fill="none"
                    stroke="url(#ring)"
                    strokeWidth="1.5"
                    strokeDasharray="6 14"
                    className="animate-dash"
                  />
                  <g className="animate-spin-slow" style={{ transformOrigin: "200px 200px" }}>
                    <circle cx="200" cy="50" r="4" fill="#38e1ff" />
                    <circle cx="350" cy="200" r="3" fill="#8b7bff" />
                  </g>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Logo className="h-14 w-14" />
                    <p className="mt-2 text-sm font-semibold">GraphVerse</p>
                  </div>
                </div>
                {t.ecosystem.steps.map((s, i) => {
                  const pos = [
                    "left-1/2 top-0 -translate-x-1/2",
                    "right-0 top-1/2 -translate-y-1/2",
                    "bottom-0 left-1/2 -translate-x-1/2",
                    "left-0 top-1/2 -translate-y-1/2",
                  ][i];
                  return (
                    <div key={s.k} className={`absolute ${pos} w-44 rounded-2xl border border-line bg-ink-2/90 p-4 text-center backdrop-blur`}>
                      <p className="font-mono text-[11px] text-cyan">0{i + 1}</p>
                      <p className="mt-1 font-semibold">{s.k}</p>
                      <p className="mt-1 text-xs leading-snug text-mute">{s.v}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Invest & Collaborate */}
        <section id="invest" className="relative px-5 py-28 sm:px-8 sm:py-36">
          <div className="glow left-0 top-1/2 h-96 w-96 bg-cyan/20" />
          <div className="glow right-0 top-1/4 h-96 w-96 bg-rose/20" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHead eyebrow={t.invest.eyebrow} title={t.invest.title} subtitle={t.invest.subtitle} />
            <div className="mt-16 grid gap-5 lg:grid-cols-2">
              {t.invest.cards.map((c, i) => (
                <Reveal key={c.title} delay={i * 140} className="h-full">
                  <article
                    className={`card flex h-full flex-col overflow-hidden p-8 sm:p-10 ${
                      i === 1 ? "border-violet/35 bg-gradient-to-br from-violet/[0.14] via-transparent to-rose/[0.08]" : ""
                    }`}
                  >
                    <span
                      className={`self-start rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${
                        i === 1 ? "bg-violet/20 text-violet" : "bg-cyan/15 text-cyan"
                      }`}
                    >
                      {c.tag}
                    </span>
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">{c.title}</h3>
                    <p className="mt-4 leading-relaxed text-mute">{c.body}</p>
                    <ul className="mt-8 flex-1 space-y-3">
                      {c.points.map((p) => (
                        <li key={p} className="flex items-center gap-3 text-sm text-white/85">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line">
                            <IconCheck className="h-3.5 w-3.5 text-cyan" />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={mailto}
                      className="group mt-10 inline-flex items-center gap-2 self-start text-sm font-medium text-white"
                    >
                      {t.nav.cta}
                      <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative px-5 pb-28 pt-12 sm:px-8 sm:pb-36">
          <Reveal className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-ink-2 px-6 py-16 text-center sm:px-16 sm:py-24">
              <GraphCanvas className="absolute inset-0 h-full w-full opacity-80" />
              <div className="glow left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 bg-violet/40" />
              <div className="relative">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">{t.contact.eyebrow}</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
                  <span className="text-gradient">{t.contact.title}</span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-mute sm:text-lg">{t.contact.body}</p>
                <a
                  href={mailto}
                  className="mt-10 inline-flex max-w-full items-center gap-3 break-all rounded-2xl border border-line bg-ink/70 px-5 py-4 font-mono text-base text-white backdrop-blur transition-colors hover:border-cyan/50 sm:text-xl"
                >
                  <IconMail className="h-5 w-5 shrink-0 text-cyan" />
                  {CONTACT_EMAIL}
                </a>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href={mailto}
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
                  >
                    {t.contact.write}
                    <IconArrow className="h-4 w-4" />
                  </a>
                  <CopyEmail email={CONTACT_EMAIL} label={t.contact.copy} done={t.contact.copied} />
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-line px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Logo className="h-7 w-7" />
              <span className="font-semibold">GraphVerse</span>
            </div>
            <p className="mt-3 text-sm text-mute">{t.footer.tagline}</p>
          </div>
          <p className="max-w-lg text-xs leading-relaxed text-mute">{t.footer.openScience}</p>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-line pt-6 text-xs text-mute sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} GraphVerse. {t.footer.rights}
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
            {CONTACT_EMAIL}
          </a>
        </div>
      </footer>
    </>
  );
}
