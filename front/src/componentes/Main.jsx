import React from 'react';
import Portfolio from './Portfolio';

export const Main = () => {
  return (
    <div className='body'>
        <header className="masthead">
            <div className="container h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="text-white font-weight-bold">WINDOOR</h1>
                        <h4 className="text-white">Aberturas de aluminio</h4>
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 mb-5">Somos una empresa dedicada a la fabricación y colocación de aberturas de aluminio, realizamos trabajos a medidas en proyectos de pequeña, mediana y gran envergadura.</p>
                        <a className="btn btn-primary btn-xl" href="#about">CONOCENOS!</a>
                    </div>
                </div>
            </div>
        </header>
        <section className="page-section bg-primary" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">EN WINDOOR...</h2>
                        <hr className="divider divider-light" />
                        <p className="text-white-75 mb-4">¡Queremos conocerte! Por eso, te invitamos a descubrir nuestra empresa para brindarte un asesoramiento personalizado en la elección y diseño de las aberturas para el desarrollo de tus proyectos. </p>
                        <a className="btn btn-light btn-xl" href="#services">Comencemos!</a>
                    </div>
                </div>
            </div>
        </section>
        <section className="page-section" id="services">
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">A tu servicio!</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <h3 className="h4 mb-2">Empresa</h3>
                            <p className="text-muted mb-0">Nuestra empresa es atendida por sus propios dueños, contamos con un equipo de trabajo con mas de 10 años de experiencia en el mercado, produciendo aberturas de alta cálidad.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <h3 className="h4 mb-2">Clientes</h3>
                            <p className="text-muted mb-0">Realizamos presupuestos a la medida de nuestros clientes, nuestro objetivo es acompañarte en el desarrollo del proyecto y ayudarte a cumplir tu sueño.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <h3 className="h4 mb-2">Productos</h3>
                            <p className="text-muted mb-0">Trabajamos con materiales y componentes con estandares de cálidad excelentes, brindando productos resistentes de altas prestaciones y durabilidad.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <h3 className="h4 mb-2">Servicio post-venta</h3>
                            <p className="text-muted mb-0">Los trabajos y colocaciones que realizamos cuentan con garantiía de fabricación, los clientes cuentan con un servicio post-venta para solucionar preoblemas que surjan en el futuro.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Portfolio />
        
    </div>
  )
};
export default Main;
