async function buscarCidades(){
    try{
        localStorage.setItem("query", document.getElementById("query").value);
        const cidades = await window.api.getCidades();

        let resposta = `
            <table>
                <tr>
        `

        cidades.title.map(i => {
            resposta += `<th> ${i} </th>`
        })

        resposta += `
            </tr> <tr>
        `

        cidades.values.map((c) => {
            const valores = Object.values(c);
            for(let i of valores){
                resposta += `<td> ${i} </td>`
            }
            resposta += `
                </tr>
            `
        })


        console.log(resposta);

        document.getElementById("info").innerHTML = resposta;
    } catch(err){
        console.error(err);
    }
}

document.getElementById("buscarCidades").addEventListener("click", () => {
    console.log(document.getElementById("query").value)
    buscarCidades(document.getElementById("query").value);
})

async function lerConfigs(){
    const valores = await window.api.config;
    console.log(valores)
    let resposta = "";
    for(let v of valores){
        resposta += `<div style="display: flex;padding: 10px; background-color: ${v.color};"> ${v.title} </div>`
    }
    document.getElementById("menu").innerHTML = resposta;
}

document.getElementById("item_menu").addEventListener("click", async () => {
    await lerConfigs()
})
