// import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <img src="/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" 
      alt="Image 1" 
      className="rounded-full w-32 h-32" 
      width="300" 
      height="300"
      />

      <div className="flex flex-col items-center justify-center min-h-screen py-2"></div>
    </main>
    
  )
}
