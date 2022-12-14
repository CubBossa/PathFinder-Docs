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
                        ['/configuration/config', 'WIP - config.yml'],
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
                            path: '/commands/administration',
                            collapsable: false,
                            children: [
                                ['/commands/pathfinder', '/pathfinder'],
                                ['/commands/roadmap', '/roadmap'],
                                ['/commands/waypoint', 'WIP - /waypoint'],
                                ['/commands/nodegroup', 'WIP - /nodegroup'],
                                ['/commands/pathvisualizer', 'WIP - /pathvisualizer'],
                            ]
                        }, {
                            title: 'Player Usage',
                            path: '/commands/users',
                            collapsable: false,
                            children: [
                                ['/commands/find', 'WIP - /find'],
                                ['/commands/cancelpath', '/cancelpath'],
                            ]
                        }
                    ]
                }, {
                    title: 'Developer API',
                    collapsable: false,
                    path: '/api/',
                    children: [
                        ['/api/setup', 'Getting Started'],
                        ['/api/what_can_you_do', 'What is possible?']
                    ]
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
