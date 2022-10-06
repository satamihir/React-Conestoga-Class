// const App = () =>{
//     return(
//     <div id="greet">
//          <h2>Welcome to adv full stack programming</h2>
//     </div>
//     )
// }
const IssueFilter = () => {
    return <h1>Issue Filter</h1>;
  };



const IssueRow=(props)=>
{
  // const rowstyle ={ border:"1px solixd"};
  return(
    <tr>
      <td>{props.Id}</td>
      <td>{props.Status}</td>      
      <td>{props.Owner}</td>
      <td>{props.Effort}</td>
      <td>{props.Created}</td>
      <td>{props.Due}</td>
      <td>{props.Title}</td>
    </tr>
  )
}
  
  const IssueTable = ({issues}) => {
   const rowstyle ={ border:"1px solid"};
//   const tempIssues=[
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


 const issueRows = issues.map(issue =>(  <IssueRow rowstyle={rowstyle} Id={issue.Id} Status={issue.Status} Owner={issue.Owner} Effort={issue.Effort} Created={issue.Created.toString()} Due={issue.Due.toString()} Title={issue.Title}/>)
  )
    return (
      <>
        <h1>Issue Table</h1>
        <table>
          {/* <thead>
            <tr>
              <th style={{border:"1px solid"}}>ID</th>
              <th style={rowstyle}>TITLE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowstyle}>1</td>
              <td style={rowstyle}>This is first Issue</td>
            </tr>
            <tr>
              <td style={rowstyle}>2</td>
              <td style={rowstyle}>This is second Issue</td>
            </tr>
           <IssueRow rowstyle={rowstyle} Id={3} Title={"this is Third Issue "}/>
           <IssueRow rowstyle={rowstyle} Id={4} Title={"this is Forth Issue "}/>
           {issueRows}
          </tbody> */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Effort</th>
              <th>Created</th>
              <th>Due</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {issueRows}
          </tbody>
        </table>
      </>
    );
  };
  
  const AddIssue = ({AddSingleIssue}) => {
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
            Effort: form.Effort.value,
            Created: new Date(form.Created.value),
            Due: new Date(form.Due.value),
            Title: form.Title.value,

        }

        AddSingleIssue(newIssue);
        console.log('hello',newIssue);
        form.reset();

    }

    return (
    <div>
        <h1>Add Issue</h1>
        <form name="addForm" onSubmit={handleSubmit}>
            <input type="text" name="Status" placeholder="Status" />
            <input type="text" name="Owner" placeholder="Owner" />
            <input type="text" name="Effort" placeholder="Effort" />
            <input type="text" name="Created" placeholder="Created" />
            <input type="text" name="Due" placeholder="Due" />
            <input type="text" name="Title" placeholder="Title" />
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>

    
    )
  };
  
  const IssueList = () => {
  
  // const tempIssues=[
  //     {Id: 1,Status:"Assigned",Owner:"Person-A", Effort: "10",Cerated: new Date("2022-09-18"),Due: new Date("2022-09-25"), Title:"This is fifth issue"},
  //     {Id: 2,Status:"Resolved",Owner:"Person-B",Effort: "10",Cerated: new Date("2022-09-18"),Due: new Date("2022-09-18"), Title:"This is sixth issue"}]; 
  
  const [issues,setIssues]= React.useState([]);

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
  `

  React.useEffect(() => {
    fetch('/graphql',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query})
    }).then(async function(response){
      let issueData = await response.json();
      setIssues(issueData.data.issueList);
      console.log('hello',issueData);
    })
  },[])

  const AddSingleIssue =(newIssue) =>{
    newIssue.Id =issues.length + 1;
    let IssueList = issues.slice();
    IssueList.push(newIssue);
    setIssues(IssueList);
  }

    return (    
      <div id="issuelist">
        <IssueFilter />
        <hr />
        <IssueTable issues={issues} />
        <hr />
        <AddIssue AddSingleIssue={AddSingleIssue}/>
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(
   // <React.StrictMode>
      <IssueList />
    //</React.StrictMode>
  );