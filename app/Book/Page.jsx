here"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../../components/Navbar";

function BookForm() {
  const params = useSearchParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [room, setRoom] = useState("Deluxe Apartment");
  const [price, setPrice] = useState(25000);
  const [step, setStep] = useState("form"); // form -> payment -> success

  useEffect(() => {
    if (params.get("room")) setRoom(params.get("room"));
    if (params.get("price")) setPrice(Number(params.get("price")));
  }, [params]);

  async function payWithMoMo() {
    if (!name || !phone) return alert("Fill name and MoMo number");
    // Call Node.js API
    const res = await fetch("/api/payments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, room, price, date })
    });
    const data = await res.json();
    if (data.success) setStep("success");
  }

  if (step === "success") return (
    <div style={{ textAlign: "center", padding: 60 }}>
      <p className="handwriting">Thank You!</p>
      <h1>Booking Confirmed 🎉</h1>
      <p>We sent confirmation to {phone}. See you in Buea!</p>
      <a href={`https://wa.me/237650000000?text=Hi Akhard Haus, I just booked ${room} for ${date}`}>Confirm on WhatsApp</a>
    </div>
  );

  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: 600, margin: "40px auto", padding: 20 }}>
        <p className="handwriting" style={{ textAlign: "center" }}>Reserve Your Room</p>
        <h1 style={{ textAlign: "center", marginBottom: 30 }}>Book {room}</h1>
        <div className="card" style={{ padding: 30 }}>
          <label>Full Name</label>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Joel Njie" style={{ width: "100%", padding: 12, margin: "8px 0 18px", borderRadius: 10, border: "1px solid #ddd" }} />
          <label>MoMo Number (MTN)</label>
          <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="650 00 00 00" style={{ width: "100%", padding: 12, margin: "8px 0 18px", borderRadius: 10, border: "1px solid #ddd" }} />
          <label>Check-in Date</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} style={{ width: "100%", padding: 12, margin: "8px 0 18px", borderRadius: 10, border: "1px solid #ddd" }} />
          <div style={{ background: "#FFF8E7", padding: 15, borderRadius: 12, marginBottom: 20, display: "flex", justifyContent: "space-between" }}>
            <span>{room}</span><b>{price.toLocaleString()} FCFA</b>
          </div>
          <h3 style={{ marginBottom: 10 }}>Pay with MTN MoMo</h3>
          <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
            <button style={{ flex: 1, padding: 12, background: "#FFCC00", border: "none", borderRadius: 10, fontWeight: "bold" }}>🟡 MTN MoMo</button>
            <button style={{ flex: 1, padding: 12, background: "#FF6B00", color: "white", border: "none", borderRadius: 10, fontWeight: "bold" }}>Orange Money</button>
          </div>
          <button className="btn-gold" style={{ width: "100%" }} onClick={payWithMoMo}>Pay {price.toLocaleString()} FCFA with MoMo →</button>
          <p style={{ fontSize: "0.8rem", color: "#888", textAlign: "center", marginTop: 12 }}>You will receive a prompt on your phone to enter MoMo PIN</p>
        </div>
      </div>
    </div>
  );
}

export default function BookPage() {
  return <Suspense><BookForm /></Suspense>;
                                    }
