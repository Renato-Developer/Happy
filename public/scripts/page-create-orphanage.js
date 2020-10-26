//Create map
const map = L.map("mapid").setView([-22.7917975, -43.2962607, 1], 13);

//Create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);


//Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68]
});

//Create and add marker

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //delete icon layer
    //marker && map.removeLayer(marker)
    if (marker) {
        map.removeLayer(marker)
    }

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})


//Photos upload
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images');

    //pegar o container para duplicar .new-images
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true);

    //verificar se o campo ta vazio
    const input = newFieldContainer.children[0];
    if (input.value == '') {
        return 
    }

    //Limpar o campo antes de adicionar ao container de imagens
    newFieldContainer.children[0].value = '';
    
    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = '';
        return
    }

    //deletar o campo
    span.parentNode.remove();

}

//select Yes or NO
function toggleSelect(event) {

    //retirar a classe active dos botoes
    const buttons = document.querySelectorAll('.button-select button');
    buttons.forEach((button) => button.classList.remove('active'));

    //colocar a classe active
    const button = event.currentTarget
    button.classList.add('active');
    

    //atualizar input hidden
    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value;

}