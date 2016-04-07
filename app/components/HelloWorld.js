import React from "react";
import Header from "./Header";

export default class HelloWorld extends React.Component {

    render() {
        return (
            <div className="hello-world">
                <Header/>
                Hello World by React something
            </div>
        );

    }
}
