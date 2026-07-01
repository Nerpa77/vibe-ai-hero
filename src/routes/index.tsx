import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Sparkle, ArrowUpRight } from "lucide-react";

import heroVibe from "@/assets/hero-vibe.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
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
  );
}
