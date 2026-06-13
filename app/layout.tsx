import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "M D Yousuf | AGI Research Portfolio",
  description: "Portfolio of M D Yousuf — future AGI researcher, AI engineer, robotics enthusiast, and MIT applicant.",
  metadataBase: new URL("https://syeam-portfolio.vercel.app"),
  openGraph: {
    title: "M D Yousuf | AGI Research Portfolio",
    description: "Future MIT applicant portfolio for AGI, robotics, quantum, and biomedical research.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "M D Yousuf | AGI Research Portfolio",
    description: "Future MIT applicant portfolio for AGI, robotics, quantum, and biomedical research."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
