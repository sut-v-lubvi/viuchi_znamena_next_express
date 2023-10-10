const express = require("express");
const cors = require("cors");
const config = require("config");
const mongoose = require("mongoose");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({ extend: true }));

app.use("/api/auth", require("./routes/auth.routs"));
app.use("/api/", require("./routes/test.routs"));

// if(process.env.NODE_ENV === 'production'){
//   app.use("/", express.static(path.join(__dirname, 'client', '.next')));

// }

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
