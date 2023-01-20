import { parseSchema } from "../../src/parseSchema";
import { NextApiRequest, NextApiResponse } from 'next';
import { circularCheck } from '../../src/schemaFuncs/circularCheck'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const schema  = req.body;
  try {
    const postParsing = await parseSchema(schema) // expect parsedSchema [] //however undefined -> "test"
    res.locals.circularSchema = await circularCheck(postParsing);
    console.log(circularCheck) //works great! What do we do with this data now?
    return res.status(200).json(postParsing)
  } catch (err) {
    console.log(err);
    res.status(400).send(err)
  }
}