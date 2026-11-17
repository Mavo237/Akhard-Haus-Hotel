let bookings = [];
export async function POST(request) {
  const { name, phone, room, price, date } = await request.json();
  const newBooking = { id: Date.now(), name, phone, room, price, date, status: "Paid", method: "MTN MoMo", createdAt: new Date().toISOString() };
  bookings.push(newBooking);
  global.bookings = bookings;
  return Response.json({ success: true, booking: newBooking });
}
export async function GET() {
  return Response.json(global.bookings || []);
  }
