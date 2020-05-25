import { Component } from 'react'
import Octicon, { getIconByName } from '@primer/octicons-react'

import styles from '~/styles/modules/components/Repository/RepositoryTab.module.scss'

class RepositoryTab extends Component {
	render() {
		const { handleClick, className, tab } = this.props

		return (
			<div onClick={() => handleClick(tab.id)} className={`${tab.active === true ? styles.active : styles.inactive} m-text ${className} ${styles.container}`}>
				<Octicon icon={getIconByName(tab.icon)} size='small' />
				<span>{tab.name}</span>
			</div>
		)
	}
}

export default RepositoryTab
