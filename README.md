# English Club

Приложение для изучения английского (взрослые, старт A1).

Фокус: грамматика, словарь, разговор; далее — литература, фильмы и общение в поездках.

## Стек

- React + Vite + TypeScript
- Прогресс и SRS в `localStorage`
- Учебная программа в `curriculum/` и `CURRICULUM.md`

## Быстрый старт

```bash
npm install
npm run dev
```

### Android (Capacitor)

```bash
npm run build
npx cap add android   # один раз
npm run cap:sync
npm run cap:open
```

Сборка debug APK в CI идёт при push в `master` (`.github/workflows/android-apk.yml`).

Сейчас в приложении:
- путь Level 1 (уроки 1–24) с разблокировкой по порядку
- Unit Quiz после каждого юнита
- экран прогресса и слабые места (результат ниже 70%)
- типы заданий: explain, drill, builder, cloze, cards, dialogue, produce
- SRS-повтор карточек
- Capacitor Android
- заготовки Level 2–4

## Учебная программа

- [CURRICULUM.md](./CURRICULUM.md) — общая рамка
- [Level 1 · A1](./curriculum/level-1-a1.md)
- [Level 2 · A2](./curriculum/level-2-a2.md)
- [Level 3 · B1](./curriculum/level-3-b1.md)
- [Level 4 · B2](./curriculum/level-4-b2.md)
