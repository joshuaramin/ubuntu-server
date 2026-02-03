module.exports = {
  apps: [
    {
      name: "my-server",
      script: "pnpm",
      args: "start",
      watch: false, // disable watch in production
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
