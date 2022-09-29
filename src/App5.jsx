const Square = (props) => {
    var squareStyle = {
        height: 150,
        backgroundColor: props.color
      };

      return(
        <div style={squareStyle}>

        </div>
      )
}

const Label = (props) => {
    var labelStyle = {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        padding: 13,
        margin: 0
      };

      return (
        <div>
            <p style={labelStyle}>{props.color}</p>
        </div>
      )
}

const Card = (props) => {
    var cardStyle = {
        height: 200,
        width: 150,
        padding: 0,
        backgroundColor: "#FFF",
        WebkitFilter: "drop-shadow(0px 0px 5px #666)",
        filter: "drop-shadow(0px 0px 5px #666)",
        display: "inline-block",
        marginRight: 20
      };

      return (
        <div style={cardStyle}>
            <Square color={props.color} />
            <Label color = {props.color} />
        </div>
      )
}

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(
    // <React.StrictMode>
    <div>
        <Card color="#FF6663" />
        <Card color="#FFA737" />
          <Card color="#123456" />
          <Card color="#ABCDEF" /> 

    </div>
       
       
     //</React.StrictMode>
   );