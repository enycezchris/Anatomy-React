const Sequelize = require("sequelize");
const db = require("../../../index");
const { INTEGER, TEXT, STRING } = Sequelize;

const Body = db.define("body", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: STRING },
  description: { type: TEXT },
});

module.exports = Body;
