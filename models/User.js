const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  statistics: [
    {
      testId: { type: String, required: true },
      name: { type: String, required: true },
      correctAnswers: { type: Number, required: true },
      errorAnswers: { type: Number, required: true },
    },
  ],
});
schema.virtual("id").get(function () {
  return this._id.toHexString();
});
schema.set("toJSON", {
  virtuals: true,
});
module.exports = model("User", schema);
