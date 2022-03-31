import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // site config
    lang: 'en-US',
    title: 'Snyk VueDocs',
    description: 'Much like Highlander, there can be only one.',

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        repo: 'owenmorrill/vuepress',
        editLinks: true,
        logo: '/logo.png',
        favicon: '/favicon.ico',
        navbar: [
            // NavbarItem
            {
                text: 'Docs',
                link: '/main/',
                children: ['/', '/main/new-page-test.md'],
            },
            {
                text: 'CLI',
                link: '/snyk-cli/',
            },
            // NavbarGroup
            {
                text: 'Group 1',
                children: ['/group/foo.md', '/group/bar.md'],
            },
            {
                text: 'Group 2 ',
                children: [
                    {
                        text: 'SubGroup',
                        children: ['/group/sub/foo.md', '/group/sub/bar.md'],
                    },
                ],
            },
            // control when should the item be active
            {
                text: 'Group 3',
                children: [
                    {
                        text: 'Always active',
                        link: '/',
                        // this item will always be active
                        activeMatch: '/',
                    },
                    {
                        text: 'Active on /foo/',
                        link: '/not-foo/',
                        // this item will be active when current route path starts with /foo/
                        // regular expression is supported
                        activeMatch: '^/foo/',
                    },
                ],
            },
        ],
    },
    plugins: [
        ['redirect-frontmatter'],
        [
            '@vuepress/plugin-google-analytics',
            {
                id: 'G-NMBHH05G87',
            },
        ],
    ],

})
