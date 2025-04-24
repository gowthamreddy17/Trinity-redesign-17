import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import Navbar from "../components/NavBar"; // Import Navbar component

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
      <Footer/>
    </div>
  );
}

export default HomePage;
