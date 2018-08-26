const path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: 'none',
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery'
        })
    ],
    resolve: {
        alias: {
            HomePage: path.resolve(__dirname, 'app/components/HomePage.js'),
            Account: path.resolve(__dirname, 'app/components/Account.js'),
            Main: path.resolve(__dirname, 'app/components/Main.js'),
            Nav: path.resolve(__dirname, 'app/components/Nav.js'),
            Transaction: path.resolve(__dirname, 'app/components/Transaction.js'),
            SignIn: path.resolve(__dirname, 'app/components/SignIn.js'),
            AccountInfo: path.resolve(__dirname, 'app/components/AccountInfo.js'),
            Notification: path.resolve(__dirname, 'app/components/Notification.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015', 'stage-0']
                    }
                }

            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    }
};