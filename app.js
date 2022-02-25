// import functions and grab DOM elements

import { getConsoles } from './fetch-utils.js';
import { renderConsoles } from './render-utils.js';

// let state

const consoleList = document.querySelector('.console-container');

// set event listeners 

window.addEventListener('load', async () => {
    const consoles = await getConsoles();

    for (let console of consoles) {
        const consoleDiv = renderConsoles(console);
        consoleList.append(consoleDiv);

    }
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
