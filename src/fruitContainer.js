import { app ,newElement} from "./main.js";
import {market} from "./dbFruits.js";
import {cartContainer, footer, kart} from "./buyList.js"

const fruitContent = document.createElement('div')

export function fruitContainer(){
    
    app.appendChild(fruitContent)
    fruitContent.classList.add('container')
    fruitContent.classList.add('fruitContainer')
    fruitCard(market[0])
    fruitCard(market[1])
    fruitCard(market[2])
    fruitCard(market[3])
    fruitCard(market[4])
    fruitCard(market[5])
    
}

export function fruitCard(fruit){

    const fruitArea = newElement('div', 'fruitCardContainer') 
    const fruitImg = newElement('div', 'image')
    const fruitDescription = newElement('div' , 'fruitDescriptionStyle')  
    const fruitName = newElement('p' , 'name' , `Name: ${fruit.name}`) 
    const fruitQuantity = newElement('p', 'quantity', `Quantity: ${fruit.quantity}`)  
    const fruitPrice = newElement('p', 'price', `Price: ${fruit.price}`)
    const descriptionArea = newElement('div','textContainer') 
    const fruitPicture = newElement('img')
    fruitContent.appendChild(fruitArea)
    fruitArea.appendChild(fruitImg)
    fruitArea.appendChild(fruitDescription)
    fruitDescription.appendChild(descriptionArea)
    fruitImg.appendChild(fruitPicture)
    descriptionArea.appendChild(fruitName)
    descriptionArea.appendChild(fruitQuantity)
    descriptionArea.appendChild(fruitPrice)
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
        fruitQuantity.innerText = `Quantity: ${fruit.quantity}`
    } 
}
