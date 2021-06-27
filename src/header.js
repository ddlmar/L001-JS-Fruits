import { app } from "./main.js"

export function header(){
    const createdHeader = document.createElement('div')
    const tittle = document.createElement('h1')
    createdHeader.classList.add('container')
    createdHeader.classList.add('headerStyle')
    tittle.classList.add('tittleStyle')
    tittle.innerText = 'fruit kart'
    app.appendChild(createdHeader)
    createdHeader.appendChild(tittle)
    
}
