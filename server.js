const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect Database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API is runnning"));

//Define Routes

app.use("/api/summaries", require("./routes/api/summaries"));
app.use("/api/cases", require("./routes/api/cases"));
app.use("/api/database", require("./routes/api/database"));
app.use("/api/templates", require("./routes/api/templates"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server startede on port ${PORT}`));
