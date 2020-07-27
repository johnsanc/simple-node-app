const utils = require('./utils');

const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => res.send("Welcome to the simple node server."));

app.post('/test', express.json(), (req, res) => {
    const stringToCut = req.body.string_to_cut;
    const cutString = utils.getModifiedString(stringToCut, 3);
    const response = { return_string: cutString };

    res.status(200).send(JSON.stringify(response));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
