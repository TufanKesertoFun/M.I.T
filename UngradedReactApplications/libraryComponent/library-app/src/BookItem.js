import React from "react";
function BookItem(props) {
 return (
 <div
 style={{
 padding: "0rem 1rem",
 width: "25vw",
 border: "2px solid black",
 }}
 >
 <p style={{ fontWeight: "bold", fontSize: "20px" }}>
 {props.name}
 </p>
 <p> 👨‍🎤 {props.author}</p>
 <p> 👨‍🎤{props.publication}</p>
 <p> 🤟 {props.rating}</p>
 <p style={{ fontSize: "12px" }}>😚 {props.description}</p>
 </div>
 );
}
export default BookItem;