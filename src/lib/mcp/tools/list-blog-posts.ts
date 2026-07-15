import { defineTool } from "@lovable.dev/mcp-js";
import { blogPosts } from "../../../data/blogPosts";

export default defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description:
    "List every published Kirangi Dogs blog post with slug, title, subtitle, category, date and estimated read time. Use `get_blog_post` to fetch the full article body by slug.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = blogPosts.map(({ slug, title, subtitle, category, date, readTime }) => ({
      slug,
      title,
      subtitle,
      category,
      date,
      readTime,
      url: `https://kirangidogs.com/blog/${slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { posts: items },
    };
  },
});
