
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/danielboyd/Projects/arlink-blog/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/danielboyd/Projects/arlink-blog/src/pages/index.js"))
}

