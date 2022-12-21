// Method (Built in Function) Javascript

// 1. split()
// membagi string menjadi array substring berdasarkan parameter yang diinput

let nama = "Caca Sutarya";
const myArray = nama.split(" ");

console.log(myArray);

// 2. join()
// menggabungkan array menjadi sebuah string

// const nama = ["Caca", "Sutarya"];
// let namaLengkap = nama.join();

// console.log(namaLengkap);

// 3. filter()
// menyaring data di array yang sesuai dengan parameter input

// const umur = [9, 3, 5, 17, 19, 20, 22];
// const buatKtp = umur.filter(cekUmur);
// function cekUmur(umur) {
//   return umur >= 17;
// }

// console.log(buatKtp);

// 4. forEach()
// mengeluarkan elemen  dalam array

let text = "";
const pokemon = ["pikachu", "bulbasaur", "salmender", "squirtle"];
pokemon.forEach(pokemonFunction);

function pokemonFunction(item, index) {
  text += index + " = " + item + " ";
}

console.log(text);

// 5. length
// menghitung jumlah elemen dalam array

// const pokemon = ["pikachu", "bulbasaur", "salmender", "squirtle"];
// let pokemonLength = pokemon.length;

// console.log(pokemonLength);

// 6. reverse()
// membalikkan urutan elemen dalam array

// const pokemon = ["pikachu", "bulbasaur", "salmender", "squirtle"];
// let balikUrutanPokemon = pokemon.reverse();

// console.log(balikUrutanPokemon);

// 7. sort()
// mengurutkan elemen dalam array defaultnya berdasarkan abjad

// const pokemon = ["pikachu", "bulbasaur", "salmender", "squirtle"];
// let urutanPokemon = pokemon.sort();

// console.log(urutanPokemon);

// 8. toString()
// membuat array menjadi string

// const pokemon = ["p", "i", "k", "a", "c", "h", "u"];
// const pikachu = pokemon.toString();

// console.log(typeof pikachu);

// 9. toLowerCase()
// merubah string menjadi huruf kecil

// let pokemon = "PIKACHU";
// let pokemonLowerCase = pokemon.toLowerCase();

// console.log(pokemonLowerCase);

// 10. toUpperCase()
// merubah string menjadi huruf besar

// let pokemon = "pikachu";
// let pokemonUpperCase = pokemon.toUpperCase();

// console.log(pokemonUpperCase);
