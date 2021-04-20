/* Import faunaDB sdk */
const process = require('process')
const dotenv = require('dotenv')
dotenv.config();
const { query, Client } = require('faunadb')

const client = new Client({
  secret: process.env.FAUNADB_KEY,
})

const handler = async (event) => {
  let data = JSON.parse(event.body);
  console.log(`Function 'read' invoked. Read id: ${event.id}`);
  return client
    .query(query.Get(
      query.Match(query.Index('EP'), [data.email,data.password])
    ))
    .then((response) => {
      console.log('success', response)
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      }
    })
    .catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      }
    })
}

module.exports = { handler }
