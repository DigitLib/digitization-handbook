import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { sidebar } from './configs/sidebar'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Digitization Handbook',
  description: 'From shelf to Europeana',
  base: "/digitization-handbook/",
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: 'Selection',
        link: '/selection/',
      },
      {
        text: 'Editing and Preparation',
        link: '/editandprep/',
      },
      {
        text: 'Publishing',
        link: '/publish/',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },         
    ],

    sidebar: sidebar
  }),
})
