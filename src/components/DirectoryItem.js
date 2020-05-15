import { Component } from 'react'
import Octicon, { getIconByName } from '@primer/octicons-react'

import styles from '~/styles/modules/DirectoryItem.module.scss'

class DirectoryItem extends Component {
	render() {
		const { className, item } = this.props;

		switch (item.type) {
			case 'folder':
				item.icon = 'file-directory'
				break;
			case 'file':
				item.icon = 'file'
				break;
			default:
				item.icon = 'bug'
				break;
		}

		return (
			<a href={item.anchor} className={`${styles.directoryItem} ${className} grey-color`}>
				<Octicon className={styles.icon} icon={getIconByName(item.icon)} />
				<p className={`${styles.name} blue-color`}>{item.name}</p>
				<p className={styles.commit}>{item.commit}</p>
				<p className={styles.time}>{item.time}</p>
			</a>
		)
	}
}

export default DirectoryItem

