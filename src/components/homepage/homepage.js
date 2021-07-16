import React ,{ Component }  from "react";
import './homepage.css';
import './projects.css';

import {ReactComponent as Worldmap} from './worldmap.svg';
import {ReactComponent as Arpanpic} from './arpan_pic.svg';

import p2img from './projectPhotos/p2_1.jpeg';
import p1img1 from './projectPhotos/p1_1.jpeg';
import p1img2 from './projectPhotos/p1_2.jpeg';

import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';


class homepage extends Component {
    render() {
        return(
            <div className="home">
                <div className="card">
                    
                    <Navbar />
                    <h1 className="background-Hello">HELLO</h1>
                    <div className="frontdetail">
                        <Arpanpic className="arpan-pic"/>
                        
                        <div className="content">
                            I'm <em>Arpan Das</em>, a
                            <p className="main_title">FULL-STACK<br/><em>WEB DEVELOPER</em></p>
                            I like to do things in the field of Application Development, but I also want to go into other fields like Investment Banking. My aim is to do something <em>different</em> in my life.

                            <div className="contacts">
                                <div className="email">
                                    Email<br/><em><a href = "mailto:dasarpan471@gmail.com" id="mobiles"> dasarpan471@gmail.com</a></em>
                                </div>

                                <div className="mobile">
                                    Phone<br/><em><a href="tel:+91 7668798433" id="mobiles">+91 7668798433</a></em>
                                </div>

                            </div>

                        </div>
                        
                    </div>

                    <div className="project-box">
                        <h1 className="project-title">PROJECTS</h1>
                        <div className="project1">
                                
                            <div className="project1-content">
                            <div className="project1-no">01/05</div>
                            <div className="project1-title">Tesla clone</div>
                                    
                                   This project is developed by using <em>styled components</em>.




                            </div>
                            <div className="project1img">
                                <img src={p1img1} alt="" id="p1img1"  />
                                <img src={p1img2} alt="" id="p1img2"  />



                            </div>




                        </div>


                        <div className="project2">
                                 
                            <div className="project2-content">
                                <div className="project2-no">02/05</div>
                                <div className="project2-title">Chat bot</div>
                                        
                                This is project developed by using <em>nodejs</em> and <em>socket.io</em>.




                                </div>
                                <div className="project2img">
                                        <img src={p2img} alt="" className="p2img"  />
                                        <img src={p2img} alt="" className="p2img"  />


                                </div>
          
                        </div>

                    </div>
                    
                    <div className="contactme-box">
                        <h1 className="contactme-title">CONTACT ME</h1>
                        <div className="contactme-content">
                            <div className="contactme-text">
                                Let's get in touch <em>Today.</em>

                              

                                
                                <a href = "mailto:dasarpan471@gmail.com">  <div className="mailme">Email me</div></a>

                            </div>
                            <div className="worldmap">
                                <Worldmap />



                            </div>
                        </div>
                    </div>
                    <Footer />

                    
                </div>

                <div className="error_msg" >
                        Use a Device with a Bigger display..

                    </div>
            </div>

        );
    }
}

export default homepage;