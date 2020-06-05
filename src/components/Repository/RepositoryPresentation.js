import { Component } from 'react'

import styles from '~/styles/modules/components/Repository/RepositoryPresentation.module.scss'

import Tag from '~/components/Tag'
import SummaryBar from '~/components/SummaryBar'

class RepositoryPresentation extends Component {
	constructor(props) {
		super(props)

		this.state = {
			tags: [{
				name: 'curieux'
			}, {
				name: 'autodidacte'
			}, {
				name: 'passionné'
			}],

			informations: [{
				id: 0,
				label: 'd\'expérience pro.',
				value: '2.5 années',
				icon: 'git-commit'
			}, {
				id: 1,
				label: 'd\'études',
				value: '5 ans',
				icon: 'mortar-board'
			}, {
				id: 2,
				label: 'passions',
				value: '3',
				icon: 'heart'
			}, {
				id: 3,
				label: 'contributeurs',
				value: '6',
				icon: 'organization'
			}],
		}
	}

	render() {
		return (
			<div>
				<p className={`${styles.desc} l-text`}>Bonjour ! Je m'appelle Maxime, je suis un développeur fullstack de 23 ans et un partisan de l'open source, voici mon portfolio.</p>
				<div className="margin-top-s">
					{this.state.tags.map((tag, idx) => (
						<Tag
							key={`tag-${idx}`}
							tag={tag}
							className={styles.tags}
						/>
					))}
				</div>
				<SummaryBar
					className="desktop margin-top-l"
					informations={this.state.informations}
				/>
			</div>
		)
	}
}

export default RepositoryPresentation
