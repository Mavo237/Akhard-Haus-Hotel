
"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const rooms = [
  { id: "1", name: "Standard Room", price: 15000 },
  { id: "2", name: "Deluxe Room", price: 25000 },
  { id: "3", name: "Executive Suite", price: 40000 },
];

export default function BookPage() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("room") || "1";
  const room = rooms.find((r) => r.id === roomId) || rooms[0];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "auto" }}>
      <h1>Book {room.name}</h1>
      <p>Price: {room.price} FCFA / night</p>

      <input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", padding: 12, marginTop: 12 }}
      />
      <input
        placeholder="Phone / MoMo number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ width: "100%", padding: 12, marginTop: 12 }}
      />
      <button style={{ width: "100%", padding: 14, marginTop: 16, background: "#000", color: "#fff" }}>
        Pay with MoMo
      </button>
    </div>
  );
}
