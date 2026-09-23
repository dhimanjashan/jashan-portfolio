import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jashandeep Singh – Full Stack Developer Portfolio",
  description:
    "Portfolio of Jashandeep Singh, a BCA student and self-taught full stack developer skilled in React.js, Node.js, MongoDB, and backend engineering.",
  keywords: [
    "Jashan Singh",
    "Full Stack Developer Portfolio",
    "React.js Developer",
    "Node.js Backend Developer",
    "WanderLust",
    "Web Developer Internship",
    "BCA Student Developer",
  ],
  authors: [{ name: "Jashandeep Singh" }],
  creator: "Jashandeep Singh",
  openGraph: {
    title: "Jashandeep Singh – Full Stack Developer",
    description:
      "Explore real-world projects like ScriptFit E-commerce, BeatMusic Streaming App. Open for internship & entry-level developer roles.",
    url: "https://jashan.dev", // change later
    siteName: "Jashan Portfolio",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // after you upload favicon.io logo
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0f] text-white`}
      >
        {children}
      </body>
    </html>
  );
}