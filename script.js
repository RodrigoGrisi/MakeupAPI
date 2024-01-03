// url : https://makeup-api.herokuapp.com/api/v1/products.json

let products = [];
let listElement = document.querySelector('#app')

async function requestApi() {

  await fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
    .then((response) => response.json())

    .then((json) => {
      products = json

      products.map((item) => {
        let liElement = document.createElement("li")
        let titleElement = document.createElement("strong")
        let imgElement = document.createElement("img")
        let priceElement = document.createTextNode("p")

        let titleText = document.createTextNode(item.name)
        titleElement.appendChild(titleText)
        liElement.appendChild(titleElement)
        
        imgElement.src = item.image_link
        liElement.appendChild(imgElement)
        
        // let priceText = document.createTextNode(item.price)
        // priceElement.appendChild(priceText);
        // liElement.appendChild(priceElement)
        
        listElement.appendChild(liElement)

        console.log(item)
        // console.log(` ${item.name} --  R$ ${item.price}`)
      })

    })
    .catch(() => {
      console.log("Api não está funcionando")
    })
}

requestApi()