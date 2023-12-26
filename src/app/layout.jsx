import "./globals.css";
import "./fontawesome.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";

export const metadata = {
  title: "dtoolify - Menjual Barang & Layanan Jasa",
  description: "dtoolify - Menjual Barang & Layanan Jasa",
};

export default function RootLayout({ children }) {
  return (
    <PrimeReactProvider>
      <html lang="en">
        <body className="font-sm">{children}</body>
      </html>
    </PrimeReactProvider>
  );
}
