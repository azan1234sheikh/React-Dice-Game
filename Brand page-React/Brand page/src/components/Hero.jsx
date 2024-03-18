const HeroSection = () =>{
    return(
        <main className="Hero container">
            <div className="Hero-content">
                <h1>YOUR FEET <br></br> DESERVE <br></br> THE BEST <br></br></h1>
                <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR 
                SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="Brand-Btn">
                  <button>ShopNow </button>
                  <button className="sec-btn">Category </button>
                </div>
                <div className="shopping">
                  <p>Also Available On</p>
                 <div className="brand-icons">
                    <img src="/images/flipkart.png" alt="flipkart-img"></img>
                    <img src="/images/amazon (1).png" alt="amazon-img"></img>
                 </div>
                </div>
            </div>
            <div className="Hero-img">
                <img src="/images/shoe_image.png" alt="hero-img"></img>
            </div>
           
            
        </main>
    )
}
export default HeroSection;