async function getData() {
    const url = `https://randomuser.me/api/`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      
      const json = await response.json();
      console.log(json)
      buildWidget(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  function buildWidget(json) {
    document.getElementById('img').src = json.results[0].picture.large;
    document.getElementById('email').textContent = json.results[0].email;
    document.getElementById('name').textContent = `${json.results[0].name.title}. ${json.results[0].name.first} ${json.results[0].name.last}`;
    document.getElementById('location').textContent = json.results[0].location.country;
  }

  getData();