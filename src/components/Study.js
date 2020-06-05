import { Component } from 'react'

import styles from '~/styles/modules/components/Study.module.scss'

class Study extends Component {
	render() {
		const { data } = this.props

		return (
			<div className={styles.study}>
				<div className={`border-round ${styles.flag}`}>
					<img alt="drapeau" src="flag.svg" className={`${styles.vector}`} />
				</div>
				<div className={`${styles.content} l-text`}>
					<p className="black-color bold-text">{data.school}</p>
					<p className="grey-color bold-text">{data.period}</p>
					{data.diploma ? <p className={`${styles.diploma} grey-color`}>{data.diploma}</p> : null}
				</div>
			</div>
		)
	}
}

export default Study
