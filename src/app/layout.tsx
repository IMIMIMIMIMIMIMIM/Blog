import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body className="antialiased bg-[#111111] text-white min-h-screen">
        <Header />
        <main className="min-h-screen p-8 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
