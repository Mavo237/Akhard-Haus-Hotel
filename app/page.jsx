
const rooms = [
  { id: 1, name: "Standard Room", price: 15000 },
  { id: 2, name: "Deluxe Room", price: 25000 },
  { id: 3, name: "Executive Suite", price: 40000 },
];

export default function Home() {
  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <h1>Welcome to Akhard Haus Hotel - Buea</h1>
      <p>Comfort, clean rooms, fast WiFi. Book in 1 minute with MTN MoMo.</p>
      {rooms.map((room) => (
        <div key={room.id} style={{ background: "#fff", padding: 20, margin: "15px 0", borderRadius: 12 }}>
          <h3>{room.name}</h3>
          <p>{room.price.toLocaleString()} FCFA / night</p>
          <a href={`/book?room=${encodeURIComponent(room.name)}&price=${room.price}`}>
            <button style={{ padding: "10px 20px", background: "#000", color: "#fff", border: "none", borderRadius: 8 }}>Book Now</button>
          </a>
        </div>
      ))}
    </div>
  );
}
