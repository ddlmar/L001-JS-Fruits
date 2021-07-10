import { app } from "./main.js";
import { banana, blueberry, dragonFruit, grapeFruit, lychee, raspberry } from "./dbFruits.js";
import { fruitCard, fruitContainer} from "./fruitContainer.js";

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
    const headerArea = document.createElement('div')
    const headerContainer = document.createElement('div')
    const namePhrase = document.createElement('p')
    const quantityPhrase = document.createElement('p')
    const pricePhrase = document.createElement('p')
    const totalPhrase = document.createElement('p')
    namePhrase.innerText = 'name'
    quantityPhrase.innerText = 'quantity'
    pricePhrase.innerText = 'price $'
    totalPhrase.innerText = 'total'
    buyArea.appendChild(headerArea)
    headerContainer.appendChild(namePhrase)
    headerContainer.appendChild(quantityPhrase)
    headerContainer.appendChild(pricePhrase)
    headerContainer.appendChild(totalPhrase)
    headerArea.appendChild(headerContainer)
    headerArea.classList.add('headerBL')
    headerContainer.classList.add('headerContainer')
    
    
}

export function cartContainer (){
    area.innerHTML = '';
    if (kart.length > 0) {
        kart.forEach((item) => {

            const cartGeneral = document.createElement('div')
            const productArea = document.createElement('div')  
            const fruitName = document.createElement('p')
            const fruitQuantity = document.createElement('p')
            const fruitPrice = document.createElement('p')
            const fruitTotal = document.createElement('p')
            
            fruitName.innerText = item.name;
            fruitQuantity.innerText = item.quantity;
            fruitPrice.innerText = item.price;
            fruitTotal.innerText = (parseFloat(item.price) * parseFloat(item.quantity)).toFixed(2);
            
            productArea.appendChild(fruitName)
            productArea.appendChild(fruitQuantity)
            productArea.appendChild(fruitPrice)
            productArea.appendChild(fruitTotal) 
            cartGeneral.classList.add('cartContainer')
            productArea.classList.add('productStyle')
            area.appendChild(cartGeneral)    
            cartGeneral.appendChild(productArea)
            
            
        });
    }
    
   
}

export function footer () {

        
        footerArea.innerHTML = ''; 
        

        const leftPhrase = document.createElement('p')
        const rightPhrase = document.createElement('p')
        const footerContainer = document.createElement('div')
        buyArea.appendChild(footerArea)
        footerContainer.appendChild(leftPhrase)
        footerContainer.appendChild(rightPhrase)
        footerArea.appendChild(footerContainer)
        leftPhrase.innerText = 'Total:'
        rightPhrase.innerText = '$ 0';
        footerContainer.classList.add('footerContainer')
        let newValue = 0;
        kart.forEach((item) => {
            
            newValue += (item.quantity*item.price);

            
            leftPhrase.innerText = 'Total:'
            rightPhrase.innerText = `$ ${(newValue).toFixed(2)}`;
        })
        

        
       
        
        

        

    
    
    


    
    
}