import { Component } from 'react'

import styles from '~/styles/modules/Button.module.scss'

class Button extends Component {
	render() {
		const { className, content } = this.props

		return (
			<button className={`${styles.button} ${className} bold-text`}>
				{content}
			</button>
		)
	}
}

export default Button
