import { FC } from "react";
import { Container, Grid, Text, Link, Icon } from "lucide-react"; // Make sure these components exist in your Shadcn UI setup
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import DockDemo from "./docs";

const Footer: FC = () => {
  return (
    <>
  
<div className="mt-6">
        
        <span className="text-center mx-12 p-2  text-white-400 text-sm ">
          © {new Date().getFullYear()} Ultragleam. All rights reserved.
        </span>

        <p className="text-neutral-500  max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        
        Contact:-9343860346 <br /> Email:- contact@ultragleam.in

        </p>

        </div>
        </>
     

  );
};

export default Footer;
