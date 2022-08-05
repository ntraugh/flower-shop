import React from 'react'
import "./HeroStyle.css"
import { Link } from "react-router-dom"




const Hero = (props) => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='hero-img' src="./images/flowerHero.jpg"
            alt="hero"></img>
        </div>
        <div className='content'>
        <h1 style={{}}>Bouquet Now</h1>
            <div>
                <Link 
                  to="/occasion"
                  onClick={() => props.setPage("Flower Shop | Shop")}>
                <button style={{cursor: "pointer"}}>
                  Shop Now
                </button> 
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero