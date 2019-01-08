import React from "react";
import "./style.css";
const LazyWorld = React.lazy(() => import("./LazyWorld"));

class HelloWorld extends React.Component {
    render() {
        return (
            <div className="banner">
                <div> Hello world with Webpack 4 and React</div>
                <div>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <LazyWorld />
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

export default HelloWorld;
