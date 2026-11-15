import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ background: "#0A2E1F", padding: "18px 30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Link href="/" style={{ color: "#C9A227", fontSize: "1.6rem", fontWeight: "bold", textDecoration: "none" }}>AKHARD HAUS</Link>
      <div style={{ display: "flex", gap: 20 }}>
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link href="/book" style={{ color: "white", textDecoration: "none" }}>Book</Link>
        <Link href="/dashboard" style={{ color: "#C9A227", textDecoration: "none", fontWeight: "bold" }}>Dashboard</Link>
      </div>
    </nav>
  );
                                        }
