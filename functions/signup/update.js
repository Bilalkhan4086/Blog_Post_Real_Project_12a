/* Import faunaDB sdk */
const process = require('process')
const dotenv = require('dotenv')
dotenv.config();
const { query, Client } = require('faunadb')

const client = new Client({
  secret: process.env.FAUNADB_KEY,
})

const handler = async (event) => {
  const data = JSON.parse(event.body)
  const { id } = event
  console.log(`Function 'update' invoked. update id: ${id}`)
  return client
    .query(query.Update(query.Ref(`classes/items/${id}`), { data }))
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
