const getMonth = (callback) => {
  setTimeout(() => {
    let error = false; // rubah true atau false disini untuk mengecek kondisi
    let month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

const showMonth = (error, checkMonth) => {
  if (error == null) {
    checkMonth.map((elemen) => {
      console.log(elemen);
    });
  } else {
    console.log(error, checkMonth);
  }
};

getMonth(showMonth);
