const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'TMagic',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\wwz\\Desktop\\FE\\tmagic\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'TMagic',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\wwz\\Desktop\\FE\\tmagic',
          templates:
            'C:\\Users\\wwz\\Desktop\\FE\\tmagic\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\wwz\\Desktop\\FE\\tmagic\\.docz',
          cache: 'C:\\Users\\wwz\\Desktop\\FE\\tmagic\\.docz\\.cache',
          app: 'C:\\Users\\wwz\\Desktop\\FE\\tmagic\\.docz\\app',
          appPackageJson: 'C:\\Users\\wwz\\Desktop\\FE\\tmagic\\package.json',
          appTsConfig: 'C:\\Users\\wwz\\Desktop\\FE\\tmagic\\tsconfig.json',
          gatsbyConfig: 'C:\\Users\\wwz\\Desktop\\FE\\tmagic\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\wwz\\Desktop\\FE\\tmagic\\gatsby-browser.js',
          gatsbyNode: 'C:\\Users\\wwz\\Desktop\\FE\\tmagic\\gatsby-node.js',
          gatsbySSR: 'C:\\Users\\wwz\\Desktop\\FE\\tmagic\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\wwz\\Desktop\\FE\\tmagic\\.docz\\app\\imports.js',
          rootJs: 'C:\\Users\\wwz\\Desktop\\FE\\tmagic\\.docz\\app\\root.jsx',
          indexJs: 'C:\\Users\\wwz\\Desktop\\FE\\tmagic\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\wwz\\Desktop\\FE\\tmagic\\.docz\\app\\index.html',
          db: 'C:\\Users\\wwz\\Desktop\\FE\\tmagic\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
