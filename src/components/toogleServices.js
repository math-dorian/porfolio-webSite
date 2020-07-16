import React from 'react';
import { Grid, Cell } from 'react-mdl';

const ToogleServices = () => {
    return(        
        <Grid  className="toogleServices-grid">
            <Cell col={5} shadow={5}>
                <div className="toogleServices">
                    <h1 className="animate__animated animate__fadeInLeftBig animate__delay-1s">conception de plans <p className="animate__animated animate__fadeInLeftBig animate__delay-1s">(Avant Projet Sommaire)</p></h1>
                    <hr className="animate__animated animate__fadeInLeftBig animate__delay-1s" />
                    <ul>
                        <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>3D</h3></li>
                        <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Plan de situation</h3></li>
                        <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Plan de masse</h3></li>
                        <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Vues en plan</h3></li>
                        <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Façades</h3></li>
                    </ul>
                </div>
            </Cell>
            <Cell col={5} shadow={5}>
                <div className="toogleServices">
                    <h1 className="animate__animated animate__fadeInLeftBig animate__delay-1s">etude de projets <p className="animate__animated animate__fadeInLeftBig animate__delay-1s">(Avant Projet Détaillé)</p></h1>
                    <hr className="animate__animated animate__fadeInLeftBig animate__delay-1s"/>
                    <ol>
                        <h2 className="animate__animated animate__fadeInRightBig animate__delay-1s">
                            <li>
                                Graphique
                                <ul>
                                    <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Plan de fondation</h3></li>
                                    <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Plan de toîture</h3></li>
                                    <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Plan de plomberie / d'assainissement</h3></li>
                                    <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Plan de menuiserie alu / bois</h3></li>
                                    <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Plan d'électricité</h3></li>
                                </ul>
                            </li>
                        </h2>
                        <h2 className="animate__animated animate__fadeInRightBig animate__delay-1s">
                            <li>
                                Notes de calcul
                                <ul>
                                    <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Devis quantitatif des matériaux (CDQM)</h3></li>
                                    <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Devis quantitatif et estimatif M.O (CDQE)</h3></li>
                                    <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Planning</h3></li>
                                    <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Etude de la structure</h3></li>
                                </ul>
                            </li>
                        </h2>
                    </ol>
                </div>
            </Cell>
            <Cell col={5} shadow={5}>
                <div className="toogleServices">
                    <h1 className="animate__animated animate__fadeInLeftBig animate__delay-1s">assistance a la maitrise d'ouvrage</h1>
                    <hr className="animate__animated animate__fadeInLeftBig animate__delay-1s"/>
                    <ul>
                    <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Contrôle de la qualité des matériaux</h3></li>
                    <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Contrôle de la technique de réalisation</h3></li>
                    <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Contrôle du respect du planning</h3></li>
                    <li className="animate__animated animate__fadeInRightBig animate__delay-1s"><h3>Contrôle du respect de la norme</h3></li>
                    </ul>
                </div>
            </Cell>
        </Grid>
    )
}

export default ToogleServices;
