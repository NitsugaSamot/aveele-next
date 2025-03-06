import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Contenido from '@/components/Contenido'
import Servicios from '@/components/Servicios'
import Redes from '@/components/Redes'

const inter = Inter({ subsets: ['latin'] })

export default function Magazine() {
  return (
    <>
    <header className="headerr inicio">
        <div className="contenedor contenido-header">
            <div className="barra">
                <a href="/">
                    <img src="/img/aveelee25.png" alt="Logo"/>
                </a>

                <div className="mobile-menu">
                    <img src="/img/barras.png" alt="icono menu responsive"/>
                </div>

                <div className="derecha">
                    {/* <img className="dark-mode-boton" src="/img/dark-mode.svg"> */}
                    <nav className="navegacion">
                        <a href="nosotros.html">Nosotros</a>
                        <a href="anuncios.html">Anuncios</a>
                        <a href="blog.html">Blog</a>
                        <a href="contacto.html">Contacto</a>
                    </nav>
                </div>
   
                
            </div> 

            <h1>Revista Web</h1>
        </div>
    </header>
        
    </>
  )
}
