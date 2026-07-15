import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const FUNCTION_URL =
  "https://fqcsnlghwugkkwsegpsb.supabase.co/functions/v1/send-contact-email";
const ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxY3NubGdod3Vna2t3c2VncHNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2NjYzNDAsImV4cCI6MjA3MzI0MjM0MH0.qQaU-SyNA4Jg2c2VZy_FKKNis-Vcxzb-8Wlbp6t--cQ";

export default defineTool({
  name: "submit_contact_inquiry",
  title: "Send contact inquiry",
  description:
    "Send a general contact-form inquiry to Kirangi Dogs (delivered by email). Use for questions about training, protection dogs, assistance dogs, or general information — use `submit_puppy_booking` for puppy reservations.",
  inputSchema: {
    name: z.string().min(1).describe("Full name of the sender."),
    email: z.string().email().describe("Reply-to email address."),
    phone: z.string().optional().describe("Optional contact phone number."),
    message: z.string().min(1).describe("The inquiry or question."),
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
              text: `Contact submission failed (${res.status}): ${data?.error ?? "unknown error"}`,
            },
          ],
          isError: true,
        };
      }
      return {
        content: [
          { type: "text", text: "Inquiry sent. Kirangi Dogs will reply by email." },
        ],
        structuredContent: data,
      };
    } catch (err) {
      return {
        content: [
          { type: "text", text: `Network error sending inquiry: ${(err as Error).message}` },
        ],
        isError: true,
      };
    }
  },
});
