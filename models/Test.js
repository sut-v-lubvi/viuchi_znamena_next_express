const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  id: Number,
  label: String,
});

const questionSchema = new mongoose.Schema({
  id: Number,
  image: String,
  znamya: String,
  question: String,
  correctAnswersIds: [Number],
  answers: [answerSchema],
});

const testSchema = new mongoose.Schema({
  id: Number,
  name: String,
  icon: String,
  description: String,
  questions: [questionSchema],
});

const testsSchema = new mongoose.Schema({
  name: String,
  tests: [testSchema],
});

const Tests = mongoose.model("Tests", testsSchema);
const Test = mongoose.model("Test", testSchema);
module.exports = Test;
