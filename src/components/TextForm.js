import React, { useState } from 'react'


export default function TextForm(props) {
    let newtext = "";
    // let sectionToCheck = "$%klds$";


    const conUpCase = () => {
        console.log("clicked on" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        document.getElementById("tar").innerText = newtext;
        props.showAlert("Upper case button clicked", "success");
        setTimeout(() => {
            props.showAlert(null);
        }, 2000);

    }
    const conLowCase = () => {
        console.log("clicked on" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        document.getElementById("tar").innerText = newtext;

    }
    const onChange = (event) => {
        console.log("onChange");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter your text');
    return (

        <div className="mb-3 container">
            <h2>Give ur text</h2>
            <label htmlFor="myText" className="form-label">Type your text to analyze</label>
            <textarea className="form-control" id="myText" rows="3" value={text} onChange={onChange}></textarea>
            <div className="my-3 container">
                <button className="btn btn-primary mx-2" onClick={conUpCase}>Convert to Upper case</button>
                <button className="btn btn-primary" onClick={conLowCase}>Convert to Lower case</button>

            </div>
            <div className="container my-3">
                Value of text converted is
                <h1 id="tar"></h1>
                <h3>Text Summary:</h3>
                {text.length > 0 &&
                    <>
                        <p>you need {text.split(" ").length * 0.008} minutes to read this sentence</p>
                        <p>Number of Symbols:{text.match(/[@#$%^&*()_+\-=\[\]{ };':"\\|,.<>\/?!]/g).length}</p>
                    </>
                }




            </div>

        </div>
    );
}
