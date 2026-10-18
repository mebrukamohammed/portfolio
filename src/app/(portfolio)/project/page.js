"use client"
import Image from "next/image";
import { GithubIcon } from "../../icons";
import { useState } from "react";

const Projects = () => {
  // Capitalize the variable name so React treats it as a component
  const Icon = GithubIcon;
  const [selectedTech, setSelectedTech]=useState("");
  const href = "https://github.com/mebrukamohammed";
  const githubFinder=" https://github.com/mebrukamohammed/github-user-founder";
  const expenseTracker="https://github.com/mebrukamohammed/expense-tracker";
  const kanbanBoard="https://github.com/mebrukamohammed/kanban-board-sample";
  const ColorPallete="https://github.com/mebrukamohammed/color-pallete-generator";
  const QuizApp="https://github.com/mebrukamohammed/quiz-app";
  const movieApp="https://github.com/mebrukamohammed/movie-app-react"
  
const allProjects = [
  {
    title: "SocialHub",
    description: "Social networking app that people can share thoughts, posts, and perform social activities.",
    image: "/Arteta.png",
    category: "React",
    href: "https://github.com/mebrukamohammed",
  },
  {
    title: "GitHub User Finder",
    description: "A web application that allows users to instantly search GitHub profiles and stats.",
    image: "/github-finder.jpg",
    category: "HTML/CSS/JS",
    href:githubFinder
  },
  {
    title: "Expense Tracker",
    description: "An expense tracker app that records and calculates each expense and deposit you save.",
    image: "/expense-tracker.jpg",
    category: "HTML/CSS/JS",
    href: expenseTracker
  },
    {
    title: "Color Pallete Generator",
    description: "Simple app to generate what ever color hex code user wants.",
    image: "/Arteta.png",
    category: "HTML/CSS/JS",
    href: ColorPallete
  },
    {
    title: "Quiz App",
    description: "Quiz taking platform by giving specified amount of questions in general knowledge category",
    image: "/Arteta.png",
    category: "HTML/CSS/JS",
    href: QuizApp
  },
    {
    title: "Kanban Board",
    description: "A simple kanban like board to track progress in day to day activities.",
    image: "/kanban-board.jpg",
    category: "HTML/CSS/JS",
    href: kanbanBoard
  },
   {
    title: "Movie Base",
    description: "searching movies and saving in favorites.",
    image: "/Arteta.png",
    category: "React",
    href: QuizApp
  }

];
const filteredProjects=selectedTech==="All Technologies" ? allProjects : allProjects.filter(project=> project.category===selectedTech)



return (
    <>
      <div className="flex flex-row justify-between items-center w-full px-8 pt-30 pb-6">
        <h2 className="text-2xl font-bold text-white">Top Featured</h2>

        <select className="bg-zinc-800 text-white px-4 py-2 rounded-lg border border-zinc-700 outline-none" onChange={(e)=>setSelectedTech(e.target.value)}>
          <option>All Technologies</option>
          <option>HTML/CSS</option>
          <option>HTML/CSS/JS</option>
          <option>React</option>
          <option>Next.js</option>
          <option>Python</option>
          <option>C++</option>
          <option>supervised learning</option>
          <option>project management</option>
          <option>instructional Game design</option>
        </select>
      

      </div>
      
    
      

      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 px-8 py-6">
        {filteredProjects.length>0 ? (
               filteredProjects.map((project,index)=> <li key={index}>
        <div className="w-[350px] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 text-center flex flex-col">
  <div className="relative w-full h-56">
     <Image
      src={project.image}
      alt="project Image"
      fill
      sizes="(max-width: 768px) 100vw, 350px"
      className="object-cover"
    />
     <div className="p-6 flex flex-col items-center flex-grow text-center">
    <h3 className="text-xl font-bold text-white">{project.title}</h3>
    
    <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
     {project.description}
    </p>
    
    <a
      href={project.href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 mt-6 text-white hover:text-zinc-300 font-medium text-sm"
    >
      <Icon className="w-5 h-5" />
      <span>contribute</span>
    </a>
  
    <a
      href={project.href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex justify-center items-center p-2.5 mt-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-sm w-full transition-colors"
    >
      Try it out
    </a>
  </div>




  </div>
  </div>
               </li>
        )):<p> No featured Technology</p>}
        </div>
        </> )
}
export default Projects
  
       