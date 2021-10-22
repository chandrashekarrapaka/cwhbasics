import React, { useState } from 'react'
import TextForm from './TextForm';

export default function About() {

    const [mystyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    })
    const [btn, setBtn] = useState("Enable Light Mode");
    const togglemode = () => {
        if (mystyle.color == "white") {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtn("Enable Dark Mode");
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtn("Enable light Mode");
        }
    }
    return (
        <div style={mystyle}>
            <div className="accordion container my-3" style={mystyle} id="accordionExample">
                <b>About Us</b>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " style={mystyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingTwo" style={mystyle} >
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingThree" style={mystyle}>
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="container my-3">
                    <button type="button" style={mystyle} onClick={togglemode} className="btn btn-dark">{btn}</button>
                </div>

            </div>

        </div >
    )
}
