import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '../components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      </main>
    </>
  )
}
