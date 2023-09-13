// import Image from 'next/image'
import { Inter } from "next/font/google";
import Link from "next/link";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
// import { useState, useRef } from 'react';
// import { useTheme } from '@mui/material/styles';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import Box from '@mui/material/Box';
// import Head from "next/head";




{/* 
  Underline Color:
    Name: slate-400
    Degree: lime-400
    School: orange-400
    Interest Direction: sky-400

  Text Color:
    Skills: violet-800

     className="lg:text-5xl sm:text-2xl font-mono text-white lg:m-10 sm:m-8"
*/}

const inter = Inter({ subsets: ["latin"] });


// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//     </Box>
// );



{/* style for the brainstorms and blogs cards */}
const theme = createTheme({
    typography: {
        title1: {
            fontFamily: 'Courier New',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginTop: '2rem',
            marginLeft: '2rem',
        },
        subtitle1: {
            fontFamily: 'Courier New',
            fontSize: '1rem',
            color: '#FFFFFF',
            marginLeft: '2rem',
            letterSpacing: '-0.075em',
        },
        button: {
            color: '#FFFFFF',
            font: 'Courier New',
            fontSize: '1rem',
            marginLeft: '1.5rem',
            marginTop: '1rem',
            hover: {
                fontStyle: 'underline',
            },
        },
    },
});


export default function Blog() {
    // const theme = useTheme();
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


            <main className="lg:pl-[40%] py-16 sm:px-40">

                {/* brainstorms and blogs cards */}
                <ThemeProvider theme={theme}>
                    <Card className="lg:w-[500px] lg:h-[333px] sm:w-[500px] sm:h-[333px] w-[100%] h-[300px] mb-20 bg-cover" style={{ backgroundImage: "url(/cat2.jpg)" }}>
                        <CardContent>
                            <Typography variant="title1" component="div">
                                Brainstormings
                            </Typography>
                            <Typography variant="subtitle1">
                                A few messy little thoughts
                                <br />
                                Like some daily mode
                                <br />
                                Write them down as they come to mind
                                <br />
                                Nothing valuable
                                <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="detail1">
                                <a
                                    target="_blank"
                                    href="https://fishy-vermicelli-782.notion.site/Brainstorms-Public-9c8a552a54f64bf9ad3e15d20cdce7b3?pvs=4"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center">
                                    Learn More
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                </ThemeProvider>


                <ThemeProvider theme={theme}>
                    <Card className="lg:w-[500px] lg:h-[333px] sm:w-[500px] sm:h-[333px] w-[100%] h-[300px] mb-24 bg-cover" style={{ backgroundImage: "url(/cat1.jpg)" }}>
                        <CardContent>
                            <Typography variant="title1" component="div">
                                Blogs
                            </Typography>
                            <Typography variant="subtitle1">
                                Some thoughts on my life
                                <br />
                                <br />
                                <br />
                                <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="detail1">
                                <Link href="/bloglist">Learn More</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </ThemeProvider>
            </main>
        </>
    );
}