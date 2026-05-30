# O'ZBEKISTON RESPUBLIKASI OLIY VA O'RTA MAXSUS TA'LIM VAZIRLIGI
FARG'ONA DAVLAT TEXNIKA UNIVERSITETI
AXBOROT TEXNOLOGIYALARI VA TELEKOMMUNIKATSIYA FAKULTETI

---

## Loyiha Mavzusi
**SMDJ GROUP XUSUSIY MAKTAB SAYTI LOYIHASI**
Next.js 16 va TypeScript asosida yaratilgan zamonaviy veb-sayt

---

## Loyihani bajardi
**Talaba**: Abdullajonov Muhammadqodir

## Loyihani qabul qildi
**O'qituvchi**: Xolmatov Abdurashid

---

# KIRISH

Bugungi davrda ta'lim tizimi barcha sohalarida o'z roli va ahamiyatini oshirmoqda. Xususan, maktablarning onlayn ifodasini yaratish jadval davom etmoqda. SMDJ Group xususiy maktabining veb-sayti bu jarayonning amaliy namunasi hisoblanadi.

Loyihaning asosiy maqsadi - SMDJ Group maktabini raqamli muhitda to'liq va tushunarli tarzda taqdim etish, ota-onalar va talabalarni qabul jarayonini osongina qila olish, yangiliklar va o'quv dasturlarini tezkor yetkazish.

Zamonaviy veb-texnologiyalari - Next.js, React, TypeScript va Tailwind CSS - yordamida yaratilgan bu sayt yuqori ishlash tezligi, SEO optimallashtirish va foydalanuvchi tajribasining yaxshiligini ta'minlaydi.

---

# I. NAZARIY QISM

## 1.1 Veb-sayt yaratishning asosiy tushunchalar

### 1.1.1 Veb-arxitektura va App Router
Veb-saytlar zamonaviy frameworklar yordamida quriladi. Next.js - bu React asosidagi framework bo'lib, server va kliyent tomoniga qurilgan komponentlarni birga ishlash imkoniyatini beradi.

**App Router** - bu Next.js ning yangi arxitekturasi bo'lib:
- Sahifalarni modulli tuzishda qulaylik
- Server-side rendering (SSR) va Static Site Generation (SSG) ni qo'llab-quvvatlash
- API routelarni qulay tuzish
- Metadata va SEO optimizatsiya

### 1.1.2 Foydalanuvchi tajribasi (UX) va Interfeys dizayni (UI)
Yaxshi UX/UI - saytning asosiy tamekkuvu. Bu quyidagilarni o'z ichiga oladi:

**UX tamoyillari:**
- Aniq va oson navigatsiya
- Tez yuklash vaqti
- Mobil qurilmalarda optimal ko'rinish
- Foydalanuvchi to'lqinini tushunish

**UI tamoyillari:**
- Doimiy rang sxemasi
- Aniq tipografiya
- Vizual hierarchy (bosh sarlavhalar, matnlar, tugmalar)
- Responsive dizayn

### 1.1.3 SEO va Metadata
Qidiruv tizimlarida yuqori o'rin egallash uchun:
- Har bir sahifa uchun meta tavsif
- Open Graph parametrlari
- Aniq URL tuzilishi
- Strukturalashtirilgan ma'lumotlar

### 1.1.4 Performance Optimizatsiya
Saytning tezligi muhim omildir:
- **Lazy Loading**: komponentlarni kerak bo'lganda yukla
- **Code Splitting**: JavaScript kodini maydonlarga bo'l
- **Image Optimization**: rasmlarni ishlab chiq
- **Caching**: tezlik uchun kesh saqlash

### 1.1.5 Xavfsizlik
Veb-saytni himoya qilish:
- Input validatsiya
- CSRF himoyasi
- HTTPS ishlatish
- Ma'lumotlar shifrlash

---

## 1.2 Statik ma'lumotlar modellashtirish

Veb-saytda ma'lumotlar odatda ikki yo'lda saqlanadi:
1. **Statik ma'lumotlar** - fayllar (.ts, .json) orqali
2. **Dinamik ma'lumotlar** - ma'lumotlar bazasi orqali

SMDJ Group sayti boshlang'ich bosqichida statik ma'lumotlardan foydalanadi, bu esa:
- Shunchaki boshlanish uchun qulay
- Veb-saytni tez ishga tushirish imkoniyati
- Keyinchalik ma'lumotlar bazasiga o'tish mumkinligi

```typescript
export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export type Program = {
  id: string;
  title: string;
  level: "Boshlang'ich" | "O'rta" | "Yuqori" | "Qo'shimcha";
  description: string;
  goals: string[];
};
```

---

## 1.3 Frontend va Backend ajralishi

Zamonaviy veb-ilovalar ikki qismga bo'linadi:
- **Frontend**: foydalanuvchi ko'radi (React komponentlar)
- **Backend**: ma'lumotlar bilan ishlash (API)

Next.js ikkalasini ham bir platforma ichida taqdim etadi.

---

# II. TEXNIKI QISM

## 2.1 Ishlatilgan texnologiyalar

### 2.1.1 Asosiy texnologiyalar
| Texnologiya | Versiya | Maqsadi |
|---|---|---|
| Next.js | 16.2.3 | Framework |
| React | 19.2.4 | UI komponentlar |
| TypeScript | 5.0 | Kodning tipizatsiyasi |
| Tailwind CSS | 4.0 | Styling |
| React Hook Form | 7.53.0 | Forma boshqaruvi |
| Webpack | - | Build tool |
| ESLint | 9.0 | Kod sifati |

### 2.1.2 Qo'shimcha paketlar
- **@next/bundle-analyzer** - bundle hajmini tahlil qilish
- **cross-env** - platformalar orasidagi farqlarni yengish
- **@types/** - TypeScript uchun tiplar

---

## 2.2 Loyiha tuzilmasi

```
smdj-school/
├── app/                              # Next.js App Router
│   ├── api/                          # API endpointlar
│   │   ├── admissions/route.ts       # Qabul API
│   │   └── contact/route.ts          # Kontakt API
│   ├── news/                         # Yangiliklar
│   │   ├── page.tsx                  # Yangiliklar ro'yxati
│   │   └── [slug]/page.tsx           # Yangilik batafsili
│   ├── about/page.tsx                # Biz haqimizda
│   ├── admissions/page.tsx           # Qabul sahifasi
│   ├── contact/page.tsx              # Kontakt sahifasi
│   ├── programs/page.tsx             # Dasturlar
│   ├── layout.tsx                    # Root layout
│   └── page.tsx                      # Asosiy sahifa
├── src/
│   ├── components/
│   │   ├── home/                     # Asosiy sahifa komponentlari
│   │   │   ├── Hero.tsx
│   │   │   ├── AboutPreview.tsx
│   │   │   ├── ProgramsOverview.tsx
│   │   │   ├── WhySmdj.tsx
│   │   │   ├── Campus.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── NewsPreview.tsx
│   │   │   └── ContactStrip.tsx
│   │   ├── forms/
│   │   │   ├── AdmissionsForm.tsx
│   │   │   └── ContactForm.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── data/
│       ├── news.ts
│       ├── programs.ts
│       └── testimonials.ts
├── public/                           # Statik fayllar
├── package.json
├── next.config.ts
├── tailwind.config.js
├── tsconfig.json
└── eslint.config.mjs
```

---

## 2.3 Asosiy komponentlar

### 2.3.1 Header komponenti
```typescript
const navItems = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/about", label: "Biz haqimizda" },
  { href: "/programs", label: "Dasturlar" },
  { href: "/admissions", label: "Qabul" },
  { href: "/news", label: "Yangiliklar" },
  { href: "/contact", label: "Bog'lanish" },
];
```

Header navigatsiya menyusini va qabulga yozilish tugmasini namoyish etadi. Mobil qurilmalarda burger menyu.

### 2.3.2 Forma komponentlari

**AdmissionsForm** - qabul uchun:
- Bolaning ismi
- Yoshi (5+ yosh)
- Sinf bosqichi
- Ota-ona ismi
- Telefon raqami
- Izohlar

**ContactForm** - murojaat uchun:
- Ism
- Email
- Telefon
- Xabar matni

### 2.3.3 Sahifa komponentlari
Asosiy sahifa quyidagi bo'limlardan iborat:
1. Hero - bosh ko'rinish
2. About - maktab haqida
3. Programs - dasturlar
4. Features - afzalliklar
5. Campus - kampus rasmlari
6. Testimonials - ota-onalar fikri
7. News - so'nggi yangiliklar
8. Contact - aloqa

---

## 2.4 API Marshrutlar

### 2.4.1 /api/admissions
```typescript
export async function POST(request: Request) {
  const body = await request.json();
  
  // Validatsiya
  if (!body.childName || !body.age || !body.classLevel) {
    return NextResponse.json(
      { message: "Majburiy maydonlar to'ldirilmagan." },
      { status: 400 }
    );
  }
  
  // Kelajakda: CRM yoki ma'lumotlar bazasiga yuborish
  console.log("Qabul arizasi:", body);
  
  return NextResponse.json({ success: true }, { status: 200 });
}
```

### 2.4.2 /api/contact
Shunga o'xshash, foydalanuvchi murojaatlarini qabul qiladi.

---

## 2.5 Ma'lumotlar Strukturasi

### 2.5.1 Yangiliklar (src/data/news.ts)
```typescript
export const news: NewsItem[] = [
  {
    slug: "steam-laboratoriya-ochildi",
    title: "Yangi STEAM laboratoriya ochildi",
    date: "2026-04-05",
    excerpt: "O'quvchilar uchun robototexnika va tajriba darslari uchun yangi laboratoriya.",
    content: "SMDJ Group maktabida yangi STEAM laboratoriyasi ochildi..."
  },
  {
    slug: "ota-ona-uchrashuvi",
    title: "Ota-onalar bilan ochiq uchrashuv",
    date: "2026-03-28",
    excerpt: "Maktabda ta'lim sifati va xavfsizlik tizimi bo'yicha ota-onalar bilan muloqot.",
    content: "Uchrashuv davomida ta'lim dasturlari taqdim etildi..."
  },
  {
    slug: "sport-musobaqa",
    title: "Sport musobaqasida g'oliblik",
    date: "2026-03-15",
    excerpt: "Maktab jamoasi shahar sport turnirida 1-o'rinni egalladi.",
    content: "Jamoaviy o'yinlarda o'quvchilar yuqori natijalarga erishdi..."
  }
];
```

### 2.5.2 Dasturlar (src/data/programs.ts)
```typescript
export const programs: Program[] = [
  {
    id: "boshlangich",
    title: "Boshlang'ich ta'lim",
    level: "Boshlang'ich",
    description: "Asosiy savodxonlik, mantiqiy fikrlash va ijtimoiy ko'nikmalar.",
    goals: ["Mustaqil o'qish", "Muloqot ko'nikmasi", "Ijodiy fikrlash"]
  },
  {
    id: "orta",
    title: "O'rta ta'lim",
    level: "O'rta",
    description: "Fanlar kesimida chuqurlashgan darslar va STEAM metodikasi.",
    goals: ["Tahliliy fikrlash", "Jamoa bilan ishlash", "Akademik barqarorlik"]
  },
  {
    id: "yuqori",
    title: "Yuqori sinflar",
    level: "Yuqori",
    description: "Universitetga tayyorgarlik va kasbiy yo'nalish.",
    goals: ["Kasbiy yo'nalish", "Imtihonlarga tayyorgarlik", "Liderlik"]
  },
  {
    id: "qoshimcha",
    title: "Qo'shimcha dasturlar",
    level: "Qo'shimcha",
    description: "IT, robototexnika, ingliz tili, sport va san'at.",
    goals: ["Amaliy ko'nikma", "Xalqaro til darajasi", "Sog'lom turmush"]
  }
];
```

---

## 2.6 Optimizatsiya Strategiyalari

### 2.6.1 Performance
- **Static Generation (SSG)**: sahifalar build vaqtida render
- **Lazy Loading**: komponentlar kerak bo'lganda yukla
- **Code Splitting**: JavaScript maydonlarga bo'l
- **CSS Minimization**: Tailwind yordamida minimal CSS

### 2.6.2 SEO
- Har bir sahifa uchun meta tavsif
- Open Graph parametrlari
- Sitemap va robots.txt
- Strukturalashtirilgan ma'lumotlar (Schema.org)

### 2.6.3 UX
- Mobile-first dizayn
- Tezlik: 3 saniyadan kam yuklanish
- Aniq navigatsiya
- Accessibility (WCAG standartlar)

---

# III. AMALIY QISM

## 3.1 O'rnatish va Ishga Tushirish

### 3.1.1 Paketlarni o'rnatish
```bash
npm install
```

### 3.1.2 Development Server
```bash
npm run dev
```

### 3.1.3 Build (Webpack)
```bash
npm run build --webpack
```

### 3.1.4 Production
```bash
npm start
```

---

## 3.2 Sayt Strukturasi

### 3.2.1 Asosiy Sahifa (/)
- Hero bo'limi
- Maktab haqida preview
- Dasturlar overview
- Afzalliklar
- Kampus galereya
- Ota-onalar fikri
- Yangiliklar
- Kontakt strip

### 3.2.2 Biz haqimizda (/about)
Maktab missiyasi, tarixiy ma'lumotlar, ta'limiy strategiya

### 3.2.3 Dasturlar (/programs)
Har bir ta'lim bosqichi uchun batafsil ma'lumot

### 3.2.4 Qabul (/admissions)
Onlayn ariza formasi va qabul shartlari

### 3.2.5 Yangiliklar (/news)
Maktab tadbirlar va e'lonlar

### 3.2.6 Kontakt (/contact)
Manzil, telefon, email va kontakt formasi

---

## 3.3 Metadata va SEO

```typescript
export const metadata: Metadata = {
  title: {
    default: "SMDJ Group Xususiy Maktab",
    template: "%s | SMDJ Group Xususiy Maktab",
  },
  description: "SMDJ Group xususiy maktabi - zamonaviy ta'lim va individual yondashuv.",
  openGraph: {
    title: "SMDJ Group Xususiy Maktab",
    description: "Farzandingiz uchun zamonaviy ta'lim.",
    type: "website",
    locale: "uz_UZ",
    url: "https://smdj.uz",
    siteName: "SMDJ Group Xususiy Maktab",
  },
};
```

---

## 3.4 Styling va Dizayn

**Tailwind CSS** - utilita-first CSS framework
- Rang palitra: ko'k (#0F2747), oltin (#D4AF37), slate
- Responsive breakpoints: mobile-first
- Component-based styling

---

# IV. KELAJAKDAGI RIVOJLANISH

## 4.1 Qisqa muddatli rejalar
1. CMS tizimiga ulash (Strapi, Contentful)
2. Rasmlar va video kontentlar qo'shish
3. Admin panel yaratish
4. E-mail notifikatsiyalar

## 4.2 Uzoq muddatli rejalar
1. Mobil ilova yaratish
2. PWA (Progressive Web App) texnologiyalari
3. AI-asoslangan chatbot
4. Talabalari online platformasi
5. Payment integration

---

# XULOSA

SMDJ Group maktabining veb-sayti zamonaviy texnologiyalar va best practices yordamida yaratilgan. Loyiha quyidagilarni ta'minlaydi:

1. **Yuqori ishlash tezligi** - SSG va lazy loading
2. **SEO optimallashtirish** - qidiruv tizimlarida yuqori o'rin
3. **Foydalanuvchi tajribasi** - responsive, qulay interfeys
4. **Kengaytiriladigan arxitektura** - kelajakda CMS va backend qo'shish imkoniyati
5. **Maktab imidjini mustahkamlash** - professional onlayn ifodasoft

Loyiha SMDJ Group maktabining o'quvchilar va ota-onalarga to'liq ma'lumot berish, qabul jarayonini raqamlashtirish va maktabning tadbirlar haqida tezkor xabar yetkazish maqsadlarini muvaffaqiyatli bajarib turgan holda yaratilgan.

---

**Tayyorladi**: Faroha Muallif
**Sana**: 2026-04-25
**O'rnatish va ishlatish**: npm run dev (development), npm start (production)
