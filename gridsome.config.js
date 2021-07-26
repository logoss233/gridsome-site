// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'NWA',
  siteDescription:'大前端',
  plugins: [],
  templates:{
    StrapiJournal:[
      {
        path:'/journals/:id',
        component:'./src/templates/Journal.vue' 
      }
    ],
    StrapiProject:[
      {
        path:'/projects/:id',
        component:'./src/templates/Project.vue'
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['project','journal'],
        singleTypes: ['global'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ]
}
