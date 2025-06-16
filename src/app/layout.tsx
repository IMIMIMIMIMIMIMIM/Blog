import "./globals.css";
import Header from "@/components/Header";

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
      <body className="antialiased bg-[#fefae0] min-h-screen">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
