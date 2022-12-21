const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (nilaiAwal > nilaiAkhir) {
    return "Nilai akhir harus lebih besar dari nilai awal";
  } else if (dataArray.length < 5) {
    return "Jumlah angka dalam dataArray harus lebih dari 5";
  } else if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
    return "Nilai tidak ditemukan";
  } else {
    const search = dataArray.filter(function (element) {
      if (element > nilaiAwal && element < nilaiAkhir) {
        return element;
      }
    });
    const urutSearch = search.sort((a, b) => a - b);
    return urutSearch;
  }
};

console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
// Output: [8, 14, 17];
console.log(seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
// Output: "Nilai akhir harus lebih besar dari nilai awal";
console.log(seleksiNilai(4, 17, [2, 25, 4]));
// Output: "Jumlah angka dalam dataArray harus lebih dari 5";
console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));
// Output: "Nilai tidak ditemukan";
