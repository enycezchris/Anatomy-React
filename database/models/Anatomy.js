const Sequelize = require("sequelize");
const db = require("../index");
const { INTEGER, STRING } = Sequelize;

const Anatomy = db.define("anatomy", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Anatomy;
