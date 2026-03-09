import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, fullName, email, phone, message } = body;

    const isValidEmail = (e: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
    const isValidPhone = (p: string) =>
      /^[\d\-\+\s\(\)]+$/.test(p);

    if (!fullName) {
      return NextResponse.json(
        { error: "Full Name is required" },
        { status: 400 },
      );
    }

    if (type === "attend") {
      if (!email || !isValidEmail(email)) {
        return NextResponse.json(
          { error: "Valid email required for attending" },
          { status: 400 },
        );
      }
      if (!phone || !isValidPhone(phone)) {
        return NextResponse.json(
          { error: "Valid phone number required for attending" },
          { status: 400 },
        );
      }
    }

    // Prepare credentials for Google API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const sheetId = process.env.GOOGLE_SPREADSHEET_ID;
    const tabName = process.env.GOOGLE_SPREADSHEET_TAB_NAME;

    if (!sheetId) {
      return NextResponse.json(
        { error: "Spreadsheet ID not configured" },
        { status: 500 },
      );
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${tabName}!A:F`, // Targeting columns A through F
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(), // Timestamp
            type === "attend" ? "Attending" : "Declined", // RSVP Status
            fullName,
            email || "",
            phone || "",
            message || "",
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return NextResponse.json(
      { error: "Failed to submit the form" },
      { status: 500 },
    );
  }
}
