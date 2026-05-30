import Link from "next/link";
import { news } from "@/src/data/news";
export function NewsPreview() {
  return <section className="bg-white py-16"><div className="mx-auto max-w-6xl px-4 md:px-6"><h2 className="text-2xl font-bold text-[#0F2747] md:text-3xl">Yangiliklar</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{news.slice(0,3).map((item)=><article key={item.slug} className="rounded-2xl border border-slate-200 p-5"><p className="text-xs text-slate-500">{item.date}</p><h3 className="mt-2 text-lg font-semibold text-slate-800">{item.title}</h3><p className="mt-2 text-sm text-slate-600">{item.excerpt}</p><Link href={`/news/${item.slug}`} className="mt-4 inline-block text-sm font-semibold text-[#0F2747]">Batafsil</Link></article>)}</div></div></section>;
}
