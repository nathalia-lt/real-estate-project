import './Hero.css'

function Hero() {
    
    return(
        <section className="hero-container">  
          <div className="hero-image"> {/* Esquerda */}
            <img src="https://picsum.photos/200" alt="photo" />
          </div>
            
          <div className="hero-title"> {/* Direita */}
            <h3>Almir</h3>
            <p>CREFI: 000000</p>
            <div>
                <img src="" alt="whatspp" />
                <img src="" alt="Instagram" />
            </div>
          </div>
        </section>
    )
}

export default Hero