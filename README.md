# ТЕХНОМАТИКА — Лендинг-хаб КПК

Учебный хаб участников КПК «Информатика в междисциплинарных проектах: Архитектура образовательных решений».

## Быстрый старт

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # сборка в dist/
npm run preview  # предпросмотр сборки
```

---

## Как добавить ссылку на презентацию / транскрибинг лекции

1. Открой нужный файл в `src/content/lectures/` (например, `1-1.md` для темы 1.1).
2. В `frontmatter` найди поле `slidesUrl` или `transcriptUrl`.
3. Замени `null` на URL в кавычках:

```yaml
# Было:
slidesUrl: null
transcriptUrl: null

# Стало:
slidesUrl: "https://drive.google.com/file/d/XXXX/view"
transcriptUrl: "https://docs.google.com/document/d/YYYY/edit"
```

4. Сохрани файл — кнопка автоматически станет активной.

### Добавить дополнительный материал

```yaml
materials:
  - title: "Задачник по системам счисления"
    url: "https://..."
    type: pdf   # pdf | link | video | file
  - title: "Видео-объяснение"
    url: "https://youtube.com/..."
    type: video
```

---

## Как наполнить страницу /students

Файл: `src/pages/students.astro`

- Найди массив `directions` — там 6 направлений. Замени заглушки на реальные описания.
- Убери чип «Скоро» на hero-секции (`<span class="soon-chip">Скоро</span>`) когда программа готова.
- Карточки направлений: убери `.coming-tag` и добавь `<a href="...">` для каждого трека.

---

## Структура проекта

```
src/
├── content/
│   ├── config.ts           # схема Content Collections
│   └── lectures/           # по файлу на каждую лекцию (1-1.md … 3-3.md)
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Logo.astro
│   ├── DiamondPattern.astro
│   └── LectureCard.astro
├── layouts/
│   └── Layout.astro        # обёртка с мета-тегами
└── pages/
    ├── index.astro          # главная
    ├── students.astro       # страница для учеников
    ├── 404.astro
    └── lecture/
        └── [code].astro     # страница лекции (генерится из коллекции)
```
