// import Image from 'next/image'
import { Inter } from "next/font/google";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EmailIcon from '@mui/icons-material/Email';
import Head from "next/head";
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';



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
    <>
      <Head>
        {/* header */}
        <div className="flex flex-col justify-center items-center lg:h-[1400px] sm:h-[400px] h-[225px] w-[100%]
        bg-fixed bg-contain" style={{ backgroundImage: "url(/mainbg.JPG)" }}>
          <img
            src="/profile.jpg"
            alt="Image 1"
            className="rounded-full lg:w-32 lg:h-32 sm:w-24 sm:h-24 h-16 w-16 border-4 border-white"
            width="50"
            height="50"
          />

          <div className="justify-top items-right lg:space-x-10 sm:space-x-10 space-x-4 text-white mt-10 text-xl underline">
            <Link href="/home">HOME</Link>
            <Link href="/blog">BLOG</Link>
            <Link href="/personal">MY LIFE</Link>
          </div>

          <div className="text-center lg:text-4xl sm:text-2xl text-white font-serif lg:my-32 sm:my-10 my-2 leading-loose lg:px-16 sm:px-8 px-4 tracking-wide">
            "Life was like a box of chocolates, you never know what you're gonna get."<br />
            <span className="lg:text-xl/5 sm:text-lg text-white font-serif italic font-thin">----&nbsp;&nbsp;&nbsp;Forrest Gump</span>
          </div>
        </div>

        {/* navigation */}


        {/* external links */}
        <div className="flex justify-center lg:space-x-10 sm:space-x-10 space-x-4 p-12">
          <Link
            href="https://github.com/LAREINA-JO"
            className="flex flex-col items-center"
          >
            <GitHubIcon className="lg:scale-[2] lg:hover:scale-150 sm:scale-[2] sm:hover:scale-150 scale-[1] ease-in duration-700"></GitHubIcon>
            <br />GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/rui-guan-9079b5229/"
            className="flex flex-col items-center"
          >
            <LinkedInIcon className="lg:scale-[2] lg:hover:scale-150 sm:scale-[2] sm:hover:scale-150 scale-[1] ease-in duration-700"></LinkedInIcon>
            <br />LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com/lalalala_lareina/"
            className="flex flex-col items-center"
          >
            <InstagramIcon className="lg:scale-[2] lg:hover:scale-150 sm:scale-[2] sm:hover:scale-150 scale-[1] ease-in duration-700"></InstagramIcon>
            <br />Instagram
          </Link>
          <a
            target="_blank"
            href="mailto:lareina.guan@mail.utoronto.ca?subject=Hello, Lareina"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <EmailIcon className="lg:scale-[2] lg:hover:scale-150 sm:scale-[2] sm:hover:scale-150 scale-[1] ease-in duration-700"></EmailIcon>
            <br />Email
          </a>
          <a
            target="_blank"
            href="/Rui_Guan_Grad_Resume_N.pdf"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <PictureAsPdfIcon className="lg:scale-[2] lg:hover:scale-150 sm:scale-[2] sm:hover:scale-150 scale-[1] ease-in duration-700"></PictureAsPdfIcon>
            <br />Resume
          </a>
        </div>

        {/* short description */}
        <div className="text-center lg:text-3xl lg:px-16 px-6 text-lg font-serif font-bold space-x-1.5 leading-loose">I,&nbsp;
          <span className="underline decoration-slate-400">
            Rui (Lareina) Guan
          </span>
          , am currently pursuing a&nbsp;
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
      </Head>

      <Divider variant="middle" className="lg:py-10 lg:mx-24" />

      <main className="lg:px-64 px-8 py-14 sm:px-32">
        {/* education */}
        <div className="text-justify lg:text-xl lg:py-8 space-x-1.25 leading-loose">
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
        <div className="text-justify lg:text-xl lg:mb-8 space-x-1.25 leading-loose">
          When I was an undergraduate student, I took a lot of courses and got
          skills and knowledge about&nbsp;
          <span className="underline decoration-sky-400 font-bold">
            Software Development
          </span>
          &nbsp;and&nbsp;
          <span className="underline decoration-sky-400 font-bold">
            Web Development
          </span>
          &nbsp;such as&nbsp;

          {/* list of skills */}
          <span className="text-violet-800">C/C++</span>,&nbsp;
          <span className="text-violet-800">Java</span>,&nbsp;
          <span className="text-violet-800">HTML</span>,&nbsp;
          <span className="text-violet-800">CSS</span>,&nbsp;
          <span className="text-violet-800">JavaScript</span>,&nbsp;
          <span className="text-violet-800">React</span>,&nbsp;
          <span className="text-violet-800">Node.js</span>,&nbsp;
          <span className="text-violet-800">MySQL</span>, etc.
          Tmyefore, I have a strong interest in&nbsp;
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
        <div className="text-justify lg:text-xl lg:mb-8 space-x-1.25 leading-loose">
          As a master's student in Electrical and Computer Engineering at the University of Toronto,
          I have a solid foundation in computer science and engineering principles.
          I am committed to learning and mastering the latest technologies,
          which perfectly aligns with the dynamic field of web development.
          I have a BSc in Software Engineering from the University of Calgary,
          which gives me a strong background in software engineering.
          This academic journey has developed a solid understanding of software development principles and best practices.
        </div>

        {/* 展望未来+编瞎话 */}
        <div className="text-justify lg:text-xl lg:mb-8 space-x-1.25 leading-loose">
          I am genuinely passionate about web development, and I thrive in a team environment.
          I enjoy tackling complex challenges and finding innovative solutions.
          I am committed to delivering high-quality code and constantly learning,
          which makes me very suitable for this position.
        </div>
      </main>

      {/* timeline */}
      <Timeline position="alternate" className="pb-16 lg:pt-10">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="text-justify text-stone-500 lg:text-lg lg:pr-[120px] lg:pb-10 sm:pr-[60px] text-xs">
              I entered the world on August 7, 2001, in Jiamusi,
              a city situated in the Heilongjiang Province of China.
              Prior to my birth, my parents carefully perused the dictionary to select the name "Rui" for me, which means of intelligence and wisdom.
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="text-justify text-stone-500 lg:text-lg lg:pl-[120px] lg:pb-10 sm:pl-[60px] text-xs">
              My family moved to Tianjin in 2014, and in 2015, I began my high school education at Tianjin Yangcun No.1 High School.
              Later, I transferred to Tianjin Yinghua International School in 2016 and graduated in 2018.
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="text-justify text-stone-500 lg:text-lg lg:pr-[120px] lg:pb-10 sm:pr-[60px] text-xs">
              In 2023, I got my Bachelor of Engineering degree in Software Engineering from the University of Calgary.
              In the same year, I was admitted to the University of Toronto to pursue a Master of Engineering degree in Electrical and Computer Engineering.
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="text-right text-stone-500 lg:text-lg lg:pl-[120px] lg:pb-10 sm:pl-[60px] text-xs">
              Life is like a box of chocolates, you never know what you're gonna get.<br />
              I'm embarking on a new journey in life, wishing for smooth sailing and a bright future ahead...
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>


    </>
  );
}
