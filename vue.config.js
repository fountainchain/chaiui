const path = require('path');

module.exports = {

    pages:{
        // example:{
        //     entry: 'examples/main.js',
        //     template: 'public/index.html',
        //     filename: 'example.html'
        // }
    },
    // 强制内联CSS
    css: { extract: false },
    chainWebpack: (config)=>{

        config
        .entry('index')
        .add(path.resolve(__dirname, 'packages/index.ts'))
        .end()
        .output
        .filename('[name].js');

        config.plugins.delete('html')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')

        config.module
        .rule('ts')
        .include
          .add(path.resolve(__dirname, 'packages'))
          .end()
        .use('babel')
          .loader('babel-loader')
          .tap(options => {
            return options
          })

    }

}