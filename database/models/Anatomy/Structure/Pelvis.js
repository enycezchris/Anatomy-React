const Sequelize = require("sequelize");
const db = require("../../../index");
const { STRING, INTEGER, TEXT, JSON } = Sequelize;

const Pelvis = db.define("pelvis", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: STRING,
  },
  description: {
    type: TEXT,
  },
  defaultView: {
    type: STRING,
  },
  maleAnteriorView: {
    type: STRING,
  },
  malePosteriorView: {
    type: STRING,
  },
  malePelvis: {
    type: STRING,
  },
  maleDescription: {
    type: TEXT,
  },
  femalePelvis: {
    type: STRING,
  },
  femaleDescription: {
    type: TEXT,
  },
  femaleAnteriorView: {
    type: STRING,
  },
  femalePosteriorView: {
    type: STRING,
  },
  comparison: {
    type: JSON,
  },
});

module.exports = Pelvis;
