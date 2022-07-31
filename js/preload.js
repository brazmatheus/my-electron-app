const query = require('./dbQueries')
const {contextBridge} = require("electron")

const getCidades = async () => {
    const resposta = await query.getCidades();
    console.log("preloadresposta", resposta);
    contextBridge.exposeInMainWorld("api", {
        getCidades: resposta
    })
}

getCidades();


// contextBridge.exposeInMainWorld("api", () => {

//     return { getCidades: getCidades() }
// })