
const Issuetable = (props) => {
    // const rowStyle = {border: "1px solid black"};
    const tempIssues = [
        {Id: 5,
        Owner: 'Mihir',
        Created: new Date("2022-09-18"),
        Due: new Date("2022-09-25"),
        Status: "Assigned",
        Title: "This is fifth",
    },
    {Id: 6,
        Owner: 'Legend Mihir',
        Created: new Date("2022-09-25"),
        Due: new Date("2022-09-20"),
        Status: "Resolved",
        Title: "This is Sixth",
    }];

    const [issues,setIssues] = React.useState([]);

    setTimeout(() => {
        setIssues(tempIssues);
    },2000)
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
                    <tr>
                        <td >1</td>
                        <td >This is First Issue</td>
                    </tr>
                    <tr>
                        <td >{props.Id}</td>
                        <td >{props.Title}</td>
                    </tr>

                     {/* <IssueRow Id={3} Title ={"This is Third Issue"}  Status={issue.Status} Owner={issue.Owner} /> */}
                     {issueRows}
                </tbody>
            </table>
        </div>
       
    )
} 



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


const App = () => {
    return (
         <div>
            <Issuetable/>
        </div>
    )
}

const root1 = ReactDOM.createRoot(document.getElementById('root'));
const message1 = " Section - 3 hello ";
root1.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)