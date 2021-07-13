import { header } from "./header.js";
import { fruitContainer } from "./fruitContainer.js";
import { cartArea} from "./buyList.js";

export const app = document.querySelector('#app');

export function newElement(tag, className = null , value = null){
    const newVar =  document.createElement(tag);
    newVar.classList.add(className)
    newVar.innerText = value;
    
    return newVar;
}

header()
fruitContainer()
cartArea()

