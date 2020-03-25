const express = require('express');

const app = express();

app.use(express.json());

app.post('/', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        "hello": "earth",
    });
});

app.listen(3333);