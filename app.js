// const sorov = new XMLHttpRequest();

// const apikey = "aeJPpd2ilrfoX2NtaDuWzQ==fjUJ91K0ZordTeWw";
// sorov.open("GET", "https://api.api-ninjas.com/v1/animals?name=cat");

// sorov.setRequestHeader("X-Api-Key", apikey);
// sorov.send();

// sorov.addEventListener("load", () => {
//   const data = JSON.parse(sorov.response);
//   console.log(data);
// });
const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "aeJPpd2ilrfoX2NtaDuWzQ==fjUJ91K0ZordTeWw";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Bir soniya...";
    btnEl.disabled = true;
    btnEl.innerText = "Deyarli tayyor...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Hazil generatsiya qilish";

    jokeEl.innerText = data[0].joke + "\n \n He said... (:P) ";
  } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Hazil generatsiya qilish";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
