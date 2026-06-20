import { defineCollection, z } from 'astro:content';

const lecturesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    module: z.number(),
    moduleTitle: z.string(),
    code: z.string(),
    title: z.string(),
    summary: z.string(),
    duration: z.string(),
    practiceTitle: z.string().optional(),
    slidesUrl: z.string().url().nullable().default(null),
    transcriptUrl: z.string().url().nullable().default(null),
    materials: z
      .array(
        z.object({
          title: z.string(),
          url: z.string(),
          type: z.enum(['pdf', 'link', 'video', 'file']),
        })
      )
      .default([]),
  }),
});

export const collections = {
  lectures: lecturesCollection,
};
