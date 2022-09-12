const query = require('./dbQueries')
const { contextBridge } = require("electron")
const fs = require('fs/promises');

const getCidades = async () => {
    const resposta = await query.getCidades(localStorage.getItem("query"));
    console.log("preloadresposta", resposta);
    return resposta;
}

exposeGetResposta();
async function exposeGetResposta() {
    
    console.log("configantes" )
    const config = await lerConfig()
    console.log("config", config)
    contextBridge.exposeInMainWorld("api", {
        getCidades: async () => getCidades(),
        config: JSON.parse(config)
    })
}


async function lerConfig() {
    try {
        const data = await fs.readFile(`C:\\Users\\mathe\\OneDrive\\Área de Trabalho\\configs.json`, { encoding: 'utf8' });
        console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
}

