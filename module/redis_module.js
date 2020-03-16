require('dotenv').config();
const redis = require('redis');

module.exports = {
  setGetByRedis: () => new Promise((resolve, reject) => {
    // Redis
    const redis_client = redis.createClient({
      host: process.env.REDIS_HOST, 
      port: process.env.REDIS_PORT
    });
    redis_client.set('lambda','Hello Lambda', (err, result) => {
      if(result)
        console.log("redis-set-result:",result);
        
      if(err)
        console.log("redis-set-error:",err);
    });
    redis_client.get('lambda', (err, result) => { 
      if(result)
        resolve(result);
      
      if(err)
        console.log("redis-get-error:",err);
    });
    redis_client.quit();
  })
}