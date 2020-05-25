import { Component } from 'react'

import styles from '~/styles/modules/components/Repository/RepositoryDirectory.module.scss'

import DirectoryItem from '~/components/DirectoryItem'

class RepositoryDirectory extends Component {
	render() {
		const { dirs } = this.props

		return (
			<div className={`margin-top-m`}>
				{dirs.map((dir, idx) => (
					<DirectoryItem
						key={`dir-${idx}`}
						item={dir}
					/>
				))}
			</div>
		)
	}
}

export default RepositoryDirectory
