import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		heroAlt: z.string().optional(),
		draft: z.boolean().optional()
	})
});

const allowedCategories = ['IBM', 'Salesforce', 'Web', 'College'] as const;

const education = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		category: z.enum(allowedCategories),
		institution: z.string(),
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		description: z.string().optional(),
		credential: z.string().optional(),
		draft: z.boolean().optional(),
		heroImage: z.string().optional(),
		heroAlt: z.string().optional(),
		url: z.string().optional()
	})
});

export const collections = { blog, education };