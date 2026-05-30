import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SMDJ Group Xususiy Maktab",
    template: "%s | SMDJ Group Xususiy Maktab",
  },
  description:
    "SMDJ Group xususiy maktabi: zamonaviy STEAM ta'lim, individual yondashuv va xavfsiz muhit.",
  openGraph: {
    title: "SMDJ Group Xususiy Maktab",
    description:
      "Farzandingiz uchun zamonaviy ta'lim va individual rivojlanish yo'li.",
    type: "website",
    locale: "uz_UZ",
    url: "https://smdj-school.uz",
    siteName: "SMDJ Group Xususiy Maktab",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
