import React from 'react';
import image2_1 from '../image/thumbnails/image2-1.png';
import image2_2 from '../image/thumbnails/image2-2.png';
import image2_3 from '../image/thumbnails/image2-3.png';
import image2_4 from '../image/thumbnails/image2-4.png';
import image2_5 from '../image/thumbnails/image2-5.png';
import image2_6 from '../image/thumbnails/image2-6.png';

const Portfolio = () => {
  return (
    <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="/imagen/0" title="Nombre del Proyecto">
                            <img className="img-fluid" src={image2_1} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Vivienda unifamiliar</div>
                                <div className="project-name">Cerramiento sala de estar</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="/imagen/1" title="Nombre del Proyecto">
                            <img className="img-fluid" src={image2_2} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Condominio privado</div>
                                <div className="project-name">Baranda de vidrio en escalera</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="/imagen/2" title="Nombre del Proyecto">
                            <img className="img-fluid" src={image2_3} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Vivienda unifamiliar</div>
                                <div className="project-name">Cerramiento corredizo en habitación</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="/imagen/3" title="Nombre del Proyecto">
                            <img className="img-fluid" src={image2_4} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Vivienda unifamiliar</div>
                                <div className="project-name">Cerramiento sala de usos múltiples</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="/imagen/4" title="Nombre del Proyecto">
                            <img className="img-fluid" src={image2_5} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Ventana doble apertura</div>
                                <div className="project-name">línea A30 simil madera</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="/imagen/5" title="Nombre del Proyecto">
                            <img className="img-fluid" src={image2_6} alt="..." />
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50">Vivienda unifamiliar</div>
                                <div className="project-name">Aberturas línea módena</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Portfolio