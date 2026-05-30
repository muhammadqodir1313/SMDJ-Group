import { Metadata } from "next";
import Link from "next/link";
import { news } from "@/src/data/news";
export const metadata: Metadata = { title: "Yangiliklar", description: "SMDJ Group maktabining so'nggi yangiliklari va tadbirlari." };
export default function NewsPage() { return <section className="mx-auto max-w-6xl px-4 py-16 md:px-6"><h1 className="text-3xl font-bold text-[#0F2747]">Yangiliklar</h1><div className="mt-8 grid gap-5 md:grid-cols-2">{news.map((item)=><article key={item.slug} className="rounded-2xl bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">{item.date}</p><h2 className="mt-2 text-xl font-semibold">{item.title}</h2><p className="mt-3 text-slate-700">{item.excerpt}</p><Link href={`/news/${item.slug}`} className="mt-4 inline-block text-sm font-semibold text-[#0F2747]">Batafsil o'qish</Link></article>)}</div></section>; }
