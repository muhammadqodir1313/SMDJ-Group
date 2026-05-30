# SMDJ Group Xususiy Maktab sayti

Ushbu loyiha Next.js + TypeScript + Tailwind CSS asosida yaratilgan.

## Ishga tushirish

1. Paketlarni o'rnatish:

```bash
npm install
```

2. Development serverni ishga tushirish:

```bash
npm run dev
```

3. Brauzerda ochish: `http://localhost:3000`

## GitHub

Repozitoriy: [https://github.com/muhammadqodir1313/SMDJ-Group](https://github.com/muhammadqodir1313/SMDJ-Group)

```bash
git clone https://github.com/muhammadqodir1313/SMDJ-Group.git
```

## Deploy (GitHub Pages)

`main` branchga push qilinganda [GitHub Actions](.github/workflows/deploy-pages.yml) saytni avtomatik yig‘adi va chiqaradi.

**Birinchi marta (bir marta):**

1. GitHub repoda **Settings → Pages**
2. **Build and deployment → Source:** `GitHub Actions` tanlang
3. `main` ga push qiling yoki **Actions** tabida workflow ni qo‘lda ishga tushiring

**Sayt manzili:** https://muhammadqodir1313.github.io/SMDJ-Group/

Mahalliy tekshiruv (GitHub Pages yo‘li bilan):

```bash
set GITHUB_PAGES=true&& npm run build
npx serve out
```

## Qisqa izoh

- Kontentlar statik data fayllaridan olinadi (`src/data`).
- Faqat frontend: formalarda validatsiya brauzerda, yuborish `console.log` (demo).
- `app/api/` olib tashlangan — backend alohida loyihada ulash mumkin.
