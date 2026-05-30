import Link from "next/link";
export function ContactStrip() {
  return <section className="bg-[#0F2747] py-12 text-white"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 md:flex-row md:items-center md:px-6"><h2 className="max-w-2xl text-xl font-semibold md:text-2xl">Farzandingiz uchun to'g'ri maktab izlayapsizmi? Biz bilan bog'laning.</h2><Link href="/contact" className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0F2747]">Bog'lanish</Link></div></section>;
}
