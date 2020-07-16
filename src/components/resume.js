import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Experience from './experience';
import Skills from './skills';
import profileImg from '../img/profile/img-profile.jpg'
import Footer from './footer';

export default class Resume extends React.Component {

	render() {
		
		return (
			<>
				<Grid>
					<Cell className="resume-left-col" col={4}>
						<div>
							<img 
								src={profileImg}
								alt="img-profile"
								className="animate__animated animate__fadeInDown animate__delay-1s"
							/>
						</div>

						<h2 className="animate__animated animate__fadeInUp animate__delay-1s">Orphée Christ BOUNDA NDONG</h2>
						<h4 className="animate__animated animate__fadeInUp animate__delay-1s">Ingénieur des Techniques en Economie du Bâtiment</h4>
						<hr className="animate__animated animate__fadeInUp animate__delay-1s"/>
						<p className="animate__animated animate__fadeInUp animate__delay-2s">Je suis Orphée Christ BOUNDA NDONG, ingénieur des techniques en économie du bâtiment.
						Professionnel aguéri, je mets à votre disposition ma compétence, mon expérience et mon personnel afin de mener efficacement à termes les projets dont j'ai la charge.<br />Pour moi c'est plus qu'un métier.</p>
						<hr className="animate__animated animate__fadeInUp animate__delay-2s"/>
						<h5 className="animate__animated animate__fadeInUp animate__delay-2s">Adresse:</h5>
						<p className="animate__animated animate__fadeInUp animate__delay-2s">Franceville, Haut-Ogooué (Gabon)</p>
						<h5 className="animate__animated animate__fadeInUp animate__delay-2s">BP:</h5>
						<p className="animate__animated animate__fadeInUp animate__delay-2s">115</p>
						<h5 className="animate__animated animate__fadeInUp animate__delay-2s">Phone:</h5>
						<p className="animate__animated animate__fadeInUp animate__delay-2s">(+241) 77-27-59-27 / 62-36-06-23</p>
						<h5 className="animate__animated animate__fadeInUp animate__delay-2s">Email:</h5>
						<p className="animate__animated animate__fadeInUp animate__delay-2s">manag.2cebpi@gmail.com</p>
						<hr className="animate__animated animate__fadeInUp animate__delay-2s"/>

					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h2 className="animate__animated animate__fadeInDown animate__delay-1s">EXPERIENCE PROFESSIONNELLE</h2>
						<Experience 
							startYear={2012}
							endYear={2016}
							jobName="NDP & CO"
							jobDescription="Directeur"
							city="Libreville"
						/>
						<Experience 
							startYear={2012}
							duree={6}
							jobName="ATRIUM CONSTRUCTION"
							jobDescription="Agent du bureau d'études"
							city="Libreville"
						/>
						<Experience 
							startYear={2011}
							endYear={2012}
							jobName="Travaux Modernes"
							jobDescription="Conducteur des travaux de la réalisation de la nouvelle base SGS Libreville"
							city="Libreville"
						/>
						<Experience 
							startYear={2010}
							endYear={2011}
							jobName="Intérim Services"
							jobDescription="Responsable Technique pour la Gestion des projets pilotés par CNI TIPEE"
							city="Libreville"
						/>

						<hr className="animate__animated animate__fadeInRight animate__delay-2s"/>

						<h2 className="animate__animated animate__fadeInDown animate__delay-1s">COMPETENCES</h2>
						<Skills 
							skill="Conception Plans"
							progress={93}
						/>
						<Skills 
							skill="Étude de Projets"
							progress={88}
						/>
						<Skills 
							skill="Assistance à la maîtrise d'ouvrage"
							progress={90}
						/>
						
					</Cell>
				</Grid>
				
				<Footer />
			</>
		);
	}
}
