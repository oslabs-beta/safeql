import db from "../../lib/db"

//save endpoint functionality - Save a single endpoint with associated user id.

export default async function (req, res){
    try{
        console.log('req.body: ', req.body);
        const query = `INSERT INTO endpointhistory(endpoint, userid)
        VALUES ($1, $2) RETURNING *`
        const values = [req.body.endpoint, req.body.userid]
        const result = await db.query(
            query,
            values
        );
        console.log("result: ", result);
        return res.status(200).json(result.rows[0]);
    }
    catch(err){
        console.log(err);
        res.status(400).send(error);
    }
}