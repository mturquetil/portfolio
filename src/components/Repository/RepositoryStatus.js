import { Component } from 'react'

import styles from '~/styles/modules/components/Repository/RepositoryStatus.module.scss'

import InputSelect from '~/components/Input/InputSelect'
import LastCommitBar from '~/components/LastCommitBar'

class RepositoryStatus extends Component {
	render() {
		return (
			<div className={`${styles.RepositoryStatus} margin-top-l`}>
				<InputSelect
					options={[{ name: 'master', value: 'master' }]}
					handleChange={value => value}
					value="master"
					label="Branch"
					className={styles.select}
				/>
				<LastCommitBar className={styles.LastCommitBar}/>
			</div>
		)
	}
}

export default RepositoryStatus
