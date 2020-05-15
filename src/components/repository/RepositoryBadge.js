import { Component } from 'react'

import styles from '~/styles/modules/repository/RepositoryBadge.module.scss'

class RepositoryBadge extends Component {
	render() {
		const { className, badge: { icon, label, value = 'default' } } = this.props

		return (
			<div className={`${className} s-text border-default bold-text ${styles.container}`}>
				<div className={`${styles.content} ${styles.label}`}>
					<i className="xxl-text material-icons">{icon}</i>
					{label}
				</div>
				<div className={`${styles.content} ${styles.value}`}>{value}</div>
			</div>
		)
	}
}

export default RepositoryBadge
