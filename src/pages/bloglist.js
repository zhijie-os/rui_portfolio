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


export default function Bloglist() {

  return (
    <>
      <title>Lareina's Blogs</title>
      {/* header */}
      <div className="flex flex-col justify-center items-center lg:h-[500px] sm:h-[250px] h-[200px] bg-fixed bg-white">
        <img
          src="/profile2.jpg"
          alt="Image 1"
          className="rounded-full lg:w-32 lg:h-32 sm:w-24 sm:h-24 h-16 w-16 border-4 border-black"
          width="50"
          height="50"
        />

        <div className="justify-top items-right lg:space-x-10 sm:space-x-10 space-x-4 lg:mt-10 sm:mt-10 mt-4 lg:text-2xl sm:text-xl text-sm underline">
          <Link href="/">HOME</Link>
          <Link href="/blog">BLOG</Link>
          <Link href="/personal">MY LIFE</Link>
          <Link href="/calendar">CALENDAR</Link>
        </div>
      </div>
    </>
  );
}
