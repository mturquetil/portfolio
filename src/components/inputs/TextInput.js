import React from 'react'

import styles from '~/styles/modules/inputs/TextInput.module.scss'

class TextInput extends React.Component {
	render() {
		const { className, handleChange, value, placeholder } = this.props

		return (
			<input value={value} placeholder={placeholder} onChange={(e) => handleChange(e.target.value)} className={`l-text border-radius inner-shadow ${className} ${styles.input}`} />
		)
	}
}

export default TextInput
