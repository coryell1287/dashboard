module.exports = {
  apps: [{
    name: 'ai-dashboard',
    script: 'server/index.js',
    output: './info.log',
    error: './error.log',
    log_type: 'txt',
    merge_logs: true,
    mode: 'cluster',
    exec_interpreter : 'babel-node',
    instance: 4,
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],
};
