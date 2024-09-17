import { app ,newElement} from "./main.js";
import {market} from "./dbFruits.js";
import {cartContainer, footer, kart} from "./buyList.js"

const fruitContent = document.createElement('div')

export function fruitContainer(){
    
    app.appendChild(fruitContent)
    fruitContent.classList.add('container')
    fruitContent.classList.add('fruitContainer')
   /* fruitCard(market[0])
    fruitCard(market[1])
    fruitCard(market[2])
    fruitCard(market[3])
    fruitCard(market[4])
    fruitCard(market[5])
    */
   renderCards()
}
export function renderCards() {
    fruitContent.innerHTML = '';
    market.forEach((item)=> {
        fruitCard(item)
    })
}
export function fruitCard(fruit){

    const fruitArea = newElement('div', 'fruitCardContainer') 
    const fruitImg = newElement('div', 'image')
    const fruitDescription = newElement('div' , 'fruitDescriptionStyle')  
    const fruitName = newElement('div' , 'nameContainer') 
    const nameLeft = newElement('p', 'nameLeft', 'Name: ')
    const nameRight  = newElement('p', 'nameRight', `${fruit.name}`);
   
    const fruitQuantity = newElement('div', 'quantityContainer')  
    const quantityLeft = newElement('p', 'nameLeft', 'Quantity: ')
    const quantityRight = newElement('p', 'nameRight', fruit.quantity)

    const fruitPrice = newElement('div', 'priceContainer')
    const fruitLeft = newElement('p', 'nameLeft' , 'Price: ')
    const fruitRight = newElement('p', 'nameRight', `$${fruit.price}`)
    const descriptionArea = newElement('div','textContainer') 
    const fruitPicture = newElement('img')
    const unityPhrase = newElement('p', 'unityPhrase', 'uni. 1')
    fruitContent.appendChild(fruitArea)
    fruitArea.appendChild(fruitImg)
    fruitArea.appendChild(fruitDescription)
    fruitDescription.appendChild(descriptionArea)
    fruitImg.appendChild(fruitPicture)
    descriptionArea.appendChild(fruitName)
    descriptionArea.appendChild(fruitQuantity)
    descriptionArea.appendChild(fruitPrice)
    descriptionArea.appendChild(unityPhrase)
    fruitName.appendChild(nameLeft)
    fruitName.appendChild(nameRight)
    fruitQuantity.appendChild(quantityLeft)
    fruitQuantity.appendChild(quantityRight)
    fruitPrice.appendChild(fruitLeft)
    fruitPrice.appendChild(fruitRight)
    fruitPicture.setAttribute("src", fruit.imgSrc)
    
    fruitArea.onclick = () => {       
         
        if (fruit.quantity > 0) {
            fruit.quantity -= 1;    
           
            for (let index = 0; index < market.length; index++) {
                if (market[index].name === fruit.name) {
                    if (kart.length === 0) {
                        kart.push({
                            name: fruit.name,
                            price: fruit.price,
                            quantity: 1,
                        })                    
                    }else {
                        
                        let exists = false;
                        for (let ii = 0; ii < kart.length; ii++) {
                            
                            if (kart[ii].name === fruit.name) {
                                
                                exists = true;
                                kart[ii].quantity++;
                               
                            }                       
                        }
                         if(!exists){ 
                            kart.push({
                                name: fruit.name,
                                price: fruit.price,
                                quantity: 1,
                            })                             
                        }
                       
                    }
                    cartContainer()                   
                    footer()
                }
                
            }              
        }   
        quantityRight.innerText = `${fruit.quantity}`;
    } 
}
