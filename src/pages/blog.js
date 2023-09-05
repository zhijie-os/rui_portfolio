// import Image from 'next/image'
import { Inter } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


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


// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//     </Box>
// );


export default function Blog() {
    const theme = useTheme();
    // const [playing, setPlaying] = useState(false);
    // const audioRef = useRef();
    // const play = () => {
    //     setPlaying(true);
    //     audioRef.current.play();
    // };

    // const pause = () => {
    //     setPlaying(false);
    //     audioRef.current.pause();
    // };

    return (
        <>
            <Head>
                <div className="flex flex-col justify-center items-center lg:h-[500px] sm:h-[250px] h-[125px] bg-fixed bg-white">
                    <img
                        src="/profile2.jpg"
                        alt="Image 1"
                        className="rounded-full lg:w-32 lg:h-32 sm:w-24 sm:h-24 h-16 w-16 border-4 border-black"
                        width="50"
                        height="50"
                    />

                    <div className="justify-top items-right lg:space-x-10 sm:space-x-10 space-x-4 text-black mt-16 text-xl underline">
                        <Link href="/home">HOME</Link>
                        <Link href="/blog">BLOG</Link>
                        <Link href="/personal">MY LIFE</Link>
                    </div>
                </div>

                {/* <Card className="justify-center" sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Lemon
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                米津玄师 Kenshi Yonezu
                            </Typography>
                        </CardContent>
                        <Box className="w-[100px]" sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <IconButton aria-label="previous">
                                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                            </IconButton>
                            <IconButton aria-label="play/pause" onClick={playing ? pause : play}>
                                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                            </IconButton>
                            <audio ref={audioRef} src='/lemon.mp3' />
                            <IconButton aria-label="next">
                                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                            </IconButton>
                        </Box>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="/Kenshi_Yonezu_-_Lemon.png"
                        alt="Live from space album cover"
                    />
                </Card> */}
            </Head>

            <main className="lg:pl-[40%] pb-16 sm:px-40 px-16">
                <Card className="w-[500px] h-[333px] mb-24 bg-cover" style={{ backgroundImage: "url(/cat2.JPG)" }}>
                    <CardContent>
                        <Typography variant="h5" component="div" className="lg:text-5xl sm:text-2xl font-mono text-white lg:m-10 sm:m-8">
                            {/* be{bull}nev{bull}o{bull}lent */}
                            Brainstormings
                        </Typography>
                        <Typography variant="body2" className="lg:mx-10 sm:mx-8 lg:mt-10 sm:mt-8 lg:text-base font-mono text-white">
                            A few messy little thoughts
                            Write them down as they come to mind
                            <br/>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className="mx-10 my-4 text-sm font-mono text-white hover:underline">Learn More</Button>
                    </CardActions>
                </Card>

                <Card className="w-[500px] h-[333px] mb-24 bg-cover" style={{ backgroundImage: "url(/cat1.JPG)" }}>
                    <CardContent>
                        <Typography variant="h5" component="div" className="lg:text-5xl sm:text-2xl font-mono text-white lg:m-10 sm:m-8">
                            {/* be{bull}nev{bull}o{bull}lent */}
                            Blogs
                        </Typography>
                        <Typography variant="body2" className="lg:mx-10 sm:mx-8 lg:mt-10 sm:mt-8 lg:text-base font-mono text-white">
                            Daily feelings and thoughts
                            <br />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className="mx-10 my-4 text-sm font-mono text-white hover:underline">Learn More</Button>
                    </CardActions>
                </Card>
            </main>
        </>
    );
}