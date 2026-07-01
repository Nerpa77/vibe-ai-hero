import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Sparkle, ArrowUpRight } from "lucide-react";

import heroVibe from "@/assets/hero-vibe.png";
import projectStudyflow from "@/assets/project-studyflow.jpg";
import projectNeuroanalyst from "@/assets/project-neuroanalyst.jpg";
import projectLaunchpro from "@/assets/project-launchpro.jpg";


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
    <main className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-hero-gradient lg:min-h-screen">

      {/* Ambient glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.28 340 / 0.55), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.45 0.28 300 / 0.55), transparent 70%)" }}
      />

      {/* Nav */}
      <header className="relative z-10 mx-auto flex w-full max-w-7xl shrink-0 items-center justify-between px-6 py-3 lg:px-10 lg:py-6">
        <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground lg:text-2xl">
          vibe<span className="text-neon-lime">.</span>code
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#projects" className="transition-colors hover:text-foreground">Проекты</a>
          <a href="#services" className="transition-colors hover:text-foreground">Услуги</a>
          <a href="#about" className="transition-colors hover:text-foreground">Обо мне</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Контакты</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-3 px-6 pb-2 pt-1 lg:grid-cols-2 lg:gap-6 lg:px-10 lg:pb-32 lg:pt-16">
        {/* Left column */}
        <div className="order-1 lg:order-1">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur-sm lg:mb-6 lg:px-4 lg:py-1.5 lg:text-xs">
            <Sparkle className="h-3 w-3 text-neon-lime" />
            AI · Vibecoding · MVP
          </div>

          <h1 className="font-display text-[26px] font-bold uppercase leading-[1.15] tracking-tight text-foreground sm:text-4xl sm:leading-[1.15] lg:text-6xl lg:leading-[1.2] xl:text-7xl xl:leading-[1.2]">
            Создаю{" "}
            <span className="text-neon-lime" style={{ textShadow: "0 0 30px oklch(0.92 0.24 130 / 0.5)" }}>
              AI-продукты
            </span>{" "}
            через вайбкодинг
          </h1>

          <p className="mt-3 max-w-xl text-base text-muted-foreground lg:mt-6 lg:text-lg">
            Быстро собираю MVP, лендинги и веб-приложения с помощью современных AI-инструментов.
          </p>

          <div className="mt-4 flex w-full flex-col gap-2.5 lg:mt-10 lg:flex-row lg:gap-4">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-full bg-neon-lime px-8 py-3.5 font-display text-base font-semibold uppercase tracking-wider text-neon-lime-foreground shadow-glow-lime transition-all duration-200 hover:-translate-y-1 hover:brightness-90 hover:shadow-[0_12px_50px_oklch(0.92_0.24_130/0.6)] active:translate-y-0 lg:w-auto lg:py-4 lg:text-sm"
            >
              Посмотреть проекты
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border-2 px-8 py-3.5 font-display text-base font-semibold uppercase tracking-wider text-foreground transition-all duration-200 hover:-translate-y-1 hover:brightness-90 hover:bg-[oklch(0.55_0.28_310/0.25)] active:translate-y-0 lg:w-auto lg:py-4 lg:text-sm"
              style={{
                borderColor: "var(--neon-purple)",
                boxShadow: "var(--glow-purple)",
                background: "oklch(0.68 0.28 310 / 0.1)",
              }}
            >
              Связаться
            </a>
          </div>
        </div>

        {/* Right column — visual */}
        <div className="relative order-2 flex min-h-0 flex-1 items-center justify-center lg:order-2 lg:flex-none">
          <div className="relative aspect-square w-full max-w-[160px] sm:max-w-[280px] lg:max-w-[560px]">
            <img
              src={heroVibe}
              alt="3D неоновая звезда с курсором — символ вайбкодинга"
              width={1024}
              height={1024}
              className="animate-float-slow relative z-10 h-full w-full object-contain"
              style={{ filter: "drop-shadow(0 20px 60px oklch(0.55 0.28 340 / 0.6))" }}
            />
            {/* Decorative mini stars */}
            <Sparkle
              className="animate-float-slow absolute left-0 top-4 h-6 w-6 text-neon-purple lg:top-10 lg:h-10 lg:w-10"
              style={{ animationDelay: "1s", filter: "drop-shadow(0 0 12px oklch(0.68 0.28 310))" }}
              aria-hidden
            />
            <Sparkle
              className="animate-float-slow absolute -bottom-2 right-2 h-5 w-5 text-neon-magenta lg:right-6 lg:h-8 lg:w-8"
              style={{ animationDelay: "2s", filter: "drop-shadow(0 0 12px oklch(0.65 0.30 340))" }}
              aria-hidden
            />
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="relative z-10 hidden shrink-0 justify-center pb-6 lg:flex lg:pb-10">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <ArrowDown className="h-4 w-4 animate-bounce" />
          <span className="h-2 w-2 rounded-full bg-neon-lime shadow-glow-lime" />
        </div>
      </div>
    </main>

    <FeaturedProjects />
    </>
  );
}

const projects = [
  {
    title: "StudyFlow",
    description: "AI-платформа для персонализированного обучения. Адаптивные треки, авто-генерация заданий и аналитика прогресса.",
    tags: ["React", "OpenAI", "Supabase", "Tailwind"],
    accent: "lime" as const,
    gradient: "linear-gradient(135deg, oklch(0.92 0.24 130 / 0.35), oklch(0.55 0.28 200 / 0.35))",
    image: projectStudyflow,
  },
  {
    title: "НейроАналитик",
    description: "AI-сервис для анализа данных. Загружаете датасет — получаете инсайты, графики и текстовые выводы за секунды.",
    tags: ["Next.js", "Python", "LangChain", "Recharts"],
    accent: "purple" as const,
    gradient: "linear-gradient(135deg, oklch(0.68 0.28 310 / 0.4), oklch(0.45 0.28 260 / 0.4))",
    image: projectNeuroanalyst,
  },
  {
    title: "LaunchPro",
    description: "Лендинг для SaaS-продукта: конверсионная структура, анимации и интеграция с CRM за 3 дня.",
    tags: ["Vite", "Framer Motion", "TS", "Stripe"],
    accent: "magenta" as const,
    gradient: "linear-gradient(135deg, oklch(0.65 0.30 340 / 0.4), oklch(0.55 0.28 20 / 0.4))",
    image: projectLaunchpro,
  },
];


function FeaturedProjects() {
  return (
    <section id="projects" className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-hero-gradient px-5 py-8 lg:min-h-0 lg:px-10 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.28 340 / 0.5), transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <div className="mb-5 flex flex-col items-start justify-between gap-3 lg:mb-16 lg:flex-row lg:items-end lg:gap-4">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur-sm lg:mb-4 lg:px-4 lg:py-1.5 lg:text-xs">
              <Sparkle className="h-3 w-3 text-neon-lime" />
              Портфолио
            </div>
            <h2 className="font-display text-2xl font-bold uppercase leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Избранные{" "}
              <span className="text-neon-lime" style={{ textShadow: "0 0 30px oklch(0.92 0.24 130 / 0.5)" }}>
                проекты
              </span>
            </h2>
          </div>
          <p className="hidden max-w-md text-base text-muted-foreground lg:block">
            Кейсы, собранные через вайбкодинг: от идеи до продакшена за считанные дни.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>

  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const accentColor =
    project.accent === "lime"
      ? "var(--neon-lime)"
      : project.accent === "purple"
      ? "var(--neon-purple)"
      : "var(--neon-magenta)";

  return (
    <article
      className="group relative flex flex-row overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent lg:flex-col lg:rounded-3xl"
    >
      {/* Preview */}
      <div
        className="relative aspect-square w-28 shrink-0 overflow-hidden lg:aspect-[4/3] lg:w-full"
        style={{ background: project.gradient }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 0.08) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkle
            className="h-8 w-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 lg:h-16 lg:w-16"
            style={{ color: accentColor, filter: `drop-shadow(0 0 24px ${accentColor})` }}
            aria-hidden
          />
        </div>
        <div className="absolute right-2 top-2 hidden h-10 w-10 items-center justify-center rounded-full bg-background/60 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 lg:flex lg:right-4 lg:top-4">
          <ArrowUpRight className="h-5 w-5 text-foreground" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-1.5 p-3 lg:gap-4 lg:p-6">
        <h3 className="font-display text-base font-bold uppercase tracking-tight text-foreground lg:text-2xl">
          {project.title}
        </h3>
        <p className="line-clamp-2 text-xs text-muted-foreground lg:line-clamp-none lg:text-base">
          {project.description}
        </p>
        <ul className="mt-auto flex flex-wrap gap-1 pt-1 lg:gap-2 lg:pt-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-background/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground lg:px-3 lg:py-1 lg:text-xs"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Accent border on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:rounded-3xl"
        style={{ boxShadow: `0 0 0 1px ${accentColor}, 0 20px 60px -20px ${accentColor}` }}
      />
    </article>
  );

}

