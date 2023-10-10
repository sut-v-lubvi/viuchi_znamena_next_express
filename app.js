const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ extend: true }));

app.use("/api/auth", require("./routes/auth.routs"));
app.use("/api/", require("./routes/test.routs"));

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {});
    app.listen(PORT, () => console.log(`App has been started...`));
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}
start();
