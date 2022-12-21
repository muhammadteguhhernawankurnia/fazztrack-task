// lulus tni

let lulusTNI = (tinggiBadan, timeout) => {
  return new Promise((resolve, reject) => {
    if (tinggiBadan < 170) {
      reject(
        console.log(`tinggi badan ${tinggiBadan} cm, tidak memenuhi kriteria`)
      );
    } else {
      resolve(
        console.log(
          `tinggi anda ${tinggiBadan} cm, selamat anda masuk ke tahap selanjutnya`
        )
      );
    }
  }, timeout);
};

// const tinggiBadan = 170; // input disini
// const timeout = 5000; // input disini
// lulusTNI(tinggiBadan, timeout)
//   .then((result) => result)
//   .catch((error) => console.log(error));

async function cekTinggi() {
  try {
    let tinggiBadan = 160; // input disini
    let timeout = 5000; // input disini
    const cekTinggiBadan = await lulusTNI(tinggiBadan, timeout);
    // console.log("tidak lulus");
  } catch (error) {
    // console.log(error);
  }
}

cekTinggi();

// return function
// let x = await (async function() {return "hello"})();
// console.log(x);
