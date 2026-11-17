
"use client";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
function BookForm() {
  const sp = useSearchParams();
  const room = sp.get("room") || "Standard Room 101";
  const price = Number(sp.get("price") || 15000);
  const [name, setName] = useState(""); const [phone, setPhone] = useState(""); const [checkin, setCheckin] = useState(""); const [nights, setNights] = useState(1); const [status, setStatus] = useState("");
  const total = price * nights;
  async function pay() {
    if (!name || !phone || !checkin) { setStatus("⚠️ Fill name, phone and check-in date"); return; }
    setStatus("⏳ Sending MoMo prompt to " + phone + "... Check your phone and enter PIN to approve " + total.toLocaleString() + " FCFA");
  }
  return (
    <div style={{ maxWidth: 480, margin: "20px auto", padding: 20 }}>
      <div style={{ background: "#fff", borderRadius: 20, padding: 22, boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}>
        <h1 style={{ margin: "0 0 5px 0", fontSize: 24 }}>Book {room}</h1><p style={{ color: "#666", marginTop: 0 }}>{price.toLocaleString()} FCFA • Buea</p>
        <label style={{ fontWeight: "bold", fontSize: 13 }}>Full Name</label><input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Akhard N." style={{ width: "100%", padding: 13, borderRadius: 10, border: "1px solid #ddd", margin: "6px 0 12px 0" }} />
        <label style={{ fontWeight: "bold", fontSize: 13 }}>MTN MoMo Number</label><input value={phone} onChange={e => setPhone(e.target.value.replace(/[^0-9]/g, ""))} placeholder="67xxxxxxx" maxLength={9} style={{ width: "100%", padding: 13, borderRadius: 10, border: "1px solid #ddd", margin: "6px 0 12px 0" }} />
        <div style={{ display: "flex", gap: 10 }}><div style={{ flex: 1 }}><label style={{ fontWeight: "bold", fontSize: 13 }}>Check-in</label><input type="date" value={checkin} onChange={e => setCheckin(e.target.value)} style={{ width: "100%", padding: 12, borderRadius: 10, border: "1px solid #ddd", marginTop: 6 }} /></div><div style={{ flex: 1 }}><label style={{ fontWeight: "bold", fontSize: 13 }}>Nights</label><input type="number" min={1} value={nights} onChange={e => setNights(Number(e.target.value))} style={{ width: "100%", padding: 12, borderRadius: 10, border: "1px solid #ddd", marginTop: 6 }} /></div></div>
        <div style={{ background: "#fef3c7", borderRadius: 12, padding: 14, marginTop: 16, display: "flex", justifyContent: "space-between" }}><span>Total to Pay</span><b>{total.toLocaleString()} FCFA</b></div>
        <button onClick={pay} style={{ width: "100%", background: "#FFCC00", color: "#111", padding: 15, borderRadius: 12, border: "none", fontWeight: "900", fontSize: 16, marginTop: 16, cursor: "pointer" }}>Pay {total.toLocaleString()} FCFA with MTN MoMo 💛</button>
        <p style={{ textAlign: "center", fontSize: 12, color: "#888" }}>You go receive prompt for your phone. Enter your MoMo PIN to complete.</p>
        {status && <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", padding: 12, borderRadius: 10, fontSize: 14, marginTop: 10 }}>{status}</div>}
      </div>
    </div>
  );
}
export default function BookPage() { return <Suspense><BookForm /></Suspense>; }
