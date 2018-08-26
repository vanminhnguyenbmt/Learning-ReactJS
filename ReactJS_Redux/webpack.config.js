const path = require('path');

module.exports = {
    mode: 'production',
    entry: './app/app.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        alias: {
            reducer: path.resolve(__dirname, 'app/reducer/reducer.js'),
            store: path.resolve(__dirname, 'app/storeConfig.js'),
            action: path.resolve(__dirname, 'app/action.js'),
            List: path.resolve(__dirname, 'app/comps/List.jsx'),
            Note: path.resolve(__dirname, 'app/comps/Note.jsx'),
            NoteForm: path.resolve(__dirname, 'app/comps/NoteForm.jsx')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015', 'stage-0']
                    }
                }

            }
        ]
    }
};