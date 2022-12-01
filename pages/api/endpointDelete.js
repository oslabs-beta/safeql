const db = require('../../lib/db')

export default async function (req, res){
    try{
        console.log('req.body: ', req.body);
        const query = `DELETE FROM endpointhistory(endpoint, userid) WHERE userid = ${1}`
        //come bacl to this to get right query
        const values = [req.body.endpoint, req.body.userid]
        const result = await db.query(
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