export default function Footer() {
    return (
      <footer className="bg-primary text-white px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-sm">
              Plot 81, Sy. No 67, Madhapur, Jubilee Enclave,<br />
              Hitech City, Hyderabad, 500081.
            </p>
          </div>
  
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
  
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-2 tracking-wide">TRINITY.</h3>
            <p className="mb-2 text-sm">Consultancy Services</p>
            <p className="text-sm mb-1">📧 trinityconsultancy.2025@gmail.com</p>
            <p className="text-sm">📞 +91-9959887550</p>
          </div>
        </div>
  
        <div className="mt-10 text-center text-sm text-white/70">
          © 2025. All rights reserved.
        </div>
      </footer>
    );
  }
  