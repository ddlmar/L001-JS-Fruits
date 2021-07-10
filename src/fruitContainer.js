import { app } from "./main.js";
import { banana, blueberry, dragonFruit, grapeFruit, lychee, raspberry } from "./dbFruits.js";


const fruitContent = document.createElement('div')

export function fruitContainer(){
    
    app.appendChild(fruitContent)
    fruitContent.classList.add('container')
    fruitContent.classList.add('fruitContainer')
    fruitCard(banana.imgSrc, banana.name, banana.quantity, banana.price)
    fruitCard(blueberry.imgSrc, blueberry.name, blueberry.quantity, blueberry.price)
    fruitCard(dragonFruit.imgSrc ,dragonFruit.name, dragonFruit.quantity, dragonFruit.price)
    fruitCard(grapeFruit.imgSrc ,grapeFruit.name, grapeFruit.quantity, grapeFruit.price)
    fruitCard(lychee.imgSrc ,lychee.name, lychee.quantity, lychee.price)
    fruitCard(raspberry.imgSrc ,raspberry.name, raspberry.quantity, raspberry.price)
    
}

function fruitCard(src, name, quantity, price){

    const fruitArea = document.createElement('div')
    const fruitImg = document.createElement('div')
    const fruitDescription = document.createElement('div')  
    const fruitName = document.createElement('p') 
    const fruitQuantity = document.createElement('p')
    const fruitPrice = document.createElement('p')
    const descriptionArea = document.createElement('div')
    const fruitPicture = document.createElement('img')
    //fruitImg.setAttribute('src', '../assets/fruit.png')
    fruitContent.appendChild(fruitArea)
    fruitArea.appendChild(fruitImg)
    fruitArea.appendChild(fruitDescription)
    fruitDescription.appendChild(descriptionArea)
    fruitImg.appendChild(fruitPicture)
    descriptionArea.appendChild(fruitName)
    descriptionArea.appendChild(fruitQuantity)
    descriptionArea.appendChild(fruitPrice)
    fruitPicture.setAttribute("src", src)
    fruitName.innerText = `Name: ${name}` 
    fruitQuantity.innerText = `Quantity: ${quantity}`
    fruitPrice.innerText = `Price:  $${price}`
    fruitArea.classList.add('fruitCardContainer')
    fruitImg.classList.add('image')
    fruitDescription.classList.add('fruitDescriptionStyle')
    descriptionArea.classList.add('textContainer')
}