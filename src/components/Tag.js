import { Component } from 'react'

import styles from '~/styles/modules/Tag.module.scss'

class Tag extends Component {
	render() {
		const { className, tag } = this.props

		return (
			<div className={`${className} s-text ${styles.tag}`}>
				{tag.name}
			</div>
		)
	}
}

export default Tag
