import { Component } from 'react'
import Router from 'next/router'

import styles from '~/styles/modules/components/Issue/IssuePost.module.scss'

import Button from '~/components/Button'

class IssuePost extends Component {
	render() {
		const { className } = this.props
		return (
			<div className={`${className} ${styles.issuePost}`}>
				<div className={styles.header}>
					<img className="border-round" src="profil.jpg" />
					<p className="bold-text grey-color"><span className="black-color">mturquetil</span> commented on Mar 23</p>
				</div>
				<div className={`margin-top-m l-text ${styles.core}`}>
					<div className={`${styles.content}`}>
						<p>Á l’approche de la fin de mon contrat de professionnalisation, je suis actuellement à la recherche d’une entreprise dans laquelle mettre en oeuvre les compétences que j’ai développé jusqu'à présent.</p>
						<p>Étant par nature <span className="bold-text">autodidacte</span>, la formation aux outils d’une entreprise ne me fait pas peur.</p>
						<p>Mon parcours jusqu’à maintenant s’orientait dans le <span className="bold-text">domaine du web</span>, mais je suis également très intéressé pour travailler sur des technologies ou thématiques de projet plus <span className="bold-text">orienté machine/bas niveau.</span></p>
						<p>En espérant que mon profil vous intéresse, je suis dans l’attente de toutes vos pulls requests !</p>
					</div>
					<div className={`${styles.additional}`}>
						<p style={{fontStyle: 'italic'}} className="grey-color">Informations complementaires</p>
						<div className={`${styles.item}`}>
							<p className={`bold-text ${styles.label}`}>Disponibilite</p>
							<p className={styles.value}>28 aout 2020</p>
						</div>
						<div className={`${styles.item}`}>
							<p className={`bold-text ${styles.label}`}>Zone</p>
							<p className={styles.value}>Caen</p>
						</div>
					</div>
				</div>
				<Button onClick={() => Router.push('/#contact')}className={`${styles.respond} margin-top-m`}>
					Envoyer
				</Button>
			</div>
		)
	}
}

export default IssuePost
