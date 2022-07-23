const dotenv = require('dotenv')

dotenv.config()
module.exports = {
    schema: [
        {
            'http://localhost:8080/v1/graphql': {
                headers: {
                    'x-hasura-admin-secret':  process.env.ADMIN_SECRET,
                },
            },
        },
    ],
    documents: ['./**/*.gql.ts'],
    overwrite: true,
    generates: {
        './src/generated/sdk.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-graphql-request',
            ],
        },
    },
};
