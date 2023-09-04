// import Image from 'next/image'
import { Inter } from "next/font/google";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EmailIcon from '@mui/icons-material/Email';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* header */}
      <div className="flex flex-col justify-center items-center h-[1350px]
        bg-opacity-75 bg-fixed bg-contain" style={{backgroundImage: "url(/mainbg.JPG)"}}>
        <img
          src="/profile.jpg"
          alt="Image 1"
          className="rounded-full w-32 h-32 border-4 border-white"
          width="50"
          height="50"
          
        />
        <div className="items-center text-4xl/5 text-white font-mono m-16" >
          Life is real, life is earnest.
        </div>
      </div>

      {/* navigation */}
      <div className="flex justify-center space-x-10 p-10">
        <Link
          href="https://github.com/LAREINA-JO"
          className="flex flex-col items-center"
        >
          <GitHubIcon className="scale-[2] hover:scale-150 ease-in duration-700"></GitHubIcon>
          <br/>GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/rui-guan-9079b5229/"
          className="flex flex-col items-center"
        >
          <LinkedInIcon className="scale-[2] hover:scale-150 ease-in duration-700"></LinkedInIcon>
          <br/>LinkedIn
        </Link>
        <Link
          href="https://www.instagram.com/lalalala_lareina/"
          className="flex flex-col items-center"
        >
          <InstagramIcon className="scale-[2] hover:scale-150 ease-in duration-700"></InstagramIcon>
          <br/>Instagram
        </Link>
        <a
          target="_blank"
          href="mailto:lareina.guan@mail.utoronto.ca?subject=Hello, Lareina"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <EmailIcon className="scale-[2] hover:scale-150 ease-in duration-700"></EmailIcon>
          <br/>Email
        </a>
        <a
          target="_blank"
          href="/Rui_Guan_Grad_Resume_N.pdf"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <PictureAsPdfIcon className="scale-[2] hover:scale-150 ease-in duration-700"></PictureAsPdfIcon>
          <br/>Resume
        </a>
      </div>

      {/* short description */}
      <div className="text-center text-3xl font-bold">
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

      {/* education */}
      <div className="text-center text-xl">
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
      <div className="text-center text-xl">
        When I was an undergraduate student, I took a lot of courses and got
        skills and knowledge about&nbsp;
        <span className="underline decoration-sky-400 font-bold">
          software development
        </span>
        &nbsp;and&nbsp;
        <span className="underline decoration-sky-400 font-bold">
          web development
        </span>
        &nbsp;such as
        <span className="underline decoration-violet-400">C/C++</span>,&nbsp;
        <span className="underline decoration-violet-400">Java</span>,&nbsp;
        <span className="underline decoration-violet-400">HTML</span>,&nbsp;
        <span className="underline decoration-violet-400">CSS</span>,&nbsp;
        <span className="underline decoration-violet-400">JavaScript</span>,&nbsp;
        <span className="underline decoration-violet-400">React</span>,&nbsp;
        <span className="underline decoration-violet-400">Node.js</span>,&nbsp;
        <span className="underline decoration-violet-400">MySQL</span>, etc.
      </div>

      {/* interest */}
      <div className="text-center text-xl">
        Therefore, I have a strong interest in&nbsp;
        <span className="underline decoration-sky-400 font-bold">
          software development
        </span>
        &nbsp;and&nbsp;
        <span className="underline decoration-sky-400 font-bold">
          web development
        </span>
        &nbsp;and I have a strong desire to learn more about them.
      </div>
    </main>
  );
}
