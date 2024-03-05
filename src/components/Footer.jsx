import React from "react";
import {
  companyArray,
  supportArray,
  communityArray,
} from "../array/footerArray";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="bg-black px-8 lg:px-24 xl:px-44 2xl:px-56 pt-24 pb-12 mt-8 sm:mt-10 lg:mt-14">
        <div className="text-white">
          <div className="flex justify-center">
            <div className="">
              <h1 data-aos="zoom-in" className="font-bold text-4xl text-center">
                Subscribe to our Newsletter
              </h1>
              <div className="flex justify-center ">
                <p
                  data-aos="zoom-in"
                  className="text-center md:w-8/12 lg:w-7/12 py-4"
                >
                  Keep up with our community and get the latest update and
                  exclusive deals straight to your inbox
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <input
                  id="email"
                  autoComplete="email-input"
                  data-aos="fade-right"
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/30 sm:w-80 rounded-xl p-3 outline-none"
                />
                <button
                  data-aos="fade-left"
                  className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-8 flex-col sm:flex-row justify-between py-20">
            {/* Address */}
            <div className=" ">
              <div data-aos="zoom-in" className="flex gap-2 items-center">
                <img src="/images/logo.png" className="w-8" />
                <h1 className="font-bold text-xl text-white">ECHO STREAM</h1>
              </div>
              <div className=" ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10422.789638214517!2d88.3364315863532!3d22.541200153665137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771346ae015d%3A0xb540e4bce39763!2sVictoria%20Memorial!5e0!3m2!1sen!2sin!4v1709577436511!5m2!1sen!2sin"
                  width="400"
                  height="300"
                  style={{ border: 0, borderRadius: "10px", width: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="flex justify-between gap-6 sm:gap-8 lg:gap-12">
              <div className="">
                <h1 data-aos="zoom-in" className="mb-2.5">
                  Company
                </h1>
                {companyArray.map((e, id) => (
                  <div data-aos="zoom-in" key={id} className="py-2">
                    <Link to={e.route}>
                      <h1 className="text-sm xl:text-base opacity-50">
                        {e.title}
                      </h1>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="">
                <h1 data-aos="zoom-in" className="mb-2.5">
                  Support
                </h1>
                {supportArray.map((e, id) => (
                  <div data-aos="zoom-in" key={id} className="py-2">
                    <Link to={e.route}>
                      <h1 className="text-sm opacity-50">{e.title}</h1>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="">
                <h1 data-aos="zoom-in" className="mb-2.5">
                  Support
                </h1>
                {communityArray.map((e, id) => (
                  <div data-aos="zoom-in" key={id} className="py-2">
                    <Link to={e.route}>
                      <h1 className="text-sm opacity-50">{e.title}</h1>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="flex gap-4">
              <Linkedin className="w-4 text-white" />
              <Linkedin className="w-4 text-white" />
              <Linkedin className="w-4 text-white" />
              <Linkedin className="w-4 text-white" />
            </div>
          </div>
          <div className="text-center mt-6">
            <h1 className="font-light opacity-60 text-sm">
              All rights reserved &copy;Echo Stream {year}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
