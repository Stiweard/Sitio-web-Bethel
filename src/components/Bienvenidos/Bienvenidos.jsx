import '../Bienvenidos/Bienvenidos.css'
import bethleBienvenidos from '../../assets/bethel-de-bienvenidos.png'
export default function Bienvenidos() {
    return (
        <section className='section-bienvenido'>
            <div className='contenedor-div-bienvenido'>
                <div>
                    <img src={bethleBienvenidos} alt="Imagen de bienvenida de bethel" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <h1 style={{
                        color: 'rgb(244, 167, 41)'
                    }}>BIENVENIDOS A BETHEL</h1>
                    <ul>
                        <li>Nuestros Servicios</li>
                        <li>Nuestro Compromiso</li>
                        <li>Nuestra Comunidad</li>
                        <li>Nuestro Llamado</li>
                        <li>Únete a Nosotros</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
