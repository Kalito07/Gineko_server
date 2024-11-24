const express = require("express");
const app = express();
const PORT = 3000;

// Middleware за JSON
app.use(express.json());

// Примерен API endpoint
app.get("/api", (req, res) => {
  res.send({ message: "API is working!" });
});

// Стартиране на сървъра
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
