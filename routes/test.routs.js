const { Router } = require("express");
const router = Router();
const Test = require("../models/Test");

router.post("/addTest", async (req, res) => {
  try {
    console.log(req.body);
    const { questions, icon, description, name } = req.body;
    const test = new Test({ questions, icon, description, name });
    await test.save();
    res.status(201).json({ message: "Тест доблавлен" });
  } catch (e) {
    res.status(500).json({ message: "Что то пошло не так, попробуйте снова." });
  }
});

router.get("/getTests", async (req, res) => {
  try {
    console.log(req.body);
    const tests = await Test.find();
    console.log(tests);
    res.status(201).json(tests);
  } catch (e) {
    res.status(500).json({ message: "Что то пошло не так, попробуйте снова." });
  }
});

module.exports = router;
