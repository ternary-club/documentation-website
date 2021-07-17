const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Ternary Club',
  tagline: 'The toolkit of the future of computing',
  url: 'https://ternary.club',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ternary-club', // Usually your GitHub org/user name.
  projectName: 'ternary-club', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Ternary Club',
      logo: {
        alt: 'Ternary Club Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'docs',
        },
        { to: '/blog', label: 'blog', position: 'left' },
        {
          href: 'https://github.com/ternary-club',
          label: 'github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'docs',
          items: [
            {
              label: 'tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'community',
          items: [
            {
              label: 'stack overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'more',
          items: [
            {
              label: 'blog',
              to: '/blog',
            },
            {
              label: 'github',
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
