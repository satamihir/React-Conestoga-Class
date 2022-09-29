class Square extends React.Component {
  render() {
    var squareStyle = {
      height: 150,
      backgroundColor: this.props.color
    };
    return /*#__PURE__*/React.createElement("div", {
      style: squareStyle
    });
  }

}

class Label extends React.Component {
  render() {
    var labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      margin: 0
    };
    return /*#__PURE__*/React.createElement("p", {
      style: labelStyle
    }, this.props.color);
  }

}

class Card extends React.Component {
  render() {
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
      color: this.props.color
    }), /*#__PURE__*/React.createElement(Label, {
      color: this.props.color
    }));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
  color: "#FF6663"
}), /*#__PURE__*/React.createElement(Card, {
  color: "#FFA737"
}), /*#__PURE__*/React.createElement(Card, {
  color: "#123456"
}), /*#__PURE__*/React.createElement(Card, {
  color: "#ABCDEF"
})), document.querySelector("#container"));