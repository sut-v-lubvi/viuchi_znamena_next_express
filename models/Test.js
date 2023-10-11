const { Schema, model, Types } = require("mongoose");

const answerSchema = new Schema({
  id: Number,
  label: String,
});

const questionSchema = new Schema({
  id: Number,
  image: String,
  znamya: String,
  question: String,
  correctAnswersIds: [Number],
  answers: [answerSchema],
});

const testSchema = new Schema({
  name: String,
  icon: String,
  description: String,
  questions: [questionSchema],
});

testSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
testSchema.set("toJSON", {
  virtuals: true,
});
const Test = model("Test", testSchema);
module.exports = Test;
