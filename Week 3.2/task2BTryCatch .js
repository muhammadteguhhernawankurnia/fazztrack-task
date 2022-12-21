const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("hari ini bukan hari kerja"));
      }
    }, 3000); //waktu tunggunya 3 detik
  });
};

async function prosesCekHariKerja() {
  try {
    const day = "Sabtu"; // input hari kerja disini
    const dayToLowerCase = day.toLocaleLowerCase();
    const cekDay = await cekHariKerja(dayToLowerCase);
    console.log(`hari ${cekDay} adalah hari kerja`);
  } catch (error) {
    console.log(error); //muncul error seperi coding error
    //bentuknya object dengan key name dan message
  } finally {
    console.log("program cek hari kerja telah selesai");
  }
}
prosesCekHariKerja();

// b. try catch (async-await)
// Pertama saya membuat function dengan tambahan keyword async untuk menjelaskan function tersebut adalah program
// asynchronous, kemudian saya membuat try catch dengan variabel day yang diinput hari yang akan dicek, selanjutnya
// memanggil variabel const cekDay dengan argument day yang akan dicek dan ditambahkan di depannya keyword await
// dengan tujuan untuk menunda eksekusi hingga proses asynchronous selesai. Setelah proses asynchronous selesai
// akan memunculkan log day yang dicek. Jika day terdapat dalam array dataDay maka akan ditangkap oleh try dan
// memunculkan log "hari tersebut adalah hari kerja". Jika day yang dicek tidak terdapat dalam array dataDay maka
// akan ditangkap oleh catch dan memunculkan error dengan log yang ada di percabangan fungsi cekHariKerja yaitu
// "hari ini bukan hari kerja". Terakhir saya membuat finally sebagai tanda akhir dari function prosesCekHariKerja.
