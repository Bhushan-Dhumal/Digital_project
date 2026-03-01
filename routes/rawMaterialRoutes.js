const express = require("express");
const router = express.Router();

const RawMaterialEntry = require("../models/RawMaterialEntry");

// ✅ TEST
router.get("/test", (req, res) => {
  res.json({ ok: true, message: "rawMaterialRoutes working" });
});

// ✅ SAVE
router.post("/save", async (req, res) => {
  try {
    const doc = await RawMaterialEntry.create(req.body);
    return res.json({ ok: true, id: doc._id });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  }
});

// ✅ HISTORY
router.get("/history", async (req, res) => {
  try {
    const list = await RawMaterialEntry.find().sort({ createdAt: -1 }).limit(50);
    return res.json({ ok: true, list });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  }
});

module.exports = router;