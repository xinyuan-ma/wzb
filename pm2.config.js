const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

module.exports = {
  apps: [
    {
      name: process.env.PM2_SERVICE_NAME + ' on ' + process.env.PORT,
      script: './node_modules/nuxt/bin/nuxt-start',
      env: {
        PORT: process.env.PORT,
      },
      env_production : {
        NODE_ENV: 'production',
        PORT: process.env.PORT,
      }
    },
  ],
}
