import React from "react";
import {
  
  CreditCard,
  Wallet,
  Landmark,
  BadgeDollarSign,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaPinterestP,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#111] text-white mt-20">
      <div className="w-[90%] mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* Store Info */}
          <div>
            <h3 className="text-3xl font-serif font-semibold mb-8">
              Store Information
            </h3>

            <div className="space-y-4 text-gray-300 text-lg leading-8">
              <p>Jewellery Store</p>

              <p>
                99 New Theme St. XY, USA 12345,
                <br />
                Beside the Sun point land.
                <br />
                United States
              </p>

              <p>Call us: +00 123-456-789</p>
              <p>Email us: admin@example.com</p>
            </div>
          </div>

          {/* Find Product */}
          <div>
            <h3 className="text-3xl font-serif font-semibold mb-8">
              Find Product
            </h3>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li>Prices Drop</li>
              <li>New Products</li>
              <li>Best Sellers</li>
              <li>Sitemap</li>
              <li>Stores</li>
              <li>Amulet</li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-3xl font-serif font-semibold mb-8">
              Your Account
            </h3>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li>Order Tracking</li>
              <li>Sign In</li>
              <li>Create Account</li>
              <li>Discount</li>
              <li>Wishlist</li>
              <li>Credit Slip</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-3xl font-serif font-semibold mb-8">
              Our Company
            </h3>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li>Delivery</li>
              <li>Legal Notice</li>
              <li>Terms & Conditions</li>
              <li>Secure Payment</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="w-[90%] mx-auto py-6 flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Social Icons */}
          <div className="flex gap-4">
  <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#BFA57F] transition">
    <FaFacebookF size={18} />
  </div>

  <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#BFA57F] transition">
    <FaXTwitter size={18} />
  </div>

  <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#BFA57F] transition">
    <FaInstagram size={18} />
  </div>

  <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#BFA57F] transition">
    <FaPinterestP size={18} />
  </div>

  <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#BFA57F] transition">
    <FaYoutube size={18} />
  </div>
</div>

          {/* Copyright */}
          <p className="text-gray-400 text-base text-center">
            Copyright © Jewellery. All Rights Reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex gap-4">
            {[CreditCard, Wallet, Landmark, BadgeDollarSign].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="w-11 h-11 border border-gray-600 rounded-md flex items-center justify-center"
                >
                  <Icon size={22} />
                </div>
              )
            )}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;