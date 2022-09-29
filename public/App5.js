const Square = props => {
  var squareStyle = {
    height: 150,
    backgroundColor: props.color
  };
  return /*#__PURE__*/React.createElement("div", {
    style: squareStyle
  });
};

const Label = props => {
  var labelStyle = {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    padding: 13,
    margin: 0
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: labelStyle
  }, props.color));
};

const Card = props => {
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
  return /*#__PURE__*/React.createElement("div", {
    style: cardStyle
  }, /*#__PURE__*/React.createElement(Square, {
    color: props.color
  }), /*#__PURE__*/React.createElement(Label, {
    color: props.color
  }));
};

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(
/*#__PURE__*/
// <React.StrictMode>
React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
  color: "#FF6663"
}), /*#__PURE__*/React.createElement(Card, {
  color: "#FFA737"
}), /*#__PURE__*/React.createElement(Card, {
  color: "#123456"
}), /*#__PURE__*/React.createElement(Card, {
  color: "#ABCDEF"
})) //</React.StrictMode>
);