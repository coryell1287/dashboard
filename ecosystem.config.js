module.exports = {
  apps: [{
    name: 'ai-dashboard',
    script: 'build/index.js',
    output: './info.log',
    error: './error.log',
    log_type: 'txt',
    merge_logs: true,
    mode: 'cluster',
    instance: 4,
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],
};
