import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#001038] lg:pt-26 ">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16 ">
          <div className=" lg:items-start lg:gap-8">
            <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-0 md:grid-cols-12 lg:gap-y-16">
              <div className="md:col-span-3 col-span-1">
                <p className="font-medium text-white uppercase border-b-[1px] md:border-0">
                  Platforms
                </p>
                <ul className="mt-6 space-y-6 text-sm">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Unified Commerce
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Ordazzle
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Omni Channel
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-3 col-span-1">
                <p className="font-medium text-white uppercase border-b-[1px] md:border-0">
                  Industries
                </p>

                <ul className="mt-6 space-y-6 text-sm">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Retail & Consumer Goods
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Fashion & Lifestyle
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Home & Living
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Technology & Electronics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Speciality & Leisure
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-3 col-span-1">
                <p className="font-medium text-white uppercase border-b-[1px] md:border-0">
                  Company
                </p>

                <ul className="mt-6 space-y-6 text-sm">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Join Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Newsroom
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Become a Partner
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-3 col-span-1">
                <p className="font-medium text-white uppercase  border-b-[1px] md:border-0">
                  {" "}
                  Resources
                </p>

                <ul className="mt-6 space-y-6 text-sm">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      White papers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Knowledge Base
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Podcasts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal transition hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal  transition hover:text-white"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-500 font-normal  transition hover:text-white"
                    >
                      Product Videos
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t-[1px] border-[#a4a2a3] pt-8">
            <div className=" flex justify-between items-center ">
              <p className="text-2xl text-white">ETP</p>

              <ul className=" flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-center ">
                <li>
                  <Link
                    to="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:text-white"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebookSquare className="h-6 w-6" />
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:text-white"
                  >
                    <span className="sr-only">Instagram</span>
                    <FaInstagram className="w-6 h-6" />
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:text-white"
                  >
                    <span className="sr-only">Twitter</span>
                    <FaTwitter className="w-6 h-6" />
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:text-white"
                  >
                    <span className="sr-only">Youtube</span>
                    <FaYoutube className="w-6 h-6" />
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:text-white"
                  >
                    <span className="sr-only">Linkedin</span>
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t-[1px] border-[#a4a2a3] pt-5">
            <div className="sm:flex sm:justify-between">
              <p className="text-xs text-gray-500">
                &copy; Copyright ETP Group Pte Ltd. All rights reserved
              </p>

              <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                <li>
                  <a
                    to="/"
                    className="text-gray-500 transition hover:text-white"
                  >
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
