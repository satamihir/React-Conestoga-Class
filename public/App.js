const Issuetable = props => {
  const rowStyle = {
    border: "1px solid black"
  };
  const issues = [{
    Id: 5,
    Title: "This is fifth"
  }, {
    Id: 6,
    Title: "This is Sixth"
  }];
  const issueRows = issues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
    rowStyle: rowStyle,
    Id: issue.Id,
    Title: issue.Title
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "This is placeholder for issue filter"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      border: "1px solid black"
    }
  }, "ID"), /*#__PURE__*/React.createElement("th", {
    style: rowStyle
  }, "TITLE"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "1"), /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "This is First Issue")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, props.Id), /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, props.Title)), /*#__PURE__*/React.createElement(IssueRow, {
    rowStyle: rowStyle,
    Id: 3,
    Title: "This is Third Issue"
  }), issueRows)));
};

const IssueRow = props => {
  const rowStyle = {
    border: "1px solid black"
  };
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, props.Id), /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, props.Title));
};

const App = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Issuetable, null));
};

const root1 = ReactDOM.createRoot(document.getElementById('root'));
const message1 = " Section - 3 hello ";
root1.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)));