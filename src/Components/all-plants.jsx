import React from "react";

class AllPlants extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <h1>Featured Plants</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="plants">
                    <div className="plant">
                        <img src="./imgs/plant3-free-img.jpg" alt="" />
                        <p>Plants</p>
                        <h3>Boncellensis Secullant</h3>
                        <p>*****</p>
                        <h3>$34.00</h3>
                    </div>
                    <div className="plant">
                        <img src="./imgs/cactus2-free-img.jpg" alt="" />
                        <p>Cactus</p>
                        <h3>Cleistocactus</h3>
                        <p>*****</p>
                        <h3><span>$28.00</span>$25.00</h3>
                    </div>
                    <div className="plant">
                        <img src="./imgs/plant5-free-img.jpg" alt="" />
                        <p>Plants</p>
                        <h3>Green Soil Lotus</h3>
                        <p>*****</p>
                        <h3><span>$54.00</span>$34.00</h3>
                    </div>
                    <div className="plant">
                        <img src="./imgs/plant1-free-img.jpg" alt="" />
                        <p>Plants</p>
                        <h3>Money Plant</h3>
                        <p>*****</p>
                        <h3><span>$23.00</span>$20.00</h3>
                    </div>
                    <div className="plant">
                        <img src="./imgs/cactus4-free-img.jpg" alt="" />
                        <p>Plants</p>
                        <h3>Old Lady Cactus</h3>
                        <p>*****</p>
                        <h3><span>$15.00</span>$12.00</h3>
                    </div>
                    <div className="plant">
                        <img src="./imgs/plant4-free-img.jpg" alt="" />
                        <p>Cactus</p>
                        <h3>Piorro Quisquam</h3>
                        <p>*****</p>
                        <h3>$32.00</h3>
                    </div>
                    <div className="plant">
                        <img src="./imgs/plant6-free-img.jpg" alt="" />
                        <p>Plants</p>
                        <h3>Rattle Snake Tail</h3>
                        <p>*****</p>
                        <h3>$45.00</h3>
                    </div>
                    <div className="plant">
                        <img src="./imgs/cactus6-free-img.jpg" alt="" />
                        <p>Cactus</p>
                        <h3>Star Cactus</h3>
                        <p>*****</p>
                        <h3><span>$34.00</span>$30.00</h3>
                    </div>
                </div>
            </div>
        )
    }


}

export default AllPlants;