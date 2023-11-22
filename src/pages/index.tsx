import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Contenido from '@/components/Contenido'
import Servicios from '@/components/Servicios'
import Redes from '@/components/Redes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Redes/>
        <Header/>
        <Servicios/>
        <Contenido/>
        
    </>
  )
}
