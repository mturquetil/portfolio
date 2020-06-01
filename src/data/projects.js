const projects = [{
	title: 'L\'environnement Open-Source',
	imagePath: '/projects/opensource.svg',
	text: (
		<div>
			<p className="margin-top-s">L'esprit de ce projet est né d'un besoin d’optimisation global de, mon workflow, mes performances machines, ainsi que de mon implication dans les systèmes unix et l'open source.</p>
			<p className="margin-top-l">En effet, au fil du temps, je me suis rendu compte que mon environnement technique (système d’exploitation et outils utilisés) tant sur le point professionnel que personnel n'était pas en accord avec mes valeurs.</p>
			<p className="margin-top-l">Celui-ci était constitué principalement de composantes propriétaires sur lesquelles je n'avais aucun contrôle, qui m'imposaient une couche d'abstraction supplémentaire et qui se révélaient moins performantes.</p>
			<p className="margin-top-l">De part ma nature curieuse et ce besoin de transparence et d'indépendance technique, j'ai créé mon environnement de travail uniquement composé d’outil open source. Cela m'a permis d'améliorer mes connaissances dans le fonctionnement des systèmes Unix et d’avoir une maîtrise essentielle de mes outils.</p>
			<p className="margin-top-l">Pour continuer dans cette démarche, je suis en cours de migration vers l'utilisation d'un maximum d'outils basées sur la philosophie <a className="nostyle" target="_blank" href="https://suckless.org/">suckless</a>.</p>
		</div>
	)
}, {
	title: 'Less mouse, more typing',
	imagePath: '/projects/mouse.svg',
	media: {
		type: 'video',
		src: 'https://www.youtube.com/embed/E-ZbrtoSuzw',
	},
	text: (
		<div>
			<p>Ce projet n’est en aucun cas technique, mais il entre dans le raisonnement que je fais de mon utilisation de l’outil informatique. (et au passage, je suis fier de la démarche effectuée :P).</p>
			<p className="margin-top-l">Toujours dans cette période d’optimisation et suite au visionnage de la conférence ci-dessus, j’ai remis en cause l’utilisation de la souris.</p>
			<p className="margin-top-l">Ce changement d’utilisation de l’outil informatique m’a conduit à:</p>
			<ul className="margin-top-m">
				<li>Modifier mon éditeur de texte (de VSCode à Vim)</li>
				<li>Installer l’extension vimium sur mon navigateur</li>
				<li>Passer d’un gestionnaire de fenêtre flottant à, en pavage</li>
				<li>Apprendre à "vivre" dans le terminal</li>
			</ul>
			<p className="margin-top-l">Ce passage à un usage intensif du clavier a par conséquent eu des répercussions sur l’utilisation de celui-ci. C’est pour cela que j’ai favorisé l’utilisation de la disposition <strong>QWERTY</strong> qui est plus disposée au développement informatique.</p>
			<p className="margin-top-l">En conjugaison à ce changement de disposition du clavier, j’ai également décidé de revoir la manière dont j'écrivais pour apprendre le <strong>touch typing</strong> (dactylographie).</p>
			<p className="margin-top-l">Pour conclure, ces modifications ont impliqué une réelle optimisation de mon utilisation de l’outil informatique mais reste coûteuse en terme de mise en place. Bien qu’elle implique de nombreux changements dans mes habitudes, je ressens déjà un véritable gain de temps et d’efficacité.</p>
		</div>
	)
}, {
	title: 'Le tourisme dans la poche',
	imagePath: '/projects/tourism.svg',
	text: (<div>
		<p>Dans le cadre de mon travail au sein de la start-up Activitour, j’ai réalisé une application mobile multi-plateforme avec Flutter (SDK écrit en Dart) destinée aux professionnels du tourisme clients d’Activitour.</p>

		<p className="margin-top-l">Cette application comporte les fonctionnalités suivantes : </p>
		<ul className="margin-top-m">
			<li>Connexion/déconnexion au compte client Activitour</li>
			<li>Scan de QRCode ou saisie d’un code à 4 chiffres pour valider les e-billets des touristes</li>
			<li>Consultation des touristes à venir pour effectuer une activité</li>
			<li>Consultation du statut de paiement d’une réservation à venir</li>
		</ul>

		<p className="margin-top-l">Travailler sur cette application m’a permit de gagner en compétences sur les nouvelles technologies relatives au développement d’applications mobiles. Cela m’a également permit une introduction à la programmation réactive par le biais de l’architecture BloC (Business Logic Component) recommandée durant la DartConf 2018.</p>
	</div>)
}, {
	title: 'Rust Commander',
	imagePath: '/projects/commander.svg',
	text: (
		<div>
			<p>RustCommander est un outil d’administration vous permettant de contrôler et d’agir sur votre serveur de jeu Rust depuis un serveur Discord/Slack.</p>
			<p className="margin-top-l">Il comprend les fonctionnalités suivantes : </p>
			<ul className="margin-top-m">
				<li>Consultation du chat sur le serveur de jeu Rust, interaction avec celui-ci depuis Slack/Discord</li>
				<li>Recevoir des notifications si des messages dans le chat correspondent à une liste de mot filtre (eg. filtrage d'insulte)</li>
				<li>Consultation des logs serveurs depuis Slack/Discord</li>
				<li>Interaction avec la console du serveur Rust</li>
				<li>Configuration simple depuis un fichier JSON</li>
				<li>Reconnexion automatique si perte de connexion</li>
			</ul>
			<p className="margin-top-l">Cet outil a été développé avec Node.js et utilise les websockets. Il a été co-écrit avec Nicolas VARROT.</p>
		</div>
	)
},]

export default projects
