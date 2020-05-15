import { Component } from 'react'
import Octicon, { Repo } from '@primer/octicons-react'

import styles from '~/styles/modules/repository/RepositoryTitle.module.scss'

class RepositoryTitle extends Component {
	render() {
		const { owner, repository } = this.props

		return (
			<div className={`xl-text ${styles.container}`}>
				<Octicon icon={Repo} size='small' />
				<span className={`${styles.content}`}>{owner}</span>
				/
				<span className={`${styles.content} bold-text`}>{repository}</span>
			</div>
		)
	}
}

export default RepositoryTitle
