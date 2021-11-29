const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Ternary Club',
  tagline: 'The toolkit of the future of computing',
  url: 'https://ternary.club',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ternary-club',
  projectName: 'documentation-website',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      pt: {
        label: 'Português',
        direction: 'ltr',
      },
    },
  },
  themeConfig: {
    navbar: {
      title: 'Ternary Club',
      logo: {
        alt: 'Ternary Club Logo',
        src: 'img/logo.svg',
      },
      // hideOnScroll: true,
      items: [
        {
          to: '/#live-demo',
          label: 'Live demo',
          position: 'left',
          activeBasePath: '/#live-demo',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          to: '/#downloads',
          label: 'Downloads',
          position: 'left',
          activeBasePath: '/#downloads',
        },
        { to: '/about-us', label: 'About us', position: 'left' },
        // { type: 'docsVersionDropdown', position: 'right' },
        { type: 'localeDropdown', position: 'right' },
        {
          href: 'https://github.com/ternary-club',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Github',
              href: 'https://github.com/ternary-club',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ternary Club, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ternary-club/frontend/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ternary-club/frontend/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
