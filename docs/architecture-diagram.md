# 🏗️ Arsitektur & Alur Website Sekolah

## Sitemap — Struktur Navigasi

```mermaid
graph TD
    HOME["🏠 Beranda<br>(index.html)"]
    PPDB["📝 PPDB<br>(ppdb.html)"]
    GALERI["🎨 Galeri Kreatif<br>(galeri.html)"]

    HOME --> HERO["Hero Section"]
    HOME --> SAMBUTAN["Sambutan Kepsek"]
    HOME --> VISIMISI["Visi & Misi"]
    HOME --> PROGRAM["Program Unggulan"]
    HOME --> BERITA["Berita Terbaru"]
    HOME --> FOOTER["Footer + Maps"]

    PPDB --> BANNER["Banner Promosi"]
    PPDB --> CTA["CTA Daftar Sekarang"]
    PPDB --> ALUR["Alur Pendaftaran"]
    PPDB --> BIAYA["Tabel Biaya"]
    PPDB --> TESTI["Testimoni Slider"]
    PPDB --> FAQ["FAQ Accordion"]

    GALERI --> MASONRY["Galeri Masonry"]
    GALERI --> ANIMASI["Scroll Animations"]
    GALERI --> WA["WhatsApp Widget"]

    style HOME fill:#1B2A4A,color:#fff
    style PPDB fill:#2E7D32,color:#fff
    style GALERI fill:#E65100,color:#fff
```

---

## Alur Pengunjung (User Flow)

```mermaid
flowchart LR
    A["🌐 Pengunjung<br>Masuk Website"] --> B{"Pilih Menu"}
    
    B -->|Beranda| C["Lihat Hero +<br>Info Sekolah"]
    B -->|PPDB| D["Lihat Info<br>Pendaftaran"]
    B -->|Galeri| E["Lihat Karya<br>Siswa"]

    C --> C1["Baca Sambutan Kepsek"]
    C1 --> C2["Lihat Visi Misi"]
    C2 --> C3["Eksplorasi Program"]
    C3 --> C4["Baca Berita"]
    C4 --> F["📞 Kontak / Maps"]

    D --> D1["Lihat Banner Promo"]
    D1 --> D2["Cek Alur Daftar"]
    D2 --> D3["Lihat Tabel Biaya"]
    D3 --> D4["Baca Testimoni"]
    D4 --> D5["Cek FAQ"]
    D5 --> D6["✅ Klik DAFTAR"]

    E --> E1["Browse Galeri Masonry"]
    E1 --> E2["💬 Chat WhatsApp"]

    style A fill:#1B2A4A,color:#fff
    style D6 fill:#2E7D32,color:#fff
    style E2 fill:#25D366,color:#fff
```

---

## Arsitektur File & Dependency

```mermaid
graph TB
    subgraph HTML["📄 HTML Pages"]
        INDEX["index.html"]
        PPDB_H["ppdb.html"]
        GALERI_H["galeri.html"]
    end

    subgraph CSS["🎨 CSS Layer"]
        VAR["variables.css<br>(Design Tokens)"]
        BASE["base.css<br>(Reset + Base)"]
        COMP["components.css<br>(Reusable)"]
        HERO_C["hero.css"]
        PPDB_C["ppdb.css"]
        GALERI_C["galeri.css"]
    end

    subgraph JS["⚡ JavaScript"]
        MAIN["main.js<br>(Core Logic)"]
        CARO["carousel.js<br>(Testimoni)"]
        FAQ_J["faq.js<br>(Accordion)"]
        ANIM["animations.js<br>(Scroll FX)"]
    end

    subgraph ASSETS["📁 Public Assets"]
        IMG["images/"]
        FONTS["Google Fonts CDN"]
        ICONS["Lucide Icons CDN"]
    end

    INDEX --> VAR & BASE & COMP & HERO_C
    INDEX --> MAIN & ANIM
    PPDB_H --> VAR & BASE & COMP & PPDB_C
    PPDB_H --> MAIN & CARO & FAQ_J
    GALERI_H --> VAR & BASE & COMP & GALERI_C
    GALERI_H --> MAIN & ANIM

    COMP --> VAR
    BASE --> VAR
    HERO_C --> VAR
    PPDB_C --> VAR
    GALERI_C --> VAR

    INDEX & PPDB_H & GALERI_H --> IMG & FONTS & ICONS

    style HTML fill:#E3F2FD,stroke:#1565C0
    style CSS fill:#FFF3E0,stroke:#E65100
    style JS fill:#E8F5E9,stroke:#2E7D32
    style ASSETS fill:#F3E5F5,stroke:#7B1FA2
```

---

## Alur Build & Deploy

```mermaid
flowchart LR
    DEV["👨‍💻 Development"] --> VITE["⚡ Vite Dev Server<br>npm run dev"]
    VITE --> HOT["🔥 Hot Module Reload"]
    
    DEV --> BUILD["📦 Vite Build<br>npm run build"]
    BUILD --> DIST["dist/ folder"]
    DIST --> DEPLOY{"🚀 Deploy ke?"}
    
    DEPLOY -->|Option 1| NETLIFY["Netlify"]
    DEPLOY -->|Option 2| VERCEL["Vercel"]
    DEPLOY -->|Option 3| GHP["GitHub Pages"]

    style DEV fill:#1B2A4A,color:#fff
    style DIST fill:#F4A623,color:#000
    style NETLIFY fill:#00C7B7,color:#fff
    style VERCEL fill:#000,color:#fff
    style GHP fill:#24292e,color:#fff
```

---

## 🧠 Mindmap — Modul & Fitur

```mermaid
mindmap
  root((🏫 Website Sekolah<br>AntiGravity))
    📄 Modul Halaman
      🏠 Beranda
        Hero Section
        Sambutan Kepsek
        Visi & Misi
        Program Unggulan
        Berita Terbaru
        Footer & Maps
      📝 PPDB
        Banner Promosi
        CTA Daftar
        Alur Pendaftaran
        Tabel Biaya
        Testimoni Slider
        FAQ Accordion
      🎨 Galeri Kreatif
        Masonry Grid
        Lightbox Popup
        WhatsApp Widget
    🎯 Fitur
      🧭 Navigasi
        Responsive Navbar
        Hamburger Menu Mobile
        Smooth Scroll
        Active Link Highlight
      ✨ Animasi & Interaksi
        Scroll Fade-in / Slide-up
        Hover Effects
        Micro-interactions
        Carousel Auto-play & Swipe
        Accordion Expand/Collapse
      📱 Responsif
        Mobile
        Tablet
        Desktop
        Large Desktop
      🔍 SEO
        Meta Title & Description
        Open Graph Tags
        Semantic HTML5
        Heading Hierarchy
        Alt Text Gambar
      ⚡ Performance
        Lazy Loading
        Minified CSS & JS
        Optimasi Gambar WebP
        Lighthouse Score > 90
```
