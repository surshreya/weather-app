const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const msgOne = document.getElementById("message-1");
const msgTwo = document.getElementById("message-2");

weatherForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const address = search.value;
  const url = `http://localhost:3000/weather?address=${address}`;
  msgOne.textContent = "Loading...";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        msgOne.textContent = data.error;
        return;
      }

      msgOne.textContent = data.location;
      msgTwo.textContent = data.forecast;
      search.value = "";
    })
    .catch((err) => {
      console.error(err);
    });
});
