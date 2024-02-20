import React from "react";
import { useNavigate } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Header(){
  const navigation = useNavigate();
 function handleClick(){
  navigation(`/`)
  }
  return (
    <header className="sticky top-0 z-40 flex-none mx-auto w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b dark:border-b-0">
      <div className="py-3 px-3 mx-auto w-full flex justify-between align-middle max-w-6xl md:px-4">
        <p onClick={handleClick} className="flex text-2xl font-bold text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
          Jyotirmay Gupta
        </p>
        <div className="flex">
          <a href="https://github.com/jyotirmaygithub?tab=repositories">
          <GitHubIcon  />          
          </a>
        </div>
      </div>
    </header>
  );
};
