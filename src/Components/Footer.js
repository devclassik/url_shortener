import React from "react";
import Button from "./Button/Button";
import footerImage from "../Assets/f-icon.png";
import footerButton from "../Assets/f-button.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0c0c0c] to-[#202229] flex flex-col clip-custom2">

      <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-20 w-full">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center sm:justify-start">
              <img src={footerImage} alt="footerImage" />
            </div>
            <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-base text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left mb-8">
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
            <div className="p-4 col-span-full">
              <p className="pr-6 text-white text-[2.7rem] leading-none -mt-2">
                Connecting the right people to the right businesses.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-[200] text-white uppercase opacity-40">
                Platform
              </p>
              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition text hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      Find work
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      Find Talent
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      Categories
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      About us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-sm font-[200] text-white uppercase opacity-40">
                {" "}
                categories
              </p>

              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      Data science
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      IT & Networking
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      Web & Mobile
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-sm font-[200] text-white uppercase opacity-40">
                Help
              </p>

              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      FAQ's
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-sm font-[200] text-white uppercase opacity-40">
                get in touch @{" "}
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center sm:justify-start gap-1.5 group"
                    href="/"
                  >
                    <span className="text-white transition group-hover:text-gray-400/75 hover:underline ">
                      Instagram
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center sm:justify-start gap-1.5 group"
                    href="/"
                  >
                    <span className="text-white transition group-hover:text-gray-400/75 hover:underline ">
                      Linkedin
                    </span>
                  </a>
                </li>

                <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                  <address className="-mt-0.5 not-italic text-white  hover:text-gray-400/75 hover:underline hover:cursor-pointer ">
                    Twitter
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-12 border-t border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-400">
              <a
                className="inline-block text-gray-400 underline transition hover:text-gray-400/75"
                href="/"
              >
                Privacy Policy
              </a>
              <span className="px-5"></span>
              <a
                className="inline-block text-gray-400 underline transition hover:text-gray-400/75"
                href="/"
              >
                Terms & Conditions
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              All rights reserved by Opemipo Alomaja
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
