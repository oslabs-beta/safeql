const db = require('../../lib/db')

// export default async function handler(req, res) {
//   const endpointhistory = await db.query('SELECT * FROM endpointhistory')

//   console.log('endpointHistory', endpointhistory.rows);

//   return res.status(200).json(endpointhistory.rows)
// }
export default async function (req, res){
  try{
      console.log('req.body: ', req.body);
      const values = [req.body.endpoint, req.body.userid]
      const query = `SELECT * FROM endpointhistory(endpoint, userid)
      VALUES ($1, $2) RETURNING *`
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
//1. create an endpoint (make sure you include the user Id, may require a query to get that id based on username?) POST

//2. return all endpoints based on username or user id GET

//3. delete endpoint



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
