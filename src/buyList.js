import { app } from "./main.js";
import { banana, blueberry, dragonFruit, grapeFruit, lychee, raspberry } from "./dbFruits.js";
import { fruitCard } from "./fruitContainer.js";

const buyArea = document.createElement('div')

export function cartArea(){
    buyArea.classList.add('container')
    buyArea.classList.add('buyList')
    app.appendChild(buyArea)
    header()   
    footer()
    
}

function header(){
    const headerArea = document.createElement('div')
    const namePhrase = document.createElement('p')
    const quantityPhrase = document.createElement('p')
    const pricePhrase = document.createElement('p')
    const totalPhrase = document.createElement('p')
    namePhrase.innerText = 'name'
    quantityPhrase.innerText = 'quantity'
    pricePhrase.innerText = 'price $'
    totalPhrase.innerText = 'total'
    buyArea.appendChild(headerArea)
    headerArea.appendChild(namePhrase)
    headerArea.appendChild(quantityPhrase)
    headerArea.appendChild(pricePhrase)
    headerArea.appendChild(totalPhrase)
    headerArea.classList.add('headerBL')
    
}

export function cartContainer (fruit){
    const cartGeneral = document.createElement('div')
    const productArea = document.createElement('div')  
    const fruitName = document.createElement('p')
    const fruitQuantity = document.createElement('p')
    const fruitPrice = document.createElement('p')
    const fruitTotal = document.createElement('p')
    
    cartGeneral.classList.add('cartContainer')
    productArea.classList.add('productStyle')
    productArea.appendChild(fruitName)
    productArea.appendChild(fruitQuantity)
    productArea.appendChild(fruitPrice)
    productArea.appendChild(fruitTotal)
    

   fruitName.innerText = fruit.name
    fruitQuantity.innerText = fruit.quantity
    fruitPrice.innerText = fruit.price
    fruitTotal.innerText = fruit.quantity
    buyArea.appendChild(cartGeneral)
    cartGeneral.appendChild(productArea)
    
}

function footer () {
    const footerArea = document.createElement('div')
    const leftPhrase = document.createElement('p')

    buyArea.appendChild(footerArea)
    footerArea.appendChild(leftPhrase)
    leftPhrase.innerText = 'Total:'
    footerArea.classList.add('footerBL')
}