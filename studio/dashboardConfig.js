export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '605a5a9960ab1a009ac8e4f6',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-xk38xum9',
                  apiId: '228163e5-9a8a-418b-840b-c5d714a5442e'
                },
                {
                  buildHookId: '605a5a99022a2a174f3ea3fb',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-m6suyinv',
                  apiId: 'fa81a287-e825-41df-bd3b-3b36de9e4dda'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/knutwannheden/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-m6suyinv.netlify.app', category: 'apps'}
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
