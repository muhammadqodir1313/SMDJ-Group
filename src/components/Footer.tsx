export function Footer() {
  return (
    <footer className="mt-16 bg-[#0F2747] text-slate-100">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="text-lg font-semibold">SMDJ Group Xususiy Maktab</h3>
          <p className="mt-3 text-sm text-slate-300">
            Zamonaviy STEAM ta'lim, individual yondashuv va kelajak uchun mustahkam bilim.
          </p>
        </div>
        <div>
          <h4 className="text-base font-semibold">Aloqa</h4>
          <p className="mt-3 text-sm text-slate-300">Manzil: Farg'ona viloyati, O'zbekiston tumani</p>
          <p className="mt-1 text-sm text-slate-300">Telefon: +998 90 123 45 67</p>
          <p className="mt-1 text-sm text-slate-300">Email: info@smdj.uz</p>
        </div>
        <div>
          <h4 className="text-base font-semibold">Ijtimoiy tarmoqlar</h4>
          <div className="mt-3 flex gap-3 text-sm text-slate-300">
            <span>Telegram</span>
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 py-4 text-center text-xs text-slate-300">
        {new Date().getFullYear()} SMDJ Group. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
