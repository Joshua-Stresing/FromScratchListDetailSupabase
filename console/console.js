import { getConsole } from '../fetch-utils.js';
import { renderConsoleDetail } from '../render-utils.js';

const consoleInfoContainer = document.querySelector('.console-container');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const console = await getConsole(id);
    // console.log(console);

    const consoleInfo = renderConsoleDetail(console);
    consoleInfoContainer.append(consoleInfo);
});