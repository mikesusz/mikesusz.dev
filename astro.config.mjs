import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://mikesusz.dev',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [mdx(), sitemap()],
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  },
  experimental: {
    contentIntellisense: true
  }
});

