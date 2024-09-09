import Link from 'next/link'

const Contenido = () => {
  return (
    
    <div className="contenido">

        {/* <div className="servicios">
            <img src="img/4-traducciones.jpg" alt="" />
            <img src="img/5-asesoria-linguistica.jpg" alt="" />
        </div> */}
        
    <div className="informacion-contenido">

      {/* <div className="card">

        <div className="imagen-block">
          <div className="card-imagen">
              <img src="img/servicios.jpg" alt="" className="logo-block" />
          </div>
        </div>


        <div className="titulo-servicios">
          <h2>Servicios</h2>
        </div>

        <div className="card-servicios">
          <div className="contenido-card"> <p>Redacción</p> </div>
          <div className="contenido-card"> <p>Corrección</p></div>
          <div className="contenido-card"> <p>Escritura</p></div>
        </div>
    
      </div> */}
     </div>

    
    <h2 className="titulo-blog">
      Blogs
    </h2>


    <div className="blogs">
      <div className="contenido-blogs">

      <Link href="https://avirgilo.wordpress.com/" target="blanck">
            <div className="card">

                <div className="imagen-block">
                
                    <div className="card-imagen">
                        <img src="img/14-textual-y-metaforica.jpg" alt="" className="logo-block" />
                    </div>

                
                </div>

                
                    {/* <div className="titulo-servicios">
                        <h3>Textual y metafóricamente</h3>
                    </div>         */}
                    
                    

                
                    <div className="contenido-card">
                        <p>
                        Reseñas, ensayos y crítica literaria, artes plásticas, música y teatro.
                        </p>
                    

                </div>
            
            </div>

      
    </Link>

    <Link href="https://aveele.wordpress.com/" target="blanck">

            <div className="card">

                <div className="imagen-block">
                
                <div className="card-imagen">
                    <img src="img/12-aveele.jpg" alt="" className="logo-block" />
                </div>
                
                </div>


                
                    {/* <div className="titulo-servicios">
                        <h2>Aveele</h2>
                    </div> */}
                


                

                <div className="contenido-card">
                    <p>
                        Servicios linguísticos, redacción, corrección de textos
                        y tutorías.
                    </p>
                </div>

                
            </div>

      </Link>

      <Link href="https://nosolopetercooksinotambiendudleymoore.wordpress.com/" target="blanck">

            <div className="card">
                <div className="imagen-block">
                    <div className="card-imagen">
                       <img src="img/4-traducciones.jpg" alt="" className="logo-block" />
                    </div>            
                </div>

                    {/* <div className="titulo-servicios">
                        <h2>Traducciones</h2>
                    </div> */}

                  
                      <div className="contenido-card">
                          <p>
                          Traducción no oficial de sketchs de Peter Cook y Dudley Moore.
                          </p>
                      </div>
                  
            </div>

      </Link>

      <Link href="https://azulcook.wordpress.com/" target="blanck">
      
            <div className="card">

                <div className="imagen-block">
                    <div className="card-imagen">
                    <img src="img/8-azul-cook.jpg" alt="" className="logo-block" />
                    </div>
                </div>

                
                {/* <div className="titulo-servicios">
                    <h2>Azul Cook</h2>
                </div> */}
            
                
                <div className="contenido-card ">
                    <p>
                    Cuentos y poemas.
                    </p>
                    
                </div>
                
            </div>

      </Link>
    </div>
    </div>
    </div>
  )
}

export default Contenido