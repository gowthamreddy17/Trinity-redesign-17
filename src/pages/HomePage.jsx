import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import Navbar from "../components/NavBar"; // Import Navbar component
import SvgDrawer from "../components/SvgDrawer";

function HomePage() {
  return (
    <div className="bg-background text-dark min-h-screen">
      <Navbar />
      {/* <div className="p-8">
          <h1 className="text-primary text-4xl font-heading">Welcome to the Home Page!</h1>
          <p className="text-secondary mt-4">This is where your homepage content goes.</p>
          <button className="bg-cta text-dark py-2 px-4 rounded-md mt-4 hover:bg-accent">
            Call to Action
          </button>
        </div> */}

      <MainSection />
      {/* <SvgDrawer
        svgUrl="/test.svg"
        // stroke="red"
        // width="300px"
        // fill="none"
        // height="300px"
        // scale={0.3} // Make SVG 1.5x its size
        // duration={3}
        // ease="power2.inOut"
        // stagger={0.3}
        // loopDuration={5}
        stroke="red" // Control stroke color
        duration={2} // Control how fast the animation happens
        stagger={0.2} // Delay between elements in animation
        loopDuration={5} // Set how long the loop will run (in seconds)
        scale={1.2} // Scale the SVG
        width="200px"
        height="200px"
      /> */}
      {/* 
      <SvgDrawer
        svgUrl="/light.svg"
        // strokeColor="red"
        strokeGradient={[
          { offset: "0%", color: "red" },
          { offset: "100%", color: "blue" },
        ]}
        duration={5}
        stagger={0.2}
        loopRequired={true} // Enable looping
        loopDuration={7} // Loop the animation every 5 seconds
        scale={0.7}
        width="200px"
        height="200px"
      /> */}

      <Footer />
    </div>
  );
}

export default HomePage;
