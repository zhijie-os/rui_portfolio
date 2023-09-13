// import Image from 'next/image'
import { Inter } from "next/font/google";
import Link from "next/link";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';



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

const theme = createTheme({
  typography: {
    box: {
      marginTop: '5rem',
    },
  },
});



function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}


export default function Personal() {
  const matches = useMediaQuery('(min-width:600px)');

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

      <div className="text-center lg:mb-16 leading-loose">
        <p className="text-4xl font-bold space-x-2">Welcome to My Life</p>
        <p className="text-xs italic">but not too welcome</p>
        <p className="text-lg">欢迎走近我的世界</p>
      </div>

      {/* Images List */}
      <ThemeProvider theme={theme}>
        <Box variant="box" sx={{ width: 1, height: 1, overflowY: 'scroll' }}>

          {/* fit the screen */}
          <ImageList variant="masonry" cols={matches ? 5 : 2} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </ThemeProvider>
    </>
  );
}


{/* image list */ }
const itemData = [
  {
    img: '/lifeimages/58.jpg',
    title: 'image58',
  },{
    img: '/lifeimages/57.JPG',
    title: 'image57',
  },{
    img: '/lifeimages/56.JPG',
    title: 'image56',
  }, {
    img: '/lifeimages/55.JPG',
    title: 'image55',
  }, {
    img: '/lifeimages/54.JPG',
    title: 'image54',
  }, {
    img: '/lifeimages/53.JPG',
    title: 'image53',
  }, {
    img: '/lifeimages/52.JPG',
    title: 'image52',
  }, {
    img: '/lifeimages/51.JPEG',
    title: 'image51',
  }, {
    img: '/lifeimages/50.jpg',
    title: 'image50',
  }, {
    img: '/lifeimages/49.jpg',
    title: 'image49',
  }, {
    img: '/lifeimages/48.JPG',
    title: 'image48',
  }, {
    img: '/lifeimages/47.JPEG',
    title: 'image47',
  }, {
    img: '/lifeimages/46.JPG',
    title: 'image46',
  }, {
    img: '/lifeimages/45.JPG',
    title: 'image45',
  }, {
    img: '/lifeimages/44.JPG',
    title: 'image44',
  }, {
    img: '/lifeimages/43.JPG',
    title: 'image43',
  }, {
    img: '/lifeimages/42.JPG',
    title: 'image42',
  }, {
    img: '/lifeimages/41.JPG',
    title: 'image41',
  }, {
    img: '/lifeimages/40.JPG',
    title: 'image40',
  }, {
    img: '/lifeimages/39.JPG',
    title: 'image39',
  }, {
    img: '/lifeimages/38.JPG',
    title: 'image38',
  }, {
    img: '/lifeimages/37.JPG',
    title: 'image37',
  }, {
    img: '/lifeimages/36.jpg',
    title: 'image36',
  }, {
    img: '/lifeimages/35.JPG',
    title: 'image35',
  }, {
    img: '/lifeimages/34.JPG',
    title: 'image34',
  }, {
    img: '/lifeimages/33.jpg',
    title: 'image33',
  }, {
    img: '/lifeimages/32.jpg',
    title: 'image32',
  }, {
    img: '/lifeimages/31.jpg',
    title: 'image31',
  }, {
    img: '/lifeimages/30.jpg',
    title: 'image30',
  }, {
    img: '/lifeimages/29.JPG',
    title: 'image29',
  }, {
    img: '/lifeimages/28.JPG',
    title: 'image28',
  }, {
    img: '/lifeimages/27.JPG',
    title: 'image27',
  }, {
    img: '/lifeimages/26.JPEG',
    title: 'image26',
  }, {
    img: '/lifeimages/25.JPEG',
    title: 'image25',
  }, {
    img: '/lifeimages/24.JPEG',
    title: 'image24',
  }, {
    img: '/lifeimages/23.JPG',
    title: 'image23',
  }, {
    img: '/lifeimages/22.JPG',
    title: 'image22',
  }, {
    img: '/lifeimages/21.JPG',
    title: 'image21',
  }, {
    img: '/lifeimages/20.JPG',
    title: 'image20',
  }, {
    img: '/lifeimages/19.JPG',
    title: 'image19',
  }, {
    img: '/lifeimages/18.JPG',
    title: 'image18',
  }, {
    img: '/lifeimages/17.jpeg',
    title: 'image17',
  }, {
    img: '/lifeimages/16.JPG',
    title: 'image16',
  }, {
    img: '/lifeimages/15.jpeg',
    title: 'image15',
  }, {
    img: '/lifeimages/14.JPG',
    title: 'image14',
  }, {
    img: '/lifeimages/13.JPG',
    title: 'image13',
  }, {
    img: '/lifeimages/12.JPG',
    title: 'image12',
  }, {
    img: '/lifeimages/11.JPG',
    title: 'image11',
  }, {
    img: '/lifeimages/10.JPEG',
    title: 'image10',
  }, {
    img: '/lifeimages/9.JPG',
    title: 'image9',
  }, {
    img: '/lifeimages/8.JPG',
    title: 'image8',
  }, {
    img: '/lifeimages/7.JPEG',
    title: 'image7',
  }, {
    img: '/lifeimages/6.JPG',
    title: 'image6',
  }, {
    img: '/lifeimages/5.JPG',
    title: 'image5',
  }, {
    img: '/lifeimages/4.JPG',
    title: 'image4',
  }, {
    img: '/lifeimages/3.JPG',
    title: 'image3',
  }, {
    img: '/lifeimages/2.JPG',
    title: 'image2',
  }, {
    img: '/lifeimages/1.JPG',
    title: 'image1',
  },

];
