const { dependencies } = require('./package.json');

module.exports = {
    name: 'app1',
    filename: 'remoteEntry.js',
    exposes: {
        './App1': './src/components/App1',
        './ToolBar': './src/components/ToolBar/ToolBar'
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
