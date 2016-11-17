module.exports = {
    port: 3000,
    sesion: {
      secret: "zblog",
      key: "zblog",
      maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/zblog'
};
