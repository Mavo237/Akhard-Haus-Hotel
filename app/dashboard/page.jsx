
"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/payments")
      .then((r) => r.json())
      .then((d) => { setBookings(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Loading bookings...</p>;

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <h2>Dashboard - All Bookings ({bookings.length})</h2>
      {bookings.length === 0 && <p>No bookings yet. Go to Book and create one.</p>}
      {bookings.map((b) => (
        <div key={b.id} style={{ background: "#fff", padding: 15, margin: "10px 0", borderRadius: 10 }}>
          <b>{b.name}</b> - {b.phone}<br />
          {b.room} - {Number(b.price).toLocaleString()} FCFA<br />
          Date: {b.date} - Status: {b.status} ({b.method})
        </div>
      ))}
    </div>
  );
}
