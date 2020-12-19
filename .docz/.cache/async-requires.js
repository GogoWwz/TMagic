// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---readme-md": () => import("./../../../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-components-button-button-mdx": () => import("./../../../../src/components/Button/button.mdx" /* webpackChunkName: "component---src-components-button-button-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-start-mdx": () => import("./../../../../src/start.mdx" /* webpackChunkName: "component---src-start-mdx" */)
}

