// Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// Import loaders
import { glob, file } from 'astro/loaders';

// Define your collections
const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    published: z.boolean(),
    client: z.string(),
    role: z.string(),
    skills: z.string(),
    stack: z.string(),
    url: z.string(),
    image: z.string(),
    gravity: z.string().optional(),
    description: z.string().max(200),
  })
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
  })
});

// Export a single `collections` object to register your collections
export const collections = { work, blog };