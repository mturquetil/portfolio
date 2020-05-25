import { Component } from 'react'

import styles from '~/styles/modules/components/Button.module.scss'

class Button extends Component {
	render() {
		const { className, theme = 'default', children, onClick } = this.props

		return (
			<button onClick={onClick} className={`${styles.button} ${styles[theme]} ${className} bold-text`}>
				{children}
			</button>
		)
	}
}

export default Button
