import React from 'react'

import styles from '~/styles/modules/components/Input/InputText.module.scss'

class InputText extends React.Component {
	render() {
		const { className, handleChange, value, placeholder } = this.props

		return (
			<input value={value} placeholder={placeholder} onChange={(e) => handleChange(e.target.value)} className={`l-text border-radius inner-shadow ${className} ${styles.input}`} />
		)
	}
}

export default InputText
