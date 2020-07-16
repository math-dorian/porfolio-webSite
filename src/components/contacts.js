import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profileImg from '../img/profile/img-profile.jpg';

const Contacts = () => {
        
    return (
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6} shadow={5}>
                    <h2 className="animate__animated animate__backInDown animate__delay-1s">Orphée Christ BOUNDA NDONG</h2>
                    <img 
                        src={profileImg}
                        alt="avatar"
                        className="animate__animated animate__backInUp animate__delay-1s"
                    />
                    <p className="animate__animated animate__backInUp animate__delay-1s">
                        POUR MOI C'EST PLUS QU'UN MÉTIER.
                    </p>
                </Cell>
                <Cell col={6} shadow={5}>
                    <h2 className="animate__animated animate__backInDown animate__delay-1s">Contactez Moi</h2>
                    <hr className="animate__animated animate__backInDown animate__delay-1s"/>

                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent>
                                    <i className="fa fa-phone-square animate__animated animate__zoomIn animate__delay-1s" aria-hidden="true"/>
                                    <span className="animate__animated animate__fadeInRightBig animate__delay-2s">(+241) 77-27-59-27 / 62-36-06-23</span>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent>
                                    <i className="fa fa-envelope-square animate__animated animate__zoomIn animate__delay-1s" aria-hidden="true"/>
                                    <span className="animate__animated animate__fadeInRightBig animate__delay-2s">manag.2cebpi@gmail.com</span>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent>
                                    <i className="fa fa-facebook-square animate__animated animate__zoomIn animate__delay-1s" aria-hidden="true"/>
                                    <span className="animate__animated animate__fadeInRightBig animate__delay-2s">Cabinet d'Etudes et Prestations Immobilières</span>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent>
                                    <i className="fa fa-linkedin-square animate__animated animate__zoomIn animate__delay-1s" aria-hidden="true"/>
                                    <span className="animate__animated animate__fadeInRightBig animate__delay-2s">Orphée Christ Bounda Ndong</span>
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </div>

                </Cell>
            </Grid>

        </div>
    );
}

export default Contacts;
