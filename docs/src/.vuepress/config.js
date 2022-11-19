const {description} = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Pathfinder Docs',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {name: 'theme-color', content: '#7B42F5'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'GitHub',
                icon: 'download',
                link: 'https://github.com/CubBossa/PathFinder',
            },
            {
                text: 'Download',
                link: 'https://www.spigotmc.org/resources/gps-pathfinder-minecraft-pathfinding-tool.104961/'
            }
        ],
        sidebar: {
            '/': [
                {
                    title: 'Getting Started',
                    collapsable: false,
                    path: '/getting_started/',
                    children: [
                        ['/getting_started/introduction', 'Introduction'],
                        ['/getting_started/installation', 'Installation'],
                    ]
                }, {
                    title: 'Concept',
                    collapsable: false,
                    path: '/concept/',
                    children: [
                        ['/concept/roadmaps', 'Roadmaps, Nodes and Graphs'],
                        ['/concept/nodegroups', 'Adding Logic with Nodegroups'],
                    ]
                }, {
                    title: 'Configuration',
                    collapsable: false,
                    path: '/configuration/',
                    children: [
                        ['/configuration/config', 'config.yml'],
                        ['/configuration/translations', 'Languages'],
                        ['/configuration/effects', 'effects.nbo'],
                    ]
                }, {
                    title: 'Command Usage',
                    collapsable: false,
                    path: '/commands/',
                    children: [
                        {
                            title: 'Administration',
                            path: 'administration',
                            collapsable: false,
                            children: [
                                ['/commands/pathfinder', '/pathfinder'],
                                ['/commands/roadmap', '/roadmap'],
                                ['/commands/waypoint', '/waypoint'],
                                ['/commands/nodegroup', '/nodegroup'],
                                ['/commands/pathvisualizer', '/pathvisualizer'],
                            ]
                        }, {
                            title: 'Player Usage',
                            path: 'player',
                            collapsable: false,
                            children: [
                                ['/commands/find', '/find'],
                                ['/commands/cancelpath', '/cancelpath'],
                            ]
                        }
                    ]
                }, {
                    title: 'Developer API'
                }
            ],
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
