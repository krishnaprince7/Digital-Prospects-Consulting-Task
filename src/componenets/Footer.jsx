import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="getinTouch" className="bg-black text-white">
 
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
             <div className="h-10 w-10 rounded-full overflow-hidden">
  <img
    src="/images/Vector.png"   
    alt="Logo"
    className="h-full w-full object-cover"
    loading="lazy"
  />
</div>

              <span className="text-2xl font-semibold">Logoipsum</span>
            </div>

            <p className="mt-5 text-gray-300 text-sm leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et
            </p>

            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-white/15 transition">
                <FaFacebookF className="text-emerald-400" />
              </a>
              <a href="#" aria-label="Twitter" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-white/15 transition">
                <FaTwitter className="text-emerald-400" />
              </a>
              <a href="#" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-white/15 transition">
                <FaLinkedinIn className="text-emerald-400" />
              </a>
              <a href="#" aria-label="YouTube" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-white/15 transition">
                <FaYoutube className="text-emerald-400" />
              </a>
            </div>
          </div>

          
          <div>
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition">Software Team</a></li>
              <li><a href="#" className="hover:text-white transition">Technologies</a></li>
              <li><a href="#" className="hover:text-white transition">Resources</a></li>
              <li><a href="#" className="hover:text-white transition">Company</a></li>
              <li><a href="#" className="hover:text-white transition">Contact us</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-xl font-semibold sm:ml-4">Services</h4>
            <ul className="mt-5 space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition">Dedicated Development</a></li>
              <li><a href="#" className="hover:text-white transition">Staff Augmentation Services</a></li>
              <li><a href="#" className="hover:text-white transition">Software Development</a></li>
              <li><a href="#" className="hover:text-white transition">Development Center</a></li>
            </ul>
          </div>

   <div>
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <ul className="mt-5 space-y-5 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1"><FiMapPin /></span>
                <span>
                  Envato, Level 13, 2 Elizabeth<br />
                  Victoria 3000 India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-400"><FiPhone /></span>
                <a href="tel:+918619441176" className="hover:text-white transition">+91 861 944 1176</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-400"><FiMail /></span>
                <a href="mailto:ezyoga@gmail.com" className="hover:text-white transition">ezyoga@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-emerald-500 text-white py-3 text-center font-medium">
        logoname. 2025. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
