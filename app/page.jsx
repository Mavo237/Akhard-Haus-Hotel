
const apartments = [
  { id: 1, name: "Standard Room", price: 15000, guests: "2 Guests • 1 Bed", desc: "Clean, cozy, WiFi, TV, fan + AC", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80" },
  { id: 2, name: "Deluxe Room", price: 25000, guests: "2 Guests • Queen Bed", desc: "Bigger bed, balcony view, breakfast", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80" },
  { id: 3, name: "Executive Suite", price: 40000, guests: "3 Guests • King Bed", desc: "Living area, work desk, mountain view", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80" },
  { id: 4, name: "Family Suite", price: 50000, guests: "5 Guests • 2 Beds", desc: "2 rooms, perfect for family, kids welcome", img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80" },
  { id: 5, name: "Studio Apartment", price: 35000, guests: "2 Guests • Studio", desc: "Kitchen, fridge, self-catering", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80" },
  { id: 6, name: "1-Bedroom Apartment", price: 45000, guests: "4 Guests • 1 Bedroom", desc: "Full kitchen, living room, washing machine", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80" },
  { id: 7, name: "2-Bedroom Apartment", price: 65000, guests: "6 Guests • 2 Bedrooms", desc: "Family apartment, 2 bathrooms, balcony", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80" },
  { id: 8, name: "Penthouse - Buea View", price: 90000, guests: "6 Guests • Luxury", desc: "Top floor, Mt. Fako view, VIP service", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" },
];

export default function Home() {
  return (
    <div style={{ padding: 20, maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", padding: "30px 10px" }}>
        <h1 style={{ fontSize: 32, margin: 0 }}>Akhard Haus Hotel - Buea</h1>
        <p>8 Apartments & Rooms • From 15,000 FCFA • Book with MTN MoMo</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
        {apartments.map((a) => (
          <div key={a.id} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
            <img src={a.img} alt={a.name} style={{ width: "100%", height: 180, objectFit: "cover" }} />
            <div style={{ padding: 15 }}>
              <h3 style={{ margin: "0 0 5px" }}>{a.name}</h3>
              <p style={{ margin: "0 0 5px", color: "#666", fontSize: 13 }}>{a.guests}</p>
              <p style={{ margin: "0 0 10px", fontSize: 13 }}>{a.desc}</p>
              <p style={{ fontWeight: "bold", fontSize: 18, margin: "0 0 12px" }}>{a.price.toLocaleString()} FCFA <span style={{ fontWeight: "normal", fontSize: 12 }}>/ night</span></p>
              <a href={`/book?room=${encodeURIComponent(a.name)}&price=${a.price}`}>
                <button style={{ width: "100%", padding: 12, background: "#000", color: "#fff", border: "none", borderRadius: 10, fontWeight: "bold" }}>Book Now</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <p style={{ textAlign: "center", marginTop: 30, color: "#666" }}>📍 Buea, Southwest Region • 📞 MTN MoMo Accepted • Free WiFi • 24/7 Reception</p>
    </div>
  );
}
