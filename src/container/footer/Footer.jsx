import './Footer.css'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer id='Contacto'>
            <div className='footer-bacground-img'>
                <div className="div-footer-redes">
                    <p>Síguenos en nuestras redes sociales</p>
                    <div className='iconos-redes'>
                        <div className='div-iconos'>
                            <Link to="https://www.instagram.com/ibethelofficial/"> <FaInstagram /></Link>

                            <p>Instagram</p>
                            <p style={{
                                fontWeight: '100'
                            }}>ibethelofficial</p>
                        </div>
                        <div className='div-iconos'>
                            <Link to=""><FaFacebook /></Link>
                            <p>Facebook</p>
                            <p style={{
                                fontWeight: '100'
                            }}>Bethel Iglesia</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='div-footer-informacion'>
                        <h1 style={{
                            fontSize: '3em',
                            color: '#F4A729'
                        }}>información</h1>
                        <p>1209 CENTRAL AVES #129 KENT 98032 WA</p>
                        <p>Email: IBETHEL238@GMAIL.COM</p>
                        <p>Teléfono: (425)350-5537</p>
                        <p> (425)282-8014</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
