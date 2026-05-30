import { Metadata } from "next";
import { notFound } from "next/navigation";
import { news } from "@/src/data/news";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);
  if (!item) return { title: "Yangilik topilmadi" };
  return { title: item.title, description: item.excerpt };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <p className="text-sm text-slate-500">{item.date}</p>
      <h1 className="mt-2 text-3xl font-bold text-[#0F2747]">{item.title}</h1>
      <p className="mt-6 text-base leading-7 text-slate-700">{item.content}</p>
    </article>
  );
}
