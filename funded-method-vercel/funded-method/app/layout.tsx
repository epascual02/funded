import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Funded Method | Mentoría de trading para empresas de fondeo",
  description:
    "Aprendé una metodología mecánica para operar Nasdaq Futures durante la sesión de Nueva York, con foco en la gestión del riesgo para empresas de fondeo.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Funded Method",
    description: "Una metodología. Reglas claras. Riesgo definido.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
