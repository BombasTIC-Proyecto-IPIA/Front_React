import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer h-full">
            <section className="footer__container container">
                <nav className="nav nav--footer">
                    <h2 className="footer__title">Hospital Santa Catalina.</h2>

                    <ul className="nav__link nav__link--footer">
                        <li className="nav__items">
                            <a href="#" className="nav__links">Inicio</a>
                        </li>
                        <li className="nav__items">
                            <a href="#" className="nav__links">Acerca de</a>
                        </li>
                        <li className="nav__items">
                            <a href="#" className="nav__links">Contacto</a>
                        </li>
                        <li className="nav__items">
                            <a href="#" className="nav__links">Paciente</a>
                        </li>
                    </ul>
                </nav>

                <form className="footer__form" action="https://formspree.io/f/mknkkrkj" method="POST">
                    <h2 className="footer__newsletter">Suscribete a la newsletter</h2>
                    <div className="footer__inputs">
                        <input type="email" placeholder="Email:" className="footer__input" name="_replyto" />
                        <input type="submit" value="Registrate" className="footer__submit" />
                    </div>
                </form>
            </section>

            <section className="footer__copy container">
                <div className="footer__social flex justify-center">
                    <a href="#" className="footer__icons"><img src="/imagenes/facebook.svg" className="footer__img" /></a>
                    <a href="#" className="footer__icons"><img src="/imagenes/twitter.svg" className="footer__img" /></a>
                    <a href="#" className="footer__icons"><img src="/imagenes/youtube.svg" className="footer__img" /></a>
                </div>

                <h3 className="footer__copyright">Derechos reservados &copy; Jordan Alexander</h3>
            </section>
        </footer>
    );
};

export default Footer;

