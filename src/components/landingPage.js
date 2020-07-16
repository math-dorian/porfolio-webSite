import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { Button } from 'react-bootstrap';
import imgProfile from '../img/profile/img-profile.jpg';
import AboutMe from './aboutMe';
import Footer from './footer';

const LandingPage = () => {
	return (
		<div className="landing-container">
			<Grid className="landing-grid">
				<Cell col={12} shadow={5}>
					<div className="avatar-img-container">
						<img
							className="img-profile animate__animated animate__backInDown animate__delay-1s"
							src={imgProfile}
							alt="img-profile"
						/>
					</div>

					<div className="banner-text">
						<h1 className="animate__animated animate__backInDown animate__delay-1s">Orphée Christ BOUNDA NDONG</h1>
						<h3 className="animate__animated animate__backInRight animate__delay-2s">Ingénieur des Techniques en Economie du Bâtiment</h3>

						<hr />

						<p className="animate__animated animate__backInLeft animate__delay-3s">Conception Plans | Etude | Construction et Réfection | Assistance à la maîtrise d'ouvrage</p>

						<div className="social-links animate__animated animate__swing animate__delay-2s">
							{/*Facebook*/}
							<a href="https://www.facebook.com/Cabinet-dEtudes-et-Prestations-Immobili%C3%A8res-107156687682621" target="_blank" rel="noopener noreferrer" >
								<Button variant="outline-light animate__animated animate__backInUp animate__delay-3s">
									<i className="fa fa-facebook-square animate__animated animate__fadeInLeftBig animate__delay-3s" aria-hidden="true" />
								</Button>
							</a>

							{/*LinkedIn*/}
							<a href="https://ga.linkedin.com/in/orph%C3%A9e-christ-bounda-ndong-4974201ab" target="_blank" rel="noopener noreferrer" >
								<Button variant="outline-light animate__animated animate__backInUp animate__delay-3s">
									<i className="fa fa-linkedin-square animate__animated animate__fadeInRightBig animate__delay-3s" aria-hidden="true" />
								</Button>

							</a>
						</div>

					</div>

				</Cell>
			</Grid>
			<Grid className="about-grid">
				<Cell col={12}>
					<AboutMe />
				</Cell>
			</Grid>

			<Footer />

		</div>
	);
}

export default LandingPage;
