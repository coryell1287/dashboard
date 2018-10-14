module.exports = {
  apps: [{
    name: 'ai-dashboard',
    script: 'server/index.js',
    output: './info.log',
    error: './error.log',
    log_type: 'json',
    merge_logs: true,
    mode: 'cluster',
    instance: 4,
    watch: './server',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],
};
