import React from 'react';
import Footer from '../Layout/Footer';

const Skills = () => {
  const skills = [
    {
      category: 'Languages',
      items: ['HTML', 'CSS', 'JavaScript','Node.js', 'Java'],
    },
    {
      category: 'Frameworks',
      items: ['React-Bootstrap', 'Tailwind CSS'],
    },
    {
      category: 'Library',
      items: ['ReactJS', 'Material UI'],
    },
    {
      category: 'Design',
      items: ['Figma', 'Canva'],
    },
    {
      category: 'Others',
      items: ['WordPress', 'Git', 'Github', 'Netlify'],
    },
  ];
  return (
    <>
    <div className="flex flex-col items-start mx-11 mt-20 space-y-5">
      <h1 className="text-3xl font-bold">Skills</h1>
      <div className="md:grid md:grid-cols-3 md:gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="py-3 border-b-2 border-dashed border-zinc-300 md:border-0"
          >
            <h2 className="text-2xl">{skill.category}</h2>
            <div className="flex">
              <ul className="">
                {skill.items.map((item, index) => (
                  <li
                    key={index}
                    className="relative inline-block px-3 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='fixed bottom-0 w-full'>
      <Footer/>
    </div>
    </>
  );
};

export default Skills;
