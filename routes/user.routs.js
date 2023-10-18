const { Router } = require("express");

const router = Router();
const User = require("../models/User");

router.put("/add-statistics/:userId", async (req, res) => {
  console.log(req);
  const { userId } = req.params;
  const { testId, name, correctAnswers, totalQuestions } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Проверяем, есть ли уже объект с данным testId в массиве statistics
    const existingStatistics = user.statistics.find(
      (stat) => stat.testId === testId
    );

    if (existingStatistics) {
      // Если объект с таким testId уже существует, заменяем его
      if (correctAnswers > existingStatistics.correctAnswers) {
        existingStatistics.correctAnswers = correctAnswers;
        existingStatistics.errorAnswers = totalQuestions - correctAnswers;
      }
    } else {
      // Если объекта с таким testId нет, добавляем новый объект в массив statistics
      user.statistics.push({
        testId,
        name,
        correctAnswers,
        errorAnswers: totalQuestions - correctAnswers,
      });
    }

    // Сохраняем изменения
    await user.save();

    res.status(200).json({ message: "Statistics updated successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating statistics", error: error.message });
  }
});

router.get("/get-statistics/:userId", async (req, res) => {
  console.log(req);
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const statistics = user.statistics;

    res.status(201).json(statistics);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error get statistics", error: error.message });
  }
});

router.get("/getUsers", async (req, res) => {
  console.log(req);

  try {
    const users = await User.find();

    if (!users) {
      return res.status(404).json({ message: "Users not found" });
    }

    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error get users", error: error.message });
  }
});

module.exports = router;
