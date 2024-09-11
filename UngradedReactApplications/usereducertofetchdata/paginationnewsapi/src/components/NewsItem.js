import React from "react";
import "./NewsItem.css";
function NewsItem(props) {
 return (
 <div className="newsItemWrapper">
 <p>
 <b>{props.title}</b>
 </p>
 <p>{props.description}</p>
 <p>
 - <i>{props.author}</i>
 </p>
 <a className="button" href={props.url} target="_blank">
 Visit
 </a>
 </div>
 );
}
export default NewsItem;