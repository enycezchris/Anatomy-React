const Sequelize = require("sequelize");
const db = require("../index");
const { INTEGER, STRING } = Sequelize;

const Physiology = db.define("physiology", {
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

module.exports = Physiology;
