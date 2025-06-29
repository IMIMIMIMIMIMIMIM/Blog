import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { maruburi } from "../../public/fonts/MaruBuri";
import { continuous } from "../../public/fonts/continuous";

export const metadata = {
  title: "IM",
  description: "Blog my IM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${continuous.variable} ${maruburi.variable}`}>
      <body className="antialiased bg-[#111111] text-white min-h-screen">
        <Header />
        <main className="min-h-screen flex flex-col font-maruburi">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
