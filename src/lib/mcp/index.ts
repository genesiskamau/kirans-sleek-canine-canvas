import { defineMcp } from "@lovable.dev/mcp-js";
import listBlogPosts from "./tools/list-blog-posts";
import getBlogPost from "./tools/get-blog-post";
import listServices from "./tools/list-services";
import getContactInfo from "./tools/get-contact-info";
import submitPuppyBooking from "./tools/submit-puppy-booking";
import submitContactInquiry from "./tools/submit-contact-inquiry";

export default defineMcp({
  name: "kirangi-dogs-mcp",
  title: "Kirangi Dogs",
  version: "0.1.0",
  instructions:
    "Public MCP server for Kirangi Dogs (kirangidogs.com) — Kenya's premier breeder and trainer of working-line German Shepherds and Black Russian Terriers. Read blog articles, list services, get contact info, submit a puppy reservation for the upcoming December Black Russian Terrier litter, or send a general contact inquiry.",
  tools: [
    listBlogPosts,
    getBlogPost,
    listServices,
    getContactInfo,
    submitPuppyBooking,
    submitContactInquiry,
  ],
});
