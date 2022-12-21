const url = "https://jsonplaceholder.typicode.com/users"; // coba salahkan url untuk catch data error

// promise show name data

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     data.map((item) => console.log(item["name"]));
//     //   .then((data) => console.log(data))
//   })
//   .catch((error) => console.log("ERROR"));

// promise then catch try to add data API

// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Lionel Ronaldo",
//     email: "Sincerelywkokqokq@april.biz",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("ERROR"));

// async await

async function hitAPI() {
  const api = await fetch(url);
  const data = await api.json();
  data.map((item) => console.log(item["name"]));
  // console.log(data);
}

hitAPI();
