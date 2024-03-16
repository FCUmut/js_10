const btn = document.getElementById("generate");

function all() {
  showSpinner();
  const app = fetch("https://randomuser.me/api/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createVal(1, "Name", data.results[0].name.first);
      createVal(2, "Email", data.results[0].email);
      createVal(3, "Phone", data.results[0].phone);
      createVal(4, "Location", data.results[0].location.country);
      createVal(5, "Age", data.results[0].dob.age);
      genderBender(data);

      let img = document.getElementsByTagName("img");
      img[0].src = data.results[0].picture.large;
      hideSpinner();
    });
}
all();

btn.addEventListener("click", all);

function genderBender(user) {
  if (user.results[0].gender === "female") {
    document.body.style.backgroundColor = "rebeccapurple";
  } else {
    document.body.style.backgroundColor = "steelblue";
  }
}

function createVal(nth, type, data) {
  let value = getNthChild(nth);
  value.innerHTML = addSpan(type, data);
}

function getNthChild(nth) {
  return document.querySelector(`.text-xl:nth-child(${nth})`);
}

function addSpan(type, data) {
  return `<span class="font-bold">${type}: </span> ${data}`;
}

function showSpinner() {
  document.querySelector(".spinner").style.display = "block";
}

function hideSpinner() {
  document.querySelector(".spinner").style.display = "none";
}
