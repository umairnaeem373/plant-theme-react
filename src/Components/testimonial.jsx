import React from "react";

export default class Test extends React.Component{

    render(){
        return(
            <div>
                <div className="test">
                    <div className="test1">
                        <div>
                            <h1>Testimonials</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="person1">
                            <img src="./imgs/user1-free-img.jpg" alt="" />
                            <div>
                            <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </p>
                            <h2>Sarah Jones</h2>
                            <p>Interior Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="test2">
                    <div className="person1">
                            <img src="./imgs/testimonial-2.jpg" alt="" />
                            <div>
                            <p>Neque porro quisquam est, qui <br /> dolore ipsum quia dolor sit amet, <br /> consectetur adipisci velit, sed quia <br /> non numquam eius modi tempora <br /> incidunt. </p>
                            <h2>Jessica Foxx</h2>
                            <p>Student</p>
                            </div>
                        </div>
                        <div className="person1">
                            <img src="./imgs/user3-free-img.jpg" alt="" />
                            <div>
                            <p>Neque porro quisquam est, qui <br /> dolore ipsum quia dolor sit amet, <br /> consectetur adipisci velit, sed quia <br /> non numquam eius modi tempora <br /> incidunt. </p>
                            <h2>Briana Luke</h2>
                            <p>Student</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}