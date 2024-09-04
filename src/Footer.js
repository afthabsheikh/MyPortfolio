import React from "react";

export default function Footer(props){
    return(
        <>
        <footer>
        <hr/>
        <p>Crafted by love❤ <span className="footer-name-change" style={{fontWeight:'100'}}>{props.currentName}</span></p>
        </footer>
        </>
    );
}