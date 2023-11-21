import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {

    const router = useRouter()

  return (
    <div>
        <div className="header">
            <div className="titulo">
                <img className="img-logo" src="/img/7-avele.jpg" alt="" />
            </div>

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
        </div>

    </div>
  )

}

export default Header