const path = require('path');

const alias = {
    "@": path.resolve(__dirname),
};

module.exports = {
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {

        config.resolve.alias = Object.assign(config.resolve.alias, alias);

        return config;
    }
};