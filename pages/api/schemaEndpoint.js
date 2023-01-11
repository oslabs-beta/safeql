import { parseSchema } from "../../src/parseSchema";

export default async function (req, res) {
  const schema  = req.body;
  try {
    const postParsing = await parseSchema(schema) // expect parsedSchema [] //however undefined -> "test"
    return res.status(200).json(postParsing)
  } catch (err) {
    console.log(err);
    res.status(400).send(err)
  }
}