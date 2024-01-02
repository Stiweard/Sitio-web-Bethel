import videoBackground from '../../assets/comunidad.mp4'
import './comunidad.css'
import { useState } from 'react'

export default function comunidad() {

    const [contenidoBethel, setContenidoBethel] = useState(`En Bethel, valoramos la importancia de la
    comunidad y las relaciones significativas.
    Ofrecemos grupos pequeños y oportunidades
    de voluntariado para conectarse con otros
    miembros y servir a nuestra comunidad local.
    Nuestros grupos pequeños ofrecen un entorno
    seguro y de apoyo donde los miembros pueden
    compartir sus experiencias y crecer juntos en su
    fe. También ofrecemos oportunidades de
    voluntariado para servir a nuestra comunidad y
    marcar una diferencia positiva en el mundo.`);

    return (
        <section className='section-comunidad' id='Nosotros'>
            <div>
                <div>
                    <div className='div-video-comunidad'
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            style={{
                                minWidth: '100%',
                                minHeight: '100%',
                                objectFit: 'cover'
                            }}
                        >
                            <source src={videoBackground} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className='div-botones-comunidad'>
                    <div className='div-titulo-iconos frame'>
                        <div>
                            <button className='custom-btn btn-16' onClick={() => {
                                setContenidoBethel(`En Bethel, valoramos la importancia de la
                                comunidad y las relaciones significativas.
                                Ofrecemos grupos pequeños y oportunidades
                                de voluntariado para conectarse con otros
                                miembros y servir a nuestra comunidad local.
                                Nuestros grupos pequeños ofrecen un entorno
                                seguro y de apoyo donde los miembros pueden
                                compartir sus experiencias y crecer juntos en su
                                fe. También ofrecemos oportunidades de
                                voluntariado para servir a nuestra comunidad y
                                marcar una diferencia positiva en el mundo.`)
                            }
                            }>Nuestra Comunidad</button>
                        </div>
                        <div>
                            <button className='custom-btn btn-16' onClick={() => {
                                setContenidoBethel(`En Bethel, creemos que cada uno de nosotros
                                tiene un llamado único y especial en la vida.
                                Nos esforzamos por ayudar a nuestros
                                miembros a descubrir su propósito y llamar a
                                través de la enseñanza de la Palabra de Dios.
                                Nos esforzamos por ser una iglesia que no
                                solo enseña la verdad, sino que también la
                                vive. Creemos que al vivir nuestras vidas de
                                acuerdo con los principios de la Biblia,
                                podemos hacer una diferencia positiva en el
                                mundo y cumplir nuestro llamado divino.`)
                            }
                            }>Nuestro Llamado</button>
                            <div></div>
                        </div>
                        <div>
                            <button className='custom-btn btn-16' onClick={() => {
                                setContenidoBethel(`En Bethel, estamos emocionados de recibir a
                                nuevos miembros en nuestra comunidad
                                amorosa y acogedora. Si estás buscando una
                                iglesia que te ayude a crecer en tu fe y te anime a
                                vivir una vida significativa, ¡Te invitamos a unirte
                                a nosotros!
                                Ya sea que seas nuevo en la fe o hayas sido
                                cristiano durante años, siempre hay espacio para
                                crecer y aprender en Iglesia Bethel. Esperamos
                                conocerte pronto y comenzar esta emocionante
                                jornada juntos.`)
                            }
                            }>Únete a Nosotros</button>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <p style={{
                            fontSize: '1.5em',
                            maxWidth: '1000px',
                            textAlign: 'justify',
                            fontWeight: '300'
                        }}>{contenidoBethel}</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
