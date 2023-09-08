import "./globals.css";
import type { Metadata } from "next";
import { Inter, DM_Mono, DM_Sans } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
export const sans = DM_Sans({ subsets: ["latin"] });
export const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const semi = localFont({
  src: [
    {
      path: "../fonts/Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/MediumItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
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
      <body className={semi.className}>{children}</body>
    </html>
  );
}
