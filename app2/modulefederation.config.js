const { dependencies } = require('./package.json');

module.exports = {
    name: 'app2',
    filename: 'remoteEntry.js',
    exposes: {
        './App2': './src/components/App2',
        './ScrollPage': './src/components/ScrollPage/ScrollPage'
    },
    remotes:{
        container: 'container@http://localhost:3000/remoteEntry.js'
    },
    shared: {
        ...dependencies,
        react: {
            singleton: true,
            requiredVersion: dependencies['react']
        },
        'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom']
        }
    }
};
