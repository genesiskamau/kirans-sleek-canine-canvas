import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPosts } from "@/data/blogPosts";

export default defineTool({
  name: "get_blog_post",
  title: "Get blog post",
  description:
    "Fetch a single Kirangi Dogs blog post (title, metadata, and full markdown body) by its slug. Use `list_blog_posts` to discover valid slugs.",
  inputSchema: {
    slug: z.string().min(1).describe("The blog post slug, e.g. `choosing-a-protection-dog`."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) {
      return {
        content: [{ type: "text", text: `No blog post found with slug "${slug}".` }],
        isError: true,
      };
    }
    const { icon: _icon, ...data } = post;
    const payload = { ...data, url: `https://kirangidogs.com/blog/${post.slug}` };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: { post: payload },
    };
  },
});
