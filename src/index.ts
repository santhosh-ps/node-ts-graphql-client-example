import express from 'express';
import { GraphQLClient } from 'graphql-request'
import { getSdk } from './generated/sdk' // THIS FILE IS THE GENERATED FILE
import dotenv from 'dotenv'

dotenv.config()
const app = express();
const port = 3000;
const endpoint = 'http://localhost:8080/v1/graphql'

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        'x-hasura-admin-secret':  process.env.ADMIN_SECRET,
    },
})
const sdk = getSdk(graphQLClient)


app.get('/api/projects', async(req, res) => {
    const data = await sdk.getProjects()
    res.send(data)
})

app.post('/api/projects', async(req, res) => {
    const projects = req.body;
    const createdProjects = await sdk.createProjects(projects);
    res.send(createdProjects)
})


app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});