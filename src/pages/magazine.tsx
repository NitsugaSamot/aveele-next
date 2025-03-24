import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Contenido from '@/components/Contenido'
import Servicios from '@/components/Servicios'
import Redes from '@/components/Redes'
import Articulos from "@/components/revista/Articulos";
import articlesData from "../../articules.json";

export default function Magazine() {
  return (
    <>
    <header className="headerr inicio">
        <div className="contenedor contenido-header">
            <div className="barra">
                    <img src="/img/aveelee25.png" alt="Logo"/>
   
                <div className="mobile-menu">
                    <img src="/img/barras.png" alt="icono menu responsive"/>
                </div>

                <div className="derecha">
                    {/* <img className="dark-mode-boton" src="/img/dark-mode.svg"> */}
                    <nav className="navegacion">
                        {/* <a href="nosotros.html">Nosotros</a>
                        <a href="anuncios.html">Anuncios</a>
                        <a href="blog.html">Blog</a>
                        <a href="contacto.html">Contacto</a> */}
                    </nav>
                </div>
   
                
            </div> 

            <h1>Revista Web</h1>
        </div>
    </header>
{/* 
    <header className="bg-gray-900 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Revista Web</h1>
      </header> */}

      <main className="p-8">
      <Articulos articles={articlesData.articles} />
        {/* <Articulos articles={articles} /> */}
      </main>
        
    </>
  )
}