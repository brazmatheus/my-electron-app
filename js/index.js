async function buscarCidades(){
    try{
        localStorage.setItem("query", document.getElementById("query").value);
        const cidades = await window.api.getCidades();
        document.getElementById("info").innerHTML = cidades;
    } catch(err){
        console.error(err);
    }
}

document.getElementById("buscarCidades").addEventListener("click", () => {
    console.log(document.getElementById("query").value)
    buscarCidades(document.getElementById("query").value);
})

// buscarCidades();
