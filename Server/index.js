const express = require('express')
const mongoo = require('mongoose')
const { ApolloServer } = require('apollo-server-express');
const path = require('path');


const { clickableRoots,
    clickableTypeDef,
    statRoot,
    statTypeDef,
    userRoot,
    userTypeDef} = require('./GraphQl/Schemas');

const {authMiddleware} = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 4100;
const app = express();









const server = new ApolloServer({
    userTypeDef,
    clickableTypeDef,
    statTypeDef,
    statRoot,
    clickableRoots,
    userRoot,
    context: authMiddleware
});

server.applyMiddleware({ app });

//mongoo.connect('mongodb://localhost/pie',{ useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


console.log(path.join(__dirname,"../tsclient/build/"));
app.use(express.static(path.join(__dirname, '../tsclient/build/')));
// app.use(expr.static(path.join(__dirname, 'public')));
// app.use(expr.static(path.join(__dirname, 'public/control')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../tsclient/build/'))
})

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        // log where we can go to test our GQL API
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});



