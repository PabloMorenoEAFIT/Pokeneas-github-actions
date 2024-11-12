import { fetchFullPokenea, fetchRawPokenea } from "../apis/fetchPokeneas.js";

export const getFullPokenea = async () => {
    const container = document.getElementById('pokenea-info');
    const phraseContainer = document.getElementById('poke-phrase');
    const imageContainer = document.getElementById('pokenea-img');
    const containerId = document.getElementById('container-id');


    const data = await fetchFullPokenea(); 
    container.innerHTML = `
        <h2>ID:${data.id}</h2>
        <h2>${data.name}</h2>
        <h2>Altura: ${data.height}m</h2>
        <h2>Habilidad: ${data.hability}</h2>
        `;

    phraseContainer.innerHTML = `
        "${data.phrase}"
    `;

    imageContainer.src = `${data.image}?t=${new Date().getTime()}`;
    containerId.innerHTML = `${data.container}`;
};

export const getRawPokenea = async () => {
    const idContainer = document.getElementById('pkn-id');
    const nameContainer = document.getElementById('pkn-name');
    const heightContainer = document.getElementById('pkn-height');
    const habilityContainer = document.getElementById('pkn-hability');
    const containerNameContainer = document.getElementById('container-name');

    const data = await fetchRawPokenea(); 

    idContainer.innerText = data.pokenea.id;
    nameContainer.innerText = data.pokenea.name;
    heightContainer.innerText = `${data.pokenea.height} m`;
    habilityContainer.innerText = data.pokenea.hability;
    containerNameContainer.innerText = data.container;
};


export const getPhilosophicalPokenea = async () => {
    const quoteContainer = document.getElementById('poke-quote');
    const imageContainer = document.getElementById('poke-image');
    const idContainer = document.getElementById('poke-id');
    const containerNameContainer = document.getElementById('poke-container');

    const data = await fetchFullPokenea(); 

    quoteContainer.innerText = `"${data.phrase}"`;
    imageContainer.src = `${data.image}?t=${new Date().getTime()}`;
    idContainer.innerText = `ID: ${data.id}`;
    containerNameContainer.innerText = `Contenedor: ${data.container}`;
};
