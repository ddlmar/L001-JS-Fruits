import { header } from "./header.js";
import { fruitContainer } from "./fruitContainer.js";
import { cartArea} from "./buyList.js";

export const app = document.querySelector('#app');

header()
fruitContainer()
cartArea()

/*const fruitGrid = document.createElement('div')
app.appendChild(fruitGrid)
fruitGrid.classList.add('fruitContent')
const attributeFruit = document.createAttribute('class')
attributeFruit.value = 'fruitContent'
*/
