const tf = require("@tensorflow/tfjs-node");
const InputError = require("../exceptions/InputError");

async function predictClassification(model, image) {
  const tensor = tf.node
    .decodeJpeg(image)
    .resizeNearestNeighbor([224, 224])
    .expandDims()
    .toFloat();

  const predictions = model.predict(tensor);
  const score = await predictions.data();
  const confidenceScore = Math.max(...score) * 100;

  const classes = [
    "Cancer",
    "Non-cancer",
    "With Image Size More Than 1000000 byte",
    "With Bad Request",
  ];

  const classResult = confidenceScore > 50 ? 0 : 1;
  const label = classes[classResult];

  let suggestion;

  if (label === "Cancer") {
    suggestion = "Segera periksa ke dokter!";
  }
  if (label === "Non-cancer") {
    suggestion = "Penyakit kanker tidak terdeteksi.";
  }

  return { confidenceScore, label, suggestion };
}

module.exports = predictClassification;
