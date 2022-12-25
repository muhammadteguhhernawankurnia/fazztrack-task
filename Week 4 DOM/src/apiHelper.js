const fetcher = async (method, ep, body = {}) => {
  if (method == "GET") {
    const result = await getData(ep); //✅
    return result;
  } else if (method == "POST") {
    postData(ep, body); //✅
  } else {
    deleteData(ep); //✅
  }
};

const getData = (ep) => {
  return new Promise((resolve, reject) => {
    fetch(`https://63a3d4209704d18da096c7e0.mockapi.io/xhagumi-food/`)
      .then((res) => {
        if (!res.ok)
          return Promise.reject(new Error(`HTTP Error ${res.status}`));

        return res.json();
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

const deleteData = (id) => {
  if (confirm("apakah kamu yakin?")) {
    fetch(`https://63a3d4209704d18da096c7e0.mockapi.io/xhagumi-food/${id}`, {
      method: "delete",
    })
      .then((res) => {
        if (!res.ok)
          return Promise.reject(new Error(`HTTP Error ${res.status}`));

        return res.json();
      })
      .then((data) => {
        alert("data berhasil dihapus");
        window.location.reload();
      })
      .catch((err) => console.error(err));
  } else {
    alert("oke batal");
  }
};

//METHOD POST = NAMBAH/NGASIH KE RESOURCE
const postData = (ep, body) => {
  let Input = (params) => {
    return document.getElementById(params);
  };
  Input("inputNameRegist").onchange = (text) => {
    body.name = Input("inputNameRegist").value; //$_POST //$_GET
    console.log(body);
  };
  Input("contentRegist").onchange = (text) => {
    body.content = Input("contentRegist").value;
    console.log(body);
  };
  fetch(`https://63a3d4209704d18da096c7e0.mockapi.io/xhagumi-food/${ep}`, {
    method: "POST",
    body: body,
  })
    .then((res) => {
      if (!res.ok) return Promise.reject(new Error(`HTTP Error ${res.status}`));

      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error(err));
};
