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
- Level 1 (уроки 1–24) + Level 2 Unit 1 (A2, уроки 1–4)
- TTS (Web Speech) + EN-текст/субтитры в диалогах, карточках и listening-сценах
- Unit Quiz, прогресс, SRS
- Capacitor Android
- Level 2 Units 2–7 — в каталоге, контент скоро

Проверки: `npm run qa:content`

## Учебная программа

- [CURRICULUM.md](./CURRICULUM.md) — общая рамка
- [Level 1 · A1](./curriculum/level-1-a1.md)
- [Level 2 · A2](./curriculum/level-2-a2.md)
- [Level 3 · B1](./curriculum/level-3-b1.md)
- [Level 4 · B2](./curriculum/level-4-b2.md)
