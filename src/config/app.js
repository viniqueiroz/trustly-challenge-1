// App configuration file
module.exports = {
    worldClockApiBaseUrl: process.env.WORLDCLOCK_API_URL,
    port: (process.env.PORT) ? process.env.PORT : 3001,
};