import { app } from "./main.js";

const fruitContent = document.createElement('div')

export function fruitContainer(){
    
    app.appendChild(fruitContent)
    fruitContent.classList.add('container')
    fruitContent.classList.add('fruitContainer')
    fruitCard()
    fruitCard()
    fruitCard()
    fruitCard()
    fruitCard()
    fruitCard()

}

function fruitCard(){
    const fruitArea = document.createElement('div')
    const fruitImg = document.createElement('div')
    const fruitDescription = document.createElement('div')  
    const fruitName = document.createElement('p') 
    const fruitQuantity = document.createElement('p')
    const fruitPrice = document.createElement('p')
    const descriptionArea = document.createElement('div')

    //fruitImg.setAttribute('src', '../assets/fruit.png')
    fruitContent.appendChild(fruitArea)
    fruitArea.appendChild(fruitImg)
    fruitArea.appendChild(fruitDescription)
    fruitDescription.appendChild(descriptionArea)
    descriptionArea.appendChild(fruitName)
    descriptionArea.appendChild(fruitQuantity)
    descriptionArea.appendChild(fruitPrice)
    fruitName.innerText = 'Name:'
    fruitQuantity.innerText = 'Quantity:'
    fruitPrice.innerText = 'Price:'
    fruitArea.classList.add('fruitCardContainer')
    fruitImg.classList.add('imagem')
    fruitDescription.classList.add('fruitDescriptionStyle')
    descriptionArea.classList.add('textContainer')
}