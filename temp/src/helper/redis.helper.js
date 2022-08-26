const redis = require("redis");
// const Redis = require("ioredis");
const client = redis.createClient();


client.on("error", function (error) {
  console.error(error);
});

const setJWT = (key, value) => {
  console.log(key);
  return new Promise((resolve, reject) => {
    try {
       client.set(key, value, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getJWT = (key) => {
  return new Promise((resolve, reject) => {
    try {
      client.get("key", (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  setJWT,
  getJWT,
};