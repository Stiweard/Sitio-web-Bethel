import Navegacion from '../../components/navegacion/Navegacion'
import Portada from '../../components/Portada/Portada'
import Bienvenidos from '../../components/Bienvenidos/Bienvenidos'
import Nosotros from '../nosotros/Nosotros'
import Servicios from '../servicios/Servicios'
import Comunidad from '../comunidad/comunidad'
import Footer from '../footer/Footer'

export default function Inicio() {
    let imgInicio = "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    return (
        <div>
            <Navegacion/>
            <Portada img={imgInicio}/>
            <Bienvenidos/>
            <Nosotros/>
            <Servicios/>
            <Comunidad/>
            <Footer/>
        </div>
    )
}
