
import Navbar from "../components/Navbar";
import RoomCard from "../components/RoomCard";
import Link from "next/link";

export default function Home() {
  const rooms = [
    { id: 1, name: "Deluxe Apartment", price: 25000, img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800", desc: "1 Bedroom, Kitchen, WiFi, Mountain View" },
    { id: 2, name: "Executive Suite", price: 40000, img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800", desc: "King Bed, Balcony, Breakfast Included" },
    { id: 3, name: "Family Villa", price: 60000, img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800", desc: "2 Bedrooms, Living Room, Private Parking" },
  ];

  return (
    <div>
      <Navbar />
      {/* HERO */}
      <section style={{ background: "#0A2E1F", color: "white", padding: "80px 20px", textAlign: "center" }}>
        <p className="handwriting">Welcome to Akhard</p>
        <h1 style={{ fontSize: "3.5rem", margin: "10px 0" }}>Luxury Stay in <span style={{ color: "#C9A227" }}>Buea</span></h1>
        <p style={{ opacity: 0.8, marginBottom: 30 }}>Mount Fako View • Fast WiFi • 24/7 Power • Breakfast</p>
        <Link href="/book"><button className="btn-gold">Book Your Stay Now →</button></Link>
      </section>

      {/* ROOMS */}
      <section style={{ padding: "60px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <p className="handwriting" style={{ textAlign: "center" }}>Our Rooms</p>
        <h2 style={{ textAlign: "center", fontSize: "2.2rem", marginBottom: 40 }}>Choose Your Comfort</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 25 }}>
          {rooms.map(r => <RoomCard key={r.id} room={r} />)}
        </div>
      </section>
    </div>
  );
          }
