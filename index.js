const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

// rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
});

app.use(limiter);
app.set("trust proxy", 1);

// set static folder
app.use(express.static("public"));

// routes
app.use("/api", require("./routes"));

// enable cors
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is  listening at http://localhost:${PORT}`);
});
