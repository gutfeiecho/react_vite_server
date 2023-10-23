const User = require("../model/UserModel");

// const user = User.build({
//   username: "lucas",
//   age: 28,
//   description: "He is a programmer.",
// });

// (async () => {
//   try {
//     // At first sync() will create the table.
//     // await User.sync();
//     await user.save();
//     console.log("Saved successfully.");
//   } catch (error) {
//     console.error("Failed to save.\n" + error);
//   }
// })();

// create() === build() + save()
// (async () => {
//   try {
//     await User.create({
//       username: "Amy",
//       age: 26,
//     })
//       .then(() => {
//         console.log("Saved successfully.");
//       })
//       .catch((error) => {
//         console.error("Failed to save.\n" + error);
//       });
//   } catch (error) {
//     console.error(error);
//   }
// })();

const findAllUsers = async () => {
  try {
    const users = await User.findAll();
    console.log("All users:", JSON.stringify(users, null, 2));
    return users;
  } catch (error) {
    console.error("Failed to save.\n" + error);
  }
};

const findUserById = async (id) => {
  try {
    const user = await User.findAll({
      attributes: ["username", "description"],
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {
    console.error("Failed to save.\n" + error);
  }
};

module.exports = {
  findAllUsers,
  findUserById,
};
