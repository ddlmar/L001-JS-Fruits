import { app } from "./main.js";
import { banana, blueberry, dragonFruit, grapeFruit, lychee, raspberry } from "./dbFruits.js";
import {cartContainer} from "./buyList.js"

const fruitContent = document.createElement('div')

export function fruitContainer(){
    
    app.appendChild(fruitContent)
    fruitContent.classList.add('container')
    fruitContent.classList.add('fruitContainer')
    fruitCard(banana)
    fruitCard(blueberry)
    fruitCard(dragonFruit)
    fruitCard(grapeFruit)
    fruitCard(lychee)
    fruitCard(raspberry)
    
}

export function fruitCard(fruit){

    const fruitArea = document.createElement('div')
    const fruitImg = document.createElement('div')
    const fruitDescription = document.createElement('div')  
    const fruitName = document.createElement('p') 
    const fruitQuantity = document.createElement('p')
    const fruitPrice = document.createElement('p')
    const descriptionArea = document.createElement('div')
    const fruitPicture = document.createElement('img')
    fruitContent.appendChild(fruitArea)
    fruitArea.appendChild(fruitImg)
    fruitArea.appendChild(fruitDescription)
    fruitDescription.appendChild(descriptionArea)
    fruitImg.appendChild(fruitPicture)
    descriptionArea.appendChild(fruitName)
    descriptionArea.appendChild(fruitQuantity)
    descriptionArea.appendChild(fruitPrice)
    fruitPicture.setAttribute("src", fruit.imgSrc)
    fruitName.innerText = `Name: ${fruit.name}` 
    fruitQuantity.innerText = `Quantity: ${fruit.quantity}`
    fruitPrice.innerText = `Price:  $${fruit.price}`
    fruitArea.classList.add('fruitCardContainer')
    fruitImg.classList.add('image')
    fruitDescription.classList.add('fruitDescriptionStyle')
    descriptionArea.classList.add('textContainer')
    
    fruitArea.onclick = () => {        
        if (fruit.quantity > 0) {
            fruit.quantity -= 1;    
        }
        fruitQuantity.innerText = `Quantity: ${fruit.quantity}`
        cartContainer(fruit)
    };
    
}