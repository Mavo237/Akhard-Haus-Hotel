"use c"use client";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("/Api/payments").then(r => r.json()).then(setBookings);
  }, []);

  const total = bookings.reduce((sum, b) => sum + (b.price || 0), 0);

  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: 1000, margin: "30px auto", padding: 20 }}>
        <p className="handwriting">Manager Only</p>
        <h1>Akhard Haus Dashboard</h1>
        <div style={{ display: "flex", gap: 15, margin: "25px 0" }}>
          <div className="card" style={{ padding: 20, flex: 1 }}><small>Total Bookings</small><h2>{bookings.length}</h2></div>
          <div className="card" style={{ padding: 20, flex: 1, background: "#0A2E1F", color: "white" }}><small>Total Revenue</small><h2>{total.toLocaleString()} FCFA</h2></div>
          <div className="card" style={{ padding: 20, flex: 1 }}><small>Occupancy</small><h2>{bookings.length * 12}%</h2></div>
        </div>
        <div className="card" style={{ padding: 20 }}>
          <h3>Recent Bookings</h3>
          {bookings.length === 0 ? <p style={{ marginTop: 15, color: "#888" }}>No bookings yet. Book one to see it here.</p> : (
            <table style={{ width: "100%", marginTop: 15, borderCollapse: "collapse" }}>
              <thead><tr style={{ textAlign: "left", borderBottom: "1px solid #ddd" }}><th>Name</th><th>Room</th><th>Date</th><th>Price</th><th>Status</th></tr></thead>
              <tbody>
                {bookings.map(b => (
                  <tr key={b.id} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "10px 0" }}>{b.name}<br /><small>{b.phone}</small></td>
                    <td>{b.room}</td><td>{b.date}</td><td>{b.price?.toLocaleString()} FCFA</td>
                    <td><span style={{ background: "#d4edda", color: "#155724", padding: "4px 10px", borderRadius: 20, fontSize: "0.8rem" }}>● {b.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}￼Enter
