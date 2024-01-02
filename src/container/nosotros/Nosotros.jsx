import '../nosotros/Nosotros.css'

export default function Nosotros() {

    let nostros = 'https://images.unsplash.com/photo-1594142117505-c70dcd31087c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

    return (
        <section className='section-nosotros' id='Servicios'>
            <div className='contenedor-div-nosotros'>
                <div>
                    <div className='div-nosotros-img'
                        style={{
                            backgroundImage: `url(${nostros})`,
                        }}></div>
                </div>
                <div className='contenedor-nosotros-contenido'>
                    <h1 style={{
                        fontSize: '3em',
                        color: 'rgb(244, 167, 41)'
                    }}>NUESTROS SERVICIOS</h1>
                    <p style={{
                        textAlign: 'justify',
                        padding: '0 15px'
                    }}>Cada servicio en Bethel está diseñado para
                        ayudar a los miembros a conectarse con Dios y
                        su palabra. Ofrecemos una variedad de
                        servicios, desde estudios bíblicos hasta cultos
                        dominicales, para satisfacer las necesidades
                        espirituales de cada individuo.
                        Nuestros pastores y líderes de adoración están
                        comprometidos a brindar un ambiente de
                        adoración auténtico y significativo. Cada
                        servicio incluye música inspiradora, oraciones
                        poderosas y enseñanzas bíblicas relevantes
                        para nuestras vidas modernas.</p>
                </div>
            </div>
        </section>
    )
}
