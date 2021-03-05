const UserModel = require("../database/Model/userModel.js");

module.exports.createOne = async (req, res) => {
  const info = req.body;
  console.log(info);
  const user = await UserModel.create({
    name: info.name,
    email: info.email,
    password: "hash(info.password)",
  });
};
