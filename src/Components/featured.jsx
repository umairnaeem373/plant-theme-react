import React from 'react'

class Featured extends React.Component{
    render(){
        return(
            <div className="featured">
                <div>
                    <img src="./imgs/plant6-free-img.jpg" alt="???"/>
                    <h3>Beautiful Plant Varieties</h3>
                    <p>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <h6>SEE COLLECTION</h6>
                </div>
                <div>
                    <img src="./imgs/cactus2-free-img.jpg" alt="???"/>
                    <h3>Trendy Cactus Varieties</h3>
                    <p>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <h6>SEE COLLECTION</h6>
                </div>
                <div>
                    <img src="./imgs/plant4-free-img.jpg" alt="???"/>
                    <h3>Gardening Accessories</h3>
                    <p>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <h6>SEE COLLECTION</h6>
                </div>
            </div>

        )
    }
}

export default Featured;