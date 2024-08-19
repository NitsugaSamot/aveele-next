import Link from "next/link"

const Redes = () => {
  return (
            <div className="redes">
                <div className="link">
                    <Link
                        href='https://www.linkedin.com/in/avirgilo'
                            target="_blank"
                            rel="noopener noreferrer"
                    >

                        <img className="iconoLink" src="/img/icons8-linkedin-circled-48.png" />
                        
                    </Link>
                </div>


                <Link 
                    href='https://www.facebook.com/avirgilo'
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    <img className="iconoLink" src="img/icons8-facebook-96.png"/>
                    
                </Link>

                <Link 
                    href='https://www.instagram.com/avirgilona' 
                        target="_blank"
                        rel="noopener noreferrer"
                >

                    <img className="iconoLink" src="img/icons8-instagram-96.png" />
                </Link>
            </div>
  )
}

export default Redes