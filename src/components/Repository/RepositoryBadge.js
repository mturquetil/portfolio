import { Component } from 'react'

import styles from '~/styles/modules/components/Repository/RepositoryBadge.module.scss'

class RepositoryBadge extends Component {
	render() {
		const { className, badge: { icon, label, value = 'default' } } = this.props

		return (
			<div className={`${className} s-text border-default bold-text ${styles.container}`}>
				<div className={`${styles.content} ${styles.label}`}>
					<i className={`xxl-text material-icons ${styles.icon}`}>{icon}</i>
					<span className="mobile">{label}</span>
				</div>
				<div className={`${styles.content} ${styles.value}`}>{value}</div>
			</div>
		)
	}
}

export default RepositoryBadge
