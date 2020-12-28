const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---readme-md": hot(preferDefault(require("C:\\Users\\wwz\\Desktop\\FE\\tmagic\\README.md"))),
  "component---src-components-alert-alert-mdx": hot(preferDefault(require("C:\\Users\\wwz\\Desktop\\FE\\tmagic\\src\\components\\Alert\\alert.mdx"))),
  "component---src-components-button-button-mdx": hot(preferDefault(require("C:\\Users\\wwz\\Desktop\\FE\\tmagic\\src\\components\\Button\\button.mdx"))),
  "component---src-components-icon-icon-mdx": hot(preferDefault(require("C:\\Users\\wwz\\Desktop\\FE\\tmagic\\src\\components\\Icon\\icon.mdx"))),
  "component---src-components-menu-menu-mdx": hot(preferDefault(require("C:\\Users\\wwz\\Desktop\\FE\\tmagic\\src\\components\\Menu\\menu.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\wwz\\Desktop\\FE\\tmagic\\.docz\\src\\pages\\404.js"))),
  "component---src-start-mdx": hot(preferDefault(require("C:\\Users\\wwz\\Desktop\\FE\\tmagic\\src\\start.mdx")))
}

