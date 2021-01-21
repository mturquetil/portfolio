import { Component } from 'react'
import Octicon, { getIconByName } from '@primer/octicons-react'

import styles from '~/styles/modules/components/Readme.module.scss'

class Readme extends Component {
	constructor(props) {
		super(props)
		this.state = {
			shields: [{
				label: 'disponibilité',
				value: 'caen, rennes',
				color: 'brightgreen'
			}, {
				label: 'recherche',
				value: 'alternance',
				color: 'blueviolet'
			}],

			githubURL: 'https://github.com/mturquetil'
		}
	}
	render() {
		const { id, className } = this.props

		return (
			<div id={id} className={`${className} ${styles.readme}`}>
				<div className={`bold-text ${styles.header}`}>
					<Octicon icon={getIconByName('book')} />
					README.md
				</div>
				<div className={styles.content}>
					<img alt="photo de profil" className={styles.profile} src="/profil.webp" />
					<p className={`bold-text ${styles.title}`}>Maxime Turquetil</p>
					<div className={`margin-top-l ${styles.shields}`}>
						{this.state.shields.map((shield, idx) => (
							<img alt={`${shield.label}: ${shield.value}`} className={styles.shield} key={`shield-${idx}`} src={`https://img.shields.io/badge/${shield.label}-${shield.value}-${shield.color}`} />
						))}
					</div>
					<a className={`${styles.github} nostyle margin-top-l`} rel="noreferrer" href={this.state.githubURL} target="_blank">
						<span className="bold-text black-color">Mon compte</span>
						<Octicon icon={getIconByName('mark-github')} />
					</a>
					<div className={`${styles.description} margin-top-l l-text`}>
						<p><span className="bold-text">Maxime Turquetil</span> est une librairie fullstack de <span className="bold-text">23 ans</span> écrite en code génétique.</p>

						<p className="margin-top-m">
							Passionnée par les évolutions technologiques et le monde <span className="bold-text">open source</span>, elle essaye de se tenir le plus à jour pour pouvoir répondre aux défis de notre époque.
						Ses utilisations multiples vont de la confection de site web, d’application mobile au développement d’outil métier spécifique.
							Cette librairie est également en cours de développement de la fonctionnalité <span className="bold-text">DevOps</span>.
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Readme
