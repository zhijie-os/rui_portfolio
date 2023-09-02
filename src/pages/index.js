// import Image from 'next/image'
import { Inter } from "next/font/google";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-around items-center h-60 bg-gray-300">
        <img
          src="/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          alt="Image 1"
          className="rounded-full w-32 h-32"
          width="300"
          height="300"
        />
        <div className="flex justify-center items-center text-2xl/5">
          Life is real, life is earnest.
        </div>
      </div>
      <div className="flex justify-center space-x-10">
        <Link
          href="https://github.com/LAREINA-JO"
          className="flex flex-col items-center"
        >
          <GitHubIcon className="scale-[2] hover:scale-150 ease-in duration-700"></GitHubIcon>
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/rui-guan-9079b5229/"
          className="flex flex-col items-center"
        >
          <LinkedInIcon className="scale-[2] hover:scale-150 ease-in duration-700"></LinkedInIcon>
          LinkedIn
        </Link>
        <Link
          href="https://www.instagram.com/lalalala_lareina/"
          className="flex flex-col items-center"
        >
          <InstagramIcon className="scale-[2] hover:scale-150 ease-in duration-700"></InstagramIcon>
          Instagram
        </Link>
        <a
          target="_blank"
          href="/Rui_Guan_Grad_Resume_N.pdf"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <PictureAsPdfIcon className="scale-[2] hover:scale-150 ease-in duration-700"></PictureAsPdfIcon>
          Resume
        </a>
      </div>

      {/* short description */}
      <div className="text-center text-3xl font-bold">
        <span className="underline decoration-slate-400">
          Rui (Lareina) Guan
        </span>
        , who is currently pursuing a
        <span className="underline decoration-lime-400">
          Master of Engineering
        </span>
        degree within the Department of Electrical and Computer Engineering at
        the
        <span className="underline decoration-orange-400">
          University of Toronto
        </span>
        .
      </div>

      {/* education */}
      <div className="text-center text-xl">
        In April 2023, I reveived my
        <span className="underline decoration-lime-400 font-bold">
          Bachelor of Engineering
        </span>
        degree within the Department of Software Engineering in
        <span className="underline decoration-orange-400 font-bold">
          University of Calgary
        </span>
        with distinct.
      </div>

      {/* skills */}
      <div className="text-center text-xl">
        When I was an undergraduate student, I took a lot of courses and got
        skills and knowledge about
        <span className="underline decoration-sky-400 font-bold">
          software development
        </span>
        and
        <span className="underline decoration-sky-400 font-bold">
          web development
        </span>
        such as
        <span className="underline decoration-violet-400">C/C++</span>,
        <span className="underline decoration-violet-400">Java</span>,
        <span className="underline decoration-violet-400">HTML</span>,
        <span className="underline decoration-violet-400">CSS</span>,
        <span className="underline decoration-violet-400">JavaScript</span>,
        <span className="underline decoration-violet-400">React</span>,
        <span className="underline decoration-violet-400">Node.js</span>,
        <span className="underline decoration-violet-400">MySQL</span>, etc.
      </div>

      {/* interest */}
      <div className="text-center text-xl">
        Therefore, I have a strong interest in
        <span className="underline decoration-sky-400 font-bold">
          software development
        </span>
        and
        <span className="underline decoration-sky-400 font-bold">
          web development
        </span>
        and I have a strong desire to learn more about them.
      </div>
    </main>
  );
}
