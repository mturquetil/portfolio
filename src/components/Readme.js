import { Component } from 'react'
import Octicon, { getIconByName } from '@primer/octicons-react'

import styles from '~/styles/modules/Readme.module.scss'

class Readme extends Component {
	render() {
		const { className } = this.props

		return (
			<div className={`${className} ${styles.readme}`}>
				<div className={`bold-text ${styles.header}`}>
					<Octicon icon={getIconByName('book')} />
					README.md
				</div>
				<div className={styles.content}>
					<img src="/profil.jpg" />
					<p className={`bold-text ${styles.title}`}>Maxime Turquetil</p>
					<a className={`${styles.github} margin-top`} href="https://github.com/mturquetil" target="_blank">
						<span className="bold-text black-color">Mon compte</span>
						<Octicon icon={getIconByName('mark-github')} />
					</a>
					<div className={`${styles.description} margin-top l-text`}>
						<p><span className="bold-text">Maxime Turquetil</span> est une librairie fullstack de <span className="bold-text">23 ans</span> écrite en code génétique.</p>

						<p className="margin-top">
							Passionnée par les évolutions technologiques et le monde <span className="bold-text">open source</span>, elle essaye de se tenir le plus à jour pour pouvoir répondre aux défis imposés par notre siècle.
						Ses utilisations multiples vont de la confection de sites web, d’applications mobiles au développement d’outils métier spécifique.
							Cette librairie est également en cours de développement de la fonctionnalité <span className="bold-text">DevOps</span>.
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Readme
