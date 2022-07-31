const {postgres} = require('./dbconnect')


exports.getCidades = async () => {
    let resposta;
    try{
        console.log("tentando connect");
        await postgres.connect();
        console.log("foi?");
        const res = await postgres.query('SELECT * FROM cidade');
        console.log("res", res);
        return JSON.stringify(res.rows);
    }catch(err){
        console.log(err);
    }
}