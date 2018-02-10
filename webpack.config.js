const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry: "./src/main.js",
    output: {
        path:path.join(__dirname,'dish'),
        filename:'bundle.js'
    },
    module:{
        loaders: [
                {test:/\.css/,
                loaders: "style-loader!css-loader!autoprefixer-loader"
                },
            {
                test:/\.less$/,
                loaders: "style-loader!css-loader!autoprefixer-loader!less-loader"
            },
            {
                test:/\.js$/,
                loaders: "babel-loader"
            },
            {
                test:/\.(jpg|png|gif|svg|ttf|woff|woff2)$/,
                loaders: "url-loader?limit=4096"//4096字节以上生成文件，否则base64
            },
            {
                test:/\.vue/,
                loaders: "vue-loader"
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template:'index.html'
        })
    ]
}
