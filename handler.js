'use strict';

// 사용할 모듈 선언
const dbModule = require('./module/db_module');
const redisModule = require('./module/redis_module');
const httpModule = require('./module/http_module');

// function hello
module.exports.hello = async event => {
  const[redisResult, dbResult, httpResult] = await Promise.all([redisModule.setGetByRedis(), dbModule.getCommentByDB(), httpModule.getUsersByHttp()]);
  
  console.log("1. REDIS RESULT");
  console.log(redisResult);
  console.log("2. DB RESULT");
  if(dbResult) {
    dbResult.forEach(comment => {
      console.log("id = %d, comment = %s", comment.id, comment.comment);
    });
  }
  
  console.log("3. HTTP RESULT");
  if(httpResult) {
    httpResult.forEach(user => {
      console.log("id = %d, name = %s, email = %s", user.id, user.name, user.email);
    });
  }
};

// function user
module.exports.user = async event => {
  if(event.headers)
    console.log("Request Header -> User-Agent :", event.headers['User-Agent']);
  if(event.body)
    console.log("Request Body ->", event.body);
  if(event.pathParameters && event.pathParameters.id)
    console.log("Reqeust PathParameter -> id :", event.pathParameters.id);
  if(event.queryStringParameters && event.queryStringParameters.isValid)
    console.log("Request queryString -> isValid :",event.queryStringParameters.isValid);
};
