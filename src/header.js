import { app , newElement} from "./main.js"

export function header(){
    
    const createdHeader = newElement('div', 'container')
    const tittle = newElement('h1', 'tittleStyle', 'fruit kart') 
    createdHeader.classList.add('headerStyle')   
    app.appendChild(createdHeader)
    createdHeader.appendChild(tittle)
    
}
