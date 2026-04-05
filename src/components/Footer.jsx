import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[radial-gradient(circle_at_top,_#0f172a_0%,_#020617_80%)] text-[#cbd5f5] px-[60px] py-[50px] pb-[30px]">
      
      <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-[80px] max-[900px]:grid-cols-1 max-[900px]:gap-[40px] max-[900px]:text-center">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-white text-[2rem] mb-[15px] font-bold">
            ContentPilot
          </h3>
          <p className="text-[0.95rem] leading-[1.7] max-w-[340px] max-[900px]:mx-auto">
           Built for creators who choose results over confusion.
            Powered by systems. Driven by growth.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-white text-[1.5rem] mb-[18px] font-semibold">
            Quick Links
          </h4>

          <div className="flex relative z-[1] max-[900px]:justify-center">
            
            <div className="mr-[10px]">
              <ul className="list-none p-0">
                <li className="mb-[12px] cursor-pointer hover:text-[#22c55e] transition-colors">
                  <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-white no-underline">
                    Home
                  </Link>
                </li>
                <li className="mb-[12px] cursor-pointer hover:text-[#22c55e] transition-colors">
                  <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-white no-underline">
                    About
                  </Link>
                </li>
                <li className="mb-[12px] cursor-pointer hover:text-[#22c55e] transition-colors">
                  <Link to="/contribute" onClick={() => window.scrollTo(0, 0)} className="text-white no-underline">
                    Contribute
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="list-none p-0">
                <li className="mb-[12px] cursor-pointer hover:text-[#22c55e] transition-colors">
                  <Link to="/recentDonations" onClick={() => window.scrollTo(0, 0)} className="text-white no-underline">
                    Donations
                  </Link>
                </li>
                <li className="mb-[12px] cursor-pointer hover:text-[#22c55e] transition-colors">
                  <Link to="/contributionBoard" onClick={() => window.scrollTo(0, 0)} className="text-white no-underline">
                    LeadersBoard
                  </Link>
                </li>
                <li className="mb-[12px] cursor-pointer hover:text-[#22c55e] transition-colors">
                  <Link to="/verifiedngo" onClick={() => window.scrollTo(0, 0)} className="text-white no-underline">
                    Verified NGO's
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-white text-[1.5rem] mb-[18px] font-semibold">
            Connect With Us
          </h4>

          <div className="flex gap-[16px] relative z-[1] max-[900px]:justify-center">
            
            <a
              href="https://www.instagram.com/anyadaan/"
              target="blank"
              className="no-underline text-white"
            >
              <span className="w-[51px] h-[51px] rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center text-[1.6rem] cursor-pointer transition-all duration-300 hover:bg-[rgba(24,246,102,0.18)] hover:-translate-y-[2px]">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </a>

            <span className="w-[51px] h-[51px] rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center text-[1.6rem] cursor-pointer transition-all duration-300 hover:bg-[rgba(24,246,102,0.18)] hover:-translate-y-[2px]">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>

            <span className="w-[51px] h-[51px] rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center text-[1.6rem] cursor-pointer transition-all duration-300 hover:bg-[rgba(24,246,102,0.18)] hover:-translate-y-[2px]">
              <FontAwesomeIcon icon={faTwitter} />
            </span>

            <span className="w-[51px] h-[51px] rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center text-[1.6rem] cursor-pointer transition-all duration-300 hover:bg-[rgba(24,246,102,0.18)] hover:-translate-y-[2px]">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-[25px] pt-[18px] border-t border-[rgba(255,255,255,0.15)] text-center text-[0.9rem] text-[#94a3b8]">
        © 2026 <span className="text-[#22c55e] font-semibold">ContentPilot</span> — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;