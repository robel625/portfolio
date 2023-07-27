import React from "react";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import ContactForm from "../contactForm/ContactForm";

const socials = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/md.minhajkobir.milon.3",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/minhajkobir06/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/minhaj-kobir/",
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="bgCustomGradient text-white pt-12 pb-6 font-preahvihear">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-2xl">Find Me on</h3>
            <div className="flex gap-4 mt-3">
              {socials.map((social) => (
                <a title={social.name} href={social.link} target="_blank">
                  <span className="text-white text-2xl hover:text-primaryLight2 duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl">Address</h3>
              <p className="mt-3">Phone: +88 01303 148457</p>
              <p>Email: milonmdminhajkobir@gmail.com</p>
              <p>Address: Rajshahi, Bangladesh</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-2xl">Contact Form</h3>
            <ContactForm />
          </div>
        </div>

        {/* Copyright Area */}
        <div className="mt-8 text-center border-t border-slate-700 pt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Md Minhaj Kobir. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
