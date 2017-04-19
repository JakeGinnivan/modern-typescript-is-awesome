import React from "react"
import { Image } from "spectacle"

const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}

class CodeSlideImage extends React.Component {
    render() {
        return (
            <Image src={this.props.src} style={style}/>
        )
    }
}

export default CodeSlideImage
