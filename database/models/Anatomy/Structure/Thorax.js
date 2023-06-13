const Sequelize = require("sequelize");
const db = require("../../../index");
const { INTEGER, TEXT, STRING } = Sequelize;

const Thorax = db.define("body", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: STRING },
  description: { type: TEXT },
  defaultView: { type: STRING },
  anteriorView: { type: STRING },
  posteriorView: { type: STRING },
  lateralView: { type: STRING },
});

module.exports = Thorax;
