const db = require("./index");
const Anatomy = require("./models/Anatomy");
const Physiology = require("./models/Physiology");
const Species = require("./models/Species");
const Head = require("./models/Anatomy/Structure/Head");
const Thorax = require("./models/Anatomy/Structure/Thorax");
const Pelvis = require("./models/Anatomy/Structure/Pelvis");
const cranium = require("../database/HumanData/cranium");
const thorax = require("../database/HumanData/thorax");
const pelvis = require("../database/HumanData/pelvis");
const Spine = require("../database/models/Anatomy/Structure/Spine");
const spine = require("../database/HumanData/spine");

Species.hasMany(Anatomy);
Species.hasMany(Physiology);
Head.belongsTo(Species);
Thorax.belongsTo(Species);
Pelvis.belongsTo(Species);
Spine.belongsTo(Species);

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
  const [humanPelvis] = await Promise.all([
    Pelvis.create({
      name: pelvis.name,
      description: pelvis.description,
      malePelvis: pelvis.malePelvis,
      maleDescription: pelvis.maleDescription,
      femalePelvis: pelvis.femalePelvis,
      femaleDescription: pelvis.femaleDescription,
      defaultView: pelvis.defaultView,
      anteriorView: pelvis.anteriorView,
      posteriorView: pelvis.posteriorView,
      specieId: humanSpecies.id,
      maleAnteriorView: pelvis.maleAnteriorView,
      malePosteriorView: pelvis.malePosteriorView,
      femaleAnteriorView: pelvis.femaleAnteriorView,
      femalePosteriorView: pelvis.femalePosteriorView,
      comparison: pelvis.comparison,
    }),
  ]);
  const [humanSpine] = await Promise.all([
    Spine.create({
      name: spine.name,
      specieId: humanSpecies.id,
      description: spine.description,
      defaultView: spine.defaultView,
      anteriorView: spine.anteriorView,
      posteriorView: spine.posterior,
      cervical: spine.cervical,
      thoracic: spine.thoracic,
      lumbar: spine.lumbar,
      sacral: spine.sacral,
      coccyx: spine.coccyx,
    }),
  ]);
};

module.exports = setupDb;
