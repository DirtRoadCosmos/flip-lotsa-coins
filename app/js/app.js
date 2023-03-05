
const coinTypes = [
  { name: "Vermont", image: "images/quarter-back-vt.png" },
  { name: "Generic", image: "images/quarter-front.png" },
]

const showCoinTypes = () => {
  const coinTypeList = document.querySelector("#coinTypeList");
    let output = ""
    coinTypes.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">${name}</a>
                </div>
                `)
    )
    coinTypeList.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#card-heads").addEventListener("click", recordResultHeads);
    document.querySelector("#card-tails").addEventListener("click", recordResultTails);
  });

  function recordResultHeads() {
    recordResult("H");
  }

  function recordResultTails() {
    recordResult("T");
  }

  function recordResult(result) {
    document.querySelector("#live-flip-results").innerHTML += result;
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }