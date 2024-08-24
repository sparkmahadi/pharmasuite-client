import Image from "next/image";
import React from "react";
import logoWhite from "@/public/logo white.png";
import appStore from "@/public/app-store.png";
import playStore from "@/public/google-play-store.png";
import sslImages from "@/public/sslCommerz-images.png";
import modelPharmacy from "@/public/model-pharmacy.webp";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  const iconClasses = "w-6 h-6";
  return (
    <footer id="footer" className="bg-teal-800 text-white text-sm font-semibold">
      <div className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* logo Section */}

            <div className="w-full mx-auto lg:w-1/3 mb-8 lg:mb-0 px-5">
              <Link href="/" className="flex justify-center lg:block">
                <Image alt="pharmasuite" src={logoWhite} className="w-1/2" />
              </Link>

              <div className="my-3 text-center lg:text-left">
                <p className="font-bold text-sm">09610-000000</p>
                <p className="font-bold text-sm">support@pharmasuite.com</p>
              </div>

              <div className="my-3 flex justify-center lg:justify-start">
                <Link href="/toplaystore" className="w-1/4 mr-5">
                  <Image alt="Google Play Store" src={playStore} />
                </Link>
                <Link href="/toappstore" className="w-1/4">
                  <Image alt="Apple App Store" src={appStore} />
                </Link>
              </div>
{/* social links */}
              <div className="my-3 flex justify-center lg:justify-start gap-5">
                <Link
                  target="_blank"
                  href="https://facebook.com/pharmasuite/"
                  className="hover:text-blue-400"
                >
                  <FaFacebook className={iconClasses} />
                </Link>

                <Link
                  target="_blank"
                  href="https://instagram.com/pharmasuitebd/"
                  rel="noreferrer"
                  className="hover:text-pink-400"
                >
                  <FaInstagram className={iconClasses} />
                </Link>

                <Link
                  target="_blank"
                  href="https://youtube.com/channel/UCUtwG4DKSJpZYr1ytoibc7g/?guided_help_flow=5&disable_polymer=true"
                  rel="noreferrer"
                  className="hover:text-red-400"
                >
                  <FaYoutube className={iconClasses} />
                </Link>

                <Link
                  target="_blank"
                  href="https://linkedin.com/company/67491136"
                  rel="noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaLinkedin className={iconClasses} />
                </Link>
              </div>
            </div>

            {/* Footer Links - about us */}
            <div className="w-full text-center lg:text-left lg:w-2/3 lg:flex gap-5 justify-between">
              <ul className="space-y-4">
                <li>
                  <Link href="/about-us" className="hover:text-gray-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:text-gray-400"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-and-return-policy"
                    className="hover:text-gray-400"
                  >
                    Refund and Return Policy
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-gray-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="hover:text-gray-400">
                    Disclaimer
                  </Link>
                </li>
              </ul>

              <ul className="space-y-4">
                <li>
                  <Link
                    href="/blog/medicine-online"
                    className="hover:text-gray-400"
                  >
                    Buy Medicines Online
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/top-10-pharmaceutical-companies-in-bangladesh"
                    className="hover:text-gray-400"
                  >
                    Top 10 Pharmaceutical
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-gray-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-gray-400">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-gray-400">
                    FAQ
                  </Link>
                </li>
              </ul>

              <ul className="space-y-4">
                <li>Online Drug License: DC-22813</li>
                <li>DBID License: 384191730</li>
                <li>Trade License: TRAD/DNCC/048628/2022</li>
                <li>Model Pharmacy License: DC-21000</li>
                <li className="flex justify-center lg:justify-start">
                  <Image
                    alt="Model Pharmacy"
                    src={modelPharmacy}
                    className="w-auto h-auto "
                  />
                </li>
              </ul>
            </div>

          </div>

          {/* SSL Commerz Banner */}
          <div className="w-full lg:w-1/3 lg:mx-auto text-center mt-8">
            <picture>
              <Image
                alt="ssl commerze"
                src={sslImages}
                className="mx-auto w-auto"
              />
            </picture>
            <div className="h-px w-1/3 bg-white my-4 mx-auto"></div>
            <div className="text-center">
              <span>
                Copyright © 2024{" "}
                <Link href="/" className="hover:text-gray-400">
                  pharmasuite.
                </Link>{" "}
                All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
