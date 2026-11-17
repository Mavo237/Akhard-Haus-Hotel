
"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function BookForm() {
  const params = useSearchParams();
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [room, setRoom] = useState(params.get("room") || "Standard Room");
  const [price, setPrice] = useState(params.get("price") || 15000);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function handleBook(e) {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    try {
      const res = await fetch("/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, room, price: Number(price), date }),
      });
      const data = await res.json();
      if (data.success) {
        setMsg("Booking Successful! Redirecting...");
        setTimeout(() => router.push("/dashboard"), 1000);
      } else {
        setMsg("Booking failed. Try again.");
      }
    } catch (err) {
      setMsg("Error: Could not connect to server. Redeploy and try again.");
    }
    setLoading(false);
  }

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "0 auto", background: "#fff", borderRadius: 12, marginTop: 20 }}>
      <h2>Book Your Room</h2>
      <form onSubmit={handleBook}>
        <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="MTN MoMo Number e.g 677000000" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <select value={room} onChange={(e) => setRoom(e.target.value)}>
          <option>Standard Room</option>
          <option>Deluxe Room</option>
          <option>Executive Suite</option>
        </select>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <button type="submit" disabled={loading} style={{ width: "100%", padding: 14, background: "#000", color: "#fff", border: "none", borderRadius: 8 }}>
          {loading ? "Processing..." : `Pay ${Number(price).toLocaleString()} FCFA with MoMo`}
        </button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default function BookPage() {
  return <Suspense><BookForm /></Suspense>;
}
