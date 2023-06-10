const Sequelize = require("sequelize");
const db = require("../../../index");
const { INTEGER, STRING, TEXT } = Sequelize;

const Head = db.define("head", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: STRING },
  description: {
    type: TEXT,
  },
  anteriorView: { type: STRING },
  posteriorView: { type: STRING },
});

module.exports = Head;
