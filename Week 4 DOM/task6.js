fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    // console.log(data)
    return data.json();
  })
  .then((objectData) => {
    console.log(objectData);
    let tableData = "";
    objectData.map((values) => {
      tableData += `                <tr>
      <td>${values.id}</td>
      <td>${values.name}</td>
      <td>${values.username}</td>
      <td>${values.address.city}</td>
      <td>${values.email}</td>
      <td>${values.phone}</td>
      <td>${values.company.name}</td>
  </tr>`;
    });
    document.getElementById("table-body").innerHTML = tableData;
  });
