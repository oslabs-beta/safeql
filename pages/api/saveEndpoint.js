import conn from "../../lib/db"

export default async function saveEndpoint (req, res){
    try{
        console.log('req.body: ', req.body);
        const query = `INSERT INTO endpointhistory(endpoint, username)
        VALUES ($1, $2)`
        const values = [req.body.endpoint, req.body.username]
        const result = await conn.query(
            query,
            values
        );
        console.log("result: ", result);
    }
    catch(err){
        console.log(err);
    }
}