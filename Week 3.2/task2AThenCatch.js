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

const day = "Sabtu"; // input hari kerja disini
const dayToLowerCase = day.toLowerCase();
cekHariKerja(dayToLowerCase)
  .then((dayToLowerCase) =>
    console.log(`hari ${dayToLowerCase} adalah hari kerja`)
  )
  .catch((Error) => console.log(Error)); //muncul error seperi coding error

// a. then catch (promise)
// Pertama saya mendeklarasikan sebuah variable const day dengan berisi data hari yang akan dicek dalam bentuk string,
// kemudian saya mengecek hari kerja dengan memanggil function cekHariKerja dengan argument berisi day, dimana function
// ini mengecek data yang ada di dalam array dataDay, mengconsole dari function tersebut akan memberikan data
// berupa day/hari yang terdapat dalam array. Jika (.then) hari yang dicek ada dalam array maka akan menghasilkan
// log hari tersebut dengan keterangan adalah hari kerja. Jika data hari yang diinput tidak ada dalam array maka
// akan menghasilkan Error dan respone error dari pengkondisian else di function cekHariKerja yaitu "Hari ini bukan
// hari kerja".
