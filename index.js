const express = require('express');


/* This is Graph QL Code */
const {ApolloServer} = require('apollo-server-express');

const typeDefs = `type Query {
    about: String!
}
type Mutation {
    setAboutMesssage(message: String!): String
}`;

let aboutMessage = "Hello I am just a variable";

const resolvers = {
    Query: {
        about: () => aboutMessage,
    },
    Mutation: {
        setAboutMesssage,
    },
};

function setAboutMesssage(_,{message}) {
    return aboutMessage = message;
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

/* End of Graph QL Code */

const app = express();

const PORT = process.env.PORT || 5000 
app.use(express.static('./public'));

server.start().then(() => {
    server.applyMiddleware({app, path: '/graphql',cors: true});
})

app.get('/', (req,res) => {
    // res.send('API is running successfully')
    res.render('./index.html')
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));