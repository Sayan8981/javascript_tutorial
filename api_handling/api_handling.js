
const dogImage = document.getElementById("dogImage");
const dogButton = document.getElementById("getnewdogs");

const getNewDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(json => {
        dogImage.innerHTML = `<img src="${json.message}" height=500 width=700/>`;
      });
};

getNewDog();

dogButton.onclick = () => {
    getNewDog();
}

