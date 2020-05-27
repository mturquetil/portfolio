import { Component } from 'react'

import styles from '~/styles/modules/components/Repository/RepositorySection.module.scss'

import Study from '~/components/Study'
import ReadableBlock from '~/components/ReadableBlock'
import Button from '~/components/Button'

class RepositorySection extends Component {
	constructor(props) {
		super(props)

		this.state = {
			active: false
		}
	}

	render() {
		const { id, title, className, items, children, limit = 0 } = this.props

		const content = children ?
			children :
			<div className={`${styles.items}`}>
				{items.slice(0, limit ? limit : items.length).map((item, idx) => <ReadableBlock key={`${id}-${idx}`} data={item} />)}
			</div>

		return (
			<div id={id} className={`${styles.RepositorySection} ${className}`}>
				<h2 className={`${styles.title} bold-text`}>{title}</h2>
				{content}
			</div>
		)
	}
}

export default RepositorySection
