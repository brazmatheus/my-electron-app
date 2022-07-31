function buscarCidades(){
    const cidades = window.api.getCidades;
    console.log(window.api);
    document.getElementById("info").innerHTML = cidades;
}

document.getElementById("buscarCidades").addEventListener("click", () => {
    buscarCidades();
})

// buscarCidades();
