import { defineConfig } from 'vitepress';
import { applyPlugins } from '@ruabick/md-demo-plugins';
import { genTemp } from '@ruabick/vite-plugin-gen-temp';
import { genApiDoc } from '@ruabick/vite-plugin-gen-api-doc';
import { sidebar } from './sidebar.js';
import { resolve } from 'path';

export default defineConfig({
  lang: 'zh-CN',
  lastUpdated: true,
  base: process.env.NODE_ENV === 'production' ? '/Geely-Business-Components-Docs' : '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Geely-Business-Components-Docs',
      description: '',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Geely-Business-Components-Docs',
      description: '',
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    localeLinks: {
      text: '',
      items: [
        { text: '简体中文', link: '/' },
        // { text: 'English', link: '/en/' },
      ],
    },
    nav: [
      { text: '介绍', link: '/' },
      { text: '快速上手', link: '/quickstart/' },
      { text: '目录结构', link: '/catalogue/' },

    ],
    sidebar,
    algolia: {},
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com//Geely-Business-Components-Docs' },
    // ],
  },
  vue: {},
  vite: {
    plugins: [genTemp(), genApiDoc()],
    resolve: {
      alias: {
        'Geely-Business-Components-Docs': resolve('./src/'),
      },
    },
  },
  markdown: {
    config: (md) => {
      applyPlugins(md);
    },
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
});
