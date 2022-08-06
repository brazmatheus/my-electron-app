import _ from 'lodash';
// import {getCidades} from './preload'

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    document.getElementById("teste").innerHTML = "<h3>testado</h3>"
    return element;
}

// export async function

// document.getElementById("buscarCidades").add buscarCidades(){
//     console.log("teste");
//     const cidades = await getCidades();
//     console.log(cidades);
//     document.getElementById("info").innerHTML = cidades;
// }EventListener("click", () => {
//     buscarCidades();
// })

document.body.appendChild(component());