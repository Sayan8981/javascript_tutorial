
// global parameters
const token = '321780**************'
const base_url = `https://www.superheroapi.com/api.php/${token}`;

const random_hero_imageDiv = document.getElementById("heroimage");
const random_image_button = document.getElementById("getrandomhero");
const search_hero = document.getElementById("search_hero");
const search_inputtext = document.getElementById("searchInput");
const _search_id_input = document.getElementById("searchID");
const heroname = document.getElementById("HeroName");
const heroId = document.getElementById("heroId");
const options_label = document.getElementById("options");
const get_statshtml = document.getElementById("stats");
const get_biographyhtml = document.getElementById("biography");
const get_appearancehtml = document.getElementById("appearance");
const get_workhtml = document.getElementById("work");
const get_connectionshtml = document.getElementById("connections");

// clean up functionality
function clean_up() {
  random_hero_imageDiv.innerHTML = '';
  heroname.innerHTML = '';
  search_inputtext.value = '';
  _search_id_input.value = '';
  heroId.innerHTML = '';
  get_statshtml.innerHTML = '';
  get_biographyhtml.innerHTML = '';
  get_appearancehtml.innerHTML = '';
  get_workhtml.innerHTML = '';
  get_connectionshtml.innerHTML = '';
};

//get the connections module
const getconnections_hero = (json) => {
  console.log(Object.keys(json.connections));
  Object.keys(json.connections).map(stats => {
    return get_connectionshtml.innerHTML += `<div id="stats">
    <p><b>${stats}</b> : ${json.connections[stats]}</p>
    </div>`;
  })
};

//get the work module
const getwork_hero = (json) => {
  console.log(Object.keys(json.work));
  Object.keys(json.work).map(stats => {
    return get_workhtml.innerHTML += `<div id="stats">
    <p><b>${stats}</b> : ${json.work[stats]}</p>
    </div>`;
  })
};

//get the appearance module
const getappearance_hero = (json) => {
  console.log(Object.keys(json.appearance));
  Object.keys(json.appearance).map(stats => {
    return get_appearancehtml.innerHTML += `<div id="stats">
    <p><b>${stats}</b> : ${json.appearance[stats]}</p>
    </div>`;
  })
};

//get the biography module
const getbiography_hero = (json) => {
  console.log(Object.keys(json.biography));
  Object.keys(json.biography).map(stats => {
    return get_biographyhtml.innerHTML += `<div id="stats">
    <p><b>${stats}</b> : ${json.biography[stats]}</p>
    </div>`;
  })
};

//get the powerstats
const getpowerstats_hero = (json) => {
  console.log(Object.keys(json.powerstats));
  Object.keys(json.powerstats).map(stats => {
    return get_statshtml.innerHTML += `<div id="stats">
    <p><b>${stats}</b> : ${json.powerstats[stats]}</p>
    </div>`;
  })
};

// common module for name & Ids search box
function search_module(json_data) {
  random_hero_imageDiv.innerHTML += `<img id="heroimage" src="${json_data.image.url}" height=300 width=400>`;
  heroname.innerHTML += `<div id="HeroName"><p><b>Name:${json_data.name}<b></p></divs>`
  heroId.innerHTML += `<div id="heroId"><p>ID:${json_data.id}</p></div>`;
};

// module for Ids search in IDs input box
const get_response_api = (id) => {
  try {
    console.log(`${base_url}/${id}`)
    fetch(`${base_url}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        clean_up();
        search_module(data);
        getpowerstats_hero(data);
        getbiography_hero(data);
        getappearance_hero(data);
        getwork_hero(data);
        getconnections_hero(data);
      })
  } catch (err) {
    console.log(err.name);
  }
};

//generate random Ids
const randomhero_id = () => {
  const numberof_heros = 731;
  return String(Math.floor(Math.random() * numberof_heros) + 1);
};

// module for random IDs to generate details
random_image_button.onclick = () => {
  clean_up();
  get_response_api(randomhero_id());
};

// search with name in search box
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
          search_module(data);
        }
      })
  } catch (error) {
    console.log(error.name);
  }
};

// function to control Ids and name input in search box
search_hero.onclick = () => {
  if (_search_id_input.value != '' && search_inputtext.value != '') {
    searchhero(search_inputtext.value);
  } else if (_search_id_input.value != '') {
    console.log("1");
    get_response_api(_search_id_input.value)
  } else {
    console.log("2")
    searchhero(search_inputtext.value);
  }
};