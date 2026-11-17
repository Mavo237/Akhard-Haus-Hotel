
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

        <footer style={{ background: "#111", color: "#fff", padding: 25, textAlign: "center", marginTop: 40 }}>
          <h3 style={{ margin: 0 }}>Akhard Haus Hotel - Buea</h3>
          <p style={{ margin: "8px 0", color: "#bbb", fontSize: 14 }}>📍 Buea, Southwest Region, Cameroon • Free WiFi • 24/7 Reception • MTN MoMo Accepted</p>
          <p style={{ margin: 0, color: "#888", fontSize: 12 }}>© 2026 Akhard Haus Hotel. All rights reserved.</p>
        </footer>

        {/* THIS GO DELETE NETLIFY BADGE BY FORCE */}
        <script dangerouslySetInnerHTML={{ __html: `
          setInterval(() => {
            document.querySelectorAll('a, div, span, img, p, footer').forEach(el => {
              if (el.innerText && el.innerText.includes('Powered by Netlify')) el.style.display = 'none';
              if (el.alt && el.alt.includes('Netlify')) el.style.display = 'none';
              if (el.src && el.src.includes('netlify')) el.style.display = 'none';
              if (el.href && el.href.includes('netlify.com')) el.style.display = 'none';
            });
          }, 500);
        `}} />
      </body>
    </html>
  );
}
