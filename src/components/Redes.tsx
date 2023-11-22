import Link from "next/link"

const Redes = () => {
  return (
            <div className="redes">
                <div className="link">
                    <Link
                        href='https://www.youtube.com/watch?v=_NhKSL8mR1c'
                    >

                        <img className="iconoLink" src="/img/icons8-linkedin-circled-48.png" />
                        
                    </Link>
                </div>


                <Link 
                    href='https://www.facebook.com/avirgilo'
                >
                    <img className="iconoLink" src="img/icons8-facebook-96.png"/>
                    
                </Link>

                <Link 
                    href='https://www.instagram.com/avirgilona' 
                >

                    <img className="iconoLink" src="img/icons8-instagram-96.png" />
                </Link>
            </div>
  )
}

export default Redes