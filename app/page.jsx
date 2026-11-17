
export default function Home() {
  const rooms = [
    { name: "Standard Room", price: 15000, desc: "Cozy room • Free WiFi • TV" },
    { name: "Deluxe Room", price: 25000, desc: "Bigger bed • Mountain view" },
    { name: "Executive Suite", price: 40000, desc: "Lounge • Work desk • Breakfast" },
    { name: "Family Suite", price: 50000, desc: "2 Beds • Perfect for family" },
    { name: "Studio Apartment", price: 35000, desc: "Kitchen • Self-catering" },
    { name: "1-Bedroom Apartment", price: 55000, desc: "Living room • Kitchen" },
    { name: "2-Bedroom Apartment", price: 75000, desc: "2 Bedrooms • Full kitchen" },
    { name: "Penthouse - Buea View", price: 120000, desc: "Best view of Buea • Luxury" },
  ];

  return (
    <div style={{ padding: 20, maxWidth: 1000, margin: "0 auto" }}>
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <h1 style={{ fontSize: 36, margin: 0 }}>Akhard Haus Hotel - Buea</h1>
        <p>Your home in Buea. Book in 1 minute with MTN MoMo.</p>
        <a href="/book" style={{ background: "#000", color: "#fff", padding: "12px 25px", borderRadius: 8, textDecoration: "none", display: "inline-block", marginTop: 10 }}>Book Now</a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 15 }}>
        {rooms.map((r) => (
          <div key={r.name} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 15, background: "#fff" }}>
            <h3 style={{ margin: "0 0 5px 0" }}>{r.name}</h3>
            <p style={{ color: "#666", fontSize: 13, margin: "0 0 10px 0" }}>{r.desc}</p>
            <p style={{ fontWeight: "bold", fontSize: 18 }}>{r.price.toLocaleString()} FCFA / night</p>
            <a href={`/book?room=${encodeURIComponent(r.name)}&price=${r.price}`} style={{ background: "#000", color: "#fff", padding: "10px", borderRadius: 8, display: "block", textAlign: "center", textDecoration: "none" }}>Book This</a>
          </div>
        ))}
      </div>
    </div>
  );
}
