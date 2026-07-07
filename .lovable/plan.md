## План: Современный формат изображений + адаптивная загрузка

### Цель
Перевести все изображения на WebP (заметно меньше PNG/JPG при том же качестве) и отдавать мобильным устройствам версии меньшего размера — чтобы страница быстрее грузилась на телефоне.

### Что сделаю

1. **Конвертация в WebP** (через `cwebp` в sandbox):
   - `hero-vibe.png` (952 KB) → `hero-vibe.webp` (desktop 1024px) + `hero-vibe-640.webp` (mobile 640px)
   - `project-studyflow.jpg` (76 KB) → `.webp` desktop 1024 + `-480.webp` mobile 480px
   - `project-neuroanalyst.jpg` (57 KB) → аналогично
   - `project-launchpro.jpg` (102 KB) → аналогично
   - Старые PNG/JPG удалю.

2. **Адаптивная разметка `<img>` в `src/routes/index.tsx`**:
   - Заменю `<img src=...>` на `srcSet` + `sizes`, чтобы браузер сам выбирал нужное разрешение.
   - Пример для hero:
     ```tsx
     <img
       src={heroVibe}
       srcSet={`${heroVibeMobile} 640w, ${heroVibe} 1024w`}
       sizes="(max-width: 640px) 240px, 560px"
       ...
     />
     ```
   - То же для трёх карточек проектов.
   - Hero — `fetchPriority="high"`, карточки уже с `loading="lazy"`.

3. **Без AVIF**: WebP даёт ~90% выгоды AVIF при меньшем риске, поддержка ~98% браузеров. Если понадобится — добавим `<picture>` с AVIF-исходником позже.

### Что не трогаю
- Разметку, стили, тексты, CTA — только атрибуты `src/srcSet/sizes` у 4 картинок и импорты.

### Техническая заметка
`cwebp` установлю через `nix run nixpkgs#libwebp -- ...` в одну команду. Итоговый вес hero упадёт примерно с 952 KB до ~150 KB (desktop) и ~40 KB (mobile).
