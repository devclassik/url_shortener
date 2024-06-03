import React from "react";
import Button from "./Button/Button";
import footerImage from "../Assets/f-icon.png";
import footerButton from "../Assets/f-button.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0c0c0c] to-[#202229] flex flex-col clip-custom2">
      <div className="p-4 col-span-full clip-custom mx-auto mt-[4rem] bg-[#525AA0] w-3/6 md:w-2/6">
        <div className="clip-custom py-2">
          <p className="p-4 text-white text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl w-[70%] sm:w-[90%] mx-auto mb-6 text-center">
            Need a job done, and done well? Get started
          </p>

          <div className="m-auto flex justify-center">
            <Button size="50px" src={footerButton} alt="footerImage" />
          </div>
        </div>
      </div>
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

            <p className="text-[#FFFFFF] opacity-40 font-thin text-[10px] mb-2">
              LINKS AND REDIRECTS
            </p>
            <ul className="flex justify-center gap-6 md:gap-2 sm:justify-start">
              <li>
                <button className="text-[#EDEFFF] font-[100] transition text-[10px] bg-zinc-800/75 px-6 py-2 rounded-[10px] hover:text-teal-500/75 capitalize">
                  hire now
                </button>
              </li>
              <li>
                <button className="text-[#EDEFFF] font-[100] transition text-[10px] bg-zinc-800/75 px-6 py-2 rounded-[10px] hover:text-teal-500/75 capitalize">
                  apply now
                </button>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
            <div class="p-4 col-span-full">
              <p class="pr-6 text-white text-[2.7rem] leading-none -mt-2">
                Connecting the right people to the right businesses.
              </p>
            </div>
            <div class="text-center sm:text-left">
              <p class="text-sm font-[200] text-white uppercase opacity-40">
                Platform
              </p>
              <nav class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      class="text-white transition text hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      Find work
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      Find Talent
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      Categories
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      About us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-sm font-[200] text-white uppercase opacity-40">
                {" "}
                categories
              </p>

              <nav class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      class="text-white transition hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      Data science
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      IT & Networking
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      Web & Mobile
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-sm font-[200] text-white uppercase opacity-40">
                Help
              </p>

              <nav class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      class="text-white transition hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      FAQ's
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-gray-400/75 hover:underline"
                      href="/"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-sm font-[200] text-white uppercase opacity-40">
                get in touch @{" "}
              </p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    class="flex items-center justify-center sm:justify-start gap-1.5 group"
                    href="/"
                  >
                    <span class="text-white transition group-hover:text-gray-400/75 hover:underline ">
                      Instagram
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    class="flex items-center justify-center sm:justify-start gap-1.5 group"
                    href="/"
                  >
                    <span class="text-white transition group-hover:text-gray-400/75 hover:underline ">
                      Linkedin
                    </span>
                  </a>
                </li>

                <li class="flex items-start justify-center gap-1.5 sm:justify-start">
                  <address class="-mt-0.5 not-italic text-white  hover:text-gray-400/75 hover:underline hover:cursor-pointer ">
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
              All rights reserved by Zwilt
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
