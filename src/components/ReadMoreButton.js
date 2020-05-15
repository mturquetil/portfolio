import { Component } from 'react'

import styles from '~/styles/modules/ReadMoreButton.module.scss'

class ReadMoreButton extends Component {
	render() {
		const { className } = this.props

		return (
			<div className={`${className} ${styles.readMore} bold-text green-color`}>
				<span className={styles.content}>Lire plus</span>	
				<i className="material-icons">arrow_drop_down</i>	
			</div>
		)
	}
}

export default ReadMoreButton
