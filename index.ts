import express from 'express';
import { GraphQLClient } from 'graphql-request'
import { getSdk } from './src/generated/sdk' // THIS FILE IS THE GENERATED FILE

const app = express();
const port = 3000;
const endpoint = 'https://perfect-redbird-87.hasura.app/v1/graphql'

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        'x-hasura-admin-secret':  process.env.ADMIN_SECRET,
    },
})
const sdk = getSdk(graphQLClient)


app.get('/api/project', async(req, res) => {
    const data = await sdk.getProjects()
    res.send(data)
})


app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});