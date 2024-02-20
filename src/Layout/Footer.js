import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer(){
  
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="text-center">
        Made by Jyotirmay Gupta
        <div className="mt-3 space-x-2">
          <a
          className="hover:bg-gray-200 p-2 hover:rounded-full"
            target="_blank"
            href="https://github.com/jyotirmaygithub?tab=repositories"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a 
          className="hover:bg-gray-200 p-2 hover:rounded-full"
           target="_blank"
          href="https://www.linkedin.com/in/jyotirmay-gupta/" 
          rel="noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
