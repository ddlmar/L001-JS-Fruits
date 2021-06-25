import { app } from "./main.js";

const buyArea = document.createElement('div')

export function cartArea(){
    buyArea.classList.add('container')
    buyArea.classList.add('buyList')
    app.appendChild(buyArea)
    header()
    cartContainer()
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

function cartContainer (){
    const cartGeneral = document.createElement('div')
    const productArea = document.createElement('div')   
    cartGeneral.classList.add('cartContainer')
    productArea.classList.add('productStyle')
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