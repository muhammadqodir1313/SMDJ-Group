const benefits = ["Kichik sinflar va individual e'tibor", "STEAM asosidagi zamonaviy yondashuv", "Tajribali va mehribon ustozlar", "Xavfsiz hamda ilhomlantiruvchi muhit", "Ota-ona bilan doimiy aloqa", "Shaxsiy rivojlanish va liderlik"];
export function WhySmdj() {
  return <section className="mx-auto max-w-6xl px-4 py-16 md:px-6"><h2 className="text-2xl font-bold text-[#0F2747] md:text-3xl">Nega aynan SMDJ Group?</h2><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{benefits.map((benefit) => <div key={benefit} className="rounded-2xl bg-slate-100 p-5 text-slate-800">{benefit}</div>)}</div></section>;
}
