function getData() {
  const url = `https://randomuser.me/api/`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      buildWidget(json);
    });
}

function buildWidget(json) {
  document.getElementById("img").src = json.results[0].picture.large;
  document.getElementById("email").textContent = json.results[0].email;
  document.getElementById(
    "name"
  ).textContent = `${json.results[0].name.title}. ${json.results[0].name.first} ${json.results[0].name.last}`;
}

getData();
