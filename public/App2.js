const IssueRow = props => {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.Id), /*#__PURE__*/React.createElement("td", null, props.Title), /*#__PURE__*/React.createElement("td", null, props.Status), /*#__PURE__*/React.createElement("td", null, props.Owner));
};

const Issuetable = ({
  issues
}) => {
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
  const issueRows = issues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
    key: issue.Id,
    Id: issue.Id,
    Title: issue.Title,
    Status: issue.Status,
    Owner: issue.Owner
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "This is placeholder for issue filter"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "TITLE"), /*#__PURE__*/React.createElement("th", null, "STATUS"), /*#__PURE__*/React.createElement("th", null, "OWNER"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, issueRows)));
};

const AddIssue = ({
  AddSingleIssue
}) => {
  const newIssue = {
    Owner: 'Mihir',
    Created: new Date("2022-09-18"),
    Due: new Date("2022-09-25"),
    Status: "Newly Assigned",
    Title: "This is third"
  };
  React.useEffect(() => {
    console.log("Hello", counter);
    setTimeout(() => {
      AddSingleIssue(newIssue);
    }, 1000);
  }, []);
  return /*#__PURE__*/React.createElement("h1", null, "Add Issue");
};

const IssueList = () => {
  const tempIssues = [{
    Id: 1,
    Owner: 'Mihir',
    Created: new Date("2022-09-18"),
    Due: new Date("2022-09-25"),
    Status: "Assigned",
    Title: "This is First"
  }, {
    Id: 2,
    Owner: 'Legend Mihir',
    Created: new Date("2022-09-25"),
    Due: new Date("2022-09-20"),
    Status: "Resolved",
    Title: "This is Second"
  }];
  const [issues, setIssues] = React.useState(tempIssues);

  const AddSingleIssue = newIssue => {
    newIssue.Id = issues.length + 1;
    let Issuelist = issues.slice();
    Issuelist.push(newIssue);
    setIssues(Issuelist);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Issuetable, {
      issues: issues
    }), /*#__PURE__*/React.createElement(AddIssue, {
      AddSingleIssue: AddSingleIssue
    }));
  };
}; // const App = () => {
//     return (
//          <div>
//             <IssueList />
//         </div>
//     )
// }   


const root1 = ReactDOM.createRoot(document.getElementById('root'));
const message1 = " Section - 3 hello ";
root1.render( /*#__PURE__*/React.createElement(IssueList, null));