import React from "react"

const styles = {
    position: "fixed",
    left: "50%",
    top: "20px",
    transform: "translate(-50%)",
    padding: "20px 20px",
    border: "10px solid hotpink",
    fontSize: "2.0em",
    color: "white",
  // textTransform: 'uppercase',
    whiteSpace: "nowrap",
    marginBottom: 0
}

class CodeSlideTitle extends React.Component {
    render() {
        return (
            <h1 style={styles}>{this.props.children}</h1>
        )
    }
}

export default CodeSlideTitle
