import React from "react";
import reactIcon from "./react.png";

class LazyWorld extends React.Component {
    render() {
        return (
            <div>
                <h2>I am a Lazy Component.</h2>
                <img src={reactIcon} height={100} width={100} />
            </div>
        );
    }
}

export default LazyWorld;
