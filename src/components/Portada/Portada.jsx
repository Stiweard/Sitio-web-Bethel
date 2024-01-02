import decoracion from '../../assets/bethel-decoracion.svg';
import video from '../../assets/video-background.mp4'; // Ruta al archivo de video

export default function Portada() {
    return (
        <section style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            textAlign: 'center'
        }} id='Inicio'>
            <video
                autoPlay
                loop
                muted
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1
                }}
            >
                <source src={video} type="video/mp4" />
            </video>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h1 style={{
                    fontSize: '3em',
                    color: 'rgb(244, 167, 41)'
                }}>EL CAMINO HACIA BETHEL</h1>
                <h2 style={{
                    fontSize: '2em',
                    color: '#F4A729'
                }}>Descubre la Palabra y Encuentra a Dios</h2>
                <p style={{
                    maxWidth: '845px',
                    textAlign: 'center',
                    color: '#fff'
                }}>Establecida en 2023, BETHEL es una Iglesia que ratifica nuestras creencias
                    y nuestra Fe en Dios. Ubicada en el condado de King del Estado de Washintong.
                    Nuestros servicios estan guiados por la Voluntad de nuestro Rey de Reyes.</p>
            </div>
            <div style={{
                backgroundImage: `url(${decoracion})`,
                width: '100%',
                height: '9vh',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}></div>
        </section>
    );
}
