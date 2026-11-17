
"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

// Generate 60+ Apartments for Akhard Haus
const apartments = Array.from({ length: 62 }, (_, i) => {
  const num = i + 1;
  let type = "Studio Apartment";
  let price = 20000;
  if (num > 20 && num <= 45) { type = "1 Bedroom Apartment"; price = 30000; }
  if (num > 45) { type = "2 Bedroom Apartment"; price = 45000; }
  return {
    id: String(num),
    name: `Apartment ${num} - ${type}`,
    short: `Apt ${num}`,
    type: type,
    price: price,
  };
});

export default function BookPage() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("room") || "1";
  // This line na im fix the error before
  const room = apartments.find((r) => r.id === roomId) || apartments[0];

  const [selectedId, setSelectedId] = useState(room.id);
  const selectedRoom = apartments.find((r) => r.id === selectedId) || room;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "auto" }}>
      <h1>Akhard Haus - Book Apartment</h1>
      <p>We have 62 Apartments available in Buea</p>

      <label>Choose Apartment (1 - 62)</label>
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        style={{ width: "100%", padding: 12, marginTop: 8 }}
      >
        {apartments.map((apt) => (
          <option key={apt.id} value={apt.id}>
            {apt.name} - {apt.price} FCFA
          </option>
        ))}
      </select>

      <div style={{ background: "#f5f5f5", padding: 16, marginTop: 16 }}>
        <h2>{selectedRoom.name}</h2>
        <p>Price: {selectedRoom.price} FCFA / night</p>
      </div>

      <input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: 12, marginTop: 12 }} />
      <input placeholder="Phone / MoMo number" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: "100%", padding: 12, marginTop: 12 }} />
      <button style={{ width: "100%", padding: 14, marginTop: 16, background: "#000", color: "#fff" }}>
        Pay {selectedRoom.price} FCFA with MoMo
      </button>
    </div>
  );
}
