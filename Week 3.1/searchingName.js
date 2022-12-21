const searchName = (param1, param2, param3) => {
  const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
  ];

  let searchResult = name.filter(
    (word) => word.toLocaleLowerCase().indexOf(param1) !== -1
  );
  return param3(searchResult).slice(0, param2);
};

const showResult = (data) => {
  return data;
};

console.log(searchName("An", 3, showResult));
