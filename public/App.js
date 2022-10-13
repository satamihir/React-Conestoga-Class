// const App = () =>{
//     return(
//     <div id="greet">
//          <h2>Welcome to adv full stack programming</h2>
//     </div>
//     )
// }
const IssueFilter = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Issue Filter");
};

const IssueRow = props => {
  // const rowstyle ={ border:"1px solixd"};
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.Id), /*#__PURE__*/React.createElement("td", null, props.Status), /*#__PURE__*/React.createElement("td", null, props.Owner), /*#__PURE__*/React.createElement("td", null, props.Effort), /*#__PURE__*/React.createElement("td", null, props.Created), /*#__PURE__*/React.createElement("td", null, props.Due), /*#__PURE__*/React.createElement("td", null, props.Title));
};

const IssueTable = ({
  issues
}) => {
  const rowstyle = {
    border: "1px solid"
  }; //   const tempIssues=[
  //       {Id: 1,Status:"Assigned",Owner:"Person-A",Cerated: new Date("2022-09-18"),Due: new Date("2022-09-25"), Title:"This is fifth issue"},
  //       {Id: 2,Status:"Resolved",Owner:"Person-B",Cerated: new Date("2022-09-18"),Due: new Date("2022-09-18"), Title:"This is sixth issue"}]; 
  //   // const issues=[
  //   //   {Id: 1,Status:"Assigned",Owner:"Person-A",Cerated: new Date("2022-09-18"),Due: new Date("2022-09-25"), Title:"This is fifth issue"},
  //   //   {Id: 2,Status:"Resolved",Owner:"Person-B",Cerated: new Date("2022-09-18"),Due: new Date("2022-09-18"), Title:"This is sixth issue"}
  //   // ];
  //  const newIssue ={Status:"Assigned",Owner:"Person-B",Cerated: new Date("2022-09-18"),Due: new Date("2022-09-18"), Title:"This is sixth issue"}; 
  //   const [issues,setIssues]= React.useState(tempIssues);
  // setTimeout(()=>{
  //   setIssues(tempIssues);
  // },2000);

  /* let counter=0;
  React.useEffect(()=>{
    console.log("hello",counter);
    //Add single Issue to the state variable
      setTimeout(() => {
      AddSingleIssue(newIssue);  
    }, 1000);
      counter++;
  },[issues]);
    const AddSingleIssue =(newIssue) =>{
    newIssue.Id =issues.length + 1;
    let IssueList = issues.slice();
    IssueList.push(newIssue);
    setIssues(IssueList);
  }
  */

  const issueRows = issues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
    rowstyle: rowstyle,
    Id: issue.Id,
    Status: issue.Status,
    Owner: issue.Owner,
    Effort: issue.Effort,
    Created: issue.Created.toString(),
    Due: issue.Due.toString(),
    Title: issue.Title
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Table"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Id"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Due"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, issueRows)));
};

const AddIssue = ({
  AddSingleIssue
}) => {
  // const newIssue ={Status:"Assigned",Owner:"Person-B",Cerated: new Date("2022-09-18"),Due: new Date("2022-09-18"), Title:"This is sixth issue"}; 
  // React.useEffect(()=>{
  //   setTimeout(() => {
  //     AddSingleIssue(newIssue);  
  //   }, 1000);
  // },[]);
  function handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.addForm;
    console.log(form);
    let newIssue = {
      Status: form.Status.value,
      Owner: form.Owner.value,
      Effort: parseInt(form.Effort.value),
      // Created: new Date(form.Created.value),
      // Due: new Date(form.Due.value),
      Title: form.Title.value
    };
    AddSingleIssue(newIssue);
    console.log('hello', newIssue);
    form.reset();
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Add Issue"), /*#__PURE__*/React.createElement("form", {
    name: "addForm",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "Status",
    placeholder: "Status"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "Owner",
    placeholder: "Owner"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "Effort",
    placeholder: "Effort"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "Title",
    placeholder: "Title"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")));
};

const IssueList = () => {
  // const tempIssues=[
  //     {Id: 1,Status:"Assigned",Owner:"Person-A", Effort: "10",Cerated: new Date("2022-09-18"),Due: new Date("2022-09-25"), Title:"This is fifth issue"},
  //     {Id: 2,Status:"Resolved",Owner:"Person-B",Effort: "10",Cerated: new Date("2022-09-18"),Due: new Date("2022-09-18"), Title:"This is sixth issue"}]; 
  const [issues, setIssues] = React.useState([]);
  const query = `
  query {
    issueList {
      Id
      Status
      Owner
      Effort
      Created
      Due
      Title
    }
  }
  `;
  React.useEffect(() => {
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(async function (response) {
      let issueData = await response.json();
      setIssues(issueData.data.issueList);
      console.log('hello', issueData);
    });
  }, []);

  const AddSingleIssue = newIssue => {
    let singleIssue = {};
    singleIssue.issue = newIssue;
    console.log(singleIssue);
    newIssue.Id = issues.length + 1;
    const query = `
    mutation ($issue: inputIssue){
      addSingleIssue(issue: $issue) {
        Id
        Status
        Owner
        Effort
        Created
        Due
        Title
      }
    }`;
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        newIssue
      })
    }).then(async function (response) {
      let data = await response.json();
      console.log(data);
    }); // let IssueList = issues.slice();
    // IssueList.push(newIssue);
    // setIssues(IssueList);
  };

  return /*#__PURE__*/React.createElement("div", {
    id: "issuelist"
  }, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, {
    issues: issues
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(AddIssue, {
    AddSingleIssue: AddSingleIssue
  }));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
/*#__PURE__*/
// <React.StrictMode>
React.createElement(IssueList, null) //</React.StrictMode>
);