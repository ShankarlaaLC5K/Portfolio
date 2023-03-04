import { faArrowLeft, faGreaterThan, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './1uidesign.css';
function Uidesign(){
    return(
        <>
        <div>
            <nav><FontAwesomeIcon icon={faArrowLeft}/>Home<FontAwesomeIcon icon={faGreaterThan}/>Profile <button className=""><FontAwesomeIcon icon={faShareNodes}/>Share Profile</button></nav>
            <img src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="foreimage"/>
            <figure>
                <figcaption>SP ID:SP0001</figcaption>
            </figure>
            <div>
                <h4>Ananya Anand</h4>
                <h5>UI/UX Designer</h5>
                <p>Full stack Product Designer with Hands-on experience in solving problems ranging from real estates,hospitals,rentals,On-Demand Health care, IT Services and social networking among others. I have good communication skills and user-centered approach to design.</p>
                <div className="Container">
                    <div className="row">
                        <div className="col-8 col-sm-8 col-md-4 col-lg-4 col-xl-4">
                            <div className="container">
                                <div className="row">
                                    <h3>TOP SKILLS</h3>
                                        <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-lg-6">
                                            <figure>
                                            <img src="https://cdn-icons-png.flaticon.com/512/5611/5611129.png" className="topskills"/>
                                            <figcaption>Adobe XD</figcaption>
                                            </figure>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-lg-6">
                                            <figure>
                                            <img src="https://cdn-icons-png.flaticon.com/512/1/1781.png" className="topskills"/>
                                            <figcaption>Photoshop</figcaption>
                                            </figure>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-lg-6">
                                            <figure>
                                            <img src="https://cdn-icons-png.flaticon.com/512/9872/9872544.png" className="topskills"/>
                                            <figcaption>Wireframes</figcaption>
                                            </figure>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-lg-6">
                                            <figure>
                                            <img src="https://cdn-icons-png.flaticon.com/512/8969/8969732.png" className="topskills"/>
                                            <figcaption>IA</figcaption>
                                            </figure>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-lg-6">
                                            <figure>
                                            <img src="https://cdn-icons-png.flaticon.com/512/3137/3137795.png" className="topskills"/>
                                            <figcaption>Mobile Applications</figcaption>
                                            </figure>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-xl-6 col-lg-6">
                                            <figure>
                                            <img src="https://cdn-icons-png.flaticon.com/512/9871/9871087.png" className="topskills"/>
                                            <figcaption>User Research</figcaption>
                                            </figure>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default  Uidesign;