require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const rawMaterialRoutes = require("./routes/rawMaterialRoutes");

const app = express();

// Body parsing
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Page route
app.get("/", (req, res) => res.redirect("/raw-material"));
app.get("/raw-material", (req, res) => res.render("raw-material"));

// API routes
app.use("/api/raw-material", rawMaterialRoutes);

// DB connect + start
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB error:", err.message);
  });