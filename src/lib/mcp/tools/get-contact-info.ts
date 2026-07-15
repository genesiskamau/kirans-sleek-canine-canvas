import { defineTool } from "@lovable.dev/mcp-js";

const CONTACT = {
  business: "Kirangi Dogs",
  location: "Kenya (serving international clients across the East African Community and beyond)",
  phone: "+254-785-535-569",
  email: "kirangidogs@gmail.com",
  whatsapp: "https://wa.me/254785535569",
  website: "https://kirangidogs.com",
  blog: "https://kirangidogs.com/blog",
  puppyReservations: "https://kirangidogs.com/puppy-form",
};

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Get Kirangi Dogs' public contact details: phone, email, WhatsApp, website, blog, and puppy reservation link.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CONTACT, null, 2) }],
    structuredContent: CONTACT,
  }),
});
