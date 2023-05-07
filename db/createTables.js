const models = [
  require("./models/Books"),
  require("./models/Users"),
  require("./models/Borrowings"),
];

async function createTables() {
  for (let i = 0; i < models.length; i++) {
    const model = models[i];
    await model.sync();
  }
}

createTables();
