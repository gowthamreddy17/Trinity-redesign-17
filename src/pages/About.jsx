import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import aboutImg from "/bpo.jpg"; // Replace with your actual image path

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <section className="bg-[#F5EEDC] text-gray-800 px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-primary text-4xl font-bold mb-4">
              What we are
            </h2>
            <h3 className="text-2xl font-semibold text-[#ed705a] mb-6">
              We are a dynamic team of creative people
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              We assist businesses achieve their highest potential by offering
              advisory services in the areas of management reporting and IFRS.
              We simplify corporate procedures by optimizing them.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-primary">
                  01. Our Mission
                </h4>
                <p className="text-sm text-gray-700">
                  Our mission is to support business growth and success by
                  providing cutting-edge software, BPO, and financial solutions.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-primary">02. Vision</h4>
                <p className="text-sm text-gray-700">
                  To be a trusted worldwide leader in technology-driven
                  services, providing effectiveness and quality.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-primary">
                  03. Our Approach
                </h4>
                <p className="text-sm text-gray-700">
                  Technology-driven, customer-focused, and outcome-driven
                  solutions designed to help businesses succeed.
                </p>
              </div>
            </div>

            {/* Add-on CTA */}
            <p className="mt-8 text-gray-600 text-sm italic">
              We believe in innovation, integrity, and impact—delivering
              solutions that not only solve today’s problems but also shape a
              better future.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <img
              src={aboutImg}
              alt="About us"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
