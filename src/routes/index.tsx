import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Sparkle } from "lucide-react";
import heroVibe from "@/assets/hero-vibe.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-hero-gradient">
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
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="font-display text-2xl font-bold tracking-tight text-foreground">
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
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-2 lg:gap-6 lg:px-10 lg:pb-32 lg:pt-16">
        {/* Left column */}
        <div className="order-2 lg:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground backdrop-blur-sm">
            <Sparkle className="h-3 w-3 text-neon-lime" />
            AI · Vibecoding · MVP
          </div>

          <h1 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            Создаю{" "}
            <span className="text-neon-lime" style={{ textShadow: "0 0 30px oklch(0.92 0.24 130 / 0.5)" }}>
              AI-продукты
            </span>{" "}
            через вайбкодинг
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Быстро собираю MVP, лендинги и веб-приложения с помощью современных AI-инструментов.
          </p>

          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Быстро. Гибко. С душой.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-neon-lime px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-neon-lime-foreground shadow-glow-lime transition-all duration-200 hover:-translate-y-1 hover:brightness-90 hover:shadow-[0_12px_50px_oklch(0.92_0.24_130/0.6)] active:translate-y-0"
            >
              Посмотреть проекты
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground transition-all duration-200 hover:-translate-y-1 hover:brightness-90 hover:bg-[oklch(0.55_0.28_310/0.25)] active:translate-y-0"
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
        <div className="relative order-1 flex items-center justify-center lg:order-2">
          <div className="relative aspect-square w-full max-w-[420px] lg:max-w-[560px]">
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
              className="animate-float-slow absolute left-0 top-10 h-10 w-10 text-neon-purple"
              style={{ animationDelay: "1s", filter: "drop-shadow(0 0 12px oklch(0.68 0.28 310))" }}
              aria-hidden
            />
            <Sparkle
              className="animate-float-slow absolute -bottom-2 right-6 h-8 w-8 text-neon-magenta"
              style={{ animationDelay: "2s", filter: "drop-shadow(0 0 12px oklch(0.65 0.30 340))" }}
              aria-hidden
            />
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-10">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <ArrowDown className="h-4 w-4 animate-bounce" />
          <span className="h-2 w-2 rounded-full bg-neon-lime shadow-glow-lime" />
        </div>
      </div>
    </main>
  );
}
