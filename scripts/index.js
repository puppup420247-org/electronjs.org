import search from './search'

document.addEventListener('DOMContentLoaded', () => {
  search()
  require('./lazy-load-images')()
  require('./get-localized-strings')()
  require('./create-filter-list')()
  require('./fix-platform-labels')()
  if (window.app) {
    require('./update-demo-app-download-link')()
    require('./update-app-download-links')()
  }
  require('./platform-specific-content')()
  require('./apply-active-class-to-active-links')()
  require('./remove-scheme-from-link-text')()
  require('browser-date-formatter')()
  require('./add-code-block-buttons')()
  require('./sticky-app-meta')()
  require('./screenshot-thumb-selector')()
  require('./docs-language-toggle')()
  require('./expanding-versions')()
  require('./install-toggle')()
  require('./language-selector')()
  require('./kb-shortcut-dialog')()
  require('./anchor-links')()
  require('./science')()
})
