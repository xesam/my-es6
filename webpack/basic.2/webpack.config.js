const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // JavaScript 执行入口文件
    entry: "./main.js",
    output: {
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: "bundle.js",
        // 输出文件都放到 dist 目录下
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [
            {
                test: /\.css/,
                // use: ["style-loader", "css-loader?minimize"]
                use: ExtractTextPlugin.extract({
                    use: ["css-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name]_[contenthash:8].css"
        })
    ]
};