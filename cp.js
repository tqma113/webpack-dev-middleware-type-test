const path = require('path')
const fs = require('fs-extra')

fs.copySync(path.resolve('./src/webpack-dev-middleware'), path.resolve('./node_modules/@types/webpack-dev-middleware'))
