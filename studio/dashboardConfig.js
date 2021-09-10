export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '613b1be006cbd1968f729500',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-emfo237n',
                  apiId: 'aabf7842-da85-4b2a-93f3-c0068665140a'
                },
                {
                  buildHookId: '613b1be006cbd195897296c1',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-3cve17sb',
                  apiId: '12d6dd39-d3b4-4b9e-bc81-e1351f83cf35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dhruva-able/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-3cve17sb.netlify.app', category: 'apps'}
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
