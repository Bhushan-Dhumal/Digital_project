document.addEventListener("DOMContentLoaded", function () {

/* ---------------- PRODUCT MASTER ---------------- */

const productData = {
     "Mango": ["Pulp", "Juice", "RTS", "Pickle", "Leather", "Canned Slices/Pulp"],
    "Banana": ["Chips", "Puree", "Flour", "Powder", "Beer", "Canned Puree"],
    "Papaya": ["Pulp", "RTS", "Candy", "Papain", "Canned Pulp"],
    "Guava": ["Jelly", "Juice", "Nectar", "Powder", "Canned Pulp"],
    "Orange": ["Juice", "Squash", "Concentrate", "Marmalade", "Bottled Juice"],
    "Pomegranate": ["Arils", "Juice", "Wine", "Anardana", "Bottled Juice"],
    "Pineapple": ["Juice", "Candy", "Slices", "Canned Slices"],
    "Grapes": ["Raisins", "juice", "wine", "jelly", "Bottled Juice"],
    "Strawberry": ["Jam", "Puree", "Syrup", "IQF", "Canned Puree"],
    "Sweet Lime (Mosambi)": ["Juice", "Squash", "Concentrate", "Bottled Juice"],
    "Lemon":["Juice", "Pickle", "Concentrate", "Peel Oil", "Bottled Juice"],
    "Lime":["Juice", "Squash", "Pickle", "Oil", "Bottled Juice"],
    "Watermelon": ["Juice", "RTS", "Cubes", "Canned Juice"],
    "Muskmelon": ["Juice", "Pulp", "Candy", "Canned Pulp"],
    "Coconut": ["Oil", "Milk", "Powder", "Chips", "Canned Milk"],
    "Custard Apple": ["Pulp", "Ice Cream", "Milkshake", "Frozen Pulp"],
    "Sapota (Chiku)": ["Pulp", "Milkshake", "Powder", "Canned Pulp"],
    "Fig": ["Jam", "Dried Fig", "Paste", "Canned Fig"],
    "Jackfruit": ["Bulbs", "chips", "flour", "pickle", "Canned Bulbs"],
    "Karonda": ["Jelly", "Squash", "Pickle", "Canned Fruit"],
    "Mulberry": ["Jam", "Juice", "Wine", "Dried", "Canned Pulp"],
    "Star Fruit": ["Juice", "Candy", "Pickle", "Canned Slices"],
    "Cashew Apple": ["Juice", "Wine", "Vinegar", "Bottled Juice"],
    "Ber": ["Candy", "Pickle", "Dried", "Canned Fruit"],
    "Tamarind": ["Paste", "Concentrate", "Candy", "Canned Pulp"],
    "Kokum": ["Syrup", "Butter", "RTS", "Canned Juice"],
    "Amla": ["Candy", "Juice", "Powder", "Pickle", "Canned Pulp"],
    "Plum": ["Jam", "Juice", "Canned Fruit", "Dried"],
    "Raspberry": ["Jam", "Puree", "Frozen", "Canned"],
    "Litchi": ["Juice", "Squash", "Dried", "Canned Litchi"],
    "Dragon Fruit": ["Juice", "Wine", "Candy", "Canned Pulp"],
    "Blackberry": ["Jam", "Juice", "Frozen", "Canned"],
    "Cherry": ["Juice", "Jam", "Canned Fruit", "Dried"]
};

const rawMaterialMaster = {
     "Mango": {
        "Pulp": [
            { name: "Raw Mango ", rate: 50, pct: 90 },
            { name: "Sugar", rate: 40, pct: 5 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "KMS", rate: 250, pct: 0.5 },
            { name: "Salt", rate: 20, pct: 0.2 },
            { name: "Ascorbic Acid ", rate: 800, pct: 0.2 },
            { name: "Water", rate: 0, pct: 4 }
        ],

        "Juice": [
            { name: "Mango Pulp", rate: 45, pct: 80 },
            { name: "Sugar", rate: 40, pct: 50 },
            { name: "Pectin", rate: 1500, pct: 0.8 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "KMS", rate: 250, pct: 0.05 },
            { name: "Sodium benzoate", rate: 250, pct: 0.7 },
            { name: "Color", rate: 1600, pct: 0.01 }
        ],
        
        "RTS": [
            { name: "Mango Pulp", rate: 45, pct: 10 },
            { name: "Sugar", rate: 40, pct: 10 },
            { name: "Water", rate: 0, pct: 80 },
            { name: "Citric Acid", rate: 200, pct: 0.15 },
            { name: "Stabilizer (CMC)", rate: 500, pct: 0.10 },
            { name: "Sodium benzoate", rate: 250, pct: 0.02 },
            { name: "Mango Flavour", rate: 2000, pct: 0.005 },
            { name: "Food Color", rate: 2000, pct: 0.001 }
        ],
        
        "Pickle": [
            { name: "Raw Mango", rate: 45, pct: 60 },
            { name: "Mustard oil", rate: 200, pct: 20 },
            { name: "Salt", rate: 20, pct: 10 },
            { name: "Red Chilli Powder", rate: 300, pct: 3 },
            { name: "Turmeric", rate: 200, pct: 1 },
            { name: "Fenugreek Powder", rate: 200, pct: 1 },
            { name: "Fennel Powder", rate: 250, pct: 1 },
            { name: "Asafoetida", rate: 2000, pct: 0.05 }
        ],

        "Leather": [
            { name: "Mango Pulp", rate: 80, pct: 80 },
            { name: "Sugar", rate: 40, pct: 18 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "KMS", rate: 300, pct: 0.02 },
            { name: "Color(optional)", rate: 2000, pct: 0.01 }
        ],

        "Canned Slices/Pulp": [
            { name: "Mango Pulp/Slices", rate: 100, pct: 80 },
            { name: "Sugar", rate: 40, pct: 20 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "KMS", rate: 300, pct: 0.02 },
            { name: "Water", rate: 0, pct: 5 }
        ]
    },
        
    "Banana": {
        "Chips": [
            { name: "Raw Banana", rate: 60, pct: 100 },
            { name: "Edible oil", rate: 150, pct: 30 },
            { name: "Salt", rate: 30, pct: 1 },
            { name: "Turmeric", rate: 200, pct: 0.2 },
            { name: "BHA", rate: 2000, pct: 0.02 }
        ],

        "Puree": [
            { name: "Ripe Banana", rate: 30, pct: 95 },
            { name: "Sugar", rate: 40, pct: 3 },
            { name: "Water", rate: 0, pct: 1 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "Ascorbic Acid", rate: 800, pct: 0.5 },
            { name: "BHA", rate: 2000, pct: 0.03 }
        ],

        "Powder": [
            { name: "Raw Banana", rate: 60, pct: 85 },
            { name: "Maltodextrin", rate: 70, pct: 10 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "Ascorbic Acid", rate: 800, pct: 0.5 },
            { name: "KMS", rate: 250, pct: 0.2 },
            { name: "Tricalcium Phosphate", rate: 150, pct: 0.5 },
            { name: "Sugar Solid", rate: 40, pct: 4 }
        ],

        "Beer": [
            { name: "Ripe Banana", rate: 30, pct: 60 },
            { name: "Sugar", rate: 40, pct: 3 },
            { name: "Cereal Flour", rate: 40, pct: 7 },
            { name: "Yeast", rate: 200, pct: 0.5 },
            { name: "Hops", rate: 700, pct: 0.07 }
        ],

        "Canned Puree": [
            { name: "Banana Pulp", rate: 80, pct: 80 },
            { name: "Sugar", rate: 50, pct: 15 },
            { name: "Citric Acid", rate: 200, pct: 0.1 },
            { name: "Ascorbic Acid", rate: 800, pct: 0.1 },
            { name: "Water", rate: 0, pct: 0.01 }
        ]
    },
    
    "Papaya": {
        "Pulp": [
            { name: "Ripe Papaya", rate: 20, pct: 95 },
            { name: "Sugar", rate: 40, pct: 3 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "Ascorbic Acid", rate: 800, pct: 0.05 },
            { name: "KMS", rate: 300, pct: 0.10 },
            { name: "Water", rate: 0, pct: 2 }
        ],

        "RTS": [
            { name: "Papaya Pulp", rate: 60, pct: 10 },
            { name: "Sugar", rate: 40, pct: 8 },
            { name: "Citric Acid", rate: 200, pct: 0.15 },
            { name: "CMC (Stabilizer)", rate: 500, pct: 0.1 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 },
            { name: "Flavour", rate: 1800, pct: 0.005 },
            { name: "Food Color", rate: 1500, pct: 0.001 },
            { name: "Water", rate: 0, pct: 80 }
        ],

        "Candy": [
            { name: "Papaya Pieces", rate: 20, pct: 50 },
            { name: "Sugar", rate: 40, pct: 45 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "Food Color", rate: 1800, pct: 0.01 },
            { name: "Flavour", rate: 1800, pct: 0.005 }
        ],

        "Papain": [
            { name: "Raw Papaya", rate: 30, pct: 95 },
            { name: "Clarifying Agents (activated charcoal)", rate: 200, pct: 8 },
            { name: "CMC (Stabilizer)", rate: 500, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
        ],

        "Canned Pulp": [
            { name: "Papaya Pulp", rate: 60, pct: 80 },
            { name: "Sugar", rate: 40, pct: 20 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "Ascorbic Acid", rate: 800, pct: 0.05 },
            { name: "KMS", rate: 300, pct: 0.10 },
            { name: "Water", rate: 0, pct: 2 }
        ]

    },

    "Guava": {
        "Jelly": [
            { name: "Guava Pulp", rate: 50, pct: 35 },
            { name: "Sugar", rate: 40, pct: 55 },
            { name: "Pectin", rate: 1000, pct: 1 },
            { name: "Citric Acid", rate:200, pct: 0.3 },
            { name: "Salt", rate: 30, pct: 0.01 },
            { name: "KMS", rate: 300, pct: 0.05 },
            { name: "Water", rate: 0, pct: 8 }
        ],

        "Juice": [
            { name: "Guava Pulp", rate: 50, pct: 50 },
            { name: "Sugar", rate: 40, pct: 8 },
            { name: "Citric Acid", rate: 200, pct: 0.3 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.05 },
            { name: "Water", rate: 0, pct: 80 }
        ],

        "Nectar": [
            { name: "Guava Pulp", rate: 50, pct: 20 },
            { name: "Sugar", rate: 40, pct: 12 },
            { name: "Citric Acid", rate: 200, pct: 0.3 },
            { name: "Stabilizer (CMC / Pectin)", rate: 500, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 300, pct: 0.07 },
            { name: "Water", rate: 0, pct: 60 }
        ],

        "Powder": [
            { name: "Guava pulp solids ", rate: 40, pct: 45 },
            { name: "Maltodextrin ", rate: 70, pct: 60 },
            { name: "Anti-caking (silicon dioxide / tricalcium phosphate)", rate: 140, pct: 0.5 },
            { name: "Citric Acid", rate: 200, pct: 0.3 }
        ],

        "Canned Pulp": [
            { name: "Guava Pulp", rate: 70, pct: 80 },
            { name: "Sugar", rate: 50, pct: 20 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "KMS", rate: 300, pct: 0.10 },
            { name: "Water", rate: 0, pct: 5 }
        ]

    },

    "Orange": {
        "Juice": [
            { name: "Raw Orange", rate: 50, pct: 30 },
            { name: "Sugar", rate: 40, pct: 8 },
            { name: "Citric Acid", rate:200, pct: 0.3 },
            { name: "Ascorbic Acid ", rate: 800, pct: 0.1 },
            { name: "Sodium Benzoate", rate: 300, pct: 0.05 },
            { name: "Water", rate: 0, pct: 80 }
        ],

        "Squash": [
            { name: "Orange Juice/Pulp", rate: 50, pct: 30 },
            { name: "Sugar", rate: 40, pct: 40 },
            { name: "Citric Acid", rate: 200, pct: 0.3 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 },
            { name: "KMS", rate: 250, pct: 0.06 },
            { name: "Water", rate: 0, pct: 20 }
        ],

        "Concentrate": [
            { name: "Fresh Oranges", rate: 50, pct: 600 },
            { name: "Sugar", rate: 40, pct: 1 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 300, pct: 0.1 },
            { name: "KMS", rate: 250, pct: 0.08 },
            { name: "Water", rate: 0, pct: 30 }
        ],

        "Marmalade": [
            { name: "Orange Pulp", rate: 50, pct: 20},
            { name: "Orange Peel", rate: 30, pct: 5 },
            { name: "Sugar", rate: 40, pct: 60 },
            { name: "Pectin", rate: 1000, pct: 1 },
            { name: "Citric Acid", rate: 200, pct: 0.3 },
            { name: "KMS", rate: 250, pct: 0.05 },
            { name: "Water", rate: 0, pct: 13 }
        ],

        "Bottled Juice": [
            { name: "Orange Pulp", rate: 50, pct: 90 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 300, pct: 0.1 },
            { name: "Ascorbic Acid", rate: 800, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
        ]

    },

    "Pomegranate": {
        "Arils": [
            { name: "Fresh Pomegranate Fruit", rate: 200, pct: 200 },
            { name: "Edible Oil", rate: 120, pct: 0.2 },
            { name: "Sugar", rate: 40, pct: 10 },
            { name: "Citric Acid", rate:200, pct: 0.10 },
            { name: "Ascorbic Acid ", rate: 800, pct: 0.1 },
            { name: "Sodium Benzoate", rate: 300, pct: 0.05 }
        ],

        "Juice": [
            { name: "Pomegranate Juice/Pulp", rate: 80, pct: 20 },
            { name: "Sugar", rate: 40, pct: 8 },
            { name: "Citric Acid", rate: 200, pct: 0.3 },
            { name: "Ascorbic Acid ", rate: 800, pct: 0.1 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.05 },
            { name: "Water", rate: 0, pct: 80 }
        ],

        "Wine": [
            { name: "Pomegranate Juice", rate: 80, pct: 80 },
            { name: "Sugar", rate: 40, pct: 15 },
            { name: "Yeast", rate: 1500, pct: 0.1 },
            { name: "Yeast Nutrients", rate: 800, pct: 0.05 },
            { name: "Citric Acid", rate: 200, pct: 0.2 }
        ],

        "Anardana": [
            { name: "Fresh Pomegranate Arils", rate: 200, pct: 200},
            { name: "Salt", rate: 20, pct: 3 },
            { name: "Sugar", rate: 40, pct: 2 },
            { name: "Citric Acid", rate: 200, pct: 0.3 },
            { name: "Potassium Sorbate ", rate: 500, pct: 0.1 }
        ],

        "Bottled Juice": [
            { name: "Pomegranate Juice / Arils", rate: 300, pct: 90 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 300, pct: 0.1 },
            { name: "Ascorbic Acid", rate: 800, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
        ]

    },

    "Pineapple": {
        "Juice": [
            { name: "Pineapple Pulp/Juice", rate: 30, pct: 20 },
            { name: "Sugar", rate: 40, pct: 10 },
            { name: "Citric Acid", rate:200, pct: 3 },
            { name: "Sodium Benzoate", rate: 300, pct: 0.05 },
            { name: "Water", rate: 0, pct: 70 }
        ],

        "Candy": [
            { name: "Pineapple Pieces", rate: 40, pct: 40 },
            { name: "Sugar", rate: 40, pct: 58 },
            { name: "Citric Acid", rate: 200, pct: 2 },
            { name: "KMS ", rate: 800, pct: 0.05 },
            { name: "Food Color", rate: 1000, pct: 0.1 }
        ],

        "Slices": [
            { name: "Pineapple Slices", rate: 40, pct: 50 },
            { name: "Sugar", rate: 40, pct: 35 },
            { name: "Citric Acid", rate: 200, pct: 2 },
            { name: "KMS ", rate: 800, pct: 0.05 },
            { name: "Water", rate: 0, pct: 0.05 }
        ],

        "Canned Slices": [
            { name: "Pineapple Slices / Pulp", rate: 100, pct: 80},
            { name: "Sugar", rate: 40, pct: 20 },
            { name: "Citric Acid", rate: 200, pct: 2 },
            { name: "Potassium Sorbate ", rate: 500, pct: 0.1 },
            { name: "Water", rate: 0, pct: 5 }
        ]

    },

    "Grapes": {
        "Raisins": [
            { name: "Fresh Grapes", rate: 80, pct: 100 },
            { name: "Edible Vegetable Oil", rate: 120, pct: 0.5 },
            { name: "Potassium Carbonate ", rate: 100, pct: 0.3 },
            { name: "Ethyl Oleate ", rate:250, pct: 0.2 },
            { name: "Sulfur Dioxide (SO₂)", rate: 200, pct: 3 }
        ],

        "Juice": [
            { name: "Grapes Juice/Pulp", rate: 70, pct: 12 },
            { name: "Sugar", rate: 40, pct: 8 },
            { name: "Citric Acid", rate: 200, pct: 0.3 },
            { name: "Ascorbic Acid ", rate: 800, pct: 0.1 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.05 },
            { name: "Water", rate: 0, pct: 80 }
        ],

        "Wine": [
            { name: "Grapes Juice", rate: 70, pct: 80 },
            { name: "Sugar", rate: 40, pct: 15 },
            { name: "Yeast", rate: 1500, pct: 0.1 },
            { name: "Yeast Nutrients", rate: 800, pct: 0.05 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "Sulfur Dioxide (SO₂)", rate: 200, pct: 3 }
        ],

        "Jelly": [
            { name: "Grape Juice / Extract", rate: 70, pct: 35},
            { name: "Sugar", rate: 40, pct: 55 },
            { name: "Pectin", rate: 1000, pct: 1 },
            { name: "Citric Acid", rate: 200, pct: 3 },
            { name: "KMS ", rate: 800, pct: 0.05 },
            { name: "Water", rate: 0, pct: 8 }
        ],

        "Bottled Juice": [
            { name: "Grape Juice / Pulp", rate: 200, pct: 90 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 300, pct: 0.5 },
            { name: "KMS", rate: 800, pct: 0.05 },
            { name: "Water", rate: 0, pct: 2 }
        ]

    },

    "Strawberry": {
        "Jam": [
            { name: "Strawberry puree/pulp", rate: 250, pct: 45 },
            { name: "Sugar", rate: 40, pct: 52 },
            { name: "Pectin", rate: 1000, pct: 1 },
            { name: "Citric Acid", rate: 200, pct: 0.5 },
            { name: "KMS", rate: 800, pct: 0.05 },
            { name: "Water", rate: 0, pct: 2 }
        ],

        "Puree": [
            { name: "Fresh Strawberry", rate: 200, pct: 90 },
            { name: "Sugar", rate: 40, pct: 5 },
            { name: "Citric Acid", rate: 200, pct: 0.3 },
            { name: "Ascorbic Acid ", rate: 800, pct: 0.1 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.05 },
            { name: "Water", rate: 0, pct: 80 }
        ],

        "Syrup": [
            { name: "Strawberry Puree", rate: 200, pct: 30 },
            { name: "Sugar", rate: 40, pct: 60 },
            { name: "Citric Acid", rate: 200, pct: 0.3 },
            { name: "KMS", rate: 800, pct: 0.05 },
            { name: "Water", rate: 0, pct: 15 }
        ],

        "IQF": [
            { name: "Fresh Strawberry", rate: 300, pct: 100},
            { name: "Sugar", rate: 40, pct: 5 },
            { name: "Sulfur Dioxide", rate: 200, pct: 0.05 },
            { name: "Water", rate: 0, pct: 3 }
        ],

        "Canned Puree": [
            { name: "Strawberry Pulp", rate: 250, pct: 90 },
            { name: "Sugar", rate: 50, pct: 15 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "KMS", rate: 800, pct: 0.05 },
            { name: "Water", rate: 0, pct: 2 }
        ]

    },

    "Sweet Lime (Mosambi)": {
        "Juice": [
            { name: "Sweet Lime Juice/Pulp", rate: 60, pct: 10 },
            { name: "Sugar", rate: 40, pct: 8 },
            { name: "Citric Acid", rate: 200, pct: 0.3 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.05 },
            { name: "Ascorbic Acid ", rate: 800, pct: 0.1 },
            { name: "Water", rate: 0, pct: 80 }
        ],

        "Squash": [
            { name: "Sweet Lime Juice/Pulp", rate: 60, pct: 30 },
            { name: "Sugar", rate: 40, pct: 50 },
            { name: "Citric Acid", rate: 200, pct: 0.3 },
            { name: "KMS", rate: 800, pct: 0.05 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 },
            { name: "Water", rate: 0, pct: 20 }
        ],

        "Concentrate": [
            { name: "Sweet Lime", rate: 60, pct: 300 },
            { name: "Sugar", rate: 40, pct: 5 },
            { name: "Citric Acid", rate: 200, pct: 0.1 },
            { name: "Ascorbic Acid ", rate: 800, pct: 0.1 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 }
        ],

        "Bottled Juice": [
            { name: "Sweet Lime Juice / Pulp", rate: 70, pct: 90},
            { name: "Sugar", rate: 40, pct: 5 },
            { name: "Citric Acid", rate: 200, pct: 0.1 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 },
            { name: "Ascorbic Acid ", rate: 800, pct: 0.1 },
            { name: "Water", rate: 0, pct: 3 }
        ]
    },

    "Lemon": {
        "Juice": [
            { name: "Fresh Lemons", rate: 40, pct: 100 },
            { name: "Sugar", rate: 40, pct: 5 },
            { name: "Citric Acid", rate: 200, pct: 0.3 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 },
            { name: "Water", rate: 0, pct: 70 }
        ],

        "Pickle": [
            { name: "Lemon ", rate: 40, pct: 55 },
            { name: "Salt", rate: 20, pct: 9 },
            { name: "Adible Oil", rate: 150, pct: 12 },
            { name: "Red Chilli Powder", rate: 230, pct: 4 },
            { name: "Turmeric Powder", rate: 200, pct: 2 },
            { name: "Mustard Seeds", rate: 230, pct: 3 },
            { name: "Fenugreek Powder", rate: 200, pct: 3 },
            { name: "Asafoetida (hing)", rate: 700, pct: 0.5 },
            { name: "Optional Spices (cumin etc.)", rate: 200, pct: 1},
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 }
        ],

        "Concentrate": [
            { name: "Lemon Juice ", rate: 120, pct: 100 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 200, pct: 0.1 },
            { name: "Ascorbic Acid ", rate: 800, pct: 0.1 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 }
        ],

        "Peel Oil": [
            { name: "Lemon Peels ", rate: 120, pct: 80},
            { name: "Carrier Oil ", rate: 500, pct: 20 },
            { name: "Antioxidant / Tocopherol ", rate: 1500, pct: 0.1 },
            { name: "Water", rate: 0, pct: 18 }
        ],

        "Bottled Juice": [
            { name: "Lemon Juice / Pulp", rate: 120, pct: 90 },
            { name: "Sugar", rate: 50, pct: 3 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
        ]

    },

    "Lime": {
        "Juice": [
            { name: "Lime Fruit", rate: 60, pct: 100 },
            { name: "Sugar", rate: 40, pct: 10 },
            { name: "Citric Acid", rate: 200, pct: 0.5 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 },
            { name: "Water", rate: 0, pct: 15 }
        ],

        "Squash": [
            { name: "Lime Juice", rate: 70, pct: 20 },
            { name: "Sugar", rate: 40, pct: 60 },
            { name: "Salt", rate: 20, pct: 9 },
            { name: "Citric Acid", rate: 200, pct: 2 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 },
            { name: "KMS", rate: 800, pct: 0.10 },
            { name: "Water", rate: 0, pct: 15 }
            
        ],

        "Pickle": [
            { name: "Lime", rate: 40, pct: 55 },
            { name: "Salt", rate: 20, pct: 12 },
            { name: "Adible Oil", rate: 150, pct: 12 },
            { name: "Red Chilli Powder", rate: 230, pct: 4 },
            { name: "Turmeric Powder", rate: 200, pct: 2 },
            { name: "Mustard Seeds", rate: 230, pct: 3 },
            { name: "Fenugreek Powder", rate: 200, pct: 3 },
            { name: "Asafoetida (hing)", rate: 700, pct: 0.5 },
            { name: "Optional Spices (cumin etc.)", rate: 200, pct: 1},
            { name: "Sodium Benzoate", rate: 250, pct: 0.2 }
        ],

        "Peel Oil": [
            { name: "Lime Peels ", rate: 60, pct: 100},
            { name: "Carrier Oil ", rate: 500, pct: 20 },
            { name: "Antioxidant / Tocopherol ", rate: 1500, pct: 0.1 },
            { name: "Water", rate: 0, pct: 18 }
        ],

        "Bottled Juice": [
            { name: "Lime Juice / Pulp", rate: 120, pct: 90 },
            { name: "Sugar", rate: 50, pct: 3 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
        ]

    },

    "Watermelon": {
        "Juice": [
            { name: "Watermelon", rate: 50, pct: 95 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
        ],

        "RTS": [
            { name: "Watermelon Juice", rate: 70, pct: 20 },
            { name: "Sugar", rate: 40, pct: 20 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 },
            { name: "Water", rate: 0, pct: 50 }
            
        ],

        "Cubes": [
            { name: "Fresh Watermelon", rate: 50, pct: 90 },
            { name: "Sugar", rate: 40, pct: 1 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.05 }
        ],

        "Canned Juice": [
            { name: "Watermelon Juice / Pulp", rate: 60, pct: 90},
            { name: "Sugar", rate: 40, pct: 5 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
        ]

    },

    "Muskmelon": {
        "Juice": [
            { name: "Muskmelon ", rate: 40, pct: 95 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 },
            { name: "KMS", rate: 800, pct: 0.10 },
            { name: "Water", rate: 0, pct: 2 }
        ],

        "Pulp": [
            { name: "Muskmelon", rate: 40, pct: 90 },
            { name: "Sugar", rate: 40, pct: 5 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 },
            { name: "Water", rate: 0, pct: 3 }
            
        ],

        "Candy": [
            { name: "Muskmelon (ripe)", rate: 40, pct: 50 },
            { name: "Sugar", rate: 40, pct: 40 },
            { name: "Citric Acid", rate: 200, pct: 0.1 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 },
            { name: "Water", rate: 0, pct: 5 }
        ],

        "Canned Pulp": [
            { name: "Muskmelon Pulp", rate: 60, pct: 80},
            { name: "Sugar", rate: 40, pct: 15 },
            { name: "Citric Acid", rate: 200, pct: 0.2 },
            { name: "Water", rate: 0, pct: 5 }
        ]

    },

    "Coconut": {
        "Oil": [
            { name: "Mature Coconut", rate: 80, pct: 3000 },
            { name: "Vitamin E (Tocopherol)", rate: 2000, pct: 0.1 },
            { name: "Water", rate: 0, pct: 10 }
        ],

        "Milk": [
            { name: "Fresh Coconut", rate: 80, pct: 30 },
            { name: "Stabilizer", rate: 200, pct: 0.5 },
            { name: "Sodium Benzoate", rate: 250, pct: 0.1 },
            { name: "Water", rate: 0, pct: 60 }
            
        ],

        "Powder": [
            { name: "Fresh Coconut", rate: 80, pct: 120 },
            { name: "Drying Aid", rate: 100, pct: 1 },
            { name: "Anti-caking agent ", rate: 200, pct: 0.5 },
            { name: "Potassium Sorbate", rate: 250, pct: 0.1 }
        ],

        "Chips": [
            { name: "Fresh Coconut", rate: 60, pct: 100},
            { name: "Oil for frying / roasting", rate: 150, pct: 15 },
            { name: "Salt ", rate: 20, pct: 2 },
            { name: "Potassium Sorbate", rate: 600, pct: 0.1 }
        ],

        "Canned Milk": [
            { name: "Fresh Coconut", rate: 60, pct: 30},
            { name: "Sugar", rate: 60, pct: 40 },
            { name: "Stabilizer", rate: 200, pct: 0.2 },
            { name: "KMS", rate: 800, pct: 0.06 },
            { name: "Water", rate: 0, pct: 30 }
        ]

    },

    "Custard Apple": {
        "Pulp": [
            { name: "Custard Apple", rate: 90, pct: 95 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 },
            { name: "Ascorbic Acid", rate: 700, pct: 0.1 }
        ],

        "Ice Cream": [
            { name: "Custard Apple Pulp", rate: 100, pct: 20 },   // cost from pulp
            { name: "Milk", rate: 60, pct: 65 },
            { name: "Sugar", rate: 50, pct: 15 },
            { name: "Cream", rate: 150, pct: 8 },
            { name: "Emulsifier", rate: 150, pct: 0.5 },
            { name: "Stabilizers (CMC)", rate: 2000, pct: 0.5 }
        ],

        "Milkshake": [
            { name: "Custard Apple Pulp", rate: 100, pct: 15 },   // cost from pulp
            { name: "Milk", rate: 60, pct: 85 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Ice / Stabilizer", rate: 30, pct: 2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 }
        ],

        "Frozen Pulp": [
            { name: "Custard Apple", rate: 80, pct: 100 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 },
            { name: "Ascorbic Acid", rate: 700, pct: 0.1 }
        ]
    },  

    "Sapota": {

        "Pulp": [
            { name: "Sapota", rate: 50, pct: 95 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 },
            { name: "Ascorbic Acid", rate: 700, pct: 0.1 }
         ],

        "Milkshake": [
            { name: "Sapota Pulp", rate: 70, pct: 15 },  // cost from pulp
            { name: "Milk", rate: 60, pct: 85 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Ice / Stabilizer", rate: 30, pct: 2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 }
         ],

        "Powder": [
            { name: "Sapota Pulp / Fruit", rate: 50, pct: 130 },
            { name: "Anti-caking agent", rate: 100, pct: 1 },
            { name: "KMS", rate: 250, pct: 0.1 },
            { name: "Potassium Sorbate", rate: 250, pct: 0.2 }
         ],

        "Canned Pulp": [
            { name: "Sapota Pulp", rate: 50, pct: 95 },
            { name: "Sugar", rate: 50, pct: 10 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Water", rate: 0, pct: 2 },
            { name: "Ascorbic Acid", rate: 700, pct: 0.1 }
            ]   
    },

    "Fig": {

        "Jam": [
            { name: "Fresh Fig Pulp", rate: 200, pct: 60 },
            { name: "Sugar", rate: 50, pct: 40 },
            { name: "Pectin", rate: 400, pct: 1 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 5 }
         ],

        "Dried Fig": [
            { name: "Fresh Fig", rate: 200, pct: 130 },
            { name: "Sulfur Dioxide", rate: 200, pct: 0.05 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Water", rate: 0, pct: 0 }
         ],

        "Paste": [
            { name: "Fresh Fig Pulp", rate: 200, pct: 95 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
         ],

        "Canned Fig": [
            { name: "Fresh Fig / Pulp", rate: 200, pct: 85 },
            { name: "Sugar", rate: 50, pct: 20 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Water", rate: 0, pct: 5 },
            { name: "KMS", rate: 250, pct: 0.1 }
        ]   
    },

    "Jackfruit": {
        "Bulbs": [
            { name: "Fresh Jackfruit", rate: 40, pct: 95 },
            { name: "Sugar", rate: 50, pct: 3 },
            { name: "Citric Acid", rate: 80, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 },
            { name: "Salt", rate: 20, pct: 15 }
         ],

        "Chips": [
            { name: "Raw Jackfruit", rate: 40, pct: 120 },
            { name: "Oil", rate: 150, pct: 10 },
            { name: "Salt", rate: 20, pct: 2 },
            { name: "TBHQ", rate: 500, pct: 0.02 }
         ],

        "Flour": [
            { name: "Raw Jackfruit Bulbs", rate: 30, pct:  120 },
            { name: "Citric Acid", rate: 80, pct: 0.3 },
            { name: "Ascorbic Acid", rate: 700, pct: 0.1 },
            { name: "Edible Vegetable Oil", rate: 120, pct: 0.2 },
            { name: "Potassium Sorbate", rate: 200, pct: 0.05 },
            { name: "KMS", rate: 250, pct: 0.2 }
         ],

        "Pickle": [
            { name: "Raw Jackfruit Bulbs", rate: 40, pct: 55 },
            { name: "Salt", rate: 20, pct: 14 },
            { name: "Oil", rate: 150, pct: 12 },
            { name: "Red Chilli Powder", rate: 230, pct: 4 },
            { name: "Turmeric Powder", rate: 200, pct: 2 },
            { name: "Mustard Seeds", rate: 100, pct: 3 },
            { name: "Fenugreek Powder", rate: 80, pct: 3 },
            { name: "Asafoetida", rate: 640, pct: 0.5 },
            { name: "Optional Spices (cumin)", rate: 230, pct: 1.5 },
            { name: "Sodium Benzoate / Potassium Sorbate", rate: 200, pct: 0.2 }
        ],

        "Canned Bulbs": [
            { name: "Jackfruit Bulbs", rate: 40, pct: 80 },
            { name: "Sugar", rate: 50, pct: 2 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Water", rate: 0, pct: 5 },
            { name: "KMS", rate: 250, pct: 0.10 },
            { name: "Salt", rate: 20, pct: 15 }
        ]   
    },

    "Karonda": {
        "Jelly": [
            { name: "Karonda Pulp", rate: 50, pct: 50 },
            { name: "Sugar", rate: 50, pct: 40 },
            { name: "Pectin", rate: 400, pct: 1 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 5 }
        ],

        "Squash": [
            { name: "Karonda Juice / Pulp", rate: 50, pct: 25 },
            { name: "Sugar", rate: 50, pct: 20 },
            { name: "Water", rate: 0, pct: 60 },
            { name: "Citric Acid", rate: 80, pct: 0.3 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 }
        ],

        "Pickle": [
            { name: "Karonda Fruit", rate: 50, pct: 50 },
            { name: "Salt", rate: 20, pct: 15 },
            { name: "Oil", rate: 150, pct: 15 },
            { name: "Red Chilli Powder", rate: 230, pct: 4 },
            { name: "Turmeric Powder", rate: 200, pct: 2 },
            { name: "Fenugreek / Mustard Seeds", rate: 80, pct: 3 },
            { name: "Asafoetida", rate: 640, pct: 0.5 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 }
        ],

        "Canned Fruit": [
            { name: "Karonda Fruit / Pulp", rate: 50, pct: 80 },
            { name: "Sugar", rate: 50, pct: 20 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Water", rate: 0, pct: 5 }
        ]   
        },

    "Mulberry": {
        "Jam": [
            { name: "Mulberry Pulp", rate: 300, pct: 60 },
            { name: "Sugar", rate: 50, pct: 40 },
            { name: "Pectin", rate: 400, pct: 1 },
            { name: "Citric Acid", rate: 80, pct: 0.5 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 5 }
         ],

        "Juice": [
            { name: "Mulberry Pulp / Juice", rate: 300, pct: 95 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 },
            { name: "KMS", rate: 250, pct: 0.2 }
         ],

        "Wine": [
            { name: "Mulberry Pulp / Juice", rate: 300, pct: 95 },
            { name: "Sugar", rate: 50, pct: 10 },
            { name: "Yeast", rate: 400, pct: 0.5 },
            { name: "Sulfur Dioxide", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
         ],

        "Dried": [
            { name: "Fresh Mulberry", rate: 300, pct: 120 },
            { name: "Sulfur Dioxide", rate: 200, pct: 0.05 },
            { name: "Sugar", rate: 50, pct: 5 }
         ],

        "Canned Pulp": [
            { name: "Mulberry Pulp", rate: 300, pct: 85},
            { name: "Sugar", rate: 50, pct: 20 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Water", rate: 0, pct: 5 },
            { name: "KMS", rate: 250, pct: 0.10 }
        ]   
    },

    "Star Fruit": {
        "Juice": [
            { name: "Star Fruit Pulp / Juice", rate: 80, pct: 95 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
         ],

        "Candy": [
            { name: "Star Fruit Pulp", rate: 80, pct: 50 },
            { name: "Sugar", rate: 50, pct: 55 },
            { name: "Glucose", rate: 80, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "KMS", rate: 250, pct: 0.2 }
         ],

        "Pickle": [
            { name: "Star Fruit", rate: 80, pct: 55 },
            { name: "Salt", rate: 20, pct: 9 },
            { name: "Oil", rate: 150, pct: 15 },
            { name: "Red Chilli Powder", rate: 230, pct: 4 },
            { name: "Turmeric Powder", rate: 200, pct: 2 },
            { name: "Fenugreek", rate: 80, pct: 3 },
            { name: "Asafoetida", rate: 640, pct: 0.5 },
            { name: "Optional Spices", rate: 80, pct: 2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 }
         ],

        "Canned Slices": [
            { name: "Star Fruit Slices", rate: 80, pct: 85 },
            { name: "Sugar", rate: 50, pct: 20 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Water", rate: 0, pct: 5 },
            { name: "KMS", rate: 250, pct: 0.15 }
        ]   
},

    "Cashew Apple": {
        "Juice": [
            { name: "Raw Cashew Apple", rate: 40, pct: 95 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
         ],

        "Wine": [
            { name: "Cashew Apple Juice / Pulp", rate: 40, pct: 95 },
            { name: "Sugar", rate: 50, pct: 10 },
            { name: "Wine Yeast", rate: 400, pct: 0.5 },
            { name: "Sulfur Dioxide", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
         ],

        "Vinegar": [
            { name: "Cashew Apple Juice / Pulp", rate: 40, pct: 95 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Vinegar Mother", rate: 400, pct: 1 },
            { name: "Water", rate: 0, pct: 2 }
         ],

        "Bottled Juice": [
            { name: "Cashew Apple Juice", rate: 40, pct: 95 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
            ]   
    },

    "Ber": {
        "Candy": [
            { name: "Raw Ber Fruit", rate: 80, pct: 50 },
            { name: "Sugar", rate: 50, pct: 55 },
            { name: "Glucose", rate: 80, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "KMS", rate: 250, pct: 0.2 }
         ],

        "Pickle": [
            { name: "Raw Ber Fruit", rate: 80, pct: 55 },
            { name: "Salt", rate: 20, pct: 9 },
            { name: "Oil", rate: 150, pct: 15 },
            { name: "Red Chilli Powder", rate: 230, pct: 4 },
            { name: "Turmeric Powder", rate: 200, pct: 2 },
            { name: "Fenugreek", rate: 80, pct: 3 },
            { name: "Asafoetida", rate: 640, pct: 0.5 },
            { name: "Optional Spices (cumin, coriander)", rate: 80, pct: 2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 }
         ],

        "Dried": [
            { name: "Fresh Ber Fruit", rate: 80, pct: 120 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Sulfur Dioxide", rate: 200, pct: 0.05 }
         ],

        "Canned Fruit": [
            { name: "Ber Fruit / Pulp", rate: 80, pct: 80 },
            { name: "Sugar", rate: 50, pct: 20 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Water", rate: 0, pct: 5 },
            { name: "KMS", rate: 250, pct: 0.15 }
        ] 
    },

    "Tamarind": {
        "Paste": [
            { name: "Tamarind Pulp", rate: 120, pct: 95 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
         ],

        "Concentrate": [
            { name: "Tamarind Pulp", rate: 120, pct: 98 },
            { name: "Sugar", rate: 50, pct: 3 },
            { name: "Citric Acid", rate: 80, pct: 0.1 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.05 },
            { name: "Water", rate: 0, pct: 1 }
         ],

        "Candy": [
            { name: "Tamarind Pulp", rate: 120, pct: 50 },
            { name: "Sugar", rate: 50, pct: 55 },
            { name: "Glucose", rate: 80, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "KMS", rate: 250, pct: 0.5 }
         ],

        "Canned Pulp": [
            { name: "Tamarind Pulp", rate: 120, pct: 85 },
            { name: "Sugar", rate: 50, pct: 20 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Water", rate: 0, pct: 5 },
            { name: "KMS", rate: 250, pct: 0.8 }
        ]   
    },

    "Amla": {
        "Candy": [
            { name: "Amla Pulp / Pulped Fruit", rate: 150, pct: 50 },
            { name: "Sugar", rate: 50, pct: 55 },
            { name: "Glucose", rate: 80, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "KMS", rate: 250, pct: 0.10 }
         ],

        "Juice": [
            { name: "Amla Pulp / Juice", rate: 150, pct: 95 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
         ],

        "Powder": [
            { name: "Fresh Amla", rate: 150, pct: 120 },
            { name: "Anti-Caking Agent", rate: 400, pct: 1 },
            { name: "Vitamin E", rate: 2000, pct: 0.1 },
            { name: "Sulfur Dioxide", rate: 200, pct: 0.05 }
         ],

        "Pickle": [
            { name: "Raw Amla", rate: 150, pct: 50 },
            { name: "Salt", rate: 20, pct: 15 },
            { name: "Oil ", rate: 150, pct: 15 },
            { name: "Red Chilli Powder", rate: 230, pct: 4 },
            { name: "Turmeric Powder", rate: 200, pct: 2 },
            { name: "Fenugreek", rate: 80, pct: 3 },
            { name: "Asafoetida", rate: 640, pct: 0.5 },
            { name: "Optional Spices", rate: 80, pct: 2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 }
         ],

        "Canned Pulp": [
            { name: "Amla Pulp", rate: 150, pct: 85 },
            { name: "Sugar / Syrup", rate: 50, pct: 20 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Water", rate: 0, pct: 5 },
            { name: "KMS", rate: 250, pct: 0.10 }
        ]   
    },

    "Plum": {
        "Jam": [
            { name: "Plum Pulp", rate: 120, pct: 60 },
            { name: "Sugar", rate: 50, pct: 40 },
            { name: "Pectin", rate: 400, pct: 1 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 5 }
         ],

        "Juice": [
            { name: "Plum Pulp", rate: 120, pct: 95 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.3 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
         ],

        "Canned Fruit": [
            { name: "Plum Fruit / Pulp", rate: 120, pct: 85 },
            { name: "Sugar / Syrup", rate: 50, pct: 20 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Water", rate: 0, pct: 5 },
            { name: "KMS", rate: 250, pct: 0.10 }
         ],

        "Dried": [
            { name: "Fresh Plum", rate: 120, pct: 120 },
            { name: "Sulfur Dioxide", rate: 200, pct: 0.05 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Potassium Sorbate", rate: 600, pct: 0.1 },
            { name: "Salt", rate: 20, pct: 0.2 }
            ]   
    },

    "Raspberry": {
        "Jam": [
            { name: "Raspberry Pulp", rate: 400, pct: 60 },
            { name: "Sugar", rate: 50, pct: 40 },
            { name: "Pectin", rate: 400, pct: 1 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 5 }
         ],

        "Puree": [
            { name: "Raspberry Pulp", rate: 400, pct: 98 },
            { name: "Sugar", rate: 50, pct: 3 },
            { name: "Citric Acid", rate: 80, pct: 0.1 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.05 },
            { name: "Water", rate: 0, pct: 1 }
         ],

        "Frozen": [
            { name: "Fresh Raspberry", rate: 400, pct: 100 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Water", rate: 0, pct: 0 },
            { name: "Sulfur Dioxide", rate: 200, pct: 0.05 }
         ],

        "Canned": [
            { name: "Raspberry Pulp / Fruit", rate: 400, pct: 85 },
            { name: "Sugar", rate: 50, pct: 20 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Water", rate: 0, pct: 5 },
            { name: "KMS", rate: 250, pct: 0.10 }
            ]   
},

    "Litchi": {
        "Juice": [
            { name: "Litchi Pulp", rate: 200, pct: 95 },
            { name: "Sugar (optional)", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct:0.1 },
            { name: "Water", rate: 0, pct: 2 }
         ],

        "Squash": [
            { name: "Litchi Pulp / Juice", rate: 200, pct: 15 },
            { name: "Sugar", rate: 50, pct: 70 },
            { name: "Water", rate: 0, pct: 25 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 }
         ],

        "Dried": [
            { name: "Fresh Litchi", rate: 120, pct: 400 },
            { name: "Sugar", rate: 40, pct: 3 },
            { name: "Citric Acid", rate: 70, pct: 0.2 },
            { name: "KMS", rate: 250, pct: 0.1 },
            { name: "Potassium Sorbate", rate: 600, pct: 0.1 }
         ],

        "Canned": [
            { name: "Litchi Fruit / Pulp", rate: 200, pct: 85 },
            { name: "Sugar", rate: 50, pct: 20 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Water", rate: 0, pct: 5 },
            { name: "KMS", rate: 250, pct: 0.10 }
            ]   
},

    "Dragon Fruit": {
        "Juice": [
            { name: "Dragon Fruit Pulp", rate: 250, pct: 95 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.3 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
         ],

        "Wine": [
            { name: "Dragon Fruit Pulp / Juice", rate: 250, pct: 95 },
            { name: "Sugar", rate: 50, pct: 10 },
            { name: "Wine Yeast", rate: 400, pct: 0.5 },
            { name: "Sulfur Dioxide", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
         ],

        "Candy": [
            { name: "Dragon Fruit Pulp", rate: 250, pct: 50 },
            { name: "Sugar", rate: 50, pct: 55 },
            { name: "Glucose", rate: 80, pct: 5},
            { name: "Citric Acid", rate: 80, pct: 0.2},
            { name: "KMS", rate: 250, pct: 0.15 }
         ],

        "Canned Pulp": [
            { name: "Dragon Fruit Pulp", rate: 250, pct: 85 },
            { name: "Sugar", rate: 50, pct: 20 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Water", rate: 0, pct: 5 },
            { name: "KMS", rate: 250, pct: 0.15 }
            ]   
},

    "Blackberry": {
        "Jam": [
            { name: "Blackberry Pulp", rate: 400, pct: 60 },
            { name: "Sugar", rate: 50, pct: 40 },
            { name: "Pectin", rate: 400, pct: 1 },
            { name: "Citric Acid", rate: 80, pct: 0.2},
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 5 }
         ],

        "Juice": [
            { name: "Blackberry Pulp", rate: 400, pct: 95 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct:2 }
         ],

        "Frozen": [
            { name: "Fresh Blackberry", rate: 400, pct: 100 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Sulfur Dioxide", rate: 200, pct: 0.05 }
         ],

        "Canned": [
            { name: "Blackberry Pulp / Fruit", rate: 400, pct: 85 },
            { name: "Sugar", rate: 50, pct: 20 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Water", rate: 0, pct: 5 },
            { name: "KMS", rate: 250, pct: 0.10 }
            ]   
},

    "Cherry": {
        "Juice": [
            { name: "Cherry Pulp", rate: 350, pct: 95 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 2 }
         ],

        "Jam": [
            { name: "Cherry Pulp", rate: 350, pct: 60 },
            { name: "Sugar", rate: 50, pct: 40 },
            { name: "Pectin", rate: 400, pct: 1 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Sodium Benzoate", rate: 200, pct: 0.1 },
            { name: "Water", rate: 0, pct: 5 }
         ],

        "Canned Fruit": [
            { name: "Cherry Fruit / Pulp", rate: 350, pct: 85 },
            { name: "Sugar", rate: 50, pct: 20 },
            { name: "Citric Acid", rate: 80, pct: 0.2 },
            { name: "Water", rate: 0, pct: 5 },
            { name: "KMS", rate: 250, pct: 0.10 }
         ],

        "Dried": [
            { name: "Fresh Cherry", rate: 350, pct: 130 },
            { name: "Sugar", rate: 50, pct: 5 },
            { name: "Sulfur Dioxide", rate: 200, pct: 0.05 },
            { name: "Potassium Sorbate", rate: 240, pct: 0.10 }
        ]
         
    }
};


/* ---------------- DOM ---------------- */

const typeProduct = document.getElementById("typeProduct");
const nameProduct = document.getElementById("nameProduct");
const whichProduct = document.getElementById("whichProduct");
const showRawBtn = document.getElementById("showRawBtn");
const otherRawBox = document.getElementById("otherRawBox");
const summaryBox = document.getElementById("summaryBox");

let rawMaterials = [];
    

/* ---------------- TYPE SELECT ---------------- */

typeProduct.addEventListener("change", () => {

    nameProduct.innerHTML = `<option value="">-- Select Name --</option>`;
    whichProduct.innerHTML = `<option value="">-- Select Option --</option>`;

    otherRawBox.style.display = "none";
    summaryBox.style.display = "none";
    showRawBtn.disabled = true;

    if (typeProduct.value === "Fruits") {
        Object.keys(productData).forEach(product => {
            nameProduct.innerHTML += `<option value="${product}">${product}</option>`;
        });
    }
});

/* ---------------- NAME SELECT ---------------- */

nameProduct.addEventListener("change", () => {

    whichProduct.innerHTML = `<option value="">-- Select Option --</option>`;

    otherRawBox.style.display = "none";
    summaryBox.style.display = "none";
    showRawBtn.disabled = true;

    const selected = nameProduct.value;

    if (productData[selected]) {
        productData[selected].forEach(item => {
            whichProduct.innerHTML += `<option value="${item}">${item}</option>`;
        });
    }
});

/* ---------------- WHICH PRODUCT ---------------- */

whichProduct.addEventListener("change", () => {

    const fruit = nameProduct.value;
    const product = whichProduct.value;

    if(rawMaterialMaster[fruit] && rawMaterialMaster[fruit][product]){
        rawMaterials = rawMaterialMaster[fruit][product];
        showRawBtn.disabled = false;
    }else{
        rawMaterials = [];
        showRawBtn.disabled = true;
    }
});

/* ---------------- BUTTON ---------------- */

showRawBtn.addEventListener("click", () => {
    loadAdditives();
    otherRawBox.style.display = "block";
    summaryBox.style.display = "block";
    otherRawBox.scrollIntoView({behavior:"smooth"});
});

/* ---------------- OIL CALCULATION ---------------- */

const tpd = document.getElementById("tpd");
const oilRate = document.getElementById("oilRate");

tpd.addEventListener("input", calculateOil);
oilRate.addEventListener("input", calculateOil);

function calculateOil() {

    const tpdVal = Number(tpd.value) || 0;
    const rate = Number(oilRate.value) || 0;

    const oilRequired = (tpdVal / 20) * 1000;
    const oilReplaced = oilRequired * 0.05;
    const totalOil = oilRequired + oilReplaced;
    const oilCrores = (totalOil * rate) / 10000000;

    document.getElementById("oilRequired").value = oilRequired.toFixed(3);
    document.getElementById("oilReplaced").value = oilReplaced.toFixed(3);
    document.getElementById("totalOil").value = totalOil.toFixed(3);
    document.getElementById("oilCrores").value = oilCrores.toFixed(6);
}

/* ---------------- ADDITIVES TABLE ---------------- */

function loadAdditives() {

    const tbody = document.getElementById("additiveBody");
    tbody.innerHTML = "";

    rawMaterials.forEach((item,i)=>{
        tbody.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td><input type="number" id="rate${i}" value="${item.rate}" oninput="calcAdditives()"></td>
            <td><input type="number" id="pct${i}" value="${item.pct}" oninput="calcAdditives()"></td>
            <td><input id="qty${i}" class="readonly" readonly></td>
            <td><input id="tp${i}" class="readonly" readonly></td>
            <td><input id="ckg${i}" class="readonly" readonly></td>
            <td><input id="cton${i}" class="readonly" readonly></td>
            <td><input id="cday${i}" class="readonly" readonly></td>
        </tr>
        `;
    });

    calcAdditives();
}

/* ---------------- ADDITIVE CALCULATION ---------------- */

function calcAdditives() {

    let totalRate=0;
    let totalCroresDay=0;

    rawMaterials.forEach((_,i)=>{

        const rate = Number(document.getElementById("rate"+i).value)||0;
        const pct = Number(document.getElementById("pct"+i).value)||0;

        const qty = 1000*(pct/100);
        const tp = qty*rate/100;
        const ckg = tp/10000000;
        const cton = ckg*1000;
        const cday = cton*50;

        document.getElementById("qty"+i).value = qty.toFixed(2);
        document.getElementById("tp"+i).value = tp.toFixed(4);
        document.getElementById("ckg"+i).value = ckg.toFixed(8);
        document.getElementById("cton"+i).value = cton.toFixed(8);
        document.getElementById("cday"+i).value = cday.toFixed(8);

        totalRate+=rate;
        totalCroresDay+=cday;
    });

    const avgRate = totalRate/rawMaterials.length || 0;
    const finalAvg = totalCroresDay/10;

    document.getElementById("avgRsPerDay").value = avgRate.toFixed(4);
    document.getElementById("totalCroresPerDay").value = totalCroresDay.toFixed(4);
    document.getElementById("finalAvg2").value = finalAvg.toFixed(4);
}

// -----------------------------
// SAVE TO MONGODB
// -----------------------------
const saveBtn = document.getElementById("saveBtn");
const historyBtn = document.getElementById("historyBtn");
const saveMsg = document.getElementById("saveMsg");

function getCurrentPayload() {
  // oil values
  const tpdVal = Number(document.getElementById("tpd")?.value) || 0;
  const oilRateVal = Number(document.getElementById("oilRate")?.value) || 0;

  const oilRequired = Number(document.getElementById("oilRequired")?.value) || 0;
  const oilReplaced = Number(document.getElementById("oilReplaced")?.value) || 0;
  const totalOil = Number(document.getElementById("totalOil")?.value) || 0;
  const oilCrores = Number(document.getElementById("oilCrores")?.value) || 0;

  // additives table values
  const additives = rawMaterials.map((rm, i) => {
    const rate = Number(document.getElementById("rate" + i)?.value) || 0;
    const pct = Number(document.getElementById("pct" + i)?.value) || 0;

    const qty = Number(document.getElementById("qty" + i)?.value) || 0;
    const rsPerKg = Number(document.getElementById("tp" + i)?.value) || 0;
    const crPerKg = Number(document.getElementById("ckg" + i)?.value) || 0;
    const crPerTon = Number(document.getElementById("cton" + i)?.value) || 0;
    const crPerDay = Number(document.getElementById("cday" + i)?.value) || 0;

    return {
      name: rm.name,
      rate,
      pct,
      qty,
      rsPerKg,
      crPerKg,
      crPerTon,
      crPerDay
    };
  });

  const avgRsPerDay = Number(document.getElementById("avgRsPerDay")?.value) || 0;
  const totalCroresPerDay = Number(document.getElementById("totalCroresPerDay")?.value) || 0;
  const finalAvg2 = Number(document.getElementById("finalAvg2")?.value) || 0;

  return {
    typeProduct: typeProduct.value,
    nameProduct: nameProduct.value,
    whichProduct: whichProduct.value,

    tpd: tpdVal,
    oilRate: oilRateVal,
    oilRequired,
    oilReplaced,
    totalOil,
    oilCrores,

    additives,

    avgRsPerDay,
    totalCroresPerDay,
    finalAvg2
  };
}

async function saveToMongo() {
  try {
    if (!typeProduct.value || !nameProduct.value || !whichProduct.value) {
      saveMsg.innerHTML = `<div class="alert alert-warning">Select product first.</div>`;
      return;
    }

    // Make sure latest calcs are applied
    calculateOil();
    calcAdditives();

    const payload = getCurrentPayload();

    const res = await fetch("/api/raw-material/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (!data.ok) throw new Error(data.message || "Save failed");

    saveMsg.innerHTML = `<div class="alert alert-success">✅ Saved! ID: ${data.id}</div>`;
  } catch (err) {
    saveMsg.innerHTML = `<div class="alert alert-danger">❌ ${err.message}</div>`;
  }
}

async function showHistory() {
  const res = await fetch("/api/raw-material/history");
  const data = await res.json();
  console.log("HISTORY:", data);
  saveMsg.innerHTML = `<div class="alert alert-info">History printed in console (F12)</div>`;
}
if (saveBtn) saveBtn.addEventListener("click", saveToMongo);
if (historyBtn) historyBtn.addEventListener("click", showHistory);
});