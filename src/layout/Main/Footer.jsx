import React from "react";
import logo from "../../assets/logo.png";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FaLinkedin, FaTwitter, FaRegHandPeace } from "react-icons/fa";
const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer>
      <div className="footer items-center p-4  flex lg:justify-between flex-wrap md:justify-between sm:justify-between justify-center">
        <div className="items-center grid-flow-col font-semibold text-accent">
          <p>© {year} Knoct Inc. All rights reserved.</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-accent text-2xl ">
          <a href="#" className="hover:text-primary">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-primary">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-primary">
            <BsFacebook />
          </a>
          <a href="#" className="hover:text-primary">
            <BsGithub />
          </a>
          <a href="#" className="hover:text-primary">
            <FaRegHandPeace />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
