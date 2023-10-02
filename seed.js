var User = require("./schema/user-schema.js");
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

const mongoUri = "mongodb://127.0.0.1:27017/POS-API";

const hashPassword = async (pass) => {
  try {
    const hashedPassword = await bcrypt.hash(pass, 5);

    console.log(hashedPassword);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

// (async () => {
//   console.log(await hashPassword("owner"));
// })();

// console.log(user);

// console.log(hashPassword("manager"));

const generateUsersToSeed = async () => {
  const usersToSeed = [
    {
      username: "owner",
      user_email: "owner@example.com",
      password: await hashPassword("owner"),
      role: "owner",
      is_active: true,
    },
    {
      username: "store_manager",
      user_email: "manager@example.com",
      password: await hashPassword("manager"),
      role: "store_manager",
      is_active: true,
    },
    // Add more user objects as needed
  ];

  return usersToSeed;
};

(async () => {
  try {
    await mongoose.connect(mongoUri);

    const user = await generateUsersToSeed();
    const data = await User.find({});
    console.log(data, `======data======`);
    if (data.length === 0) {
      const dataSeed = await User.insertMany(user);
      console.log(dataSeed, `=====dataSeed=====`);
    } else {
      console.log("data already exist");
    }
  } catch (error) {
    console.log(error, `========error=======`);
  }
})();
