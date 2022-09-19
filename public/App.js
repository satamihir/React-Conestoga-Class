const Issuetable = props => {
  // const rowStyle = {border: "1px solid black"};
  const tempIssues = [{
    Id: 5,
    Owner: 'Mihir',
    Created: new Date("2022-09-18"),
    Due: new Date("2022-09-25"),
    Status: "Assigned",
    Title: "This is fifth"
  }, {
    Id: 6,
    Owner: 'Legend Mihir',
    Created: new Date("2022-09-25"),
    Due: new Date("2022-09-20"),
    Status: "Resolved",
    Title: "This is Sixth"
  }];
  const [issues, setIssues] = React.useState([]);
  setTimeout(() => {
    setIssues(tempIssues);
  }, 2000);
  const issueRows = issues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
    key: issue.Id,
    Id: issue.Id,
    Title: issue.Title,
    Status: issue.Status,
    Owner: issue.Owner
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "This is placeholder for issue filter"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "TITLE"), /*#__PURE__*/React.createElement("th", null, "STATUS"), /*#__PURE__*/React.createElement("th", null, "OWNER"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "1"), /*#__PURE__*/React.createElement("td", null, "This is First Issue")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.Id), /*#__PURE__*/React.createElement("td", null, props.Title)), issueRows)));
};

const IssueRow = props => {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.Id), /*#__PURE__*/React.createElement("td", null, props.Title), /*#__PURE__*/React.createElement("td", null, props.Status), /*#__PURE__*/React.createElement("td", null, props.Owner));
};

const App = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Issuetable, null));
};

const root1 = ReactDOM.createRoot(document.getElementById('root'));
const message1 = " Section - 3 hello ";
root1.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)));