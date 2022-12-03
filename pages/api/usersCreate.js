const db = require('../../lib/db')

//create user functionality - creates a user and password

export default async function (req, res){
    try{
        console.log('req.body: ', req.body);
        const query = `INSERT INTO users(username, password)
        VALUES ($1, $2) RETURNING *`
        const values = [req.body.username, req.body.password]
        const result = await db.query(
            query,
            values
        );
        console.log("result: ", result);
        return res.status(200).json(result.rows[0]);
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
}