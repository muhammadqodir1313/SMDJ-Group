import { testimonials } from "@/src/data/testimonials";
export function TestimonialsSection() {
  return <section className="mx-auto max-w-6xl px-4 py-16 md:px-6"><h2 className="text-2xl font-bold text-[#0F2747] md:text-3xl">Ota-onalar fikri</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{testimonials.map((item)=><article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-slate-700">"{item.message}"</p><p className="mt-4 text-sm font-semibold text-[#0F2747]">{item.parentName}</p></article>)}</div></section>;
}
