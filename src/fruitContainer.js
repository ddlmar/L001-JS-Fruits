import { app } from "./main.js";
import { banana, blueberry, dragonFruit, grapeFruit, lychee, raspberry } from "./dbFruits.js";
import {cartContainer, kart} from "./buyList.js"

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

/*function newElement(tag, classList = []) {
    let element = document.createElement(tag);
    if(classList.isArray()) {
        classList.forEach( (className, index) => {
            element.classList.add(className);
        });
    }
    return element;
} */

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

    const numberOfFruits = fruit.quantity;
    let trocandoValor;
    fruitArea.onclick = () => {            
        if (fruit.quantity > 0) {
            fruit.quantity -= 1; 
                 
        }
        fruitQuantity.innerText = `Quantity: ${fruit.quantity}`
        if (!kart.includes(fruit)) {
        cartContainer(fruit)
        kart.push(fruit)     
        console.log('if de adicionar no card')
        }
        for(let index = 0 ; index < kart.length ; index++){
        
        if (kart[index].name === fruit.name) {
            trocandoValor = numberOfFruits -kart[index].quantity;
            console.log(trocandoValor)
            
            }
        }
      
    }
    
} 
/*for(let i = 0 ; i <= kart.length; i++){
    if (kart.length <= 0 || kart[i].name !== fruit.name) {
        kart.push({
            name: fruit.name,
            quantity: 1,
            price: fruit.price,
        })
        console.log("entrou no primeiro if")
    }else if (kart[i].name === fruit.name) {
        console.log('entrou no segundo if')
        if (fruit.quantity > 0) {
            fruit.quantity -= 1;              
            const index = kart.find(fruit.name)
            kart[index].quantity++;
        }
    }
}
    fruitQuantity.innerText = `Quantity: ${fruit.quantity}`
    cartContainer(fruit)  */