import "./globals.css";
import Navbar from "../components/Navbar";
export const metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main className="p-6 max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}