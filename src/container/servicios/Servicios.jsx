import './Sevicios.css'

import imgService1 from '../../assets/bethel-pagina-2.jpg'
import imgService2 from '../../assets/bethel-pagina-1.jpg'
import imgService3 from '../../assets/bethel-pagina-6.jpg'

export default function Servicios() {
    return (
        <section className="section-servicios">
            <div className='div-servios-contenedor'>
                <div className='div-descripcion-servicios'>
                    <h1 style={{
                        color: 'rgb(244, 167, 41)',
                        fontSize: '3em'
                    }}>NUESTRO COMPROMISO</h1>
                    <p>
                        Estamos comprometidos a vivir nuestras vidas de acuerdo con los principios de la
                        Biblia y seguir el ejemplo de Jesús. Creemos en la importancia de amar a nuestro
                        prójimo como a nosotros mismos y hacer una diferencia positiva en el mundo.
                        Nos esforzamos por ser una iglesia inclusiva y diversa que celebra la singularidad
                        de cada individuo. Nos comprometemos a trabajar juntos para construir una
                        comunidad más amorosa, compasiva y justa para todos.
                    </p>
                </div>
                <div className='div-contenedor-servicios-img'>
                    <div className='servios-div-img-contenido'>
                        <div>
                            <div style={{
                                backgroundImage: `url(${imgService1})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                width: '300px',
                                height: '40vh'
                            }}>

                            </div>
                        </div>
                        <div>
                            <p style={{
                                fontWeight: '600',
                                padding: '6px',
                                fontSize: '1.2em',
                                color: '#F4A729' 
                            }}>
                                COMUNIDAD ACOGEDORA
                            </p>
                        </div>
                    </div>
                    <div className='servios-div-img-contenido'>
                        <div>
                            <div style={{
                                backgroundImage: `url(${imgService2})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                width: '300px',
                                height: '40vh'
                            }}>

                            </div>
                        </div>
                        <div>
                            <p style={{
                                fontWeight: '600',
                                padding: '6px',
                                fontSize: '1.2em',
                                color: '#F4A729' 
                            }}>
                                INSPIRAR EDUCAR Y GUIAR
                            </p>
                        </div>
                    </div>
                    <div className='servios-div-img-contenido'>
                        <div>
                            <div style={{
                                backgroundImage: `url(${imgService3})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                width: '300px',
                                height: '40vh'
                            }}>

                            </div>
                        </div>
                        <div>
                            <p style={{
                                fontWeight: '600',
                                padding: '6px',
                                fontSize: '1.2em',
                                color: '#F4A729' 
                            }}>
                                ESTUDIOS BIBLICOS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
