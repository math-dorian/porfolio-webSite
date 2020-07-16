import React from 'react';
import { Card } from 'react-bootstrap';
import ViewMore from './viewMoreButton';

import a3 from '../img/Projet-LALA/a3.JPG';
import a4 from '../img/Projet-LALA/a4.JPG';
import c2 from '../img/Projet-LALA/c2.JPG';
import c3 from '../img/Projet-LALA/c3.JPG';
import b5 from '../img/Projet-LALA/b5.JPG';
import cl1 from '../img/Projet-DRGC/cl1.jpg';
import cl2 from '../img/Projet-DRGC/cl2.jpg';
import cl3 from '../img/Projet-DRGC/cl3.jpg';
import cl4 from '../img/Projet-DRGC/cl4.jpg';
import cl5 from '../img/Projet-DRGC/cl5.jpg';
import d1 from '../img/Projet-MDJ/d1.jpg';
import d2 from '../img/Projet-MDJ/d2.jpg';
import d3 from '../img/Projet-MDJ/d3.jpg';
import d4 from '../img/Projet-MDJ/d4.jpg';
import n1 from '../img/Projet-NDGCJP/n1.jpg';
import n2 from '../img/Projet-NDGCJP/n2.jpg';
import n3 from '../img/Projet-NDGCJP/n3.jpg';
import n4 from '../img/Projet-NDGCJP/n4.jpg';
import n5 from '../img/Projet-NDGCJP/n5.jpg';
import ACCamera from '../img/Projet-RMTA/ACCamera.jpg';
import ACCamera_2 from '../img/Projet-RMTA/ACCamera_2.jpg';
import ACCamera_4 from '../img/Projet-RMTA/ACCamera_4.jpg';
import ACCamera_5 from '../img/Projet-RMTA/ACCamera_5.jpg';
import ACCamera_6 from '../img/Projet-RMTA/ACCamera_6.jpg';
import pm1 from '../img/Projet-MABO/pm1.jpg';
import pm2 from '../img/Projet-MABO/pm2.jpg';
import pm3 from '../img/Projet-MABO/pm3.jpg';
import pm4 from '../img/Projet-MABO/pm4.jpg';
import pm5 from '../img/Projet-MABO/pm5.jpg';


const ToogleProjects = () => {
    return(
        <div className="projects-content">

            <Card className="card">
                <Card.Img variant="top" src={a4} />
                <Card.Body>
                    <Card.Title>PROJET LALA</Card.Title>
                    <Card.Text>
                    Il a été question de la réfection complète du bâtiment: d'où démolition et dépose, maçonnerie,
                    carrelage, plomberie, électricité, peinture et aménagement d'espace vert dans la ville de Libreville (Gabon).
                    <br /><br /> <strong>(Projet à termes)</strong>
                    </Card.Text>
                    <ViewMore 
                        slideOne={a4}
                        slideTwo={a3}
                        slideThree={c3}
                        slideFour={b5}
                        slideFive={c2}
                    />
                </Card.Body>
            </Card>
            <Card className="card">
                <Card.Img variant="top" src={cl1} />
                <Card.Body>
                    <Card.Title>PROJET DRGC</Card.Title>
                    <Card.Text>
                    J'ai eu pour mission dans ce projet de faire la Conception et une étude de réalisation pour
                    un particulier dans la ville de Libreville (Gabon). <br /><br /><strong>(Projet à termes)</strong>
                    </Card.Text>
                    <ViewMore 
	                    slideOne={cl2}
                        slideTwo={cl1}
                        slideThree={cl3}
                        slideFour={cl4}
                        slideFive={cl5}
                    />
                </Card.Body>
            </Card>
            <Card className="card">
                <Card.Img variant="top" src={d3} />
                <Card.Body>
                    <Card.Title>PROJET MDJ</Card.Title>
                    <Card.Text>
                    Conception et étude de réalisation pour le compte de la Mairie de la commune de Ndjolé.
                    <br /><br /><strong>(Projet en étude)</strong>
                    </Card.Text>
                    <ViewMore 
                    	slideOne={d1}
                        slideTwo={d2}
                        slideThree={d3}
                        slideFour={d4}
                        slideFive={d1}
                    />
                </Card.Body>
            </Card>
            <Card className="card">
                <Card.Img variant="top" src={n2} />
                <Card.Body>
                    <Card.Title>PROJET NDGCJP</Card.Title>
                    <Card.Text>
                    Conception, étude de réalisation et assistance à la maîtrise d'ouvrage pour
                    un particulier dans la ville de Libreville (Gabon).
                    <br /><br /><strong>(Projet à termes)</strong>
                    </Card.Text>
                    <ViewMore 
                        slideOne={n1}
                        slideTwo={n2}
                        slideThree={n3}
                        slideFour={n4}
                        slideFive={n5}
                    />
                </Card.Body>
            </Card>
            <Card className="card">
                <Card.Img variant="top" src={ACCamera} />
                <Card.Body>
                    <Card.Title>PROJET RMTA</Card.Title>
                    <Card.Text>
                    Conception, étude de réalisation pour un particulier dans la ville de Franceville
                    (Gabon). <br /><br /><strong>(Projet en cours)</strong>
                    </Card.Text>
                    <ViewMore 
                        slideOne={ACCamera}
                        slideTwo={ACCamera_2}
                        slideThree={ACCamera_4}
                        slideFour={ACCamera_5}
                        slideFive={ACCamera_6}
                    />
                </Card.Body>
            </Card>
            <Card className="card">
                <Card.Img variant="top" src={pm2} />
                <Card.Body>
                    <Card.Title>PROJET MABO</Card.Title>
                    <Card.Text>
                    Conception et étude de réalisation pour un particulier dans la ville de Libreville (Gabon).
                    <br /><br /><strong>(Projet en étude)</strong>
                    </Card.Text>
                    <ViewMore 
                        slideOne={pm1}
                        slideTwo={pm2}
                        slideThree={pm3}
                        slideFour={pm4}
                        slideFive={pm5}
                    />
                </Card.Body>
            </Card>

        </div>  
    )
}

export default ToogleProjects;
