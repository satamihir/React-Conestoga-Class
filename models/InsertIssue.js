require('./db');
const Issue = require('./issues')

const tempIssues=[
    {Id: 1,Status:"Assigned",Owner:"Person-A", Effort: "10",Created: new Date("2022-09-18"),Due: new Date("2022-09-25"), Title:"This is fifth issue"},
    {Id: 2,Status:"Resolved",Owner:"Person-B",Effort: "10",Created: new Date("2022-09-18"),Due: new Date("2022-09-18"), Title:"This is sixth issue"}]; 


//   Issue.insertMany(tempIssues)
//     .then(function(data){
//         console.log("Data", data)
// })

const query = Issue.find({});
query.count(function(err,count){
    console.log(count);
})

// Issue.find({})
//         .then(function(data) {
//             console.log(data);
//         })


