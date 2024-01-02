import { useEffect, useState } from 'react';
import './Navegacion.css';
import logoBethel from '../../assets/logo-bethel.png';

export default function Navegation() {
    const [navbarBackground, setNavbarBackground] = useState('transparent');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 800; // Cambia este valor según tus necesidades

            if (scrollPosition > scrollThreshold) {
                setNavbarBackground('black');
            } else {
                setNavbarBackground('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`navbar ${navbarBackground === 'black' ? 'navbar-dark' : ''}`}>
            <nav>
                <div className='div-logo'>
                    <img src={logoBethel} alt='Logo Bethel' />
                    <p>Iglesia Bethel</p>
                </div>
                <ul id='no-resposive' className='frame'>
                    <li>
                        <a
                            className={`custom-btn btn-16 ${navbarBackground === 'black' ? 'text-white' : 'text-blue'}`}
                            href='#Inicio'
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            className={`custom-btn btn-16 ${navbarBackground === 'black' ? 'text-white' : 'text-blue'}`}
                            href='#Servicios'
                        >
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a
                            className={`custom-btn btn-16 ${navbarBackground === 'black' ? 'text-white' : 'text-blue'}`}
                            href='#Nosotros'
                        >
                            Nosotros
                        </a>
                    </li>
                    <li>
                        <a
                            className={`custom-btn btn-16 ${navbarBackground === 'black' ? 'text-white' : 'text-blue'}`}
                            href='#Contacto'
                        >
                            Contacto
                        </a>
                    </li>
                    <li>
                        <p>Donar</p>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
