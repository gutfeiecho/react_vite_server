// import redis from 'redis';

// const initClient = async () => {
//   const client = await redis
//     .createClient()
//     .on('error', (err) => console.log('Redis Client Error', err))
//     .connect();
//   return client;
// };

// client.on('error', function (err) {
//   console.error(err);
// });
// const client = initClient();

// client.set('string key', 'string val', redis.print);
// client.hset('hash key', 'hashtest 1', 'some value', redis.print);
// client.hset(['hash key', 'hashtest 2', 'some other value'], redis.print);
// client.hkeys('hash key', function (err, replies) {
//   console.log(replies.length + ' replies:');
//   replies.forEach(function (reply, i) {
//     console.log(' ' + i + ': ' + reply);
//   });
//   client.quit();
// });

// import { createClient } from 'redis';

// const client = await createClient({
//   retry_strategy: function (options) {
//     if (options.error.code === 'ECONNREFUSED') {
//       // End reconnecting on a specific error and flush all commands with a individual error
//       report('连接被拒绝');
//     }
//     if (options.times_connected > 10) {
//       report('重试连接超过十次');
//     }
//     // reconnect after
//     return Math.max(options.attempt * 100, 3000);
//   }
// })
//   // .on('error', (err) => console.log('Redis Client Error', err))
//   .connect();

// await client.set('key', 'value');
// const value = await client.get('key');
// console.log('🚀 ~ file: index.js:35 ~ value:', value);

// // const value2 = await client.get('name');
// // console.log('🚀 ~ file: index.js:38 ~ value2:', value2);

// await client.disconnect();

import { createClient } from 'redis';

const client = await createClient()
  .on('error', (err) => console.log('Redis Client Error', err))
  .connect();

await client.set('key', 'value');
const value = await client.get('key');
console.log('🚀 ~ file: index.js:62 ~ value:', value);
await client.disconnect();
