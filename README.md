# ТЕХНОМАТИКА — Лендинг-хаб КПК

Учебный хаб участников КПК «Информатика в междисциплинарных проектах: Архитектура образовательных решений».

## Быстрый старт

```bash
npm install
npm run dev      # http://localhost:4321/technomatics
npm run build    # сборка в dist/
npm run build:pages  # dist/ + копия в docs/ для GitVerse
npm run preview  # предпросмотр сборки
```

## Публикация

| Платформа | URL | Base path |
|-----------|-----|-----------|
| GitVerse | https://mashukOnline.gitverse.site/technomatics | `/technomatics` |
| GitHub Pages | https://zuevpu.github.io/technomatika | `/technomatika` |

Подробнее про GitVerse: см. [GITVERSE.md](./GITVERSE.md)

---

## Как добавить ссылку на презентацию / конспект лекции

1. Открой нужный файл в `src/content/lectures/` (например, `1-1.md` для темы 1.1).
2. В `frontmatter` найди поле `slidesUrl` или `transcriptUrl`.
3. Замени `null` на URL в кавычках:

```yaml
slidesUrl: "https://drive.google.com/file/d/XXXX/view"
transcriptUrl: "https://docs.google.com/document/d/YYYY/edit"
```

4. Сохрани файл — кнопка автоматически станет активной.

---

## Структура проекта

```
src/
├── content/lectures/     # по файлу на каждую лекцию
├── components/
├── layouts/Layout.astro  # мета-теги, Metrika, OG
└── pages/
    ├── index.astro
    ├── students.astro
    └── lecture/[code].astro
```

## Аналитика

Яндекс.Метрика (ID `110085227`) подключена в `src/layouts/Layout.astro`.
