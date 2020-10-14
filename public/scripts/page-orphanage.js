const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Create map
const map = L.map("mapid", options).setView([-22.7917975, -43.2962607, 1], 13);

//Create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//Create and add marker
L.marker([-22.7917975, -43.2962607, 1], { icon })
  .addTo(map)

/*Image galery*/ 

function selectImage(event) {
  const button = event.currentTarget

  //Remover todas as classes active
  const buttons = document.querySelectorAll('.images button')
  buttons.forEach((button) => {
    button.classList.remove("active")
  })
  
  //Selectionar a imagem clicada
  const image = button.children[0]

  //Atualizar o container da imagem
  const imageContainer = document.querySelector('.orphanage-details > img')
  imageContainer.src = image.src


  //Adicionar acitve para o botao atual
  button.classList.add('active')

}
