const callData = new CallData();

const getElm = (id) => document.getElementById(id);

getElm("ao").addEventListener("click", () => {
  let dessing = [];
  callData
    .layData()
    .then(function (result) {
      console.log(result.data);
      for (var i = 0; i <= result.data.length; i++) {
        var ao = result.data[i].type;
        if (ao === "topclothes") {
          dessing.push(result.data[i]);
          renderData(dessing);
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});

getElm("quan").addEventListener("click", () => {
  var dessing = [];
  callData
    .layData()
    .then(function (result) {
      console.log(result.data);
      for (var i = 0; i <= result.data.length; i++) {
        var ao = result.data[i].type;
        if (ao === "botclothes") {
          dessing.push(result.data[i]);
          renderData(dessing);
        }
      }
    })
    .catch(function (error) {
      console.log("lỗi get");
    });
});
getElm("giayDep").addEventListener("click", () => {
  var dessing = [];
  callData
    .layData()
    .then(function (result) {
      console.log(result.data);
      for (var i = 0; i <= result.data.length; i++) {
        var ao = result.data[i].type;
        if (ao === "shoes") {
          dessing.push(result.data[i]);
          renderData(dessing);
        }
      }
    })
    .catch(function (error) {
      console.log("lỗi get");
    });
});
getElm("tuiXach").addEventListener("click", () => {
  var dessing = [];
  callData
    .layData()
    .then(function (result) {
      console.log(result.data);
      for (var i = 0; i <= result.data.length; i++) {
        var ao = result.data[i].type;
        if (ao === "handbags") {
          dessing.push(result.data[i]);
          renderData(dessing);
        }
      }
    })
    .catch(function (error) {
      console.log("lỗi get");
    });
});
getElm("dayChuyen").addEventListener("click", () => {
  var dessing = [];
  callData
    .layData()
    .then(function (result) {
      console.log(result.data);
      for (var i = 0; i <= result.data.length; i++) {
        var ao = result.data[i].type;
        if (ao === "necklaces") {
          dessing.push(result.data[i]);
          renderData(dessing);
        }
      }
    })
    .catch(function (error) {
      console.log("lỗi get");
    });
});
getElm("styleHair").addEventListener("click", () => {
  var dessing = [];
  callData
    .layData()
    .then(function (result) {
      console.log(result.data);
      for (var i = 0; i <= result.data.length; i++) {
        var ao = result.data[i].type;
        if (ao === "hairstyle") {
          dessing.push(result.data[i]);
          renderData(dessing);
        }
      }
    })
    .catch(function (error) {
      console.log("lỗi get");
    });
});
getElm("background").addEventListener("click", () => {
  var dessing = [];
  callData
    .layData()
    .then(function (result) {
      console.log(result.data);
      for (var i = 0; i <= result.data.length; i++) {
        var ao = result.data[i].type;
        if (ao === "background") {
          dessing.push(result.data[i]);
          renderData(dessing);
        }
      }
    })
    .catch(function (error) {
      console.log("lỗi get");
    });
});
function topCloth(type, imgSrc_png) {
  if (type === "topclothes") {
    document.querySelector(
      ".bikinitop"
    ).innerHTML = `<img style = 'width:100%' src="${imgSrc_png}"/>`;
  }
  if (type === "botclothes") {
    document.querySelector(
      ".bikinibottom"
    ).innerHTML = `<img style = 'width: 100%' src="${imgSrc_png}"/>`;
  }
  if (type === "shoes") {
    document.querySelector(
      ".feet"
    ).innerHTML = `<img style = 'width:100%' src="${imgSrc_png}"/>`;
  }
  if (type === "handbags") {
    document.querySelector(
      ".handbag"
    ).innerHTML = `<img style = 'width: 100%' src="${imgSrc_png}"/>`;
  }
  if (type === "necklaces") {
    document.querySelector(
      ".necklace"
    ).innerHTML = `<img style = 'width:100%' src="${imgSrc_png}"/>`;
  }
  if (type === "hairstyle") {
    document.querySelector(
      ".hairstyle"
    ).innerHTML = `<img src="${imgSrc_png}"/>`;
  }
  if (type === "background") {
    document.querySelector(
      ".background"
    ).innerHTML = `<img style = 'width:100%; height: 100%' src="${imgSrc_png}"/>`;
  }
}
function renderData(mangDR) {
  var content = "";
  mangDR.forEach(function (dessing, index) {
    content += `
        <div class="card">
        <div class="blog__item">
          <img
            src="${dessing.imgSrc_jpg}"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="card-body">
          <h4 class="card-text">${dessing.name}</h4>
        </div>
        <button onclick= "topCloth('${dessing.type}', '${dessing.imgSrc_png}')" class ='thuDo' type="button" class="btn-lg btn-block">Thử đồ</button>
      </div>
        `;
  });
  document.querySelector(".tab-content").innerHTML = content;
}
