// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

// module.exports = withPlugins([optimizedImages], { target: 'serverless' });

// module.exports = {
//   future: {
//     webpack5: true,
//   },
//   webpack: function (config, options) {
//     config.experiments = {};
//     return config;
//   },


// };


const withImages = require('next-images')
module.exports = withImages({})

