const Sequelize = require("sequelize");
const db = require("../../../index");
const { INTEGER, STRING } = Sequelize;

const CentralNervousSystem = db.define("central_nervous_system", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: STRING,
  },
  functions: {
    type: STRING,
  },
});

module.exports = CentralNervousSystem;
