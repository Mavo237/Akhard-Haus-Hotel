
// This file dey talk to MTN

export async function POST(req) {
  const { amount, phone } = await req.json();

  const subKey = process.env.MOMO_SUBSCRIPTION_KEY;
  const apiUser = process.env.MOMO_API_USER;
  const apiKey = process.env.MOMO_API_KEY;

  // 1. Get Token from MTN
  const tokenRes = await fetch(
    "https://sandbox.momodeveloper.mtn.com/collection/token/",
    {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": subKey,
        "Authorization": "Basic " + Buffer.from(apiUser + ":" + apiKey).toString("base64"),
      },
    }
  );
  const tokenData = await tokenRes.json();
  const token = tokenData.access_token;

  // 2. Ask MTN to collect money
  const refId = crypto.randomUUID();

  await fetch(
    "https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay",
    {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": subKey,
        "Authorization": "Bearer " + token,
        "X-Reference-Id": refId,
        "X-Target-Environment": "sandbox",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount.toString(),
        currency: "EUR",
        externalId: refId,
        payer: { partyIdType: "MSISDN", partyId: phone },
        payerMessage: "Akhard Haus Booking",
        payeeNote: "Akhard Haus Buea",
      }),
    }
  );

  return Response.json({ success: true, referenceId: refId });
}
