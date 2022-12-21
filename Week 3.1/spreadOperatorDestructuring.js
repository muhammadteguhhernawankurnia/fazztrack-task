let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "sincere@apri.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x 56442",
  website: "hildegard.org",
};

// a. spread operator

const result = {
  ...data,
  name: "Teguh",
  email: "moch.teguh@gmail.com",
  hobby: "hiking",
};
console.log(result);

// b. destructuring

const { street, city } = data.address;
console.log(street, city);
