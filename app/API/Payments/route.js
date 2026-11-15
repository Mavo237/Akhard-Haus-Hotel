here// This is Node.js running inside Next.js
// For real MoMo, you go connect MTN MoMo API here

let bookings = []; // In real app, use database

export async function POST(request) {
  const { name, phone, room, price, date } = await request.json();

  // Simulate MoMo payment request
  console.log(`MoMo request: ${phone} to pay ${price} for ${room}`);

  const newBooking = {
    id: Date.now(),
    name, phone, room, price, date,
    status: "Paid",
    method: "MTN MoMo",
    createdAt: new Date().toISOString()
  };

  bookings.push(newBooking);
  // Save to global so dashboard can see it
  global.bookings = bookings;

  return Response.json({ success: true, booking: newBooking });
}

export async function GET() {
  return Response.json(global.bookings || []);
    }
