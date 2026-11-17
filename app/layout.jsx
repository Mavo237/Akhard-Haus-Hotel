
import "./globals.css";

export const metadata = {
  title: "Akhard Haus Hotel",
  description: "Book your stay in Buea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: 15, background: "#111", color: "#fff", display: "flex", gap: 20 }}>
          <a href="/" style={{ color: "#fff", fontWeight: "bold" }}>Akhard Haus</a>
          <a href="/" style={{ color: "#fff" }}>Home</a>
          <a href="/book" style={{ color: "#fff" }}>Book</a>
          <a href="/dashboard" style={{ color: "#fff" }}>Dashboard</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
