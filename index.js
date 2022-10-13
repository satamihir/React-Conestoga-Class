const express = require('express');
require('./models/db');

const Issue = require('./models/issues');


/* This is Graph QL Code */
const {ApolloServer} = require('apollo-server-express');


const typeDefs = 
`
input inputIssue {
    Status: String!
    Owner: String
    Effort: Int
    Title: String
}


type issue {
    Id: String!
    Status: String!
    Owner: String
    Effort: Int
    Created: String
    Due: String
    Title: String
}

type Query {
    about: String!
    issueList: [issue]
}
type Mutation {
    setAboutMesssage(message: String!): String
    addSingleIssue(issue: inputIssue): issue
}`;

let aboutMessage = "Hello I am just a variable";
const tempIssues=[
    {Id: 1,Status:"Assigned",Owner:"Person-A", Effort: "10",Created: new Date("2022-09-18"),Due: new Date("2022-09-25"), Title:"This is fifth issue"},
    {Id: 2,Status:"Resolved",Owner:"Person-B",Effort: "10",Created: new Date("2022-09-18"),Due: new Date("2022-09-18"), Title:"This is sixth issue"}]; 

const resolvers = {
    Query: {
        about: () => aboutMessage,
        issueList
    },
    Mutation: {
        setAboutMesssage,
        addSingleIssue
    },
};

async function issueList() {
  return await Issue.find({});

    // return tempIssues;
}

function setAboutMesssage(_,{message}) {
    return aboutMessage = message;
}

async function addSingleIssue(_,{issue}) {
    const query = Issue.find({});
    query.count(function(err,count){
        issue.Id = count + 1;
        issue.Created = new Date();
        issue.Due = new Date();

        Issue.create(issue);
        console.log(issue);
        return issue;
    })
    
    
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