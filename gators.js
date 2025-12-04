'use strict'

function releaseGators(event) {
  console.log(event);

  const count = Number(document.getElementById("gator-count").value);
  const area = document.getElementById("gator-area");
  
  let gators = "";
  for (let i = 1; i < count + 1; i++) {
    if (i % 10 !== 0) {
      gators = gators + "🐊";
    } else {
      gators = gators + "🐢";
    }
  }
  
  area.innerText = gators;
}

const bottun = document.getElementById("release-bottun");
bottun.addEventListener("click", releaseGators);
