const query = require('./dbQueries')
const { contextBridge } = require("electron")

const getCidades = async () => {
    const resposta = await query.getCidades(localStorage.getItem("query"));
    console.log("preloadresposta", resposta);
    return resposta;
}

exposeGetResposta();

// function exposeGetResposta() {
//     contextBridge.exposeInMainWorld("api", async () => {
//         return { 
//             getCidades: await getCidades()
//         }
//     })
// }

function exposeGetResposta(){
    contextBridge.exposeInMainWorld("api", {
        getCidades: async () => getCidades()
    })
}

// contextBridge.exposeInMainWorld("api", () => {

//     return { getCidades: getCidades() }
// })