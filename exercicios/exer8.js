const range = require("../utils/ranger");

function exer8(body) {
  const { numb } = body;
  var ret = {};
  for (const numbs of range(1, 11)) {
    ret[`${numb} * ${numbs}`] = numb * numbs;
  }

  return { code: 200, ret };
}
module.exports = { exer8 };
