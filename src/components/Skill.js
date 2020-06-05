import { Component } from 'react'

import styles from '~/styles/modules/components/Skill.module.scss'

class Skill extends Component {
	render() {
		const { skill, className } = this.props

		return (
			<div className={`${styles.skill} ${className}`}>
				<div>
					<div className={styles.logoContainer}>
						<img alt={skill.title} className={styles.logo} src={skill.imagePath} />
					</div>
					<h3 className={`${styles.title} bold-text`}>{skill.title}</h3>
				</div>
			</div>
		)
	}
}

export default Skill
