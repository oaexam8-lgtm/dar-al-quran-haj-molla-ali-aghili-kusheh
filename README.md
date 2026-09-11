# 🕌 دارالقرآن حاج ملا علی عقیلی - کوشه، قشم

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📖 درباره پروژه

وب‌سایت رسمی **دارالقرآن حاج ملا علی عقیلی** واقع در روستای کوشه، قشم. این مکتب با بیش از 115 سال سابقه، یکی از قدیمی‌ترین و معتبرترین مراکز آموزش قرآن کریم در منطقه است.

### ✨ ویژگی‌های سایت
- 🎨 **طراحی مدرن** با Glassmorphism UI
- 📱 **کاملاً ریسپانسیو** برای موبایل، تبلت و دسکتاپ
- 🌓 **تم روشن/تاریک** با قابلیت تغییر
- ⚡ **عملکرد بالا** و بهینه‌سازی شده
- 🔍 **سئو کامل** با Schema Markup
- ♿ **دسترسی‌پذیر** با ARIA labels
- 🗺️ **نقشه تعاملی** Google Maps
- 📞 **لینک‌های مستقیم** تماس و شبکه‌های اجتماعی

## 🚀 دموی زنده

[مشاهده دمو](https://oaexam8-lgtm.github.io/dar-al-quran-haj-molla-ali-aghili-kosge)

## 📸 پیش‌نمایش

![Screenshot](screenshot.png)

## 🛠️ تکنولوژی‌های استفاده شده

- **HTML5** - ساختار معنایی
- **CSS3** - استایل‌دهی پیشرفته (Glassmorphism, Animations)
- **JavaScript (ES6+)** - تعاملات و انیمیشن‌ها
- **Font Awesome** - آیکون‌ها
- **AOS Library** - انیمیشن‌های اسکرول
- **Google Fonts (Vazirmatn)** - فونت فارسی

## 📁 ساختار پروژه

```
├── index.html          # صفحه اصلی
├── styles.css          # استایل‌های سایت
├── script.js           # منطق جاوااسکریپت
├── logo.svg            # لوگوی مکتب
├── .htaccess           # تنظیمات سرور Apache
├── robots.txt          # راهنمای روبات‌های جستجو
├── sitemap.xml         # نقشه سایت برای موتورهای جستجو
├── SEO-GUIDE.md        # راهنمای بهینه‌سازی سئو
└── README.md           # این فایل
```

## 🔧 نصب و راه‌اندازی

### 1. کلون کردن مخزن
```bash
git clone https://github.com/oaexam8-lgtm/dar-al-quran-haj-molla-ali-aghili-kosge.git
cd dar-al-quran-haj-molla-ali-aghili-kosge
```

### 2. اجرای محلی
این پروژه فقط از HTML، CSS و JavaScript خالص استفاده می‌کند و نیازی به نصب وابستگی ندارد.

#### گزینه 1: استفاده از Live Server (VS Code)
- افزونه Live Server را نصب کنید
- روی `index.html` کلیک راست کرده و "Open with Live Server" را انتخاب کنید

#### گزینه 2: استفاده از Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# سپس در مرورگر باز کنید:
http://localhost:8000
```

#### گزینه 3: مستقیماً در مرورگر
فایل `index.html` را مستقیماً در مرورگر باز کنید.

## 🌐 استقرار (Deployment)

### GitHub Pages
1. Settings → Pages بروید
2. Source را روی `main` branch تنظیم کنید
3. ذخیره کنید و چند دقیقه صبر کنید
4. سایت شما در `https://oaexam8-lgtm.github.io/dar-al-quran-haj-molla-ali-aghili-kosge` در دسترس است

### Netlify
```bash
# نصب Netlify CLI
npm install -g netlify-cli

# استقرار
netlify deploy --prod
```

### Vercel
```bash
# نصب Vercel CLI
npm install -g vercel

# استقرار
vercel --prod
```

## ⚙️ پیکربندی

### تغییر URL سایت
قبل از استقرار، مقادیر زیر را در `index.html` تغییر دهید:

```html
<!-- خط 11 -->
<link rel="canonical" href="https://YOUR-DOMAIN.com/">

<!-- خطوط 14-22: Open Graph -->
<meta property="og:url" content="https://YOUR-DOMAIN.com/">
<meta property="og:image" content="https://YOUR-DOMAIN.com/logo.svg">

<!-- خطوط 25-29: Twitter -->
<meta property="twitter:url" content="https://YOUR-DOMAIN.com/">
<meta property="twitter:image" content="https://YOUR-DOMAIN.com/logo.svg">
```

همچنین در `sitemap.xml` و `robots.txt` URL را به‌روزرسانی کنید.

## 📱 شبکه‌های اجتماعی

- 📷 [Instagram](https://www.instagram.com/maktab.6035)
- ✈️ [Telegram](https://t.me/daralquran_hajmollaaliaghili)
- 💬 [WhatsApp](https://wa.me/989179391865)

## 📞 تماس با ما

- **تلفن**: 0917 939 1865
- **موبایل**: 09170 939 391
- **آدرس**: استان هرمزگان، شهرستان قشم، روستای کوشه

## 🔍 بهینه‌سازی SEO

این سایت شامل:
- ✅ Meta tags کامل (Title, Description, Keywords)
- ✅ Open Graph و Twitter Cards
- ✅ JSON-LD Schema Markup
- ✅ Semantic HTML5
- ✅ Sitemap و Robots.txt
- ✅ تگ‌های Geo برای SEO محلی
- ✅ بهینه‌سازی سرعت و عملکرد

برای اطلاعات بیشتر، فایل [SEO-GUIDE.md](SEO-GUIDE.md) را مطالعه کنید.

## 🤝 مشارکت

مشارکت‌ها، مسائل و درخواست‌های ویژگی خوش‌آمدید!

1. این مخزن را Fork کنید
2. یک شاخه ویژگی بسازید (`git checkout -b feature/AmazingFeature`)
3. تغییرات خود را commit کنید (`git commit -m 'Add some AmazingFeature'`)
4. به شاخه Push کنید (`git push origin feature/AmazingFeature`)
5. یک Pull Request باز کنید

## 📄 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است. فایل [LICENSE](LICENSE) را برای جزئیات بیشتر ببینید.

## 👨‍💻 نویسنده

**دارالقرآن حاج ملا علی عقیلی**

---

<div align="center">
  <p>ساخته شده با ❤️ برای خدمت به قرآن کریم</p>
  <p>© 2024 دارالقرآن حاج ملا علی عقیلی. تمامی حقوق محفوظ است.</p>
</div>
