import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lit from "@astrojs/lit";

export default defineConfig({
  srcDir: './astro',
  outDir: './astro/dist',
  integrations: [
    lit(),
    starlight({
      title: 'My delightful docs site',
      // customCss: ['/src/styles/custom.css'],
      components: {
        Head: './astro/src/components/Head.astro',
      },
      defaultLocale: 'root',
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            {
              label: 'Documentation Overview',
              link: '/getting-started/documentation-overview',
            },
          ],
        },
        {
          label: 'Components',
          autogenerate: { directory: 'components' },
        },
      ],
    }),
  ],
});
