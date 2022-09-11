const {postgres, pool} = require('./dbconnect')


exports.getCidades = async (q) => {
    let resposta;
    try{
        console.log("tentando connect");
        await pool.connect();
        console.log("foi?");
        const res = await pool.query(q);
        console.log("res", res);
        // await pool.end();
        return JSON.stringify(res.rows);
    }catch(err){
        console.log(err);
    }
}