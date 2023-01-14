const db = require('../../lib/db');
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('req.body: ', req.body);
    const query = `DELETE FROM endpointhistory WHERE endpoint = '${req.body.endpoint}' AND userid = '${req.body.userid}' RETURNING *`;

    // const values = [req.body.endpoint, req.body.userid]
    const result = await db.query(query);
    console.log('result: ', result);
    return res.status(200).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}
