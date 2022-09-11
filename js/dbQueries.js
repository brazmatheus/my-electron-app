const { postgres, pool } = require('./dbconnect')


exports.getCidades = async (q) => {
    let resposta;
    try {
        console.log("tentando connect");
        await pool.connect();
        console.log("foi?");
        const res = await pool.query(q);
        console.log("res", res);

        let title = [];

        res.fields.map((m, i) => {
            title.push(m.name)
        })

        const resposta = {
            title,
            values: res.rows
        }

        return resposta;
    } catch (err) {
        console.log(err);
    }
}