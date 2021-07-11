import React ,{ Component }  from "react";
import './homepage.css';


class homepage extends Component {
    render() {
        return(
            <div className="home">
                <div className="card">
                    <h1>LOGO</h1>
                    <h1 className="background-Hello">HELLO</h1>
                    <div className="content">
                        <p>I'm <em>Arpan Das</em>, a</p>
                        <p className="main_title">FULL-STACK<br/><em>WEB DEVELOPER</em></p>

                    </div>
                </div>
            </div>

        );
    }
}

export default homepage;