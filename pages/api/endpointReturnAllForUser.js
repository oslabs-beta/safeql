const db = require('../../lib/db');

//returns all endpoints for specified user

export default async function (req, res) {
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

// import type { NextApiRequest, NextApiResponse } from 'next'

// export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
//   const {
//     query: { id, name },
//     method,
//   } = req

//   switch (method) {
//     case 'GET':
//       // Get data from your database
//       res.status(200).json({ id, name: `User ${id}` })
//       break
//     case 'PUT':
//       // Update or create data in your database
//       res.status(200).json({ id, name: name || `User ${id}` })
//       break
//     default:
//       res.setHeader('Allow', ['GET', 'PUT'])
//       res.status(405).end(`Method ${method} Not Allowed`)
//   }
// }
