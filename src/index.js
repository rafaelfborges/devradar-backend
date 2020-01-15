require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGO_URL_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: 'Hello Omnistack' });
});

app.listen(process.env.PORT);