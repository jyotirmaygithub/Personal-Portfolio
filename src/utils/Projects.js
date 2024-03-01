import React from "react";
import cockTail from "../Assets/images/Cocktail.png";
import exploreHub from "../Assets/images/ExploreHub.png";
import wallpaper from "../Assets/images/Wallpaper.png";
import noteVault  from "../Assets/images/note.png"

export default function Projects() {
  const works = [
    {
      title: "Note-Vault",
      description:
        "Your Secure Space for Effortless Note-Taking and Quick Retrieval 📝. [React, Tailwind CSS, Material UI, MongoDB Atlas, Express js, Node js]",
      code: "https://github.com/jyotirmaygithub/Task-Hub",
      live: "https://note-vault-to-keep-notes.netlify.app",
      stack: "React, Tailwind CSS",
      thumbnail: noteVault,
    },
    {
      title: "Pixel-Blend",
      description:
        "Discover and download trending wallpapers for your devices instantly! Elevate your screens with the latest in style. 📱💻🌟 design using React and Tailwind CSS",
      code: "https://github.com/jyotirmaygithub/PixelBlend",
      live: "https://wallpaper-studio.netlify.app",
      stack: "HTML, Bootstrap 5",
      thumbnail: wallpaper,
    },
    {
      title: "Explore-Hub",
      description:
        "Explore effortlessly with our Google-like search features! Simplify and speed up your exploration. Search smarter, explore faster! 🚀  made using HTML,Tailwind CSS ,React",
      code: "https://github.com/jyotirmaygithub/Explore-Hub",
      live: "https://react-explore-hub.netlify.app",
      stack: "HTMl, CSS, JavaScript",
      thumbnail: exploreHub,
    },
    {
      title: "CockTail-Lover",
      description:
        "Explore a variety of cocktails with our site! Find recipes, ingredients, and step-by-step guides for the perfect mix. Cheers to your next favorite drink! 🍹. [React, Tailwind CSS, Material UI]",
      code: "https://github.com/jyotirmaygithub/For-cocktail-lover",
      live: "https://for-cocktail-lover.netlify.app",
      stack: "React, Tailwind CSS",
      thumbnail: cockTail,
    }
  ];
  return (
    <>
    <div
      id="projects"
      className="flex flex-col items-start mt-14 mx-5 space-y-5"
    >
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-12 mt-12 md:grid-cols-3">
        {works.map((work, index) => (
          <div
            key={index}
            className="p-4 space-y-5 border border-white group lg:gap-x-0 lg:gap-y-5 hover:border-zinc-200 rounded-2xl"
          >
            <img
              alt="blog"
              loading="lazy"
              width="400"
              height="400"
              className="object-cover w-full h-auto rounded-2xl"
              src={work.thumbnail}
            />
            <div className="flex flex-col items-start space-y-3">
              <h2 className="text-xl font-semibold">{work.title}</h2>
              <p>{work.description}</p>
              <div className="flex flex-row items-center w-full">
                <a
                  href={work.live}
                  target="_blank"
                  rel="noreferrer"
                  className="w-auto px-3 py-1 transition duration-500 ease-in-out delay-150 border rounded-lg hover:bg-zinc-900 hover:text-white"
                >
                  Live{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-4 h-4 icon icon-tabler icon-tabler-devices"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10z"></path>
                    <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9"></path>
                    <path d="M16 9h2"></path>
                  </svg>
                </a>
                <a
                  href={work.code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-auto px-3 py-1 transition duration-500 ease-in-out delay-150 border rounded-lg ms-3 hover:bg-zinc-900 hover:text-white"
                >
                  Source Code{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-4 h-4 icon icon-tabler icon-tabler-code"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 8l-4 4l4 4"></path>
                    <path d="M17 8l4 4l-4 4"></path>
                    <path d="M14 4l-4 16"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
