const db = require("./index");
const Anatomy = require("./models/Anatomy");
const Physiology = require("./models/Physiology");
const Species = require("./models/Species");
const Head = require("./models/Anatomy/Structure/Head");
const Thorax = require("./models/Anatomy/Structure/Thorax");
const CentralNervousSystem = require("./models/Anatomy/System/CentralNervousSystem");
const cranium = require("../database/HumanData/cranium");
const thorax = require("../database/HumanData/thorax");
const body = require("../database/HumanData/body");
const cns = require("../database/HumanData/cns");

Species.hasMany(Anatomy);
Species.hasMany(Physiology);
Head.belongsTo(Species);
Thorax.belongsTo(Species);
CentralNervousSystem.belongsTo(Species);

const setupDb = async () => {
  await db.sync({ force: true });

  const [humanSpecies] = await Promise.all([Species.create({ name: "human" })]);
  const [humanAnatomy] = await Promise.all([
    Anatomy.create({ name: humanSpecies.name, specieId: humanSpecies.id }),
  ]);
  const [humanPhysiology] = await Promise.all([
    Physiology.create({
      name: humanSpecies.name,
      specieId: humanSpecies.id,
    }),
  ]);
  const [humanCNS] = await Promise.all([
    CentralNervousSystem.create({ name: cns.name }),
  ]);
  const [humanCranium] = await Promise.all([
    Head.create({
      name: cranium.name,
      description: cranium.description,
      specieId: humanSpecies.id,
      defaultView: cranium.defaultView,
      anteriorView: cranium.anteriorView,
      posteriorView: cranium.posteriorView,
      lateralView: cranium.lateralView,
      inferiorView: cranium.inferiorView,
      superiorView: cranium.superiorView,
    }),
  ]);
  const [humanThorax] = await Promise.all([
    Thorax.create({
      name: thorax.name,
      description: thorax.description,
      specieId: humanSpecies.id,
      defaultView: thorax.defaultView,
      anteriorView: thorax.anteriorView,
      posteriorView: thorax.posteriorView,
      lateralView: thorax.lateralView,
    }),
  ]);
};

module.exports = setupDb;
