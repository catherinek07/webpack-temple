//common.js
//module path, plugin
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    //start
    entry : './js/main.js',
    output : {
    // path: path.resolve(__dirname, 'disk'),
    // filename: ' main.js',
    clean: true
    },
    module:{
        rules:[
            {test:/\.s?css$/,
            use:['style-loader',
                'css-loader',
                'sass-loader'
            ]},
            {test: /\.m?js$/, 
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']},
                }
            }
        ]
    },
    
    plugins:[
        new HtmlPlugin(
            {template:'index.html'}
        ),
        new CopyPlugin(
            {patterns:[
                {from:'static'}
                ]}
        )
    ]
    // ,devServer:{
    //     host:'localhost',
    //     port:8080,
    //     hot:true
    // }
}