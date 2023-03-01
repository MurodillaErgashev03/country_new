let elBtn = document.querySelector(".site-header__button");
let elTitle = document.querySelector(".site-header__title")
let elBody = document.querySelector('.body');
let elInput = document.querySelector('#search');





// let Map = document.querySelector("#map-link-id");

let ul = document.querySelector(".list-group")



  fetch('https://restcountries.com/v3.1/all')
  .then((res) => res.json() )
  .then((data) => {
  random(data)
   
  }); 
  


function random(array){
  ul.textContent = "";

  array.forEach((arr) => {
    let li =  document.createElement("li");
    li.innerHTML = `
    <li class="list-group-item">
    <img class="img" src="${arr.flags.png}">
    <p class="name">
    <span>Name : </span> ${arr.name.common} 
    </p>
      <p class="capital">
         <span>Capital : </span>${arr.capital}
      </p>
      <p class="area">
         <span>Area : </span> ${arr.area} 
      </p>
      <p class="popilation">
        <span>Popilation : </span> ${arr.population}
      </p>
      <p>
       <span>Region : </span> ${arr.region} 
      </p>
      <a  class="map-link" href="${arr.maps.googleMaps}">
         <span>Location : </span>
         Map
      </a>
  </li>
    `
    ul.appendChild(li)
  });

}






elInput.addEventListener('input', () => {
  fetch('https://restcountries.com/v3.1/name/' + elInput.value)
      .then((res) => res.json())
      .then((data) => {

          random(data)
      })
})



let elSelect = document.querySelector('#region');


elSelect.addEventListener("change", () => {
  if (elSelect.value == 'All') {
      fetch('https://restcountries.com/v3.1/all')
          .then((res) => res.json())
          .then((data) => {
              random(data)
              console.log(elSelect.value)
          })
  } else {
      fetch('https://restcountries.com/v3.1/region/' + elSelect.value)
          .then((res) => res.json())
          .then((data) => {
              random(data)
          })
  }
})











let theme = "light";

elBtn.addEventListener('click', function() {

    

    if ( theme === "dark" ) {
        elBody.className = "bodyLight";
        elBtn.textContent =  "Dark mode";
        elTitle.className = "titleDark";
        
        theme = "light";
    
    }
    else{
        elBody.className = "bodyDark";
        elBtn.textContent =  "Light mode";
        elTitle.className  = "titleLight"
        theme = "dark";
    }

})