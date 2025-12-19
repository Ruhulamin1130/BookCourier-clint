import { Link } from "react-router";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-primary">BookCourier</h2>
          <p className="mt-3 text-sm leading-relaxed">
            BookCourier is a smart library-to-home book delivery system designed
            for readers, students, and researchers to borrow books effortlessly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="link link-hover">
                Home
              </Link>
            </li>
            <li>
              <Link to="/books" className="link link-hover">
                All Books
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="link link-hover">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/login" className="link link-hover">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="footer-title">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@bookcourier.com</li>
            <li>Phone: +880 1XXXXXXXXX</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="footer-title">Follow Us</h3>
          <div className="flex gap-4 mt-3">
            <a href="#" className="btn btn-circle btn-outline">
              <FaFacebookF />
            </a>
            <a href="#" className="btn btn-circle btn-outline">
              <FaLinkedinIn />
            </a>
            <a href="#" className="btn btn-circle btn-outline">
              <FaGithub />
            </a>
            <a href="#" className="btn btn-circle btn-outline">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-base-300">
        <p className="text-center text-sm py-4">
          © {new Date().getFullYear()} BookCourier. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
