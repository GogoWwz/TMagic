// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---readme-md": () => import("./../../../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-components-alert-alert-mdx": () => import("./../../../../src/components/Alert/alert.mdx" /* webpackChunkName: "component---src-components-alert-alert-mdx" */),
  "component---src-components-button-button-mdx": () => import("./../../../../src/components/Button/button.mdx" /* webpackChunkName: "component---src-components-button-button-mdx" */),
  "component---src-components-icon-icon-mdx": () => import("./../../../../src/components/Icon/icon.mdx" /* webpackChunkName: "component---src-components-icon-icon-mdx" */),
  "component---src-components-menu-menu-mdx": () => import("./../../../../src/components/Menu/menu.mdx" /* webpackChunkName: "component---src-components-menu-menu-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-start-mdx": () => import("./../../../../src/start.mdx" /* webpackChunkName: "component---src-start-mdx" */)
}

