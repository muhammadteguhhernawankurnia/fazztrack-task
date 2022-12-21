const luasPersegi = (sisi) =>
  new Promise((resolve, reject) => {
    let luas;
    setTimeout(() => {
      if (typeof sisi !== "number") {
        reject(new Error("input sisi harus angka!"));
      } else {
        luas = sisi * sisi;
        console.log(`luas persegi adalah = ${luas} cm`); // console di function
        resolve(luas);
      }
    }, 4000);
  });

// then catch

const sisi = 80; // input sisi disini
luasPersegi(sisi)
  .then((luas) => luas)
  .catch((error) => console.log(error));

// try catch

// async function cobaAsync() {
//   try {
//     let sisi = 80; // input sisi disini
//     const cekLuasPersegi = await luasPersegi(sisi);
//     console.log(`hasil cek luas persegi di async adalah ${cekLuasPersegi} cm`); // console di async
//   } catch (error) {
//     console.error(error); //tampilan error dengan warna merah
//   }
// }
// cobaAsync();
