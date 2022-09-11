const {postgres} = require('./dbconnect')


exports.getCidades = async (q) => {
    let resposta;
    try{
        console.log("tentando connect");
        await postgres.connect();
        console.log("foi?");
        const res = await postgres.query(q || "select * from cidade");
        console.log("res", res);
        return JSON.stringify(res.rows);
    }catch(err){
        console.log(err);
    }
}