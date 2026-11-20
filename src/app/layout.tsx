// Root layout only passes through. The <html> and <body> tags live in
// src/app/[locale]/layout.tsx so each language gets its own lang attribute.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
