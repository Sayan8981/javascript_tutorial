
const token = '3217806018437260'
const base_url = `https://www.superheroapi.com/api.php/${token}`;

const random_hero_imageDiv = document.getElementById("heroimage");
const random_image_button = document.getElementById("getrandomhero");
const search_hero = document.getElementById("search_hero");
const search_inputtext = document.getElementById("searchInput");
const _search_id_input = document.getElementById("searchID");
const heroname = document.getElementById("HeroName");

function clean_up() {
  random_hero_imageDiv.innerHTML = '';
  heroname.innerHTML = '';
  search_inputtext.value = '';
  _search_id_input.value = '';
}

const get_response_img = (id) => {
  console.log(`${base_url}/${id}`)
  fetch(`${base_url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      clean_up();
      random_hero_imageDiv.innerHTML = `<img src="${data.image.url}" height=300 width=300>`;
    })
};

const randomhero_id = () => {
  const numberof_heros = 731;
  return String(Math.floor(Math.random() * numberof_heros) + 1);
}

random_image_button.onclick = () => {
  clean_up();
  get_response_img(randomhero_id());
}

function name_search_module(json_data) {
  random_hero_imageDiv.innerHTML += `<img src="${json_data.image.url}" height=300 width=300>`;
  heroname.innerHTML += `<div id="HeroName">Name:${json_data.name}</div>`
}

const searchhero = (name) => {
  try {
    console.log(`${base_url}/search/${name}`)
    fetch(`${base_url}/search/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let hero = data.results;
        clean_up();
        for (let data of hero) {
          name_search_module(data);
        }
      })
  } catch (error) {
    console.log(error.name);
  }
};

search_hero.onclick = () => {
  if (_search_id_input.value != '' && search_inputtext.value != '') {
    searchhero(search_inputtext.value);
  } else if (_search_id_input.value != '') {
    console.log("1");
    get_response_img(_search_id_input.value)
  } else {
    console.log("2")
    searchhero(search_inputtext.value);
  }
};