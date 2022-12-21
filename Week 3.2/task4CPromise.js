let cekGrade = (nilai, timeout) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nilai < 0) {
        reject({
          status: false,
          nilai: null,
          grade: null,
          message: "nilai tidak boleh kurang dari 0",
        });
      }

      let grade = "";

      if (nilai < 60) {
        grade = "e";
      } else if (nilai < 70) {
        grade = "d";
      } else if (nilai < 80) {
        grade = "c";
      } else if (nilai < 90) {
        grade = "b";
      } else {
        grade = "a";
      }

      resolve({
        status: true,
        nilai: nilai,
        grade: grade,
        message: null,
      });
    }, timeout);
  });

let cekLulus = (grade, timeout) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // grade D dan E tidak lulus
      // untuk lulus perlu grade minimal C

      if (["d", "e"].indexOf(grade) > -1) {
        //tidak lulus
        reject({
          status: false,
          grade: grade,
          message: "diperlukan grade nilai minimal c untuk lulus",
        });
      } else {
        // lulus
        resolve({
          status: true,
          grade: grade,
          message: "selamat anda lulus",
        });
      }
    }, timeout);
  });

const nilai = 90;

// 1. method then dan catch ===> bawaan dari promise
// cekGrade(nilai, 1000)
//   .then((resNilai) => {
//     console.log("result nilai :", resNilai);
//     return cekLulus(resNilai.grade);
//   })
//   .then((err) => {
//     console.log(err);
//   });

// 2. async await
// async: keyword yang menandakan sebuah function bersifat async
// await: keyword yang hanya dapat berjalan di dalam function async. await akan menunggu program
let proses = async () => {
  try {
    const resGrade = await cekGrade(nilai, 1000); // disini input parameter waktu tunggunya
    console.log(resGrade);

    const resLulus = await cekLulus(resGrade.grade, 1000);
    console.log(resLulus);
  } catch (error) {
    console.log("error", error);
  } finally {
    console.log("proses selesai");
  }
};

proses();
