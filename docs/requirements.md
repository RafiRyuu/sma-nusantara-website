# 📋 Daftar Kebutuhan — Website Sekolah AntiGravity

---

## 1. Kebutuhan Teknis (Technical Requirements)

### Development Tools

| Tool | Versi | Kegunaan |
|------|-------|----------|
| **Node.js** | >= 18.x | Runtime JavaScript |
| **npm** | >= 9.x | Package manager |
| **Vite** | >= 5.x | Bundler & dev server |
| **Git** | >= 2.x | Version control |
| **VS Code** | Latest | Code editor (rekomendasi) |

### Browser Target

| Browser | Versi Minimum |
|---------|---------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile Chrome | 90+ |
| Mobile Safari | 14+ |

### Framework & Library

> [!NOTE]
> Proyek ini menggunakan pendekatan **vanilla** (tanpa framework besar seperti React/Vue) agar ringan, cepat, dan mudah di-deploy sebagai static site.

#### 📦 npm Dependencies (Install via `npm install`)

| Package | Versi | Kategori | Kegunaan |
|---------|-------|----------|----------|
| **vite** | `^5.x` | Dev dependency | Bundler, dev server, hot reload |

#### 🌐 CDN Resources (Tidak perlu install)

| Resource | URL / Source | Kegunaan |
|----------|-------------|----------|
| **Google Fonts** | `fonts.google.com` | Font Poppins (heading) & Inter (body) |
| **Lucide Icons** | `unpkg.com/lucide` | Ikon SVG ringan untuk UI |
| **Font Awesome** _(alternatif)_ | `cdnjs.cloudflare.com/font-awesome` | Ikon alternatif jika Lucide tidak cocok |

#### 🛠️ Built-in Browser API (Tanpa library tambahan)

| API | Kegunaan |
|-----|----------|
| **Intersection Observer** | Scroll-triggered animations (fade-in, slide-up) |
| **CSS Custom Properties** | Design tokens / theming |
| **CSS Grid & Flexbox** | Layout system responsive |
| **Fetch API** | (Opsional) Untuk integrasi data dinamis |

#### 🔧 Opsional — Jika Dibutuhkan Nanti

| Package | Kategori | Kegunaan | Kapan Install? |
|---------|----------|----------|----------------|
| **@formspree/core** | Dependency | Form kontak tanpa backend | Jika tambah form kontak |
| **emailjs-com** | Dependency | Kirim email dari client-side | Alternatif Formspree |
| **swiper** | Dependency | Carousel/slider yang powerful | Jika carousel custom kurang |
| **lightgallery** | Dependency | Lightbox popup galeri | Jika butuh lightbox canggih |
| **gsap** | Dependency | Animasi advanced (timeline) | Jika butuh animasi kompleks |

#### 📝 Ringkasan Install

```bash
# 1. Init project
npm create vite@latest ./ -- --template vanilla

# 2. Install dependencies (hanya Vite saat ini)
npm install

# 3. Jalankan dev server
npm run dev

# 4. Build production
npm run build
```

---

## 2. Kebutuhan Desain (Design Requirements)

### Palet Warna

| Peran | Warna | Hex | Preview |
|-------|-------|-----|---------|
| Primary | Biru Navy | `#1B2A4A` | 🟦 |
| Secondary | Putih | `#FFFFFF` | ⬜ |
| Accent | Gold | `#F4A623` | 🟨 |
| Background | Light Gray | `#F5F7FA` | ⬜ |
| Text | Dark | `#1A1A2E` | ⬛ |
| Success | Green | `#2E7D32` | 🟩 |
| Danger/CTA | Orange Red | `#E65100` | 🟧 |

### Typography

| Elemen | Font | Weight | Size |
|--------|------|--------|------|
| Heading H1 | Poppins | 700 (Bold) | 48px / 3rem |
| Heading H2 | Poppins | 600 (SemiBold) | 36px / 2.25rem |
| Heading H3 | Poppins | 600 | 24px / 1.5rem |
| Body | Inter | 400 (Regular) | 16px / 1rem |
| Small | Inter | 400 | 14px / 0.875rem |
| Button | Inter | 600 | 16px / 1rem |

### Breakpoint Responsif

| Device | Breakpoint |
|--------|-----------|
| Mobile | `< 768px` |
| Tablet | `768px — 1024px` |
| Desktop | `> 1024px` |
| Large Desktop | `> 1440px` |

---

## 3. Kebutuhan Konten (Content Requirements)

### Halaman Profil Sekolah

| Konten | Status | Catatan |
|--------|--------|---------|
| Nama sekolah | ⏳ Placeholder | Gunakan "SMA Nusantara Cendekia" |
| Foto hero sekolah | ⏳ Generate AI | Ganti dengan foto asli nanti |
| Foto kepala sekolah | ⏳ Generate AI | Ganti dengan foto asli nanti |
| Teks sambutan | ⏳ AI Generated | Bisa di-customize |
| Poin visi & misi | ⏳ AI Generated | Sesuaikan dengan sekolah |
| Deskripsi program | ⏳ AI Generated | 3 program unggulan |
| Artikel berita | ⏳ AI Generated | 3 artikel dummy |
| Alamat sekolah | ⏳ Placeholder | Untuk Google Maps embed |
| Link sosial media | ⏳ Placeholder | URL media sosial sekolah |

### Halaman PPDB

| Konten | Status | Catatan |
|--------|--------|---------|
| Info diskon/beasiswa | ⏳ Placeholder | Detail promo PPDB |
| Langkah pendaftaran | ⏳ AI Generated | 4-5 langkah |
| Rincian biaya | ⏳ Placeholder | Tabel biaya masuk |
| Testimoni alumni | ⏳ AI Generated | 3-5 testimoni |
| FAQ pendaftaran | ⏳ AI Generated | 5-7 pertanyaan |

### Halaman Galeri

| Konten | Status | Catatan |
|--------|--------|---------|
| Foto karya siswa | ⏳ Generate AI | 8-12 gambar galeri |
| Nomor WhatsApp | ⏳ Placeholder | Nomor admin sekolah |

---

## 4. Kebutuhan Fungsional (Functional Requirements)

### Navigasi
- [x] Navbar responsive dengan hamburger menu di mobile
- [x] Smooth scroll ke section anchor
- [x] Active state highlight saat scroll
- [x] Link antar halaman (index ↔ ppdb ↔ galeri)

### Interaksi
- [x] Carousel/slider testimoni dengan auto-play
- [x] FAQ accordion expand/collapse
- [x] Scroll-triggered fade-in animations
- [x] Hover effects pada card dan button
- [x] Floating WhatsApp button

### SEO
- [x] Meta title & description per halaman
- [x] Heading hierarchy (`h1` > `h2` > `h3`)
- [x] Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`)
- [x] Alt text pada semua gambar
- [x] Open Graph meta tags

### Performance
- [x] Lazy loading gambar
- [x] Optimasi file CSS & JS (minified saat build)
- [x] Target Lighthouse Performance > 90
- [x] Target Lighthouse Accessibility > 90

---

## 5. Kebutuhan Hosting & Deployment

| Aspek | Kebutuhan |
|-------|-----------|
| **Tipe Hosting** | Static hosting (tanpa backend) |
| **Opsi Deploy** | Netlify / Vercel / GitHub Pages |
| **Domain** | Custom domain (opsional) |
| **SSL** | HTTPS wajib (gratis dari hosting) |
| **CI/CD** | Auto-deploy dari GitHub push (opsional) |

---

## 6. Kebutuhan Opsional (Nice to Have)

| Fitur | Prioritas | Deskripsi |
|-------|-----------|-----------|
| Dark Mode | 🟡 Medium | Toggle dark/light theme |
| Multi-bahasa | 🔴 Low | ID / EN switcher |
| Blog CMS | 🔴 Low | Integrasi headless CMS untuk berita |
| Analytics | 🟢 High | Google Analytics tracking |
| Form Kontak | 🟡 Medium | Form dengan Formspree/EmailJS |
