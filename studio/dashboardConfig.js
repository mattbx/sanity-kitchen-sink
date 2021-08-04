export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '610b1d7acbaffe2d70ca48d2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-utpykr16',
                  apiId: 'afbcce9b-a51e-48a6-80a1-80a71b2efe8c'
                },
                {
                  buildHookId: '610b1d7a5c7c912c94e40f20',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-pissckst',
                  apiId: '8ac462cb-d9ab-4361-a70f-c894b2ddb29a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattbx/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-pissckst.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
