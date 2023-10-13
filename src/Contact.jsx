import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div>
          <img src="./imgs/plants-store-logo-green.svg" alt="" />
          <h1>Simply Natural</h1>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul>
            <li>Intrduction</li>
            <li>know more About us</li>
            <li>Visit Store</li>
            <li>Let's Connect</li>
          </ul>
        </div>
        <div>
          <h2>Important Links</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Shipping Details</li>
            <li>Terms & Condition</li>
            <li>Media Kit</li>
          </ul>
        </div>
        <div>
          <h2>Get In Touch With Us For <br /> The Best Quality Plants & <br /> Succulents</h2>
          <p>Qui dolore ipsum quia dolor sit amet, <br /> consec tetur adipisci velit, sed quia <br /> non numquam eius modi tempora <br /> incidunt lores ta porro ame.</p>
        </div>
      </div>
    );
  }
}
