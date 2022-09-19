
const Issuetable = (props) => {
    const rowStyle = {border: "1px solid black"};
    const issues = [
        {Id: 5,
        Title: "This is fifth",
    },
    {Id: 6,
        Title: "This is Sixth",
    }];
    const issueRows = issues.map(issue => (
        <IssueRow rowStyle={rowStyle} Id={issue.Id} Title={issue.Title} />
    ))
    return (
        <div>
            <h2>This is placeholder for issue filter</h2>
            <table>
                <thead>
                    <tr>
                        <th style={{border: "1px solid black"}}>ID</th>
                        <th style={rowStyle}>TITLE</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={rowStyle}>1</td>
                        <td style={rowStyle}>This is First Issue</td>
                    </tr>
                    <tr>
                        <td style={rowStyle}>{props.Id}</td>
                        <td style={rowStyle}>{props.Title}</td>
                    </tr>

                     <IssueRow rowStyle={rowStyle} Id={3} Title ={"This is Third Issue"} />
                     {issueRows}
                </tbody>
            </table>
        </div>
       
    )
} 



const IssueRow = (props) => {
    const rowStyle = {border: "1px solid black"};

    return (
                <tr>
                    <td style={rowStyle}>{props.Id}</td>
                    <td style={rowStyle}>{props.Title}</td>
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