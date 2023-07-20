import React, { useEffect } from 'react';
import '../js/carrusel'
import Header from './Header';

function Home() {
    return (
        <>
        <Header />
            <section >
                <h2 className="subtitle mt-5 ml-5 mr-10 text-center">Tu bienestar es nuestra máxima preocupación, y trabajamos incansablemente para ofrecerte los más altos estándares de <br></br> calidad en cada aspecto de tu atención médica. </h2>
                <p className="about__paragraph text-center ">Nuestros principales servicios</p>

                <div className="about__main mb-6">
                    <article className="about__icons">
                        <img src="/imagenes/shapes.svg" className="about__icon" />
                        <h3 className="about__title">Diagnostico por imagen</h3>
                        <p className="about__paragrah"> Permite a nuestros profesionales observar el interior del cuerpo para buscar indicios de una afección médica </p>
                    </article>

                    <article className="about__icons">
                        <img src="/imagenes/paint.svg" className="about__icon" />
                        <h3 className="about__title">Servicios de emergencia</h3>
                        <p className="about__paragrah">Proporcionan atención médica inmediata las 24 horas del día para casos de emergencia médica, accidentes o lesiones graves.</p>
                    </article>

                    <article className="about__icons">
                        <img src="/imagenes/code.svg" className="about__icon" />
                        <h3 className="about__title">Consultas externas</h3>
                        <p className="about__paragrah">Ofrecemos consultas y diagnósticos para una variedad de condiciones médicas, como cardiología, gastroenterología, ortopedia, neurología, entre otras.</p>
                    </article>
                </div>
            </section>

            <section className="knowledge">
                <div className="knowledge__container container">
                    <div className="knowledege__texts">
                        <h2 className="subtitle">Portal del paciente</h2>
                        <p className="knowledge__paragraph">En nuestro constante compromiso de brindar una atención médica excepcional y accesible, nos complace presentar nuestro portal del paciente renovado, diseñado para brindarte una experiencia aún más conveniente y personalizada.</p>
                        <a href="#" className="cta">Iniciar sesión</a>
                    </div>

                    <figure className="knowledge__picture">
                        <img src="/imagenes/imagen_5.png" className="knowledge__img" />
                    </figure>
                </div>
            </section>

            <section className="price container">
                <h2 className="subtitle">Servicios y planes privados</h2>

                <div className="price__table">
                    <div className="price__element price__element_2 hover:scale-105 shadow-2xl">
                        <p className="price__name">Precio a consultar </p>
                        <h3 className="price__price">Genetica</h3>

                        <div className="price__items">
                            <p className="price__features">Descubre los que tus genes pueden hacer por ti <br></br> y tu familia. </p>
                        </div>

                        <a href="#" className="price__cta">Contacta</a>
                    </div>


                    <div className="price__element price__element--best hover:scale-105 hadow-2xl">
                        <p className="price__name">Precio a consultar</p>
                        <h3 className="price__price">Reproducción asistida</h3>

                        <div className="price__items">
                            <p className="price__features">Nuestro laboratorio dispone de los últimos avances técnicos para garantizar la correcta manipulación y conservación de los embriones.</p>
                        </div>

                        <a href="#" className="price__cta">Empieza ahora</a>
                    </div>


                    <div className="price__element price__element_2 hover:scale-105 shadow-2xl">
                        <p className="price__name">Precio a consultar</p>
                        <h3 className="price__price">Estética</h3>

                        <div className="price__items">
                            <p className="price__features">Tratamientos personalizados en función de las necesidades.</p>
                        </div>

                        <a href="#" className="price__cta">contacta</a>
                    </div>


                </div>
            </section>

            <section className="testimony">
                <div className="testimony__container container">
                    <img src="/imagenes/leftarrow.svg" className="testimony__arrow" id="before"/>

                        <section className="testimony__body testimony__body--show" data-id="1">
                            <div className="testimony__texts">
                                <h2 className="subtitle">Doctora Jordan Alexander, <span className="testimony__course">especialista en reproducción.
                                </span></h2>
                                <p className="testimony__review">Licenciada en Medicina y Cirugía por la Universidad Autónoma de Barcelona (1989). Especialista en obstetricia y ginecología por el Instituto Dexeus de Barcelona. Diploma Europeo en Endoscopia Ginecológica por la Universidad de Clermont-Ferrand. Ha centrado su investigación y publicaciones en las técnicas de reproducción asistida. Miembro de la Sociedad Española de Fertilidad. Miembro de la Sociedad Española de Ginecología y Obstetricia.</p>
                            </div>

                            <figure className="testimony__picture">
                                <img src="/imagenes/imagen_6.jpg" className="testimony__img" />
                            </figure>
                        </section>
                        
                        <section className="testimony__body" data-id="2">
                            <div className="testimony__texts">
                                <h2 className="subtitle">Doctor Alejandro Perez, <span className="testimony__course">especialista en genetica.</span></h2>
                                <p className="testimony__review">Experto en Oncología Médica en Initia Centro Oncológico Integral. Concretamente es especialista en el tratamiento de tumores cerebrales.

                                    Además, el doctor ha trabajado en la investigación del conocimiento y la aplicación de la biología molecular en el desarrollo de nuevos fármacos en ensayos clínicos, en la investigación traslacional completa y en la identificación y manejo de los síndromes del cáncer hereditario.</p>
                            </div>

                            <figure className="testimony__picture">
                                <img src="/imagenes/imagen_8.jpg" className="testimony__img" />
                            </figure>
                        </section>

                        <section className="testimony__body" data-id="3">
                            <div className="testimony__texts">
                                <h2 className="subtitle">Doctora Karen Arteaga, <span className="testimony__course">especialista en cirugia estética.</span></h2>
                                <p className="testimony__review">Cuenta con más de 30 años de experiencia en la profesión y una extensa formación en distintos campos de la especialidad. Es gran experta en cirugía de la mama, habiéndose formado con la Dra. Madeleine Lejour en Bruselas (Bélgica), con la profesora Egle Mutti en Turín (Italia), con el Dr. José Hidalgo en Nueva York (Estados Unidos) y con la profesora Ruth Graff en Brasil.</p>
                            </div>

                            <figure className="testimony__picture">
                                <img src="/imagenes/imagen_7.jpg" className="testimony__img" />
                            </figure>
                        </section>




                        <img src="/imagenes/rightarrow.svg" className="testimony__arrow" id="next" />
                </div>
            </section>

                <section className="questions container">
                    <h2 className="subtitle">Preguntas frecuentes</h2>
                    <p className="questions__paragraph">Contacte con nosotros ante cualquier duda.</p>

                    <section className="questions__container">
                        <article className="questions__padding">
                            <div className="questions__answer">
                                <h3 className="questions__title">¿Con que mutuas trabajan?
                                </h3>
                                <h2 className='subtitle text-lg text-left'> En España existen un total de 20 mutuas colaboradoras con la Seguridad Social, repartidas por todo el territorio nacional. Todas ellas están asociadas a AMAT, Asociación de Mutuas de Accidentes de Trabajo y Enfermedades Profesionales de la Seguridad Social.</h2>
                            </div>
                        </article>

                        <article className="questions__padding">
                            <div className="questions__answer">
                                <h3 className="questions__title">¿Hay atención telefonica?
                                </h3>
                                <h2 className='subtitle text-lg text-left'>Si, En nuestro afán por brindarle el mejor servicio posible, le aseguramos que su bienestar es nuestra prioridad número uno. Nuestro equipo altamente capacitado de profesionales médicos y personal de atención al cliente está a su disposición para atender todas sus necesidades y responder a sus preguntas.</h2>
                            </div>
                        </article>

                        <article className="questions__padding">
                            <div className="questions__answer">
                                <h3 className="questions__title ">¿ Por que no veo la imagen de mi resonancía?
                                </h3>
                                <h2 className='subtitle text-left text-lg'>Existen varias razones por las cuales los pacientes no pueden ver directamente las resonancias:

Confidencialidad y privacidad: Los estudios médicos, como las resonancias, contienen información altamente sensible sobre la salud del paciente. 

Interpretación médica: Los estudios de diagnóstico médico, como las resonancias, son complejos y requieren interpretación y análisis por parte de médicos especializados.

Comunicación médico-paciente: Los resultados de los estudios médicos deben presentarse y explicarse de manera adecuada para garantizar que el paciente comprenda la información relevante y su significado. </h2>
                            
                            </div>
                        </article>
                    </section>

                    <section className="questions__offer">
                        <h2 className="subtitle"></h2>
                        <p className="questions__copy">Un hospital innovador que combina la excelencia médica con tecnología de vanguardia para ofrecer atención integral y personalizada a los pacientes. Un entorno acogedor y humano donde el equipo médico altamente capacitado trabaja en colaboración para proporcionar los más altos estándares de cuidado médico y bienestar.</p>
                        <a href="#" className="cta">Contacta</a>
                    </section>
                </section>


        </>


    )




}
export default Home;