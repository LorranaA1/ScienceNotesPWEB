const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } }

const UsersSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  birthdate: { type: String, required: true },
  password: { type: String, required: true },
  code: { type: Number, required: true },
  image: { type: String, required: true },
},
  opts
);

UsersSchema.virtual("url").get(function() {
  return `/users/${this._id}`;
});

module.exports = mongoose.model("users", UsersSchema, "users");