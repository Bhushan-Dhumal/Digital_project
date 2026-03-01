const mongoose = require("mongoose");

const additiveSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rate: { type: Number, default: 0 },
    pct: { type: Number, default: 0 },
    qty: { type: Number, default: 0 },  // gm/kg
    rsPerKg: { type: Number, default: 0 },
    crPerKg: { type: Number, default: 0 },
    crPerTon: { type: Number, default: 0 },
    crPerDay: { type: Number, default: 0 }
  },
  { _id: false }
);

const rawMaterialEntrySchema = new mongoose.Schema(
  {
    typeProduct: { type: String, default: "" },
    nameProduct: { type: String, default: "" },
    whichProduct: { type: String, default: "" },

    // oil section
    tpd: { type: Number, default: 0 },
    oilRate: { type: Number, default: 0 },
    oilRequired: { type: Number, default: 0 },
    oilReplaced: { type: Number, default: 0 },
    totalOil: { type: Number, default: 0 },
    oilCrores: { type: Number, default: 0 },

    // additives
    additives: { type: [additiveSchema], default: [] },

    // summary
    avgRsPerDay: { type: Number, default: 0 },
    totalCroresPerDay: { type: Number, default: 0 },
    finalAvg2: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("RawMaterialEntry", rawMaterialEntrySchema);