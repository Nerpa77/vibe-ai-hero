import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Sparkle, ArrowUpRight, Rocket, Bot, Palette, Plug, Search, Sparkles, TestTube2, TrendingUp, Send, Mail } from "lucide-react";


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
        <div className="relative order-2 flex min-h-0 flex-1 items-center justify-center px-6 lg:order-2 lg:flex-none lg:px-0">
          <div className="relative aspect-square w-full max-w-[120px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[560px]">
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
              className="animate-float-slow absolute left-1 top-2 h-4 w-4 text-neon-purple sm:left-0 sm:top-4 sm:h-6 sm:w-6 lg:top-10 lg:h-10 lg:w-10"
              style={{ animationDelay: "1s", filter: "drop-shadow(0 0 12px oklch(0.68 0.28 310))" }}
              aria-hidden
            />
            <Sparkle
              className="animate-float-slow absolute bottom-1 right-1 h-4 w-4 text-neon-magenta sm:bottom-0 sm:right-2 sm:h-5 sm:w-5 lg:right-6 lg:h-8 lg:w-8"
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
    <WhatIDo />
    <HowIWork />
    <CtaContact />
    </>
  );
}

function CtaContact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-hero-gradient px-5 py-20 lg:px-10 lg:py-32">
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
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
          <Sparkle className="h-3 w-3 text-neon-lime" />
          Контакты
        </span>
        <h2 className="mt-6 font-display text-4xl uppercase leading-[1.3] text-white lg:text-6xl lg:leading-[1.25]">
          Есть идея? <span className="text-neon-lime">Давайте</span> сделаем
        </h2>
        <p className="mt-5 max-w-xl text-base text-white/70 lg:text-lg">
          Расскажите о задаче — отвечу в течение дня и предложу, как быстрее всего запустить продукт.
        </p>
        <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-neon-lime bg-neon-lime px-8 py-4 font-display text-base uppercase tracking-wide text-[oklch(0.14_0.03_300)] shadow-glow-lime transition-transform hover:-translate-y-0.5"
            style={{ boxShadow: "0 0 0 1px oklch(0.92 0.24 130), 0 0 24px oklch(0.92 0.24 130 / 0.65)" }}
          >
            <Send className="h-5 w-5" />
            Написать в Telegram
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-neon-purple bg-white/5 px-8 py-4 font-display text-base uppercase tracking-wide text-white transition-colors hover:bg-white/10"
            style={{ boxShadow: "0 0 0 1px oklch(0.68 0.28 310), 0 0 24px oklch(0.68 0.28 310 / 0.65)" }}
          >
            <Mail className="h-5 w-5" />
            Написать на Email
          </a>
        </div>
      </div>
    </section>
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
    <section id="projects" className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[oklch(0.98_0.005_300)] px-5 py-8 lg:min-h-0 lg:px-10 lg:py-32">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <div className="mb-5 flex flex-row items-start justify-between gap-3 lg:mb-16 lg:items-end lg:gap-4">
          <div className="min-w-0 flex-1">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[oklch(0.14_0.03_300/0.12)] bg-white px-3 py-1 text-[10px] uppercase tracking-widest text-[oklch(0.45_0.03_300)] lg:mb-4 lg:px-4 lg:py-1.5 lg:text-xs">
              <Sparkle className="h-3 w-3 text-neon-lime" />
              Портфолио
            </div>
            <h2 className="font-display text-2xl font-bold uppercase leading-[1.15] tracking-tight text-[oklch(0.14_0.03_300)] sm:text-4xl lg:text-5xl">
              Избранные{" "}
              <span className="text-neon-lime" style={{ WebkitTextStroke: "1px oklch(0.55 0.20 130)" }}>
                проекты
              </span>
            </h2>
            <p className="mt-3 hidden max-w-md text-base text-[oklch(0.45_0.03_300)] lg:block">
              Кейсы, собранные через вайбкодинг: от идеи до продакшена за считанные дни.
            </p>
          </div>
          <a
            href="#projects"
            className="group inline-flex shrink-0 items-center gap-1 pt-1 text-xs text-[oklch(0.14_0.03_300)] underline-offset-4 transition-colors hover:underline lg:pt-0 lg:text-sm"
          >
            Посмотреть все проекты
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:h-4 lg:w-4" />
          </a>
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
      className="group relative flex flex-row overflow-hidden rounded-2xl border border-[oklch(0.14_0.03_300/0.1)] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-transparent lg:flex-col lg:rounded-3xl"
    >
      {/* Preview */}
      <div
        className="relative w-32 shrink-0 self-stretch overflow-hidden bg-hero-gradient sm:w-44 md:w-56 lg:aspect-[4/3] lg:w-full"
      >

        <img
          src={project.image}
          alt={`Превью проекта ${project.title}`}
          width={1024}
          height={768}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-105 lg:object-cover"
        />

        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, transparent 40%, oklch(0.15 0.05 280 / 0.6) 100%), ${project.gradient}`, mixBlendMode: "overlay" }}
        />

        <div className="absolute right-2 top-2 hidden h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 lg:flex lg:right-4 lg:top-4">
          <ArrowUpRight className="h-5 w-5 text-[oklch(0.14_0.03_300)]" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-1.5 p-3 lg:gap-4 lg:p-6">
        <h3 className="font-display text-base font-bold uppercase tracking-tight text-[oklch(0.14_0.03_300)] lg:text-2xl">
          {project.title}
        </h3>
        <p className="text-xs text-[oklch(0.45_0.03_300)] lg:text-base">
          {project.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1 pt-1 lg:gap-2 lg:pt-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[oklch(0.14_0.03_300/0.1)] bg-[oklch(0.96_0.005_300)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[oklch(0.35_0.03_300)] lg:px-3 lg:py-1 lg:text-xs"
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

const services = [
  {
    icon: Rocket,
    emoji: "🚀",
    title: "MVP за неделю",
    description:
      "Собираю рабочий прототип продукта с нуля через вайбкодинг. От идеи и UX до задеплоенной версии за 5–7 дней.",
    result: "Готовый MVP → первые пользователи",
    accent: "lime" as const,
  },
  {
    icon: Bot,
    emoji: "🤖",
    title: "AI-автоматизация",
    description:
      "Внедряю LLM и AI-агентов в продукт и внутренние процессы. Чат-боты, генерация контента, обработка данных и документов.",
    result: "−70% рутины в команде",
    accent: "purple" as const,
  },
  {
    icon: Palette,
    emoji: "🎨",
    title: "UI/UX с вайбкодингом",
    description:
      "Проектирую и сразу собираю интерфейс в коде. Быстрые итерации по дизайну без разрыва между Figma и продакшеном.",
    result: "Дизайн-система + живой UI",
    accent: "magenta" as const,
  },
  {
    icon: Plug,
    emoji: "🔌",
    title: "Интеграции",
    description:
      "Подключаю внешние API, платежи, CRM, аналитику и Supabase. Настраиваю вебхуки и синхронизацию данных между системами.",
    result: "Единый рабочий контур",
    accent: "lime" as const,
  },
];

function WhatIDo() {
  return (
    <section id="services" className="relative overflow-hidden bg-hero-gradient px-5 py-14 lg:px-10 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.28 340 / 0.5), transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-8 max-w-2xl lg:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur-sm lg:mb-4 lg:px-4 lg:py-1.5 lg:text-xs">
            <Sparkle className="h-3 w-3 text-neon-lime" />
            Услуги
          </div>
          <h2 className="font-display text-2xl font-bold uppercase leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Что я{" "}
            <span className="text-neon-lime" style={{ textShadow: "0 0 30px oklch(0.92 0.24 130 / 0.5)" }}>
              делаю
            </span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground lg:mt-5 lg:text-lg">
            Помогаю превращать идеи в живые AI-продукты — быстро, без раздутых команд и бесконечных спринтов.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const accentColor =
    service.accent === "lime"
      ? "var(--neon-lime)"
      : service.accent === "purple"
      ? "var(--neon-purple)"
      : "var(--neon-magenta)";

  const Icon = service.icon;

  return (
    <article
      className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-card/40 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent lg:gap-5 lg:rounded-3xl lg:p-7"
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/60 text-xl lg:h-14 lg:w-14 lg:text-2xl"
        style={{ boxShadow: `0 0 24px -8px ${accentColor}` }}
        aria-hidden
      >
        <Icon className="h-5 w-5 lg:h-6 lg:w-6" style={{ color: accentColor }} />
      </div>

      <h3 className="font-display text-lg font-bold uppercase tracking-tight text-foreground lg:text-2xl">
        {service.title}
      </h3>

      <p className="text-sm text-muted-foreground lg:text-base">
        {service.description}
      </p>

      <div
        className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider lg:text-[13px]"
        style={{ borderColor: accentColor, color: accentColor, background: `color-mix(in oklab, ${accentColor} 10%, transparent)` }}
      >
        <Sparkle className="h-3 w-3" />
        {service.result}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:rounded-3xl"
        style={{ boxShadow: `0 0 0 1px ${accentColor}, 0 20px 60px -20px ${accentColor}` }}
      />
    </article>
  );
}

const steps = [
  {
    title: "Погружаюсь в задачу",
    description: "Изучаю продукт, аудиторию и цели. Формирую понятную структуру и логику будущего решения.",
    icon: Search,
    accent: "lime" as const,
  },
  {
    title: "Создаю с ИИ",
    description: "Собираю интерфейс и логику через вайбкодинг. Быстрые итерации, живой прототип уже через пару дней.",
    icon: Sparkles,
    accent: "purple" as const,
  },
  {
    title: "Тестирую и улучшаю",
    description: "Проверяю сценарии, правлю UX и производительность. Собираю обратную связь и докручиваю детали.",
    icon: TestTube2,
    accent: "magenta" as const,
  },
  {
    title: "Запускаю и масштабирую",
    description: "Деплою продукт, подключаю аналитику и интеграции. Помогаю развивать и добавлять новые фичи.",
    icon: TrendingUp,
    accent: "lime" as const,
  },
];

function HowIWork() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[oklch(0.98_0.005_300)] px-5 py-14 lg:px-10 lg:py-32"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-8 max-w-2xl lg:mb-16">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[oklch(0.14_0.03_300/0.12)] bg-white px-3 py-1 text-[10px] uppercase tracking-widest text-[oklch(0.45_0.03_300)] lg:mb-4 lg:px-4 lg:py-1.5 lg:text-xs">
            <Sparkle className="h-3 w-3 text-neon-lime" />
            Процесс
          </div>
          <h2 className="font-display text-2xl font-bold uppercase leading-[1.15] tracking-tight text-[oklch(0.14_0.03_300)] sm:text-4xl lg:text-5xl">
            Как я{" "}
            <span className="text-neon-lime" style={{ WebkitTextStroke: "1px oklch(0.55 0.20 130)" }}>
              работаю
            </span>
          </h2>
          <p className="mt-3 text-base text-[oklch(0.45_0.03_300)] lg:mt-5 lg:text-lg">
            Прозрачный процесс от идеи до запуска — вы всегда видите, на каком этапе проект.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative hidden lg:block">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-9 h-px bg-[oklch(0.14_0.03_300/0.15)]"
          />
          <div className="relative grid grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <StepItem key={step.title} step={step} index={i} horizontal />
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative lg:hidden">
          <div
            aria-hidden
            className="absolute bottom-4 left-6 top-4 w-px bg-[oklch(0.14_0.03_300/0.15)]"
          />
          <ol className="relative flex flex-col gap-6">
            {steps.map((step, i) => (
              <StepItem key={step.title} step={step} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function StepItem({
  step,
  index,
  horizontal = false,
}: {
  step: (typeof steps)[number];
  index: number;
  horizontal?: boolean;
}) {
  const accentColor =
    step.accent === "lime"
      ? "var(--neon-lime)"
      : step.accent === "purple"
      ? "var(--neon-purple)"
      : "var(--neon-magenta)";

  const number = String(index + 1).padStart(2, "0");
  const Icon = step.icon;

  if (horizontal) {
    return (
      <div className="relative flex flex-col items-start">
        <div
          className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 bg-white font-display text-2xl font-bold"
          style={{
            borderColor: accentColor,
            color: accentColor,
            boxShadow: `0 0 0 6px oklch(0.98 0.005 300), 0 12px 32px -12px ${accentColor}`,
          }}
        >
          {number}
        </div>
        <div
          className="mt-6 flex h-11 w-11 items-center justify-center rounded-xl border bg-white"
          style={{ borderColor: `color-mix(in oklab, ${accentColor} 30%, transparent)`, boxShadow: `0 0 20px -8px ${accentColor}` }}
          aria-hidden
        >
          <Icon className="h-5 w-5" style={{ color: accentColor }} />
        </div>
        <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-tight text-[oklch(0.14_0.03_300)] xl:text-xl">
          {step.title}
        </h3>
        <p className="mt-2 text-sm text-[oklch(0.45_0.03_300)]">{step.description}</p>
      </div>
    );
  }

  return (
    <li className="relative flex items-start gap-4 pl-0">
      <div
        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 bg-white font-display text-base font-bold"
        style={{
          borderColor: accentColor,
          color: accentColor,
          boxShadow: `0 0 0 4px oklch(0.98 0.005 300), 0 8px 20px -8px ${accentColor}`,
        }}
      >
        {number}
      </div>
      <div className="min-w-0 flex-1 pt-1">
        <div className="flex items-center gap-2">
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-white"
            style={{ borderColor: `color-mix(in oklab, ${accentColor} 30%, transparent)`, boxShadow: `0 0 16px -8px ${accentColor}` }}
            aria-hidden
          >
            <Icon className="h-4 w-4" style={{ color: accentColor }} />
          </div>
          <h3 className="font-display text-base font-bold uppercase tracking-tight text-[oklch(0.14_0.03_300)]">
            {step.title}
          </h3>
        </div>
        <p className="mt-1.5 text-sm text-[oklch(0.45_0.03_300)]">{step.description}</p>
      </div>
    </li>
  );
}



