export function renderConsoles(console) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('console-data');

    p.textContent = console.name;
    img.src = `./assets/${console.id}.png`;
    a.href = './console/index.html';

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderConsoleDetail(console) {
    const div = document.createElement('div');
    const nameEl = document.createElement('h2');
    const yearEl = document.createElement('p');
    const img = document.createElement('img');
    const descEl = document.createElement('p');

    div.classList.add('console-detail');

    nameEl.textContent = console.name;
    nameEl.classList.add('name');

    yearEl.textContent = console.year;
    yearEl.classList.add('year');

    descEl.textContent = console.desc;
    descEl.classList.add = ('desc');

    img.src = `../assets/${console.id}.png`;

    div.append(nameEl, yearEl, img, descEl);

    return div;
}