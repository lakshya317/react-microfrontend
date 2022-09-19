const { dependencies } = require('./package.json');

module.exports = {
    name: 'container',
    filename: 'remoteEntry.js',
    remotes: {
        app1: 'app1@http://localhost:3001/remoteEntry.js',
        app2: 'app2@http://localhost:3002/remoteEntry.js',
        container: 'container@http://localhost:3000/remoteEntry.js'
    },
    exposes:{
        './ThemeContext': './src/contexts/ThemeContext'
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
