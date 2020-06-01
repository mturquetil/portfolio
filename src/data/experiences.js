const experiences = [{
	title: 'Activitour',
	imagePath: '/experiences/activitour.png',
	period: 'Mars 2017 - Aout 2020',
	text: (
		<div>
			<p className="margin-top-l">
				Cette aventure a commencé en Mars 2017 au côté d’Emmanuel Russeil (tuteur et cofondateur) et Baptiste Rebut (cofondateur) qui à la suite d’un test technique m’ont intégré dans leur équipe. Au cours de ces deux années, j’ai acquis le goût de l’<strong>entrepreneuriat</strong> et de la <strong>réalisation de projet</strong> qui me faisait défaut auparavant.
			</p>
			<p className="margin-top-l">Cette expérience m’a permis de grandir professionnellement tant sur le plan technique que sur celui du travail en équipe.</p>
			<p className="margin-top-l">La start-up venant de se créer, les aspects <strong>chefferie de projet</strong>, <strong>workflow technique</strong> et <strong>communication</strong> entre les équipes n'étaient pas encore en place. Cela m’a permis, avec l’aide de mon tuteur, de travailler sur ces points qui peuvent échapper aux personnes intégrant un établissement déjà structuré.</p>
			<p className="margin-top-l">Concernant les réalisations techniques que j’ai effectué sur ces deux années, en voici une liste non-exhaustive :</p>
			<ul className="margin-top-m">
				<li>Réalisation de la première version du front-office [<strong>Vuejs</strong>]</li>
				<li>Ajout et amélioration de fonctionnalités diverses sur le back-office [<strong>Vuejs</strong>]</li>
				<li>Création d’une <strong>stratégie Google Analytics</strong> permettant la catégorisation de différents sous-domaines en fonction du type de client (Hotels, Office de tourisme, etc.). Cette fonctionnalité comprenait un interfaçage avec notre API pour permettre la mise à jour et la création automatique de nouveaux clients. [<strong>Express.js, Mongoose</strong>]</li>
				<li>Réalisation d’un système de carte cadeau</li>
				<li>Création d’une application mobile à destination de nos clients [<strong>Flutter</strong>]</li>
				<li>Mise en place d’un workflow git, en l'occurrence <strong>gitflow</strong></li>
			</ul>
			<p className="margin-top-l">Pour résumer, ce fut une très belle expérience humaine et professionnelle où j’ai développé une grande partie de mes compétences et une meilleure connaissance de moi-même.</p>
		</div>
	)
}, {
	title: 'Conscience Robotics',
	imagePath: '/experiences/conscience.jpeg',
	period: '2 semaines',
	media: {
		type: 'video',
		src: 'https://www.youtube.com/embed/zAQLw2WEKaY?mute=1'
	},
	text: (
		<div>
			<p>En Juillet 2019, à l’occasion du <strong>UCODEFASTER</strong>, un hackathon organisé par l’IMIE Caen, j’ai eu la chance de travailler pour la start-up Conscience Robotics sur un projet de 2 semaines avec 4 autres étudiants.</p>
			<p className="margin-top-l">L’objectif de celui-ci était, en utilisant le système d'exploitation développé par l’entreprise, de pouvoir utiliser un <strong>casque VR</strong> et ses manettes pour contrôler à distance un robot humanoïde nommé ENKI.</p>
			<p className="margin-top-l">L'étude technique nous a poussée à utiliser <strong>Unreal Engine</strong>, un moteur de jeu qui utilise le C++.</p>
			<p className="margin-top-l">Dans un premier temps, nous avons récupéré les données des axes X, Y, Z et les angles de rotation PYR (Pitch, Yaw, Roll) du casque VR.</p>
			<p className="margin-top-l">Nous les avons ensuite envoyées au robot à l’aide du système d'exploitation ce qui lui a permis de pouvoir se mouvoir et par la même occasion nous renvoyer l’image perçu par le robot et l’afficher sur le casque VR.</p>
			<p className="margin-top-l">Ce projet m’a d’abord paru complexe et très différent de ce que j’avais l’habitude de faire, mais avec l’aide de l'équipe, de l’entreprise et notre persévérance nous avons réussi à matérialiser ce défi technique.</p>
		</div>
	)
}, {
	title: 'Normandie Welcome',
	imagePath: '/experiences/nw.png',
	period: '6 mois - Service civique',
	text: (
		<div>
			<p>En Septembre 2017, j’ai décidé d’entreprendre un <strong>service civique</strong> de 6 mois dans l’association Normandie Welcome.</p>
			<p className="margin-top-l">Le but de ma mission était de transformer le site de l’association en le rendant <strong>accessible aux personnes handicapés.</strong> Je me suis donc intéressé aux différentes technologies permettant la simplification de la navigation mais aussi l'amélioration de l’ergonomie du site.</p>
			<p className="margin-top-l">Ces changements ont donc inclus : </p>
			<ul className="margin-top-m">
				<li>Une <strong>accentuation du contraste</strong> pour les personnes malvoyantes</li>
				<li>Le sous-titrage de tous les médias vidéos</li>
				<li>L'amélioration de la navigation par tabulation</li>
				<li>L'intégration d’outil permettant aux personnes tétraplégiques par exemple, de naviguer à l’aide de leurs yeux.</li>
			</ul>
		</div>
	)
}]

export default experiences
