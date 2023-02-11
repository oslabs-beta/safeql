import { parseSchema } from '../../src/parseSchema';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const schema = req.body;
  try {
    const postParsing = await parseSchema(schema); // expect parsedSchema [] //however undefined -> "test"
    return res.status(200).json(postParsing);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}
