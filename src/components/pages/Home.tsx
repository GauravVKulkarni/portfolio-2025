// import Footer from "../Footer"
import HeroSection from "../HeroSection"
import IntroSection from "../IntroSection"

function Home() {
  return (
    <>
      <div className="scroll-container">
        <div className="section">
          <HeroSection />
        </div>
        <div className="section">
          <IntroSection />
        </div>
        {/* <div className="section">
          <Footer />
        </div> */}
        
      </div>
    </>
  )
  
}

export default Home