module.exports = {
  apps: [
    {
      name: "my-server",
      script: "npm",
      args: "start",
      watch: false, // disable watch in production
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
