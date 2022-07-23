module.exports = {
    schema: [
        {
            'https://perfect-redbird-87.hasura.app/v1/graphql': {
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
