import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafaf9",
};

export const metadata: Metadata = {
  title: "Kai — Backend Software Engineer",
  description:
    "Backend developer focused on scalable APIs, clean service architecture, and product-minded engineering. Available for software engineering internships and junior roles.",
  keywords: [
    "backend developer",
    "software engineer",
    "Node.js",
    "FastAPI",
    "REST APIs",
    "internship",
    "junior developer",
    "Pyae Sone Htoo",
    "Kai",
  ],
  authors: [{ name: "Pyae Sone Htoo (Kai)" }],
  openGraph: {
    title: "Kai — Backend Software Engineer",
    description:
      "Backend developer focused on scalable APIs, clean service architecture, and product-minded engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kai — Backend Software Engineer",
    description:
      "Backend developer focused on scalable APIs, clean service architecture, and product-minded engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-stone-50 text-stone-900 font-sans antialiased transition-colors duration-300 dark:bg-stone-950 dark:text-stone-100">
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var storedTheme = localStorage.getItem("theme");
              var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            } catch (_) {}
          `}
        </Script>
        {/* Skip to main content — keyboard/screen reader accessibility */}
        <a href="#about" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
