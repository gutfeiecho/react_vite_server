const { Sequelize } = require("sequelize");
const { LOCAL_DB_CONFIG } = require("../config/index");

// create a conection to database.
const sequelize = new Sequelize("echo_blog", "root", "genuinegtf0921", {
  host: "localhost",
  dialect: "mysql",
});

// create several database connection.
// const db_connect_pool = {};

// Object.entries(config).forEach(([key, value]) => {
//   db_connect_pool[key] = new Sequelize(
//     value.database,
//     value.user,
//     value.password,
//     {
//       host: value.host,
//       dialect: value.dialect,
//     }
//   );
// });

// 方式一：
// async function authenticateDatabaseConnect() {
//   try {
//     await sequelize.authenticate();
//     console.log("Connect has been established successfully.");
//   } catch (err) {
//     console.error("Unable to connect to the datebase:", error);
//   }
// }

// authenticateDatabaseConnect();

// 方式二：
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connect has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the datebase:", error);
  }
})();

module.exports = sequelize;
