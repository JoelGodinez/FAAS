const { app,input } = require('@azure/functions');

const cosmosInput = input.cosmosDB({
<<<<<<< HEAD
    databaseName: 'TestDB',
    containerName: 'TestItems',
=======
    databaseName: 'DemoDatabase',
    containerName: 'Items',
>>>>>>> 17fca5aa9a04ce3a29ca31d5a6ff076a1a5dee2e
    connection: 'CosmosDB',
    sqlQuery: "select * from c"
});

app.http('getItems', {
    methods: ['GET'],
    authLevel: 'anonymous',
    extraInputs: [cosmosInput],
    route: 'items',
    handler: async (request, context) => {
        const items = context.extraInputs.get(cosmosInput);
        return {
            body: JSON.stringify(items),
            status: 200
        };
    }
});
