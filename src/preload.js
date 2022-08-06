import * as query from './dbQueries';

export const getCidades = async () => {
    const resposta = await query.getCidades();
    console.log("preloadresposta", resposta);
    return resposta;
}



// contextBridge.exposeInMainWorld("api", () => {

//     return { getCidades: getCidades() }
// })