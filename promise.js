const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
let bioskopMarah = 0;
let bioskopTidakMarah = 0;
const promiseOutput = emosi => {
  if (emosi === "marah") {
    return promiseTheaterIXX().then ((value) =>{
      value.forEach((array) => {
        if (array.hasil === "Marah") {
          bioskopMarah++;
        }else {
          bioskopTidakMarah++;
        }
      });
      return bioskopMarah
    });
  }
  else {
    return promiseTheaterVGC().then ((value) =>{
      value.forEach((array) => {
        if (array.hasil === "Tidak Marah") {
          bioskopTidakMarah++;
        }else {
          bioskopMarah++;
        }
      });
      return bioskopTidakMarah
    });
  }
}
module.exports = {
  promiseOutput,
};
