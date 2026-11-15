import Link from "next/link";

export default function RoomCard({ room }) {
  return (
    <div className="card">
      <img src={room.img} alt={room.name} style={{ width: "100%", height: 220, objectFit: "cover" }} />
      <div style={{ padding: 20 }}>
        <h3 style={{ fontSize: "1.4rem" }}>{room.name}</h3>
        <p style={{ color: "#666", margin: "8px 0", fontSize: "0.9rem" }}>{room.desc}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>
          <b style={{ color: "#0A2E1F" }}>{room.price.toLocaleString()} FCFA / night</b>
          <Link href={`/book?room=${encodeURIComponent(room.name)}&price=${room.price}`}>
            <button className="btn-gold" style={{ padding: "10px 18px" }}>Book</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
