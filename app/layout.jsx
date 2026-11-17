
export const metadata = { title: "Akhard Haus Hotel - Buea | 64 Rooms & Apartments" };
export default function RootLayout({ children }) {
  return (
    <html lang="en"><body style={{ margin: 0 }}>
      <header style={{ background: "#0f172a", color: "#fff", padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 99 }}>
        <a href="/" style={{ color: "#fff", fontWeight: "900", fontSize: 20 }}>🏨 AKHARD <span style={{ color: "#f59e0b" }}>HAUS</span></a>
        <div style={{ display: "flex", gap: 15, fontSize: 14, alignItems: "center" }}>
          <a href="/" style={{ color: "#fff" }}>All Rooms</a>
          <a href="/book" style={{ background: "#f59e0b", color: "#111", padding: "8px 16px", borderRadius: 20, fontWeight: "bold" }}>Book Now</a>
        </div>
      </header>
      {children}
      <footer style={{ background: "#0f172a", color: "#fff", padding: "30px 20px", textAlign: "center", marginTop: 40 }}>
        <h3 style={{ margin: 0 }}>AKHARD HAUS HOTEL - BUEA</h3>
        <p style={{ opacity: 0.7, fontSize: 13 }}>Mount Fako View • Buea, Southwest Region, Cameroon</p>
        <p style={{ opacity: 0.5, fontSize: 12 }}>© 2026 Akhard Haus. Pay securely with MTN MoMo.</p>
      </footer>
    </body></html>
  );
}
