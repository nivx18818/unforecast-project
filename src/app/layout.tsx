import "./globals.css";

// Thin root layout — the actual html/body/lang/fonts are set in app/[locale]/layout.tsx.
// This file exists only to satisfy Next.js's root layout requirement and import global CSS.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
