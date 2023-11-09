let loadfirstbutton = document.getElementById("load");
let loadsecondbutton = document.getElementById("load-secondary");

const URL = "https://api.pexels.com/v1/search?query=ducks";
const URL2 = "https://api.pexels.com/v1/search?query=cats";
function getImages() {
  fetch(URL, {
    method: "GET",
    headers: {
      Authorization: "JmyHhqZPQL5hj5C50k9DiPTv1kAlbPkpcWmJQWfaWp2laxcWIhW99UZH",
    },
  })
    .then((res) => res.json())
    .then((photo) => {
      const row = document.getElementById("photos");
      row.innerHTML = "";
      photo.photos
        .forEach((element) => {
          const row = document.getElementById("photos");

          const col = document.createElement("div");
          col.className = "col-md-4";

          const card = document.createElement("div");
          card.className = "card mb-4 shadow-sm";

          const img = document.createElement("img");
          img.className = "card-img-top w-100";
          img.style.height = "225px";
          img.src = element.src.original;

          const body = document.createElement("div");
          body.className = "card-body ";

          const h5 = document.createElement("div");
          h5.className = "card-title ";
          h5.innerText = " by:" + element.photographer;

          const p = document.createElement("p");
          p.className = "card-text text-truncate";
          p.innerText = element.alt;

          const cardfoot = document.createElement("div");
          cardfoot.className =
            "d-flex justify-content-between align-items-center";

          const btngroup = document.createElement("div");
          btngroup.className = "btn-group";

          const viewbtn = document.createElement("button");
          viewbtn.className = "btn btn-sm btn-outline-secondary";
          viewbtn.type = "button";
          viewbtn.innerText = "View";

          const hidebtn = document.createElement("button");
          hidebtn.className = "btn btn-sm btn-outline-secondary";
          hidebtn.type = "button";
          hidebtn.innerText = "Hide";
          hidebtn.onclick = function (e) {
            e.target.closest(".col-md-4").remove();
          };

          const id = document.createElement("small");
          id.className = "text-muted";
          id.innerText = element.id;

          btngroup.appendChild(viewbtn);
          btngroup.appendChild(hidebtn);
          cardfoot.appendChild(btngroup);
          cardfoot.appendChild(id);
          body.appendChild(h5);
          body.appendChild(p);
          body.appendChild(cardfoot);
          card.appendChild(img);
          card.appendChild(body);
          col.appendChild(card);
          row.appendChild(col);
        })
        .catch((err) => console.log("error", err));
    });
}

function getImagesSecond() {
  fetch(URL2, {
    method: "GET",
    headers: {
      Authorization: "JmyHhqZPQL5hj5C50k9DiPTv1kAlbPkpcWmJQWfaWp2laxcWIhW99UZH",
    },
  })
    .then((res) => res.json())
    .then((photo) => {
      const row = document.getElementById("photos");
      row.innerHTML = "";
      photo.photos
        .forEach((element) => {
          const row = document.getElementById("photos");

          const col = document.createElement("div");
          col.className = "col-md-4";

          const card = document.createElement("div");
          card.className = "card mb-4 shadow-sm";

          const img = document.createElement("img");
          img.className = "card-img-top w-100";
          img.style.height = "225px";
          img.src = element.src.original;

          const body = document.createElement("div");
          body.className = "card-body ";

          const h5 = document.createElement("div");
          h5.className = "card-title ";
          h5.innerText = " by:" + element.photographer;

          const p = document.createElement("p");
          p.className = "card-text text-truncate";
          p.innerText = element.alt;

          const cardfoot = document.createElement("div");
          cardfoot.className =
            "d-flex justify-content-between align-items-center";

          const btngroup = document.createElement("div");
          btngroup.className = "btn-group";

          const viewbtn = document.createElement("button");
          viewbtn.className = "btn btn-sm btn-outline-secondary";
          viewbtn.type = "button";
          viewbtn.innerText = "View";

          const hidebtn = document.createElement("button");
          hidebtn.className = "btn btn-sm btn-outline-secondary";
          hidebtn.type = "button";
          hidebtn.innerText = "Hide";
          hidebtn.onclick = function (e) {
            e.target.closest(".col-md-4").remove();
          };

          const id = document.createElement("small");
          id.className = "text-muted";
          id.innerText = element.id;

          btngroup.appendChild(viewbtn);
          btngroup.appendChild(hidebtn);
          cardfoot.appendChild(btngroup);
          cardfoot.appendChild(id);
          body.appendChild(h5);
          body.appendChild(p);
          body.appendChild(cardfoot);
          card.appendChild(img);
          card.appendChild(body);
          col.appendChild(card);
          row.appendChild(col);
        })
        .catch((err) => console.log("error", err));
    });
}

loadfirstbutton.addEventListener("click", getImages);
loadsecondbutton.addEventListener("click", getImagesSecond);

let form = document.getElementById("form");

form.onsubmit = function (e) {
  e.preventDefault();
};
