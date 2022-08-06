import {Client} from 'pg';

const client = new Client({
    database: 'pine',
    host: '172.18.0.3',
    port: 5432,
    user: 'postgres',
    password: 'teste123'
})

async function indexValor(){

    try{
        console.log("vai?");
        await client.connect();

        let resposta = ""
        console.log("sera?");

        client.query("select * from cidade", (err, result) => {
            console.log("entrou?");
            err ? console.log(err.message) : console.log(result);
        })


        console.log("resposta", resposta);
    
        const valor = "Será mesmo que vai dar certo?";
    
        return (
            `<div>
                ${valor}
            </div>`
        )
    } catch (err){
        console.log(err);
    }


}

async function montarDiv(){
    console.log("porra")
    await indexValor();
    document.getElementById("info").innerHTML = indexValor();
}


montarDiv();