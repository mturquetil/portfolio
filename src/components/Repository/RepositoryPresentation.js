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
				label: 'professional exp.',
				value: '2.5 years',
				icon: 'git-commit'
			}, {
				id: 1,
				label: 'studied',
				value: '5 years',
				icon: 'mortar-board'
			}, {
				id: 2,
				label: 'hobbies',
				value: '3',
				icon: 'heart'
			}, {
				id: 3,
				label: 'contributors',
				value: '6',
				icon: 'organization'
			}],
		}
	}

	render() {
		return (
			<div>
				<p style={{lineHeight: 1.4}} className="l-text">Hi ! My name is Maxime, I am 23 years old fullstack developer and open source adept, here's my portfolio.</p>
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
