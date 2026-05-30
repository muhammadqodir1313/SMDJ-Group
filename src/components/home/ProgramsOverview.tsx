import Link from "next/link";
const items = ["Boshlang'ich sinflar", "O'rta sinflar", "Qo'shimcha to'garaklar: IT, til va sport"];
export function ProgramsOverview() {
  return <section className="bg-white py-16"><div className="mx-auto max-w-6xl px-4 md:px-6"><h2 className="text-2xl font-bold text-[#0F2747] md:text-3xl">Ta'lim dasturlari</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{items.map((item) => <div key={item} className="rounded-2xl border border-slate-200 p-5 shadow-sm"><p className="font-medium text-slate-800">{item}</p></div>)}</div><Link href="/programs" className="mt-6 inline-block text-sm font-semibold text-[#0F2747] underline">Barcha dasturlarni ko'rish</Link></div></section>;
}
