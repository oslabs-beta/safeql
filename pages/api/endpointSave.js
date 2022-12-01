import conn from "../../lib/db"

export default async function (req, res){
    try{
        console.log('req.body: ', req.body);
        const query = `INSERT INTO endpointhistory(endpoint, userid)
        VALUES ($1, $2)`
        const values = [req.body.endpoint, req.body.username]
        const result = await conn.query(
            query,
            values
        );
        console.log("result: ", result);
        return res.status(200);
    }
    catch(err){
        console.log(err);
    }
}