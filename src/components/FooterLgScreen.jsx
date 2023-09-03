import React from "react";

function FooterLgScreen() {
  return (
    <div className="pt-4">
      <div className="grid grid-cols-4 gap-y-8">
        <div>
          <p className="font-medium text-sm tracking-wide pb-5">HELP</p>
          <ul className="space-y-2 text-slate-500 inline-block">
            <li className="cursor-pointer">FAQ</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Ordering</li>
            <li className="cursor-pointer">Shipping Policy</li>
            <li className="cursor-pointer">Returns</li>
            <li className="cursor-pointer">Sizing</li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-sm tracking-wide pb-5">MY ACCOUNT</p>
          <ul className="space-y-2 text-slate-500 inline-block">
            <li className="cursor-pointer">Login</li>
            <li className="cursor-pointer">Register</li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-sm tracking-wide pb-5">ABOUT US</p>
          <ul className="space-y-2 text-slate-500 inline-block">
            <li className="cursor-pointer">Our Vision</li>
            <li className="cursor-pointer">Investors</li>
            <li className="cursor-pointer">Sponsors</li>
            <li className="cursor-pointer">Athletes</li>
            <li className="cursor-pointer">Elite Underground Origin</li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-sm tracking-wide pb-5">CONTACT US</p>
          <ul className="space-y-2 text-slate-500 inline-block">
            <li className="cursor-pointer">Email Sign Up</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterLgScreen;
