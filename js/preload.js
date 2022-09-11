const query = require('./dbQueries')
const { contextBridge } = require("electron")

const getCidades = async (q) => {
    const param = q;
    console.log("param", param)
    const resposta = await query.getCidades(param);
    console.log("preloadresposta", resposta);
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