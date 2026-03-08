import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, fullName, email, phone, message } = body;

    // Validate request
    if (!fullName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
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

    // Default sheet range (modify "Sheet1" if your tab is named differently)
    const sheetId = process.env.GOOGLE_SPREADSHEET_ID;

    if (!sheetId) {
      return NextResponse.json(
        { error: "Spreadsheet ID not configured" },
        { status: 500 },
      );
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:F", // Targeting columns A through F
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(), // Timestamp
            type === "attend" ? "Attending" : "Declined", // RSVP Status
            fullName, // Name
            email || "", // Email (empty if declining)
            phone || "", // Phone (empty if declining)
            message || "", // Message
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
