import "./globals.css";
import type { Metadata } from "next";
import { Inter, DM_Mono, DM_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const sans = DM_Sans({ subsets: ["latin"] });
export const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Dome",
  description: "Experience Design Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mono.className}>{children}</body>
    </html>
  );
}
