import React from 'react'

import styles from '~/styles/modules/components/Input/InputTextarea.module.scss'

class InputTextarea extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { className, name, handleChange, value, placeholder = 'Placeholder' } = this.props

		return (
			<>
				<label className={styles.hidden} for={name}>c</label>
				<textarea id={name} value={value} placeholder={placeholder} onChange={(e) => handleChange(e.target.value)} className={`l-text border-radius inner-shadow ${className} ${styles.input}`} />
			</>
		)
	}
}

export default InputTextarea
