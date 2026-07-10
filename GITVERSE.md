# Публикация на GitVerse Pages

Это Astro-проект. Встроенный Jekyll **не умеет** собирать `.astro`-файлы и **игнорирует папки с `_`**, поэтому каталог `_astro` (CSS/JS) не попадал на сайт. В проекте используется папка `assets` вместо `_astro`.

## Настройка (один раз)

1. Откройте **Настройки → Страницы**
2. **Источник:** выберите **Ветка** (не «Воркфлоу»)
3. **Ветка:** `master`
4. **Папка:** `docs`
5. Сохраните

> CI-сборка на GitVerse отключена: runner часто падает с `no space left on device`.
> Сайт уже лежит в `docs/` и публикуется напрямую из ветки.

## Обновление сайта

```bash
npm run build:pages
git add docs/
git commit -m "Update published site"
git push origin master
```

**Адрес сайта:** https://mashukOnline.gitverse.site/technomatics
