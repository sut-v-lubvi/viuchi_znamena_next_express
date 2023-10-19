const { Router } = require("express");

const router = Router();
const User = require("../models/User");
const multer = require("multer");
// const upload = require("../middleware/file");
router.put("/add-statistics/:userId", async (req, res) => {
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

router.get("/getUser/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error get user", error: error.message });
  }
});

const upload = multer({ dest: "uploads/" });

router.post("/:userId/upload", upload.single("image"), async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  try {
    if (!req.file) {
      return res.status(400).send("Please upload a file.");
    }

    const { filename, originalname, path } = req.file;
    const userId = req.params.userId;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { avatar: { filename, originalname, path } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send("User not found.");
    }

    res.send("Avatar uploaded successfully.");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
