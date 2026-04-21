import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.union([z.string(), z.date()]).transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		heroAlt: z.string().optional(),
		draft: z.boolean().optional(),
		projectSlug: z.string().optional()
	})
});

const allowedCategories = ['IBM', 'Salesforce', 'Web', 'College'] as const;

const education = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/education' }),
	schema: z.object({
		title: z.string(),
		category: z.enum(allowedCategories),
		institution: z.string(),
		date: z.union([z.string(), z.date()]).transform((val) => new Date(val)),
		description: z.string().optional(),
		credential: z.string().optional(),
		draft: z.boolean().optional(),
		heroImage: z.string().optional(),
		heroAlt: z.string().optional(),
		url: z.string().optional()
	})
});

const allowedStatuses = ['active', 'archived', 'planned'] as const;

const projects = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		createdDate: z.union([z.string(), z.date()]).transform((val) => new Date(val)),
		status: z.enum(allowedStatuses).default('active'),
		tags: z.array(z.string()).optional(),
		repoUrl: z.string().optional(),
		liveUrl: z.string().optional(),
		heroImage: z.string().optional(),
		heroAlt: z.string().optional(),
		draft: z.boolean().optional()
	})
});

export const collections = { blog, education, projects };
