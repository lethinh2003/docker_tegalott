const { MIN_RANGE_NUMBER, MAX_RANGE_NUMBER } = require("../../configs/game.keno");
const getRandomArbitrary = require("../randomRangeNumber");

const randomBiTheoLoai = ({ loai = "C" }) => {
  let ketQua = getRandomArbitrary(MIN_RANGE_NUMBER, MAX_RANGE_NUMBER);
  if (loai === "C") {
    if (ketQua % 2 === 0) {
      return ketQua;
    } else {
      return randomBiTheoLoai({ loai });
    }
  } else if (loai === "L") {
    if (ketQua % 2 !== 0) {
      return ketQua;
    } else {
      return randomBiTheoLoai({ loai });
    }
  } else if (loai === "T") {
    return getRandomArbitrary(5, 9);
  } else if (loai === "X") {
    return getRandomArbitrary(0, 4);
  } else {
    return ketQua;
  }
};

/**
 *
 * @param {Array<Number>} ketQua Kết quả xổ số: [0,0,0,0,0]
 * @return {{
    1: {
      C: false,
      L: false,
    },
    2: { C: false, L: false },
    3: { C: false, L: false },
    4: { C: false, L: false },
    5: { C: false, L: false },
  }} Bảng tra kết quả
 */
const getKetQua = (ketQua) => {
  const results = {
    1: {
      C: false,
      L: false,
      T: false,
      X: false,
    },
    2: { C: false, L: false, T: false, X: false },
    3: { C: false, L: false, T: false, X: false },
    4: { C: false, L: false, T: false, X: false },
    5: { C: false, L: false, T: false, X: false },
  };
  for (let i = 0; i < ketQua.length; i++) {
    if (ketQua[i] % 2 === 0) {
      results[`${i + 1}`]["C"] = true;
      results[`${i + 1}`]["L"] = false;
    } else {
      results[`${i + 1}`]["C"] = false;
      results[`${i + 1}`]["L"] = true;
    }
    if (ketQua[i] >= 5) {
      results[`${i + 1}`]["T"] = true;
      results[`${i + 1}`]["X"] = false;
    } else {
      results[`${i + 1}`]["T"] = false;
      results[`${i + 1}`]["X"] = true;
    }
  }
  return results;
};

module.exports = {
  getKetQua,
  randomBiTheoLoai,
};
