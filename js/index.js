async function buscarCidades(){
    const queryReq = document.getElementById("query").value;
    console.log(window.api);
    const cidades = await window.api.getCidades(queryReq);
    document.getElementById("info").innerHTML = cidades;
}

document.getElementById("buscarCidades").addEventListener("click", () => {
    console.log(document.getElementById("query").value)
    buscarCidades(document.getElementById("query").value);
})

// buscarCidades();
