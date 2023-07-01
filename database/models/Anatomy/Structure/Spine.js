const Sequelize = require("sequelize");
const db = require("../../../index");
const { INTEGER, STRING, TEXT } = Sequelize;

const Spine = db.define("spine", {
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
  cervical: { type: STRING },
  thoracic: { type: STRING },
  lumbar: { type: STRING },
  sacral: { type: STRING },
  coccyx: { type: STRING },
});

module.exports = Spine;
