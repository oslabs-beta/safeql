const db = require('../../lib/db');
import { NextApiRequest, NextApiResponse } from 'next';

//returns all endpoints for specified user

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('req.body: ', req.body);
    //   const values = [req.body.userid]
    const query = `SELECT endpoint FROM endpointHistory WHERE userid = '${req.body.userid}'`;

    const result = await db.query(query);
    console.log('result: ', result);
    return res.status(200).json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}