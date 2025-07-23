# 🌐 Инструкция по настройке ссылок для хостинга

## ✅ Что уже исправлено для хостинга:

### 1. Абсолютные ссылки заменены на относительные
- ❌ Было: `https://sintabllc.com/images/truck-1.jpg`
- ✅ Стало: `images/truck-1.jpg`

### 2. Мета-теги подготовлены для любого домена
- Open Graph URL: пустое содержимое (автоподстановка)
- Twitter URL: пустое содержимое (автоподстановка)
- Canonical URL: пустое содержимое (автоподстановка)

### 3. Логотип исправлен для корректной работы
- ❌ Было: `href="/"`
- ✅ Стало: `href="#main-content"`

### 4. JSON-LD структурированные данные
- URL организации: пустое содержимое
- Логотип: относительный путь

## 🔧 Что нужно сделать при размещении на хостинге:

### Шаг 1: Замените домен в следующих местах

**В файле `index.html` найдите и замените пустые content на ваш домен:**

```html
<!-- Строка 24 -->
<meta property="og:url" content="https://yourdomain.com/">

<!-- Строка 31 -->
<meta property="twitter:url" content="https://yourdomain.com/">

<!-- Строка 40 -->
<link rel="canonical" href="https://yourdomain.com/">

<!-- Строка 311 в JSON-LD -->
"url": "https://yourdomain.com",
```

### Шаг 2: Если размещаете в подпапке

Если ваш сайт будет размещен в подпапке (например: `yourdomain.com/sintab/`), 
добавьте префикс ко всем относительным путям:

```html
<!-- Было -->
<img src="images/logo.svg">
<link rel="stylesheet" href="style.css">

<!-- Станет -->
<img src="sintab/images/logo.svg">
<link rel="stylesheet" href="sintab/style.css">
```

### Шаг 3: Настройка контактной информации

Замените email в файле (если нужно):
```html
<!-- Строка 287 -->
<a href="mailto:YOUR-EMAIL@yourdomain.com">

<!-- Строка 321 в JSON-LD -->
"email": "YOUR-EMAIL@yourdomain.com",
```

## 📁 Структура файлов для загрузки:

```
/ (корень сайта)
├── index.html
├── style.css
├── script.js
├── robots.txt
├── .htaccess
└── images/
    ├── Sintab LLC FF-01.svg
    ├── -professional-truck-driver-portrait--middle-aged-m.jpg
    ├── happy-small-business-owner-receiving-package-deliv.jpg
    ├── small-truck-svgrepo-com.svg
    ├── handshake-deal-svgrepo-com.svg
    ├── operator-support-svgrepo-com.svg
    ├── map-svgrepo-com.svg
    ├── phone-android-svgrepo-com.svg
    ├── email-download-svgrepo-com.svg
    └── instagram-2-1-logo-svgrepo-com.svg
```

## ✅ Проверенные ссылки:

### Внутренние якорные ссылки:
- ✅ `#main-content` → `id="main-content"`
- ✅ `#about` → `id="about"`
- ✅ `#services` → `id="services"`
- ✅ `#join-us` → `id="join-us"`
- ✅ `#quote-form` → `id="quote-form"`
- ✅ `#why-us` → `id="why-us"`

### Файлы ресурсов:
- ✅ `style.css` - существует
- ✅ `script.js` - существует
- ✅ Все изображения - существуют
- ✅ `.htaccess` - создан
- ✅ `robots.txt` - создан

### Внешние ссылки:
- ✅ Google Fonts - работают
- ✅ Телефонные ссылки - корректны
- ✅ Email ссылки - корректны
- ✅ Instagram - работает

## 🧪 Тестирование после размещения:

1. **Навигация**: Проверьте все пункты меню
2. **Изображения**: Убедитесь что все изображения загружаются
3. **Формы**: Протестируйте отправку формы
4. **Мобильная версия**: Проверьте на мобильных устройствах
5. **SEO**: Проверьте через Google Search Console

## ⚠️ Важные замечания:

- Если меняете домен, обновите все ссылки одновременно
- Проверьте работу `.htaccess` на вашем хостинге
- Убедитесь что все файлы загружены с правильными правами доступа
- Протестируйте сайт в режиме инкогнито для чистой проверки

Ваш сайт готов к размещению на любом хостинге! 🚀 