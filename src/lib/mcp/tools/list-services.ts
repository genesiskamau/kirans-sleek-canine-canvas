import { defineTool } from "@lovable.dev/mcp-js";

const SERVICES = [
  {
    name: "Working-Line German Shepherd Puppies",
    description:
      "Champion-bloodline working-line German Shepherd puppies bred for protection, service, and family companionship.",
  },
  {
    name: "Black Russian Terrier Puppies",
    description:
      "Health-tested Black Russian Terrier puppies from imported bloodlines. The next litter is expected in December.",
  },
  {
    name: "Personal & Family Protection Dogs",
    description:
      "Fully trained protection dogs selected and developed for nerve stability, confidence, and controlled defense work.",
  },
  {
    name: "Service & Assistance Dogs",
    description:
      "Service and assistance dogs carefully trained for individuals living with mobility challenges, PTSD, ADHD, anxiety, and other conditions. Specialties include psychiatric dogs, mobility dogs, medical-alert dogs, and mobility tasks.",
  },
  {
    name: "Professional Dog Training",
    description:
      "Obedience, protection, and specialty task training led by Joseph Chege — a professional dog trainer and Occupational Therapist with 10+ years of experience. Services extend beyond Kenya to the wider East African Community.",
  },
];

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the services Kirangi Dogs offers: puppies, protection dogs, service/assistance dogs, and professional training.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SERVICES, null, 2) }],
    structuredContent: { services: SERVICES },
  }),
});
