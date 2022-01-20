export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61e95badbe0663089dd65090',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xd6ho4sj',
                  apiId: '884be8e9-dbb4-4892-a202-6af446c124af'
                },
                {
                  buildHookId: '61e95badb95ff2006400bca4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eseizzzb',
                  apiId: 'bfc1b132-e989-4b4a-89b4-add62409945d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/inettom/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eseizzzb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
