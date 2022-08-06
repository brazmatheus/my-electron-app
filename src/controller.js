import {getCidades} from './preload';

async function buscarCidades(){
    const cidades = await getCidades();
    console.log(cidades);
    document.getElementById("info").innerHTML = cidades;
}

document.getElementById("buscarCidades").addEventListener("click", () => {
    buscarCidades();
})

// buscarCidades();
