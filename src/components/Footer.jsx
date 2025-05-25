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
                      className="text-white transition hover:opacity-75"
                    >
                      Unified Commerce
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Ordazzle
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
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
                      className="text-white transition hover:opacity-75"
                    >
                      Retail & Consumer Goods
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Fashion & Lifestyle
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Home & Living
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Technology & Electronics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
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
                      className="text-white transition hover:opacity-75"
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Join Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Newsroom
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
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
                      className="text-white transition hover:opacity-75"
                    >
                      White papers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Knowledge Base
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Podcasts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
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
                    className="text-white transition hover:opacity-75"
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
                    className="text-white transition hover:opacity-75"
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
                    className="text-white transition hover:opacity-75"
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
                    className="text-white transition hover:opacity-75"
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
                    className="text-white transition hover:opacity-75"
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
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition hover:opacity-75"
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
