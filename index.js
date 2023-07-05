const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./Model/user");
mongoose.set("strictQuery", false);
const app = express();
dotenv.config();

mongoose.connect(process.env.DB_URL).then(console.log("DB Connected"));

// async function start() {
//   const person = await User.create({
//     name: "Saif",
//     age: 26,
//     favoriteFoods: ["Pizza"],
//   });
// }
// start();

// async function start() {
//   const arrayOfPeoples = [
//     { name: "S1", age: 1, favoriteFoods: ["Pizza"] },
//     { name: "S2", age: 2, favoriteFoods: ["Pizza"] },
//     { name: "S3", age: 3, favoriteFoods: ["Pizza"] },
//   ];
//   await User.create(arrayOfPeoples);
// }
// start();
// async function start() {
//   const people = await User.find();
//   console.log(people);
// }
// start();
// async function start() {
//   const person = await User.findOne({ name: "Saif" });
//   console.log(person);
// }
// start();
// async function start() {
//   const person = await User.findById("64a5bf95e48a830c3a6deb31");
//   console.log(person);
// }

// start();

// async function start() {
//   const person = await User.findByIdAndUpdate("64a5c3ea52f33cc5a74d6014", {
//     $push: { favoriteFoods: "Juice" },
//   });
// }

// start();

// async function start() {
//   const person = await User.findOneAndUpdate(
//     { name: "Saif" },
//     { age: 20 },
//     { new: true }
//   );
// }

// start();

// async function start() {
//   const person = await User.findByIdAndRemove("64a5bf95e48a830c3a6deb31");
// }

// start();

// async function start() {
//   const specificSearch = await User.find({ favoriteFoods: "Pizza" })
//     .sort({
//       age: 1,
//     })
//     .limit(1)
//     .select("name");
//   console.log(specificSearch);
// }
// start();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
