import React ,{ Component }  from "react";
import './homepage.css';

import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';


class homepage extends Component {
    render() {
        return(
            <div className="home">
                <div className="card">
                    
                    <Navbar />

                    <h1 className="background-Hello">HELLO</h1>
                    <div className="content">
                        I'm <em>Arpan Das</em>, a
                        <p className="main_title">FULL-STACK<br/><em>WEB DEVELOPER</em></p>
                        I am a passionate person looking for opportunities to grow my knowlegde and <br/>expriences related to my field.

                        <div className="contacts">
                            <div className="email">
                                Email<br/><em>dasarpan471@gmail.com</em>
                            </div>

                            <div className="mobile">
                                Phone<br/><em><a href="tel:+91 7668798433" id="mobiles">+91 7668798433</a></em>
                            </div>

                        </div>

                    </div>

                    <h1 className="project-title">PROJECTS</h1>






                    <h1 className="contactme-title">CONTACT ME</h1>


                    <Footer />

                </div>
            </div>

        );
    }
}

export default homepage;