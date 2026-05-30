export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export const news: NewsItem[] = [
  { slug: "steam-laboratoriya-ochildi", title: "Yangi STEAM laboratoriya ochildi", date: "2026-04-05", excerpt: "O'quvchilar uchun robototexnika va tajriba darslari uchun yangi laboratoriya ishga tushdi.", content: "SMDJ Group maktabida yangi STEAM laboratoriyasi ochildi. Endilikda o'quvchilar robototexnika, tajriba va loyiha asosidagi darslarda faol ishtirok etadilar." },
  { slug: "ota-ona-uchrashuvi", title: "Ota-onalar bilan ochiq uchrashuv", date: "2026-03-28", excerpt: "Maktabda ta'lim sifati va xavfsizlik tizimi bo'yicha ota-onalar bilan muloqot bo'lib o'tdi.", content: "Uchrashuv davomida ta'lim dasturlari, baholash tizimi va farzandlar rivoji bo'yicha yangi tashabbuslar taqdim etildi." },
  { slug: "sport-musobaqa", title: "Sport musobaqasida g'oliblik", date: "2026-03-15", excerpt: "Maktab jamoasi shahar miqyosidagi musobaqada faxrli 1-o'rinni qo'lga kiritdi.", content: "Jamoaviy o'yinlar orqali o'quvchilarning jismoniy tayyorgarligi va jamoada ishlash ko'nikmasi mustahkamlandi." },
];
