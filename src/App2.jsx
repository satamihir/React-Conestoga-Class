

const IssueRow = (props) => {
    return (
                <tr>
                    <td>{props.Id}</td>
                    <td>{props.Title}</td>
                    <td>{props.Status}</td>
                    <td>{props.Owner}</td>
                </tr>
    )
}



const Issuetable = ({issues}) => {
    // const rowStyle = {border: "1px solid black"};
    // const tempIssues = [
    //     {Id: 1,
    //     Owner: 'Mihir',
    //     Created: new Date("2022-09-18"),
    //     Due: new Date("2022-09-25"),
    //     Status: "Assigned",
    //     Title: "This is First",
    // },
    // {Id: 2,
    //     Owner: 'Legend Mihir',
    //     Created: new Date("2022-09-25"),
    //     Due: new Date("2022-09-20"),
    //     Status: "Resolved",
    //     Title: "This is Second",
    // }];

    // const newIssues = { 
    //     Owner: 'Mihir',
    //     Created: new Date("2022-09-18"),
    //     Due: new Date("2022-09-25"),
    //     Status: "Assigned",
    //     Title: "This is third",
    // }

   

    // const [issues,setIssues] = React.useState([]);

    // setTimeout(() => {
    //     setIssues(tempIssues);
    // },2000)

    // let counter = 0;
    // React.useEffect(() => {
    //     console.log("Hello",counter);
    //     setTimeout(() => {
    //         AddSingleIssue(newIssues)
    //     },1000);
      
    //     counter++;
    // },[issues]);

    // const AddSingleIssue = (newIssues) => {
    //     newIssues.Id = issues.length +1 ;
    //     let IssueList = issues.slice();
    //     IssueList.push(newIssues);
    //     setIssues(IssueList);


    // }
    const issueRows = issues.map(issue => (
        <IssueRow key={issue.Id} Id={issue.Id} Title={issue.Title} Status={issue.Status} Owner={issue.Owner} />
    ))
    return (
        <div>
            <h2>This is placeholder for issue filter</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th >TITLE</th>
                        <th>STATUS</th>
                        <th>OWNER</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td >{issues.Id}</td>
                        <td >{issues.Title}</td>
                    </tr> */}

                     {/* <IssueRow Id={3} Title ={"This is Third Issue"}  Status={issue.Status} Owner={issue.Owner} /> */}
                     {issueRows}
                </tbody>
            </table>
        </div>
       
    )
} 

const AddIssue = ({AddSingleIssue}) => {
    const newIssue = { 
        Owner: 'Mihir',
        Created: new Date("2022-09-18"),
        Due: new Date("2022-09-25"),
        Status: "Newly Assigned",
        Title: "This is third",
    }

    React.useEffect(() => {
        console.log("Hello",counter);
        setTimeout(() => {
            AddSingleIssue(newIssue);
        },1000);
    },[]);
    return (<h1>Add Issue</h1>)

}


const IssueList = () => {

    const tempIssues = [
        {Id: 1,
        Owner: 'Mihir',
        Created: new Date("2022-09-18"),
        Due: new Date("2022-09-25"),
        Status: "Assigned",
        Title: "This is First",
    },
    {Id: 2,
        Owner: 'Legend Mihir',
        Created: new Date("2022-09-25"),
        Due: new Date("2022-09-20"),
        Status: "Resolved",
        Title: "This is Second",
    }];


    const [issues,setIssues] = React.useState(tempIssues);

    const AddSingleIssue = (newIssue) => {
        newIssue.Id = issues.length + 1 ;
        let Issuelist = issues.slice();
        Issuelist.push(newIssue);
        setIssues(Issuelist);

    return (
        <div>
            <Issuetable issues={issues} />
            <AddIssue AddSingleIssue={AddSingleIssue}  />
        </div>
    )
}
}


// const App = () => {
//     return (
//          <div>
//             <IssueList />
//         </div>
//     )
// }   

const root1 = ReactDOM.createRoot(document.getElementById('root'));
const message1 = " Section - 3 hello ";

root1.render(
        <IssueList />
)