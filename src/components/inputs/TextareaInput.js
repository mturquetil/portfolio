import React from 'react'

import styles from '~/styles/modules/inputs/TextareaInput.module.scss'

class TextareaInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { className, handleChange, value, placeholder = 'Placeholder' } = this.props

		return (
			<textarea value={value} placeholder={placeholder} onChange={(e) => handleChange(e.target.value)} className={`l-text border-radius inner-shadow ${className} ${styles.input}`} />
		)
	}
}

export default TextareaInput
