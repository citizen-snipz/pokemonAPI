/*HOMEWORK: Build an app that uses this API in some way -- DUE THURSDAY! */

//Example fetch using pokemonapi.co
document.querySelector(".search").addEventListener("click", getFetch);
// document.querySelector(".shinySwitch").addEventListener("click", turnShiny);

function getFetch() {
  const poke1 = document.querySelector("#poke1").value;
  const url = "https://pokeapi.co/api/v2/pokemon/" + poke1;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      document
        .querySelector(".infoSpace")
        .insertAdjacentHTML("afterbegin", getPokeStats(data));
    })
    .catch((err) => {
      console.log(`error ${err}`);
      alert("That ain't no Pokemon I ever heard of! Try again!");
    });
}

function getPokeStats(data) {
  let types = "";
  for (let i = 0; i < data.types.length; i++) {
    types += `<span>${data.types[i].type.name}${
      i === data.types.length - 1 ? "" : ", "
    } </span>`;
  }

  let ability = "";
  for (let i = 0; i < data.abilities.length; i++) {
    ability += `<span>${data.abilities[i].ability.name}${
      i === data.abilities.length - 1 ? "" : ", "
    }</span>`;
  }
  console.log(ability);
  return `
    <div class=card> 
      <img src="${data.sprites.front_default}" alt="${data.name}"/>
      <h2>#${data.id}   ${data.name[0].toUpperCase() + data.name.slice(1)}</h2>
      <h3> Type(s): ${types}</h3>
      <h3> Abilities: ${ability}</h3>
      <h4>Height: ${data.height} dm, Weight: ${data.weight} hg</h4>
    </div>
    `;
}
// function turnShiny() {
//   getFetch()
//   document.querySelector("#pokeImg1").src = data.sprites.front_shiny;
// }
