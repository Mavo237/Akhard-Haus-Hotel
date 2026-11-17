
export default function Home() {
  const rooms = [
    // STANDARD - 15k-20k
    { name: "Standard Room 101", price: 15000, desc: "Double Bed • WiFi • TV", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=700", tag: "Standard" },
    { name: "Standard Room 102", price: 15000, desc: "Double Bed • WiFi • TV", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=700", tag: "Standard" },
    { name: "Standard Room 103", price: 16000, desc: "Double Bed • WiFi • Balcony", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=700", tag: "Standard" },
    { name: "Standard Room 104", price: 16000, desc: "Double Bed • WiFi • Balcony", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=700", tag: "Standard" },
    { name: "Standard Room 105", price: 18000, desc: "Queen Bed • WiFi • Mountain View", img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=700", tag: "Standard" },
    { name: "Standard Room 106", price: 18000, desc: "Queen Bed • WiFi • Mountain View", img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=700", tag: "Standard" },
    { name: "Standard Room 107", price: 20000, desc: "Queen Bed • WiFi • Work Desk", img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700", tag: "Standard" },
    { name: "Standard Room 108", price: 20000, desc: "Queen Bed • WiFi • Work Desk", img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700", tag: "Standard" },
    // DELUXE - 25k-35k
    { name: "Deluxe Room 201", price: 25000, desc: "King Bed • Mountain View • Breakfast", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700", tag: "Deluxe" },
    { name: "Deluxe Room 202", price: 25000, desc: "King Bed • Mountain View • Breakfast", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700", tag: "Deluxe" },
    { name: "Deluxe Room 203", price: 28000, desc: "King Bed • Bathtub • Breakfast", img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=700", tag: "Deluxe" },
    { name: "Deluxe Room 204", price: 28000, desc: "King Bed • Bathtub • Breakfast", img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=700", tag: "Deluxe" },
    { name: "Deluxe Room 205", price: 30000, desc: "King Bed • Lounge Chair • View", img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=700", tag: "Deluxe" },
    { name: "Deluxe Room 206", price: 30000, desc: "King Bed • Lounge Chair • View", img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=700", tag: "Deluxe" },
    { name: "Deluxe Room 207", price: 32000, desc: "King Bed • Mini Fridge • View", img: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=700", tag: "Deluxe" },
    { name: "Deluxe Room 208", price: 35000, desc: "King Bed • Premium • View", img: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=700", tag: "Deluxe" },
    // EXECUTIVE - 40k-55k
    { name: "Executive Suite 301", price: 40000, desc: "Lounge • Desk • Breakfast", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700", tag: "Executive" },
    { name: "Executive Suite 302", price: 40000, desc: "Lounge • Desk • Breakfast", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700", tag: "Executive" },
    { name: "Executive Suite 303", price: 45000, desc: "Lounge • Bathtub • Breakfast", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=700", tag: "Executive" },
    { name: "Executive Suite 304", price: 45000, desc: "Lounge • Bathtub • Breakfast", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=700", tag: "Executive" },
    { name: "Executive Suite 305", price: 50000, desc: "Large Lounge • Office • View", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=700", tag: "Executive" },
    { name: "Executive Suite 306", price: 55000, desc: "Large Lounge • Office • View", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=700", tag: "Executive" },
    // FAMILY - 50k-65k
    { name: "Family Suite 401", price: 50000, desc: "2 Beds • Family • WiFi", img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=700", tag: "Family" },
    { name: "Family Suite 402", price: 50000, desc: "2 Beds • Family • WiFi", img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=700", tag: "Family" },
    { name: "Family Suite 403", price: 55000, desc: "2 Beds • Kitchenette • TV", img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=700", tag: "Family" },
    { name: "Family Suite 404", price: 55000, desc: "2 Beds • Kitchenette • TV", img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=700", tag: "Family" },
    { name: "Family Suite 405", price: 60000, desc: "3 Beds • Living Area", img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700", tag: "Family" },
    { name: "Family Suite 406", price: 65000, desc: "3 Beds • Living Area • View", img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700", tag: "Family" },
    // STUDIO APARTMENTS - 35k-50k
    { name: "Studio Apartment A1", price: 35000, desc: "Kitchen • Self-Catering", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700", tag: "Studio" },
    { name: "Studio Apartment A2", price: 35000, desc: "Kitchen • Self-Catering", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700", tag: "Studio" },
    { name: "Studio Apartment A3", price: 38000, desc: "Kitchen • Balcony • WiFi", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700", tag: "Studio" },
    { name: "Studio Apartment A4", price: 38000, desc: "Kitchen • Balcony • WiFi", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700", tag: "Studio" },
    { name: "Studio Apartment A5", price: 42000, desc: "Kitchen • Mountain View", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700", tag: "Studio" },
    { name: "Studio Apartment A6", price: 42000, desc: "Kitchen • Mountain View", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700", tag: "Studio" },
    { name: "Studio Apartment A7", price: 45000, desc: "Kitchen • Premium • View", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700", tag: "Studio" },
    { name: "Studio Apartment A8", price: 50000, desc: "Kitchen • Premium • View", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700", tag: "Studio" },
    // 1-BEDROOM - 55k-70k
    { name: "1-Bedroom Apt B1", price: 55000, desc: "Living Room • Kitchen", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700", tag: "1-Bedroom" },
    { name: "1-Bedroom Apt B2", price: 55000, desc: "Living Room • Kitchen", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700", tag: "1-Bedroom" },
    { name: "1-Bedroom Apt B3", price: 60000, desc: "Living Room • Kitchen • Balcony", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700", tag: "1-Bedroom" },
    { name: "1-Bedroom Apt B4", price: 60000, desc: "Living Room • Kitchen • Balcony", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700", tag: "1-Bedroom" },
    { name: "1-Bedroom Apt B5", price: 65000, desc: "Living Room • Kitchen • View", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700", tag: "1-Bedroom" },
    { name: "1-Bedroom Apt B6", price: 65000, desc: "Living Room • Kitchen • View", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700", tag: "1-Bedroom" },
    { name: "1-Bedroom Apt B7", price: 70000, desc: "Premium • Full Kitchen • View", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700", tag: "1-Bedroom" },
    { name: "1-Bedroom Apt B8", price: 70000, desc: "Premium • Full Kitchen • View", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700", tag: "1-Bedroom" },
    // 2-BEDROOM - 75k-95k
    { name: "2-Bedroom Apt C1", price: 75000, desc: "2 Beds • Full Kitchen", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700", tag: "2-Bedroom" },
    { name: "2-Bedroom Apt C2", price: 75000, desc: "2 Beds • Full Kitchen", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700", tag: "2-Bedroom" },
    { name: "2-Bedroom Apt C3", price: 80000, desc: "2 Beds • Living • Balcony", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700", tag: "2-Bedroom" },
    { name: "2-Bedroom Apt C4", price: 80000, desc: "2 Beds • Living • Balcony", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700", tag: "2-Bedroom" },
    { name: "2-Bedroom Apt C5", price: 85000, desc: "2 Beds • Premium • View", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700", tag: "2-Bedroom" },
    { name: "2-Bedroom Apt C6", price: 85000, desc: "2 Beds • Premium • View", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700", tag: "2-Bedroom" },
    { name: "2-Bedroom Apt C7", price: 90000, desc: "2 Beds • Luxury • View", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700", tag: "2-Bedroom" },
    { name: "2-Bedroom Apt C8", price: 95000, desc: "2 Beds • Luxury • View", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700", tag: "2-Bedroom" },
    // 3-BEDROOM / VILLA - 110k-180k
    { name: "3-Bedroom Villa D1", price: 110000, desc: "3 Beds • Garden • Parking", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700", tag: "Villa" },
    { name: "3-Bedroom Villa D2", price: 110000, desc: "3 Beds • Garden • Parking", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700", tag: "Villa" },
    { name: "3-Bedroom Villa D3", price: 125000, desc: "3 Beds • Pool View • Kitchen", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700", tag: "Villa" },
    { name: "3-Bedroom Villa D4", price: 125000, desc: "3 Beds • Pool View • Kitchen", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700", tag: "Villa" },
    { name: "3-Bedroom Villa D5", price: 140000, desc: "3 Beds • Luxury • View", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700", tag: "Villa" },
    { name: "3-Bedroom Villa D6", price: 150000, desc: "3 Beds • Luxury • View", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700", tag: "Villa" },
    // PENTHOUSE - 120k-200k
    { name: "Penthouse P1 - Buea View", price: 120000, desc: "Best View • Luxury • Jacuzzi", img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=700", tag: "Penthouse" },
    { name: "Penthouse P2 - Fako View", price: 130000, desc: "Fako View • Luxury • Jacuzzi", img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=700", tag: "Penthouse" },
    { name: "Penthouse P3 - Royal", price: 160000, desc: "Royal • Private Chef • View", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=700", tag: "Penthouse" },
    { name: "Penthouse P4 - Presidential", price: 200000, desc: "Presidential • Full Luxury", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=700", tag: "Penthouse" },
    // LONG STAY / SPECIAL
    { name: "Long Stay - Monthly Studio", price: 450000, desc: "1 Month • Studio • All Included", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700", tag: "Monthly" },
    { name: "Long Stay - Monthly 1-Bed", price: 650000, desc: "1 Month • 1-Bed • All Included", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700", tag: "Monthly" },
    { name: "Long Stay - Monthly 2-Bed", price: 850000, desc: "1 Month • 2-Bed • All Included", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700", tag: "Monthly" },
    { name: "Event Hall - Small", price: 100000, desc: "50 Guests • Day Use", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=700", tag: "Event" },
    { name: "Event Hall - Large", price: 200000, desc: "150 Guests • Day Use", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=700", tag: "Event" },
    { name: "Conference Room", price: 75000, desc: "30 People • Projector • WiFi", img: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=700", tag: "Business" },
  ];
  return (
    <div>
      <div style={{ background: "linear-gradient(135deg,#0f172a 0%,#92400e 60%,#f59e0b 100%)", color: "#fff", padding: "70px 20px", textAlign: "center" }}>
        <span style={{ background: "rgba(255,255,255,0.2)", padding: "7px 15px", borderRadius: 20, fontSize: 13, fontWeight: "bold" }}>⭐ 4.9 • 64 ROOMS & APARTMENTS • BUEA</span>
        <h1 style={{ fontSize: 44, lineHeight: 1.05, margin: "18px 0 10px 0" }}>Sleep Like Royalty<br/>In The Heart of Buea</h1>
        <p style={{ opacity: 0.9, maxWidth: 650, margin: "0 auto 22px auto", fontSize: 17 }}>Mount Fako view, fast WiFi, 24/7 reception. From 15,000 FCFA. Book in 60 seconds with MTN MoMo.</p>
        <a href="/book" style={{ background: "#fff", color: "#111", padding: "15px 32px", borderRadius: 30, fontWeight: "800", display: "inline-block" }}>Book Your Room →</a>
        <div style={{ marginTop: 22, display: "flex", justifyContent: "center", gap: 18, flexWrap: "wrap", fontSize: 13 }}><span>📶 Free WiFi</span><span>🍳 Breakfast</span><span>🚗 Free Parking</span><span>💛 MTN MoMo</span><span>🏔️ Fako View</span></div>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <div><h2 style={{ fontSize: 28, marginBottom: 5 }}>All 64 Rooms & Apartments</h2><p style={{ color: "#666", marginTop: 0 }}>Real prices • No hidden charges • Pay with MoMo</p></div>
          <span style={{ background: "#fef3c7", padding: "8px 14px", borderRadius: 20, fontSize: 13, fontWeight: "bold" }}>From 15,000 FCFA / night</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 20, marginTop: 20 }}>
          {rooms.map(r => (
            <div key={r.name} style={{ background: "#fff", borderRadius: 18, overflow: "hidden", boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}>
              <div style={{ position: "relative" }}><img src={r.img} style={{ width: "100%", height: 170, objectFit: "cover" }} alt={r.name} /><span style={{ position: "absolute", top: 10, left: 10, background: "#f59e0b", padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: "bold" }}>{r.tag}</span></div>
              <div style={{ padding: 16 }}><h3 style={{ margin: "0 0 4px 0", fontSize: 16 }}>{r.name}</h3><p style={{ color: "#666", fontSize: 13, margin: "0 0 12px 0" }}>{r.desc}</p><div style={{ fontSize: 20, fontWeight: "800" }}>{r.price.toLocaleString()} <span style={{ fontSize: 12, fontWeight: "400", color: "#888" }}>FCFA {r.price >= 400000 ? "/ month" : r.price >= 75000 && r.tag === "Business" || r.tag === "Event" ? "/ day" : "/ night"}</span></div><a href={`/book?room=${encodeURIComponent(r.name)}&price=${r.price}`} style={{ background: "#111", color: "#fff", padding: "12px", borderRadius: 12, display: "block", textAlign: "center", marginTop: 12, fontWeight: "bold" }}>Book This</a></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
