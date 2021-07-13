import { app , newElement} from "./main.js";


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
            const fruitQuantity = newElement('p', 'fruitQuantity', item.quantity)     
            const fruitPrice = newElement('p', 'fruitPrice', item.price)     
            const fruitTotal = newElement('p', 'fruitTotal', (parseFloat(item.price) * parseFloat(item.quantity)).toFixed(2))        
            productArea.appendChild(fruitName)
            productArea.appendChild(fruitQuantity)
            productArea.appendChild(fruitPrice)
            productArea.appendChild(fruitTotal)   
            area.appendChild(cartGeneral)    
            cartGeneral.appendChild(productArea)      
            
        });
    }
     
}

export function footer () {
       
        footerArea.innerHTML = '';  
        const leftPhrase = newElement('p', 'leftPhrase', 'Total')
        const rightPhrase = newElement('p', 'rightPhrase', '$ 0')
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