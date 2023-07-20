import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/estilos.css';
import '../styles/normalize.css';


const NavCerrar = () => {
    const [abierto, setAbierto] = useState(false);
    const toggleMenu = () => {
        setAbierto(!abierto);
    };
    const cerrarMenu = () => {
        setAbierto(false);
    };
    return (
        <header className="hero h-full w-full">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <div className="nav__logo">
                        <h2 className="nav__title text-lg font-bold">Hospital Santa Catalina</h2>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button onClick={toggleMenu} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <img type="image/svg+xml" src="/imagenes/menu.svg" className="nav__img" />
                    </button>
                </div>
                <div className={`hidden lg:flex lg:gap-x-12 ${abierto ? 'flex' : ''}`}>
                    <ul className="nav__link nav__link--menu">
                        <li className="nav__items">
                            <Link to="/" className="nav__links hover:text-sky-400">Inicio</Link>
                        </li>
                
                        <li className="nav__items">
                            <Link to="/about" className="nav__links hover:text-sky-400">Tu zona</Link>
                        </li>

                        <img type="image/svg+xml" src="/imagenes/close.svg" className="nav__close" />
                    </ul>
                </div>
            </nav>
            <div className={`lg:hidden ${abierto ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-50" onClick={cerrarMenu}></div>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={cerrarMenu}>
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Inicio</Link>
                                <Link to="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Acerca de</Link>
                                <Link to="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contacto</Link>
                                <Link to="/user" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Usuario</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="hero__container container">
                <h1 className="hero__title">Dedicados a tu bienestar en cada paso del camino</h1>
                <p className="hero__paragraph"> En nuestro hospital, nos comprometemos a brindarte el mejor cuidado posible para asegurarnos de que te sientas seguro y atendido en todo momento. </p>
                <a href="#" className="cta bg-red-400 hover:bg-blue-200">CERRAR SESIÓN</a>
            </section>
        </header>
    );
};
export default NavCerrar;