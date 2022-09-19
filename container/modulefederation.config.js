const { dependencies } = require('./package.json');

module.exports = {
    name: 'container',
    remotes: {
        app1: 'app1@http://localhost:3001/remoteEntry.js',
        app2: 'app2@http://localhost:3002/remoteEntry.js'
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
