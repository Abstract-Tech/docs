// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Abstract Technology Docs',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.abstract-technology.de',
  baseUrl: '/',

  organizationName: 'Abstract-Tech',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
      },
    ],
  ],

  presets: [
    [
      'classic',
      ({
        docs: {
          // Serve docs at the site root; the docs landing page is the home page.
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Abstract-Tech/docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Abstract Technology Docs',
        logo: {
          alt: 'Abstract Technology Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Services',
            position: 'left',
            items: [{label: 'Open edX', to: '/open-edx/overview'}],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
