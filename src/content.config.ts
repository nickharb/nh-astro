// Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// Import loaders
import { glob, file } from 'astro/loaders';

// Define your collections
const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    client: z.string(),
  })
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
  })
});

// Export a single `collections` object to register your collections
export const collections = { work, blog };