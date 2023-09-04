// import Image from 'next/image'
import { Inter } from "next/font/google";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EmailIcon from '@mui/icons-material/Email';
import * as React from 'react';
import Divider from '@mui/material/Divider';



{/* 
  Underline Color:
    Name: slate-400
    Degree: lime-400
    School: orange-400
    Interest Direction: sky-400

  Text Color:
    Skills: violet-800
*/}

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <body>
      <header>
        {/* header */}
        <div className="flex flex-col justify-center items-center h-[1350px]
        bg-fixed bg-contain" style={{ backgroundImage: "url(/mainbg.JPG)" }}>
          <img
            src="/profile.jpg"
            alt="Image 1"
            className="rounded-full w-32 h-32 border-4 border-white"
            width="50"
            height="50"
          />
          <div className="text-center text-4xl text-white font-serif my-32 leading-loose px-16 tracking-wide">
            "Life was like a box of chocolates, you never know what you're gonna get."<br />
            <span className="text-xl/5 text-white font-serif italic font-thin">----&nbsp;&nbsp;&nbsp;Forrest Gump</span>
          </div>
        </div>
        {/* navigation */}
        <div className="flex justify-center space-x-10 p-12">
          <Link
            href="https://github.com/LAREINA-JO"
            className="flex flex-col items-center"
          >
            <GitHubIcon className="scale-[2] hover:scale-150 ease-in duration-700"></GitHubIcon>
            <br />GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/rui-guan-9079b5229/"
            className="flex flex-col items-center"
          >
            <LinkedInIcon className="scale-[2] hover:scale-150 ease-in duration-700"></LinkedInIcon>
            <br />LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com/lalalala_lareina/"
            className="flex flex-col items-center"
          >
            <InstagramIcon className="scale-[2] hover:scale-150 ease-in duration-700"></InstagramIcon>
            <br />Instagram
          </Link>
          <a
            target="_blank"
            href="mailto:lareina.guan@mail.utoronto.ca?subject=Hello, Lareina"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <EmailIcon className="scale-[2] hover:scale-150 ease-in duration-700"></EmailIcon>
            <br />Email
          </a>
          <a
            target="_blank"
            href="/Rui_Guan_Grad_Resume_N.pdf"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <PictureAsPdfIcon className="scale-[2] hover:scale-150 ease-in duration-700"></PictureAsPdfIcon>
            <br />Resume
          </a>
        </div>

        {/* short description */}
        <div className="text-center text-3xl px-16 font-serif font-bold space-x-1.5">I,&nbsp;
          <span className="underline decoration-slate-400">
            Rui (Lareina) Guan
          </span>
          , who is currently pursuing a&nbsp;
          <span className="underline decoration-lime-400">
            Master of Engineering
          </span>
          &nbsp;degree within the Department of Electrical and Computer Engineering at
          the&nbsp;
          <span className="underline decoration-orange-400">
            University of Toronto
          </span>
          .
        </div>
      </header>

      <Divider variant="middle" className="p-4" />

      <main className="px-60 pb-16">
        {/* education */}
        <div className="text-justify text-xl py-8 space-x-1.5 leading-loose">
          In April 2023, I reveived my&nbsp;
          <span className="underline decoration-lime-400 font-bold">
            Bachelor of Engineering
          </span>
          &nbsp;degree within the Department of Software Engineering in&nbsp;
          <span className="underline decoration-orange-400 font-bold">
            University of Calgary
          </span>
          &nbsp;with distinct.
        </div>

        {/* skills */}
        <div className="text-justify text-xl mb-8 space-x-1.5 leading-loose">
          When I was an undergraduate student, I took a lot of courses and got
          skills and knowledge about&nbsp;
          <span className="underline decoration-sky-400 font-bold">
            Software Development
          </span>
          &nbsp;and&nbsp;
          <span className="underline decoration-sky-400 font-bold">
            Web Development
          </span>
          &nbsp;such as

          {/* list of skills */}
          <span className="text-violet-800">C/C++</span>,&nbsp;
          <span className="text-violet-800">Java</span>,&nbsp;
          <span className="text-violet-800">HTML</span>,&nbsp;
          <span className="text-violet-800">CSS</span>,&nbsp;
          <span className="text-violet-800">JavaScript</span>,&nbsp;
          <span className="text-violet-800">React</span>,&nbsp;
          <span className="text-violet-800">Node.js</span>,&nbsp;
          <span className="text-violet-800">MySQL</span>, etc.
          Therefore, I have a strong interest in&nbsp;
          <span className="underline decoration-sky-400 font-bold">
            Software Development
          </span>
          &nbsp;and&nbsp;
          <span className="underline decoration-sky-400 font-bold">
            Web Development
          </span>
          &nbsp;and I have a strong desire to learn more about them.
        </div>

        {/* 编瞎话 */}
        <div className="text-justify text-xl mb-8 space-x-1.5 leading-loose">
          As a master's student in Electrical and Computer Engineering at the University of Toronto,
          I have a solid foundation in computer science and engineering principles.
          I am committed to learning and mastering the latest technologies,
          which perfectly aligns with the dynamic field of web development.
          I have a BSc in Software Engineering from the University of Calgary,
          which gives me a strong background in software engineering.
          This academic journey has developed a solid understanding of software development principles and best practices.
        </div>

        {/* 展望未来+编瞎话 */}
        <div className="text-justify text-xl mb-8 space-x-1.5 leading-loose">
          I am genuinely passionate about web development, and I thrive in a team environment.
          I enjoy tackling complex challenges and finding innovative solutions.
          I am committed to delivering high-quality code and constantly learning,
          which makes me very suitable for this position.
        </div>
      </main>
    </body>

  );
}
