const { dependencies } = require('./package.json');

module.exports = {
    name: 'app1',
    filename: 'remoteEntry.js',
    exposes: {
        './App1': './src/components/App1',
        './ToolBar': './src/components/ToolBar/ToolBar'
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
