const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/suggest", async (req, res) => {
  const { skills, experience } = req.body;

  // Simple AI mock (real API later)
  const suggestion = `Improve your skills: ${skills}. Add more achievements in ${experience}`;

  res.json({ suggestion });
});

app.listen(5000, () => console.log("Server running"));
