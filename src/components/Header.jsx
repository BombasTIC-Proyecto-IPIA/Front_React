
import { Link } from 'react-router-dom';
import '../styles/estilos.css';
import '../styles/normalize.css';

import Menu from './Menu';

const Header = () => {
    
    return (
      
        <header className="hero h-full w-full">
            <nav className="nav container">
                <div className="nav__logo">
                    <h2 className="nav__title">Santa Catalina</h2>
                </div>

                <ul className="nav__link nav__link--menu">
                    <li className="nav__items">
                        <Link to="/" className="nav__links hover:text-sky-400">Inicio</Link>
                    </li>
                    <li className="nav__items">
                        <Link to="/about" className="nav__links hover:text-sky-400">Acerca de</Link>
                    </li>
                    <li className="nav__items">
                        <Link to="/contact" className="nav__links hover:text-sky-400">Contacto</Link>
                    </li>
                    <li className="nav__items">
                        <Link to="/about" className="nav__links hover:text-sky-400">Paciente</Link>
                    </li>

                    <img type="image/svg+xml" src="/imagenes/close.svg" className="nav__close"/>
                </ul>

                <div className="nav__menu">
                    <img type="image/svg+xml" src="/imagenes/menu.svg" className="nav__img"/>
                </div>
                
            </nav>

            <section className="hero__container container">
                <h1 className="hero__title">Dedicados a tu bienestar en cada paso del camino</h1>
                <p className="hero__paragraph"> En nuestro hospital, nos comprometemos a brindarte el mejor cuidado posible para asegurarnos de que te sientas seguro y atendido en todo momento. </p>
                <a href="#" className="cta">Iniciar sesión</a>
            </section>
        </header>
    );
};
export default Header;