module.exports = {
    // eslint-disable-next-line
    modify: (config) => {
        config.resolve.alias['@'] = require('path').resolve('./src');
        return config;
    },
    plugins: [
        {
            name: 'typescript',
            options: {
                useEslint: true,
                tsLoader: {
                    transpileOnly: true,
                    experimentalWatchApi: true,
                },
                forkTsChecker: {
                    tsconfig: './tsconfig.json',
                    watch: './src',
                    eslint: true,
                    tslint: false,
                },
            },
        },
        {
            name: 'scss',
        }
    ],
};