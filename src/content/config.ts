import { defineCollection, z } from 'astro:content';

const lecturesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    module: z.number(),
    moduleTitle: z.string(),
    code: z.string(),
    title: z.string(),
    summary: z.string(),
    duration: z.string().optional(),
    practiceTitle: z.string().optional(),
    slidesUrl: z.string().nullable().default(null),
    transcriptUrl: z.string().nullable().default(null),
    transcriptLabel: z.string().optional(),
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
