import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const FUNCTION_URL =
  "https://fqcsnlghwugkkwsegpsb.supabase.co/functions/v1/submit-puppy-booking";
const ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxY3NubGdod3Vna2t3c2VncHNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2NjYzNDAsImV4cCI6MjA3MzI0MjM0MH0.qQaU-SyNA4Jg2c2VZy_FKKNis-Vcxzb-8Wlbp6t--cQ";

export default defineTool({
  name: "submit_puppy_booking",
  title: "Submit puppy booking inquiry",
  description:
    "Submit a reservation request for the upcoming Black Russian Terrier litter (expected December). Sends the inquiry to Kirangi Dogs and emails the requester a confirmation.",
  inputSchema: {
    name: z.string().min(1).describe("Full name of the person making the reservation."),
    phone: z.string().min(5).describe("Contact phone number (include country code)."),
    email: z.string().email().describe("Email address for the confirmation reply."),
    preferred_sex: z
      .enum(["Male", "Female", "Either"])
      .describe("Preferred puppy sex."),
    notes: z
      .string()
      .optional()
      .describe("Optional additional questions or notes for the breeder."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: true },
  handler: async (input) => {
    try {
      const res = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: ANON_KEY,
          Authorization: `Bearer ${ANON_KEY}`,
        },
        body: JSON.stringify(input),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        return {
          content: [
            {
              type: "text",
              text: `Booking failed (${res.status}): ${data?.error ?? "unknown error"}`,
            },
          ],
          isError: true,
        };
      }
      return {
        content: [
          {
            type: "text",
            text: `Booking submitted. Kirangi Dogs will reply within 24-48 hours. Booking ID: ${data?.bookingId ?? "n/a"}`,
          },
        ],
        structuredContent: data,
      };
    } catch (err) {
      return {
        content: [
          { type: "text", text: `Network error submitting booking: ${(err as Error).message}` },
        ],
        isError: true,
      };
    }
  },
});
