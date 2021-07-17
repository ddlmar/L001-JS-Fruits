import { app , newElement} from "./main.js";
import {market} from "./dbFruits.js"
import { fruitCard, renderCards } from "./fruitContainer.js";

const buyArea = document.createElement('div')
const area = document.createElement('div')
const footerArea = document.createElement('div') // const do footer 

area.classList.add('list') 
export let kart = [];



export function cartArea(){
    buyArea.classList.add('container')
    buyArea.classList.add('buyList')
    footerArea.classList.add('footerBL')
    app.appendChild(buyArea)
    header()   
    buyArea.appendChild(area)
    footer()
    
}

function header(){
    
    const headerArea = newElement('div', 'headerBL')
    const headerContainer = newElement('div', 'headerContainer') 
    const namePhrase = newElement('p', 'namePhrase', 'name')
    const quantityPhrase = newElement('p', 'quantityPhrase', 'quantity') 
    const pricePhrase = newElement('p', 'pricePhrase', 'price $')
    const totalPhrase = newElement('p', 'totalPhrase', 'total')
    buyArea.appendChild(headerArea)
    headerContainer.appendChild(namePhrase)
    headerContainer.appendChild(quantityPhrase)
    headerContainer.appendChild(pricePhrase)
    headerContainer.appendChild(totalPhrase)
    headerArea.appendChild(headerContainer)

}

export function cartContainer (){
    area.innerHTML = '';
    if (kart.length > 0) {
        kart.forEach((item) => {

            const cartGeneral = newElement('div', 'cartContainer')            
            const productArea = newElement('div', 'productStyle')         
            const fruitName = newElement('p', 'fruitName', item.name)       
            const fruitQuantity = newElement('div', 'fruitQuantity')
            const minusBtn = newElement('div', 'quantityBtn')
            const quantityPhrase = newElement('p','quantityPhrase' , item.quantity)     
            const plusBtn = newElement('div','quantityBtn')
            const minusPhrase = newElement('span', 'minusPhrase', '-')
            const plusPhrase = newElement('span', 'plusPhrase', '+')
            
            

            const fruitPrice = newElement('p', 'fruitPrice', item.price)     
            const fruitTotal = newElement('p', 'fruitTotal', (parseFloat(item.price) * parseFloat(item.quantity)).toFixed(2))        
            productArea.appendChild(fruitName)
            productArea.appendChild(fruitQuantity)
            productArea.appendChild(fruitPrice)
            productArea.appendChild(fruitTotal)   
            fruitQuantity.appendChild(minusBtn)
            fruitQuantity.appendChild(quantityPhrase)
            fruitQuantity.appendChild(plusBtn)
            minusBtn.appendChild(minusPhrase)
            plusBtn.appendChild(plusPhrase)
            area.appendChild(cartGeneral)    
            cartGeneral.appendChild(productArea)      

            minusBtn.onclick = () => {
                if (item.quantity > 0) {
                    item.quantity--;
                    quantityPhrase.innerText = item.quantity;
                    fruitTotal.innerText = (parseFloat(item.price) * parseFloat(item.quantity)).toFixed(2);
                    market.forEach((itemMarket) => {
                        if (itemMarket.name === item.name) {                           
                            itemMarket.quantity++
                            renderCards()
                            renderTotal()
                        }
                    })
                }
            }

            plusBtn.onclick = () => {
                item.quantity++;
                quantityPhrase.innerText = item.quantity;
                fruitTotal.innerText = (parseFloat(item.price) * parseFloat(item.quantity)).toFixed(2);
                market.forEach((itemMarket)=> {
                    if (itemMarket.name === item.name) {
                        itemMarket.quantity--
                        renderCards()
                        renderTotal()
                    }
                })

            }
            

        });
    }
     
}
const rightPhrase = newElement('p', 'rightPhrase', '$ 0')

function renderTotal (){
    rightPhrase.innerHTML = '';
    let newValue = 0;
    kart.forEach((item)=> {
        newValue += (item.quantity*item.price);
        rightPhrase.innerText = `$ ${(newValue).toFixed(2)}`;
    })
}

export function footer () {
       
        footerArea.innerHTML = '';  
        const leftPhrase = newElement('p', 'leftPhrase', 'Total')
        
        const footerContainer = newElement('div', 'footerContainer')
        buyArea.appendChild(footerArea)
        footerContainer.appendChild(leftPhrase)
        footerContainer.appendChild(rightPhrase)
        footerArea.appendChild(footerContainer)
        
        let newValue = 0;
        kart.forEach((item) => {
            
            newValue += (item.quantity*item.price);         
            leftPhrase.innerText = 'Total:'
            rightPhrase.innerText = `$ ${(newValue).toFixed(2)}`;
        })

}