import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    //console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case!", "success");
  };
  // const wordCount = () => {
  //   let word = text.split(" ").length;
  //   return word--;
  // };
  const handleClear = () => {
    let clear = "";
    setText(clear);
    props.showAlert("Your TextBox is Cleared!", "success");
  };
  const handleLoClick = () => {
    //console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!", "success");
  };
  // const emailExtract  = event =>{
  //   const passedText = event.clipboard
  // }
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  // const receivedEmail = (event) => {};

  // text =" new Text";  - Wrong Way
  // setText("New Text")   -Right Way
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#0b0215" : "White" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label">
          Example Text Area
        </label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "White" : "#0b0215",
              color: props.mode === "light" ? "#0b0215" : "White",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear All
        </button>

        <div className="container my-3">
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").length} words and {text.length}
            {/* {wordCount} words and {text.length} */}
          </p>
          <p>{0.008 * text.split(" ").length} minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something to preview"}</p>
        </div>
      </div>
    </>
  );
}
